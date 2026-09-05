// 首页性能概览：优先加载 CI 生成的轻量摘要，失败时使用保守备用值
const fallbackResults = [
  { syntax: 'scss', precss: 41.38, baseline: 'Dart Sass', baselineMs: 429 },
  { syntax: 'sass', precss: 66.92, baseline: 'Dart Sass', baselineMs: 551.363 },
  { syntax: 'less', precss: 34.9, baseline: 'less.js', baselineMs: 131.834 },
]

function formatMs(value) {
  const ms = Number(value)
  return Number.isFinite(ms) ? `${ms.toFixed(1)} ms` : '-- ms'
}

function normalizeResult(result) {
  const precss = Number(result.precss_library_median_ms)
  const baselineMs = Number(result.baseline_median_ms)
  if (!result.syntax || !Number.isFinite(precss) || !Number.isFinite(baselineMs)) return null
  return {
    syntax: String(result.syntax).toLowerCase(),
    precss,
    baseline: result.baseline_name || 'baseline',
    baselineMs,
  }
}

function setTime(name, value) {
  const time = name.querySelector('.performance-time')
  if (time) time.textContent = ` · ${formatMs(value)}`
}

function renderResults(results, fallback) {
  const teaser = document.querySelector('.performance-teaser')
  if (!teaser) return
  teaser.classList.remove('performance-teaser-loading')
  teaser.classList.add('performance-teaser-ready')
  teaser.classList.toggle('is-fallback', fallback)
  const note = teaser.querySelector('.performance-teaser-note')
  if (note) note.textContent = fallback ? '基准摘要暂不可用，当前为保守估值' : '最近一次基准摘要'

  const maxMs = Math.max(...results.flatMap((result) => [result.precss, result.baselineMs]))
  document.querySelectorAll('.performance-group').forEach((group) => {
    const syntax = group.dataset.syntax
    const result = results.find((item) => item.syntax === syntax)
    if (!result) return
    const precssBar = group.querySelector('.performance-bar-precss')
    const baselineBar = group.querySelector('.performance-bar-baseline')
    if (precssBar) precssBar.style.setProperty('--bar-width', `${Math.max(8, result.precss / maxMs * 100)}%`)
    if (baselineBar) baselineBar.style.setProperty('--bar-width', `${Math.max(8, result.baselineMs / maxMs * 100)}%`)
    setTime(group.querySelector('.performance-name-precss'), result.precss)
    setTime(group.querySelector('.performance-name-baseline'), result.baselineMs)
  })
}

async function loadResults() {
  try {
    const response = await fetch('./data/benchmark-lite.json', { cache: 'no-store' })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const data = await response.json()
    const results = (data.results || []).map(normalizeResult).filter(Boolean)
    if (results.length < 3) throw new Error('incomplete benchmark-lite data')
    renderResults(results, false)
  } catch (error) {
    renderResults(fallbackResults, true)
    console.warn('[precss] benchmark-lite unavailable; using fallback:', error)
  }
}

loadResults()
