// 双栏编辑器：左 CodeMirror（scss 高亮）+ 语言下拉 + 载入示例，右实时编译 + 高亮 CSS 输出
// 用 webruntime 编译的 web.js（compile_scss / compile_less）
import { compile_scss, compile_less } from './web.js'

const ta = document.getElementById('scss-in')
const out = document.getElementById('css-out')
const langSel = document.getElementById('lang-select')
const loadBtn = document.getElementById('load-sample')

// 把 textarea 换成 CodeMirror（本地打包，不依赖运行时 CDN）
const cm = CodeMirror.fromTextArea(ta, {
  mode: 'text/x-scss',
  theme: 'dracula',
  lineNumbers: true,
  lineWrapping: true,
})

function esc(ch) {
  return ch === '&' ? '&amp;' : ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : ch
}

// 极简 CSS 词法高亮（输出侧）：选择器/属性/值/数字/注释
function hl(s) {
  let o = ''
  let i = 0
  const n = s.length
  while (i < n) {
    const c = s[i]
    const c2 = s[i + 1]
    if (c === '/' && c2 === '/') {
      let j = s.indexOf('\n', i)
      if (j < 0) j = n
      o += '<span class="tok-com">' + esc(s.slice(i, j)) + '</span>'
      i = j
      continue
    }
    if (c === '/' && c2 === '*') {
      let j = s.indexOf('*/', i + 2)
      if (j < 0) j = n
      else j += 2
      o += '<span class="tok-com">' + esc(s.slice(i, j)) + '</span>'
      i = j
      continue
    }
    if (c === '"' || c === "'") {
      let j = i + 1
      while (j < n && s[j] !== c) j++
      if (j < n) j++
      o += '<span class="tok-val">' + esc(s.slice(i, j)) + '</span>'
      i = j
      continue
    }
    if (c === '$' || c === '@') {
      let j = i + 1
      while (j < n && /[\w-]/.test(s[j])) j++
      o += '<span class="tok-var">' + esc(s.slice(i, j)) + '</span>'
      i = j
      continue
    }
    if (c === '#') {
      if (/^[0-9a-fA-F]{3,8}$/.test(s.slice(i + 1, i + 7))) {
        let j = i + 1
        while (j < n && /^[0-9a-fA-F]$/.test(s[j])) j++
        o += '<span class="tok-num">' + esc(s.slice(i, j)) + '</span>'
        i = j
      } else {
        let j = i + 1
        while (j < n && /[\w-]/.test(s[j])) j++
        o += '<span class="tok-sel">' + esc(s.slice(i, j)) + '</span>'
        i = j
      }
      continue
    }
    if (c === '.') {
      if (/[\w-]/.test(s[i + 1] || '')) {
        let j = i + 1
        while (j < n && /[\w-]/.test(s[j])) j++
        o += '<span class="tok-sel">' + esc(s.slice(i, j)) + '</span>'
        i = j
        continue
      }
    }
    if (/[0-9]/.test(c)) {
      let j = i
      while (j < n && /[\d.a-z%]/.test(s[j])) j++
      o += '<span class="tok-num">' + esc(s.slice(i, j)) + '</span>'
      i = j
      continue
    }
    if (/[a-zA-Z-]/.test(c)) {
      let j = i
      while (j < n && /[\w-]/.test(s[j])) j++
      let k = j
      while (k < n && s[k] === ' ') k++
      if (s[k] === ':') {
        o += '<span class="tok-prop">' + esc(s.slice(i, j)) + '</span>'
        i = j
        continue
      }
      o += esc(s.slice(i, j))
      i = j
      continue
    }
    o += esc(c)
    i++
  }
  return o
}

// 每种语言一段初始示例，供「载入示例」快速体验
const samples = {
  scss: '$c: blue; $gap: 8px;\n.card {\n  color: $c;\n  .title { margin-top: $gap; }\n}',
  sass: '$c: blue\n.card\n  color: $c\n  .title\n    margin-top: 8px',
  less: '@c: blue; @gap: 8px;\n.card {\n  color: @c;\n  .title { margin-top: @gap; }\n}',
}

const sync = () => {
  const lang = langSel.value
  const src = cm.getValue()
  const css = lang === 'less' ? compile_less(src) : compile_scss(src)
  out.innerHTML = hl(css)
}

loadBtn.addEventListener('click', () => {
  cm.setValue(samples[langSel.value] || samples.scss)
  sync()
})

cm.on('change', sync)
langSel.addEventListener('change', sync)
sync()
