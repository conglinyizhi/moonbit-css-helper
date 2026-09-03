#!/usr/bin/env node
// 差分测试：用 dart-sass 作 oracle，与 moonbit scss_engine 产物对比。
// 支持两种用例来源：
//   - 分散的 .scss 文件（test/cases/*.scss）
//   - sass-spec 的 .hrx 打包格式（解析 <===> path/input.scss 块）
// 批量调用 moonbit CLI（NUL 分隔），减少 spawn 次数。
// 用法：node scripts/diff.mjs [cases-dir]
import { compileString } from 'sass'
import { execFileSync } from 'node:child_process'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, basename } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const MB_BIN = join(root, '_build/native/debug/build/cmd/compile/compile.exe')
const casesDir = process.argv[2] || join(root, 'test/cases')
const BATCH = 40

// ---- 用例收集 ----

function collect(dir) {
  const out = []
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    if (statSync(p).isDirectory()) out.push(...collect(p))
    else if (/\.scss$/.test(e)) {
      out.push({ id: basename(e), src: readFileSync(p, 'utf8') })
    } else if (/\.hrx$/.test(e)) {
      for (const b of parseHrx(readFileSync(p, 'utf8'))) {
        out.push({ id: `${basename(e)}::${b.name}`, src: b.scss })
      }
    }
  }
  return out
}

function parseHrx(text) {
  const blocks = []
  let cur = null
  for (const line of text.split('\n')) {
    if (line.startsWith('<===>')) {
      const p = line.slice('<===>'.length).trim()
      if (p.endsWith('input.scss')) {
        cur = { name: p, scss: '' }
        blocks.push(cur)
      } else {
        cur = null
      }
    } else if (line.trim() === '=>' || /^====+$/.test(line.trim())) {
      cur = null
    } else if (cur) {
      cur.scss += line + '\n'
    }
  }
  return blocks
}

function norm(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

const cases = collect(casesDir).sort((a, b) => a.id.localeCompare(b.id))

// ---- 批量编译 moonbit 产物 ----
const mbOut = new Array(cases.length)
for (let i = 0; i < cases.length; i += BATCH) {
  const chunk = cases.slice(i, i + BATCH)
  const payload = chunk.map((c) => c.src).join('\u0000')
  let out = ''
  try {
    out = execFileSync(MB_BIN, { input: payload }).toString()
  } catch {
    // 进程非零退出：全部按失败处理
  }
  const parts = out.split('\u0000')
  for (let j = 0; j < chunk.length; j++) {
    mbOut[i + j] = parts[j] ?? '__MB_ERROR__'
  }
}

// ---- 逐个对比 ----
const rows = []
let pass = 0
let diff = 0
let mbErr = 0
let oracleErr = 0

for (let k = 0; k < cases.length; k++) {
  const { id, src } = cases[k]
  let oracle
  try {
    oracle = compileString(src, { style: 'expanded' }).css
  } catch {
    oracle = null
  }
  const mb = mbOut[k]

  if (oracle === null) {
    oracleErr++
    rows.push({ status: 'oracle_error', id, oracle: '(dart-sass 编译失败)', mb: mb.trim() })
    continue
  }
  if (mb.includes('MB_ERROR')) {
    mbErr++
    rows.push({ status: 'mb_error', id, oracle: norm(oracle), mb: mb.trim() })
    continue
  }
  if (norm(oracle) === norm(mb)) {
    pass++
  } else {
    diff++
    rows.push({ status: 'diff', id, oracle: norm(oracle), mb: norm(mb) })
  }
}

// 输出不一致详情（上限 25 条）
let shown = 0
for (const r of rows) {
  if (r.status === 'diff' && shown < 25) {
    shown++
    console.log(`\n[D I F F] ${r.id}`)
    console.log(`  sass  : ${r.oracle}`)
    console.log(`  moonbt: ${r.mb}`)
  } else if (r.status === 'oracle_error' && shown < 25) {
    shown++
    console.log(`\n[ORCL_ERR] ${r.id}`)
  } else if (r.status === 'mb_error' && shown < 25) {
    shown++
    console.log(`\n[MB_ERR] ${r.id}  (dart-sass 能编译, moonbit 报错)`)
    console.log(`  sass  : ${r.oracle}`)
    console.log(`  moonbt: ${r.mb}`)
  }
}

console.log('\n================== 汇总 ==================')
console.log(`用例总数 : ${cases.length}`)
console.log(`一致     : ${pass}`)
console.log(`不一致   : ${diff}`)
console.log(`moonbit 报错(dart-sass 可编译): ${mbErr}`)
console.log(`dart-sass 也无法编译(跳过)    : ${oracleErr}`)
