#!/usr/bin/env node
// 性能基准：precss vs 官方核心（dart-sass / less.js）
//
// 从同一棵随机树发射 scss / sass(缩进) / less 三种等价源码，保证三组逻辑一致、
// 两边都能编译（生成器只产 moonbit 支持子集内的结构），比的是"引擎速度"。
// 同时做正确性校验：每份源码 moonbit 与官方核心的编译结果归一化后必须一致，
// 否则该份成绩排除（说明触碰了边界，不作数），保证基准可信。
//
// 用法：node example/perf/bench.mjs [份数] [嵌套深度] [seed]
import { compileString } from 'sass'
import less from 'less'
import { execFileSync } from 'node:child_process'
import { join } from 'node:path'

const root = new URL('../..', import.meta.url).pathname
const CLI = join(root, '_build/native/debug/build/cmd/cli/cli.exe')
const N = Number(process.argv[2] || 40)
const DEPTH = Number(process.argv[3] || 4)
const SEED = Number(process.argv[4] || 1)

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
const ms = (f) => {
  const t = process.hrtime.bigint()
  const out = f()
  return { ms: Number(process.hrtime.bigint() - t) / 1e6, out }
}

// moonbit：一次 spawn 批量（NUL 分隔），返回耗时 + 每份结果（与输入对齐）
function moon(payload, sub) {
  const r = ms(() => execFileSync(CLI, [sub], { input: payload, maxBuffer: 1 << 28 }).toString())
  return { ms: r.ms, parts: r.out.split('\u0000') }
}
// dart-sass：进程内循环
function dart(list, syntax = 'scss') {
  const r = ms(() => {
    const res = []
    for (const s of list) res.push(compileString(s, { style: 'expanded', syntax }).css)
    return res
  })
  return { ms: r.ms, parts: r.out }
}
async function lessAsync(list) {
  const t = process.hrtime.bigint()
  const res = []
  for (const s of list) res.push((await less.render(s)).css)
  return { ms: Number(process.hrtime.bigint() - t) / 1e6, parts: res }
}

// 正确性校验：moonbit parts vs oracle parts 归一化比对，返回一致数
function verify(mParts, oParts) {
  let pass = 0
  for (let k = 0; k < mParts.length; k++) {
    if (mParts[k] !== undefined && oParts[k] !== undefined && norm(mParts[k]) === norm(oParts[k])) pass++
  }
  return pass
}

async function main() {
  const pad = (n) => String(n).padStart(9)
  const kb = (list) => ((list.join('').length / 1024)).toFixed(0)

  const mScss = moon(scssList.join('\u0000'), 'compile')
  const dScss = dart(scssList)
  const mSass = moon(sassList.join('\u0000'), 'compile')
  const dSass = dart(sassList, 'indented')
  const mLess = moon(lessList.join('\u0000'), 'compile-less')
  const dLess = await lessAsync(lessList)

  const vScss = verify(mScss.parts, dScss.parts)
  const vSass = verify(mSass.parts, dSass.parts)
  const vLess = verify(mLess.parts, dLess.parts)

  const speed = (a, b) => (a > 0 ? (b / a).toFixed(2) + 'x' : '-')
  const line = (name, m, d, v) => {
    const flag = v === N ? '' : `（一致性 ${v}/${N}⚠️）`
    return `${name.padEnd(6)} ${pad(m.toFixed(1))} ${pad(d.toFixed(1))} ${pad(speed(m, d))}${flag}`
  }

  console.log(`\n===== precss 性能基准（份数=${N} 深度=${DEPTH} seed=${SEED}）=====`)
  console.log(`${'格式'.padEnd(6)} ${'moonbit(ms)'.padStart(12)} ${'官方(ms)'.padStart(12)} ${'moonbit/官方'.padStart(12)}`)
  console.log('------------------------------------------------------------')
  console.log(line('scss', mScss.ms, dScss.ms, vScss))
  console.log(line('sass', mSass.ms, dSass.ms, vSass))
  console.log(line('less', mLess.ms, dLess.ms, vLess))
  console.log('------------------------------------------------------------')
  console.log(`(moonbit/官方 < 1 表示 moonbit 更快；每份输入约 ${kb(scssList) / N}KB，共 ${N} 份；一致性满 ${N}/${N} 才作数)`)

  // 打印前 3 处 less 不一致明细（供调查引擎边界）
  if (vLess < N) {
    let shown = 0
    for (let k = 0; k < N && shown < 3; k++) {
      if (norm(mLess.parts[k]) !== norm(dLess.parts[k])) {
        shown++
        console.log(`\n[LESS 差异 #${k}]`)
        console.log(`  moonbit: ${norm(mLess.parts[k])}`)
        console.log(`  less.js: ${norm(dLess.parts[k])}`)
      }
    }
  }
}

main()
