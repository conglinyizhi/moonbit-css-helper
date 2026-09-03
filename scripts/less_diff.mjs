#!/usr/bin/env node
// LESS 差分测试：用 less.js 作 oracle，与 moonbit compile_less 产物对比。
// 用例来自 test/less_cases/*.less（单文件）；moonbit 侧用 cmd/compile_less 批量编译。
import less from 'less'
import { execFileSync } from 'node:child_process'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, basename } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const MB_BIN = join(root, '_build/native/debug/build/cmd/compile_less/compile_less.exe')
const casesDir = process.argv[2] || join(root, 'test/less_cases')
const BATCH = 40

function collect(dir) {
  const out = []
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    if (statSync(p).isDirectory()) out.push(...collect(p))
    else if (/\.less$/.test(e)) out.push(p)
  }
  return out
}

function norm(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').trim()
}

const cases = collect(casesDir).sort((a, b) => a.localeCompare(b))

// 批量编译 moonbit 产物
const mbOut = new Array(cases.length)
for (let i = 0; i < cases.length; i += BATCH) {
  const chunk = cases.slice(i, i + BATCH)
  const payload = chunk.map((c) => readFileSync(c, 'utf8')).join('\u0000')
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

let pass = 0
let diff = 0
let mbErr = 0
let oracleErr = 0
const shown = []
for (let k = 0; k < cases.length; k++) {
  const f = cases[k]
  const id = basename(f)
  const src = readFileSync(f, 'utf8')
  let oracle
  try {
    oracle = (await less.render(src)).css
  } catch {
    oracle = null
  }
  const mb = mbOut[k]
  if (oracle === null) {
    oracleErr++
    continue
  }
  if (mb.includes('MB_ERROR')) {
    mbErr++
    shown.push(`[MB_ERR] ${id}\n  less : ${norm(oracle)}`)
    continue
  }
  if (norm(oracle) === norm(mb)) {
    pass++
  } else {
    diff++
    if (shown.length < 20) shown.push(`[DIFF] ${id}\n  less   : ${norm(oracle)}\n  moonbt: ${norm(mb)}`)
  }
}

for (const s of shown) console.log('\n' + s)
console.log('\n================== LESS 差分汇总 ==================')
console.log(`用例总数 : ${cases.length}`)
console.log(`一致     : ${pass}`)
console.log(`不一致   : ${diff}`)
console.log(`moonbit 报错(less.js 可编译): ${mbErr}`)
console.log(`less.js 也无法编译(跳过)    : ${oracleErr}`)
