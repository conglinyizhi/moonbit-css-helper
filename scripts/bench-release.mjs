#!/usr/bin/env node
// Release benchmark 编排器：构建 native CLI，再生成可发布的 benchmark JSON。
import { execFileSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const cli = join(root, '_build/native/release/build/cmd/cli/cli.exe')
const env = { ...process.env, MOON_CC: 'clang', MOON_AR: 'ar', MOON_LD: 'clang', PRECSS_CLI: cli }
const run = (command, args, options = {}) => execFileSync(command, args, {
  cwd: root,
  env,
  stdio: 'inherit',
  ...options,
})

mkdirSync(join(root, 'site/static/data'), { recursive: true })
run('moon', ['build', '--release', '--strip', '--target', 'native', 'cmd/cli'])
run(process.execPath, [
  'example/perf/bench.mjs',
  '--profile', 'release',
  '--json', 'site/static/data/benchmark.json',
])
