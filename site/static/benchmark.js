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

function render(data) {
  root.replaceChildren()
  const benchmark = data.benchmark || {}
  const environment = data.environment || {}
  const rows = data.results || []

  const summary = document.createElement('p')
  summary.className = 'benchmark-summary'
  summary.append(text(`${benchmark.count || 0} 份输入 · 深度 ${benchmark.depth} · ${benchmark.iterations} 次采样 · 正确性按份校验`))
  root.append(summary)

  const table = document.createElement('table')
  table.className = 'benchmark-table'
  const head = document.createElement('thead')
  const headRow = document.createElement('tr')
  for (const label of ['格式', 'precss native', '对比实现', '加速比', '正确性']) headRow.append(cell(label, 'benchmark-th'))
  head.append(headRow)
  table.append(head)

  const body = document.createElement('tbody')
  for (const row of rows) {
    const tr = document.createElement('tr')
    const valid = row.correctness?.included === true
    const baseline = row.baseline || {}
    const baselineStats = baseline.stats || {}
    tr.append(cell(row.syntax?.toUpperCase() || '-'))
    tr.append(cell(formatMs(row.precss_native_cli?.median_ms || 0)))
    tr.append(cell(`${baseline.name || '-'} · ${formatMs(baselineStats.median_ms || 0)}`))
    tr.append(cell(valid && row.speedup_x ? `${row.speedup_x}×` : '未计入', valid ? 'benchmark-speedup' : 'benchmark-invalid'))
    tr.append(cell(`${row.correctness?.matched || 0}/${row.correctness?.total || 0}`, valid ? 'benchmark-valid' : 'benchmark-invalid'))
    body.append(tr)
  }
  table.append(body)
  root.append(table)

  const meta = document.createElement('dl')
  meta.className = 'benchmark-meta'
  const values = [
    ['生成时间', data.generated_at || '-'],
    ['提交', data.commit || '-'],
    ['输入规模', `${benchmark.input_bytes || 0} bytes`],
    ['运行环境', `${environment.os || '-'} · ${environment.cpu || '-'}`],
    ['运行时', `${environment.node || '-'} · sass ${environment.sass || '-'} · less ${environment.less || '-'}`],
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
