const root = document.querySelector('#benchmark-results')

function text(value) {
  return document.createTextNode(String(value))
}

function cell(value, className = '') {
  const el = document.createElement('td')
  if (className) el.className = className
  el.append(text(value))
  return el
}

function formatMs(value) {
  return `${Number(value).toFixed(3)} ms`
}

function formatBytes(value) {
  const bytes = Number(value)
  if (!Number.isFinite(bytes)) return '-'
  const units = ['B', 'KiB', 'MiB', 'GiB', 'TiB']
  let n = bytes
  let unit = 0
  while (n >= 1024 && unit < units.length - 1) {
    n /= 1024
    unit += 1
  }
  const decimals = unit === 0 ? 0 : n >= 100 ? 1 : 2
  return `${bytes.toLocaleString('en-US')} bytes · ${n.toFixed(decimals)} ${units[unit]}`
}

function formatUtc(value) {
  const date = new Date(value)
  return Number.isNaN(date.valueOf()) ? '-' : date.toISOString().replace('T', ' ').replace('Z', ' UTC')
}

function formatLocal(value) {
  const date = new Date(value)
  if (Number.isNaN(date.valueOf())) return '-'
  return new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  }).format(date)
}

function appendMeta(data) {
  const benchmark = data.benchmark || {}
  const dataset = data.dataset || {}
  const environment = data.environment || {}
  const meta = document.createElement('dl')
  meta.className = 'benchmark-meta'
  const generated = data.generated_at || ''
  const values = [
    ['Profile', data.profile || '-'],
    ['输入规模', formatBytes(dataset.actual_input_bytes?.scss || benchmark.input_bytes)],
    ['目标规模', formatBytes(dataset.target_input_bytes)],
    ['生成时间（UTC）', formatUtc(generated)],
    ['生成时间（本地）', formatLocal(generated)],
    ['提交', data.commit || '-'],
    ['运行环境', `${environment.os || '-'} · ${environment.cpu || '-'}`],
    ['运行时', `Node.js ${environment.node_js || '-'} · Dart Sass npm ${environment.sass_npm || '-'} · less.js ${environment.less_js || '-'}`],
    ['MoonBit', environment.moonbit || '-'],
  ]
  for (const [label, value] of values) {
    const dt = document.createElement('dt')
    dt.append(text(label))
    const dd = document.createElement('dd')
    dd.append(text(value))
    meta.append(dt, dd)
  }
  root.append(meta)
}

function appendMemory(data) {
  const resources = data.resources || []
  if (!resources.length) return
  const title = document.createElement('h3')
  title.className = 'benchmark-subheading'
  title.append(text('独立资源测量'))
  root.append(title)
  const table = document.createElement('table')
  table.className = 'benchmark-table benchmark-memory-table'
  const head = document.createElement('thead')
  const headRow = document.createElement('tr')
  for (const label of ['格式', '测量对象', '峰值 RSS', '测量方式']) headRow.append(cell(label, 'benchmark-th'))
  head.append(headRow)
  table.append(head)
  const body = document.createElement('tbody')
  for (const resource of resources) {
    const tr = document.createElement('tr')
    tr.append(cell(resource.syntax?.toUpperCase() || '-'))
    tr.append(cell(resource.runner || '-'))
    tr.append(cell(resource.available ? formatBytes(resource.peak_rss_bytes) : '当前平台不可用', resource.available ? 'benchmark-memory' : 'benchmark-invalid'))
    tr.append(cell(resource.measurement || '-'))
    body.append(tr)
  }
  table.append(body)
  root.append(table)
  const note = document.createElement('p')
  note.className = 'benchmark-note'
  note.append(text('内存测量独立于编译耗时，目前只记录 Linux native CLI 的峰值 RSS，不作为普通单元测试门槛。'))
  root.append(note)
}

function render(data) {
  root.replaceChildren()
  const benchmark = data.benchmark || {}
  const dataset = data.dataset || {}
  const rows = data.results || []
  const summary = document.createElement('p')
  summary.className = 'benchmark-summary'
  summary.append(text(`${dataset.count || benchmark.count || 0} 份输入 · 总规模 ${formatBytes(dataset.actual_input_bytes?.scss || benchmark.input_bytes)} · 深度 ${dataset.depth} · ${dataset.iterations} 次采样 · 正确性按份校验`))
  root.append(summary)

  const table = document.createElement('table')
  table.className = 'benchmark-table'
  const head = document.createElement('thead')
  const headRow = document.createElement('tr')
  for (const label of ['格式', '输入 / 输出', 'precss native', '对比实现', '加速比', '正确性']) headRow.append(cell(label, 'benchmark-th'))
  head.append(headRow)
  table.append(head)
  const body = document.createElement('tbody')
  for (const row of rows) {
    const tr = document.createElement('tr')
    const valid = row.correctness?.included === true
    const baseline = row.baseline || {}
    const baselineStats = baseline.stats || {}
    tr.append(cell(row.syntax?.toUpperCase() || '-'))
    tr.append(cell(`${formatBytes(row.input_bytes)}\n${formatBytes(row.output_bytes)}`, 'benchmark-size'))
    tr.append(cell(formatMs(row.precss_native_cli?.median_ms || 0)))
    tr.append(cell(`${baseline.name || '-'} · ${formatMs(baselineStats.median_ms || 0)}`))
    tr.append(cell(valid && row.speedup_x ? `${row.speedup_x}×` : '未计入', valid ? 'benchmark-speedup' : 'benchmark-invalid'))
    tr.append(cell(`${row.correctness?.matched || 0}/${row.correctness?.total || 0}`, valid ? 'benchmark-valid' : 'benchmark-invalid'))
    body.append(tr)
  }
  table.append(body)
  root.append(table)
  appendMemory(data)
  appendMeta(data)
}

async function loadBenchmark() {
  try {
    const response = await fetch('../data/benchmark.json', { cache: 'no-store' })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    render(await response.json())
  } catch (error) {
    root.replaceChildren()
    const message = document.createElement('p')
    message.className = 'benchmark-error'
    message.append(text('基准数据暂时无法加载，请查看 GitHub Actions 或本地复现命令。'))
    root.append(message)
    console.error('[precss] benchmark data unavailable:', error)
  }
}

loadBenchmark()
