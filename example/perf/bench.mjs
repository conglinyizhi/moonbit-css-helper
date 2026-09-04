#!/usr/bin/env node
// precss 性能基准：共同支持语法子集上的批量编译吞吐量。
//
// 对比对象：
//   - precss native CLI：一次启动 CLI，通过 NUL 分隔输入批量编译
//   - Dart Sass JS：Node.js `sass` 包的 compileString API，在同一 Node 进程内循环
//   - less.js：Node.js `less` 包，在同一 Node 进程内循环
//
// 这不是所有 Sass/LESS 项目的性能保证。每份输入先做归一化正确性校验，
// 只有双方都能编译且输出一致的数据才计入结果。
//
// 用法：
//   node example/perf/bench.mjs [份数] [嵌套深度] [seed]
//   node example/perf/bench.mjs --count 200 --depth 4 --seed 1 --iterations 5 --warmup 1 --json result.json
import { compileString } from 'sass'
import less from 'less'
import { execFileSync } from 'node:child_process'
import { cpus, platform, release, totalmem } from 'node:os'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = new URL('../..', import.meta.url).pathname
const CLI = join(root, '_build/native/debug/build/cmd/cli/cli.exe')

function option(name, fallback) {
  const i = process.argv.indexOf(name)
  return i >= 0 && process.argv[i + 1] !== undefined ? process.argv[i + 1] : fallback
}
const positional = process.argv.slice(2).filter((x, i, a) => !x.startsWith('--') && (i === 0 || !a[i - 1].startsWith('--')))
const N = Number(option('--count', positional[0] || 40))
const DEPTH = Number(option('--depth', positional[1] || 4))
const SEED = Number(option('--seed', positional[2] || 1))
const ITERATIONS = Number(option('--iterations', 5))
const WARMUP = Number(option('--warmup', 1))
const jsonPath = option('--json', null)

if (!Number.isInteger(N) || N < 1 || !Number.isInteger(DEPTH) || DEPTH < 0 ||
    !Number.isInteger(SEED) || !Number.isInteger(ITERATIONS) || ITERATIONS < 1 ||
    !Number.isInteger(WARMUP) || WARMUP < 0) {
  throw new Error('invalid benchmark options')
}

function rng(seed) {
  let s = seed >>> 0
  return () => {
    s ^= s << 13
    s ^= s >>> 17
    s ^= s << 5
    s >>>= 0
    return s / 4294967296
  }
}
const pick = (r, arr) => arr[Math.floor(r() * arr.length)]
const id = (r, p) => p + Math.floor(r() * 999)

const COLORS = ['red', 'blue', 'green', '#1a2b3c', 'rgb(10,20,30)', 'rebeccapurple']
const PROPS = ['color', 'background', 'margin', 'padding', 'width', 'height', 'font-size', 'border']
const SELS = ['.card', '.btn', '.grid', '#main', '.wrapper', 'div', '.tag-item']
const UNITS = ['px', 'em', 'rem', '%']
const val = (r) => `${pick(r, [10, 12, 16, 24, 32, 48, 64])}${pick(r, UNITS)}`
const color = (r) => pick(r, COLORS)
const prop = (r) => pick(r, PROPS)
const sel = (r) => `${pick(r, SELS)}-${id(r, 'x')}`
const varName = (r) => `${pick(r, ['c', 'g', 'w', 'm'])}${id(r, '')}`

function gen_tree(r, level, depth) {
  const node = { sel: sel(r), decls: [], varName: null, varVal: null, children: [] }
  const nd = 1 + Math.floor(r() * 3)
  for (let i = 0; i < nd; i++) node.decls.push(`${prop(r)}: ${val(r)}`)
  if (r() < 0.45) {
    node.varName = varName(r)
    node.varVal = color(r)
  }
  if (level < depth) {
    const nc = 1 + Math.floor(r() * 2)
    for (let i = 0; i < nc; i++) node.children.push(gen_tree(r, level + 1, depth))
  }
  return node
}
function emit_scss(n, ind) {
  let out = `${ind}${n.sel} {\n`
  if (n.varName) out += `${ind}  $${n.varName}: ${n.varVal};\n`
  for (const d of n.decls) out += `${ind}  ${d};\n`
  for (const c of n.children) out += emit_scss(c, ind + '  ')
  out += `${ind}}\n`
  return out
}
function emit_sass(n, ind) {
  let out = `${ind}${n.sel}\n`
  if (n.varName) out += `${ind}  $${n.varName}: ${n.varVal}\n`
  for (const d of n.decls) out += `${ind}  ${d}\n`
  for (const c of n.children) out += emit_sass(c, ind + '  ')
  return out
}
function emit_less(n, ind) {
  let out = `${ind}${n.sel} {\n`
  if (n.varName) out += `${ind}  @${n.varName}: ${n.varVal};\n`
  for (const d of n.decls) out += `${ind}  ${d};\n`
  for (const c of n.children) out += emit_less(c, ind + '  ')
  out += `${ind}}\n`
  return out
}

const scssList = []
const sassList = []
const lessList = []
for (let i = 0; i < N; i++) {
  const r = rng(SEED + i * 7919)
  let scss = ''
  let sass = ''
  let less = ''
  const tops = 1 + Math.floor(r() * 3)
  for (let t = 0; t < tops; t++) {
    const tree = gen_tree(r, 0, DEPTH)
    scss += emit_scss(tree, '')
    sass += emit_sass(tree, '')
    less += emit_less(tree, '')
  }
  scssList.push(scss)
  sassList.push(sass)
  lessList.push(less)
}

const norm = (css) => css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').trim()
const now = (f) => {
  const t = process.hrtime.bigint()
  const value = f()
  return { ms: Number(process.hrtime.bigint() - t) / 1e6, value }
}
function median(xs) {
  const a = [...xs].sort((x, y) => x - y)
  const m = Math.floor(a.length / 2)
  return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2
}
function percentile(xs, p) {
  const a = [...xs].sort((x, y) => x - y)
  return a[Math.min(a.length - 1, Math.ceil(a.length * p) - 1)]
}
function stats(samples) {
  return {
    min_ms: Number(Math.min(...samples).toFixed(3)),
    median_ms: Number(median(samples).toFixed(3)),
    p95_ms: Number(percentile(samples, 0.95).toFixed(3)),
    max_ms: Number(Math.max(...samples).toFixed(3)),
    samples: samples.map((x) => Number(x.toFixed(3))),
  }
}

function moonOnce(payload, sub) {
  const r = now(() => execFileSync(CLI, [sub], {
    input: payload,
    maxBuffer: 1 << 28,
  }).toString())
  return { ms: r.ms, parts: r.value.split('\u0000') }
}
function dartOnce(list, syntax = 'scss') {
  const r = now(() => list.map((s) => compileString(s, { style: 'expanded', syntax }).css))
  return { ms: r.ms, parts: r.value }
}
async function lessOnce(list) {
  const t = process.hrtime.bigint()
  const parts = []
  for (const s of list) parts.push((await less.render(s)).css)
  return { ms: Number(process.hrtime.bigint() - t) / 1e6, parts }
}

async function sample(moonList, sub, official, officialArgs) {
  const payload = moonList.join('\u0000')
  let firstMoon = null
  let firstOfficial = null
  for (let i = 0; i < WARMUP; i++) {
    moonOnce(payload, sub)
    await official(officialArgs)
  }
  const moonSamples = []
  const officialSamples = []
  for (let i = 0; i < ITERATIONS; i++) {
    const m = moonOnce(payload, sub)
    const o = await official(officialArgs)
    if (!firstMoon) firstMoon = m
    if (!firstOfficial) firstOfficial = o
    moonSamples.push(m.ms)
    officialSamples.push(o.ms)
  }
  return { moon: stats(moonSamples), official: stats(officialSamples), moonParts: firstMoon.parts, officialParts: firstOfficial.parts }
}

function verify(mParts, oParts) {
  let pass = 0
  for (let k = 0; k < Math.min(mParts.length, oParts.length); k++) {
    if (mParts[k] !== undefined && oParts[k] !== undefined && norm(mParts[k]) === norm(oParts[k])) pass++
  }
  return pass
}
function versionOf(pkg) {
  try { return JSON.parse(readFileSync(join(root, 'node_modules', pkg, 'package.json'))).version } catch { return 'unknown' }
}
function commandOutput(command, args) {
  try { return execFileSync(command, args, { cwd: root }).toString().trim() } catch { return 'unknown' }
}

async function main() {
  const runs = []
  const scss = await sample(scssList, 'compile', (xs) => Promise.resolve(dartOnce(xs)), scssList)
  const sass = await sample(sassList, 'compile', (xs) => Promise.resolve(dartOnce(xs, 'indented')), sassList)
  const lessRun = await sample(lessList, 'compile-less', lessOnce, lessList)
  const add = (name, r, baseline) => {
    const matched = verify(r.moonParts, r.officialParts)
    const valid = matched === N
    const speedup = valid ? Number((r.official.median_ms / r.moon.median_ms).toFixed(3)) : null
    runs.push({
      syntax: name,
      precss_native_cli: r.moon,
      baseline: { ...baseline, stats: r.official },
      speedup_x: speedup,
      correctness: { matched, total: N, included: valid },
    })
  }
  add('scss', scss, { name: 'Dart Sass JS API', package: 'sass', api: 'compileString' })
  add('sass', sass, { name: 'Dart Sass JS API', package: 'sass', api: 'compileString', syntax: 'indented' })
  add('less', lessRun, { name: 'less.js', package: 'less', api: 'render' })

  const inputBytes = scssList.reduce((n, x) => n + Buffer.byteLength(x), 0)
  const outputBytes = scss.moonParts.reduce((n, x) => n + Buffer.byteLength(x || ''), 0)
  const result = {
    schema: 1,
    project: 'conglinyizhi/precss',
    generated_at: new Date().toISOString(),
    commit: commandOutput('git', ['rev-parse', 'HEAD']),
    benchmark: {
      name: 'deterministic-random-tree',
      count: N,
      depth: DEPTH,
      seed: SEED,
      iterations: ITERATIONS,
      warmup: WARMUP,
      input_bytes: inputBytes,
      output_bytes: outputBytes,
      measurement: 'batch throughput; one precss native CLI process per sample, JS baselines reused in the Node process',
    },
    environment: {
      node: process.version,
      sass: versionOf('sass'),
      less: versionOf('less'),
      moonbit: commandOutput('moon', ['version']).split('\n')[0],
      os: `${platform()} ${release()}`,
      cpu: cpus()[0]?.model || 'unknown',
      logical_cpus: cpus().length,
      memory_gb: Number((totalmem() / 1024 ** 3).toFixed(1)),
    },
    notes: [
      '输入由同一棵确定性随机规则树生成，三种语法逻辑等价',
      '仅在双方输出归一化后一致时计入性能结果',
      'Dart Sass 对比项是 sass npm 包的 JavaScript API，不是 Dart Sass 原生 CLI',
      'precss 的 SASS 入口当前先将缩进语法转换为 SCSS 再编译',
    ],
    results: runs,
  }

  const pad = (n) => String(n).padStart(10)
  console.log(`\n===== precss 性能基准（份数=${N} 深度=${DEPTH} seed=${SEED} iterations=${ITERATIONS} warmup=${WARMUP}）=====`)
  console.log(`${'格式'.padEnd(6)} ${'precss(ms)'.padStart(12)} ${'对比(ms)'.padStart(12)} ${'speedup'.padStart(10)} ${'正确性'.padStart(10)}`)
  console.log('------------------------------------------------------------------')
  for (const r of runs) {
    const speed = r.speedup_x === null ? '-' : `${r.speedup_x}x`
    console.log(`${r.syntax.padEnd(6)} ${pad(r.precss_native_cli.median_ms)} ${pad(r.baseline.stats.median_ms)} ${speed.padStart(10)} ${`${r.correctness.matched}/${r.correctness.total}`.padStart(10)}`)
  }
  console.log('------------------------------------------------------------------')
  console.log('(speedup_x > 1 表示 precss 更快；只有 correctness.included=true 的结果才应作为性能结论)')

  if (jsonPath) {
    const outputPath = jsonPath.startsWith('/') ? jsonPath : join(root, jsonPath)
    mkdirSync(join(outputPath, '..'), { recursive: true })
    writeFileSync(outputPath, JSON.stringify(result, null, 2) + '\n')
    console.log(`JSON: ${outputPath}`)
  }
  if (runs.some((r) => !r.correctness.included)) process.exitCode = 1
}

main()
