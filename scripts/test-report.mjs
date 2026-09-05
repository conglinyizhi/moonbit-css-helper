#!/usr/bin/env node
// 汇总现有测试套件，生成可发布的机器可读结果。
// 覆盖 MoonBit 单元测试、SCSS 差分测试、LESS 差分测试和已生成的大批量 benchmark 正确性。
import { execFileSync, spawnSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { tmpdir } from 'node:os'

const root = new URL('..', import.meta.url).pathname
const output = process.argv[2] || 'site/static/data/tests.json'
const env = { ...process.env, MOON_CC: 'clang', MOON_AR: 'ar', MOON_LD: 'clang' }
const cli = process.env.PRECSS_CLI || join(root, '_build/native/debug/build/cmd/cli/cli.exe')

function run(command, args) {
  const result = spawnSync(command, args, { cwd: root, env, encoding: 'utf8' })
  return {
    command: [command, ...args].join(' '),
    status: result.status,
    stdout: result.stdout || '',
    stderr: result.stderr || '',
  }
}

function moonTest() {
  const result = run('moon', ['test', '--target', 'native'])
  const match = result.stdout.match(/Total tests:\s*(\d+),\s*passed:\s*(\d+),\s*failed:\s*(\d+)/)
  if (!match) {
    return {
      suite: 'moon-unit', name: 'MoonBit 单元测试', total: 0, passed: 0, failed: 1,
      status: 'error', command: result.command, output: (result.stdout + result.stderr).trim(),
    }
  }
  const total = Number(match[1])
  const passed = Number(match[2])
  const failed = Number(match[3])
  return {
    suite: 'moon-unit', name: 'MoonBit 单元测试', total, passed, failed,
    status: result.status === 0 && failed === 0 ? 'passed' : 'failed', command: result.command,
  }
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

function diffSuite(script, jsonPath) {
  const result = run(process.execPath, [script, '--json', jsonPath])
  let report
  try {
    report = readJson(jsonPath)
  } catch {
    return {
      suite: script.includes('less') ? 'less-diff' : 'scss-diff',
      name: script.includes('less') ? 'LESS 差分测试' : 'SCSS 差分测试',
      total: 0, passed: 0, failed: 1, status: 'error', command: result.command,
      output: (result.stdout + result.stderr).trim(),
    }
  }
  return {
    suite: report.suite,
    name: report.suite === 'less-diff' ? 'LESS 差分测试' : 'SCSS / SASS 差分测试',
    total: report.total,
    passed: report.passed,
    failed: report.failed,
    skipped: report.oracle_errors || 0,
    status: result.status === 0 && report.failed === 0 ? 'passed' : 'failed',
    oracle: report.oracle,
    cases_dir: report.cases_dir,
    command: result.command,
    mismatches: report.mismatches,
    moonbit_errors: report.moonbit_errors,
  }
}

const moon = moonTest()
const tempDir = mkdtempSync(join(tmpdir(), 'precss-test-report-'))
const scssPath = join(tempDir, 'scss-diff.json')
const lessPath = join(tempDir, 'less-diff.json')
const scss = diffSuite('scripts/diff.mjs', scssPath)
const less = diffSuite('scripts/less_diff.mjs', lessPath)
rmSync(tempDir, { recursive: true, force: true })
function benchmarkSuite() {
  const path = join(root, 'site/static/data/benchmark.json')
  try {
    const data = readJson(path)
    const results = data.results || []
    const total = results.reduce((n, result) => n + (result.correctness?.total || 0), 0)
    const passed = results.reduce((n, result) => n + (result.correctness?.matched || 0), 0)
    const failed = total - passed
    return {
      suite: 'benchmark-correctness',
      name: '大批量 benchmark 正确性',
      total, passed, failed,
      status: failed === 0 && results.length > 0 ? 'passed' : 'failed',
      profile: data.profile,
      dataset: data.dataset,
      cases: results.map((result) => ({
        syntax: result.syntax,
        matched: result.correctness?.matched || 0,
        total: result.correctness?.total || 0,
        included: result.correctness?.included === true,
      })),
      command: 'pnpm run bench:release',
    }
  } catch {
    return null
  }
}

const suites = [moon, scss, less]
const large = benchmarkSuite()
if (large) suites.push(large)
const total = suites.reduce((n, suite) => n + suite.total, 0)
const passed = suites.reduce((n, suite) => n + suite.passed, 0)
const failed = suites.reduce((n, suite) => n + suite.failed, 0)
const report = {
  schema: 1,
  project: 'conglinyizhi/precss',
  generated_at: new Date().toISOString(),
  commit: (() => { try { return execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root }).toString().trim() } catch { return 'unknown' } })(),
  cli,
  total,
  passed,
  failed,
  status: failed === 0 && suites.every((suite) => suite.status === 'passed') ? 'passed' : 'failed',
  suites,
}
const outputPath = output.startsWith('/') ? output : join(root, output)
mkdirSync(dirname(outputPath), { recursive: true })
writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n')
console.log(`测试结果：${passed}/${total} 通过，失败 ${failed}`)
console.log(`JSON: ${outputPath}`)
if (report.status !== 'passed') process.exitCode = 1
