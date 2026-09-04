// 双栏编辑器：左 CodeMirror（scss 高亮）+ 语言下拉 + 载入示例 + 变量注入（kv）+ 压缩输出
// 用 webruntime 编译的 web.js（compile_scss / compile_less / minify_css）
import { compile_scss, compile_less, minify_css } from './web.js'

const ta = document.getElementById('scss-in')
const out = document.getElementById('css-out')
// 解析模式（语言）切换：左右两组按钮，用 data-lang 同步高亮
const langBtns = document.querySelectorAll('.lang-btn')
let lang = 'scss'
const varsBox = document.getElementById('vars')
const addVarBtn = document.getElementById('add-var')
const minifyChk = document.getElementById('minify')
const trimChk = document.getElementById('trim-blank')

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

// ── 变量注入（kv 可视化编辑）──
// 前 4 个是固定示例（red/yellow/green/blue）：key 锁定、不可删除，value 可改
const LOCKED_COUNT = 4
let vars = [
  { name: 'red', value: '#e74c3c' },
  { name: 'yellow', value: '#f5d563' },
  { name: 'green', value: '#2ecc71' },
  { name: 'blue', value: '#3498db' },
]

// 只去掉输出开头/末尾的不可见空行（不动行与行之间的换行）
function trimBlankLines(s) {
  let st = 0
  while (st < s.length && (s[st] === '\n' || s[st] === '\r' || s[st] === ' ' || s[st] === '\t')) st++
  let en = s.length
  while (en > st && (s[en - 1] === '\n' || s[en - 1] === '\r' || s[en - 1] === ' ' || s[en - 1] === '\t')) en--
  return s.slice(st, en)
}
// 让变量名/值输入框随内容自适应收窄（ch 单位，兼容所有浏览器）
function fitInput(inp) {
  inp.style.width = (inp.value.length + 2) + 'ch'
}

function renderVars() {
  varsBox.innerHTML = ''
  vars.forEach((v, idx) => {
    const row = document.createElement('div')
    row.className = 'vars-tag'
    const n = document.createElement('input')
    n.type = 'text'
    n.placeholder = '变量名'
    n.value = v.name
    n.className = 'vars-tag-name'
    const val = document.createElement('input')
    val.type = 'text'
    val.placeholder = '值'
    val.value = v.value
    val.className = 'vars-tag-value'
    const del = document.createElement('button')
    del.textContent = '×'
    del.className = 'vars-tag-del'
    if (idx < LOCKED_COUNT) {
      n.readOnly = true
      n.title = '示例变量，key 不可修改'
      del.disabled = true
      del.title = '示例变量，不可删除'
    } else {
      del.title = '删除'
    }
    n.addEventListener('input', () => { vars[idx].name = n.value; fitInput(n); sync() })
    val.addEventListener('input', () => { vars[idx].value = val.value; fitInput(val); sync() })
    del.addEventListener('click', () => { vars.splice(idx, 1); renderVars(); sync() })
    row.appendChild(n)
    row.appendChild(val)
    row.appendChild(del)
    varsBox.appendChild(row)
    fitInput(n)
    fitInput(val)
  })
}

addVarBtn.addEventListener('click', () => {
  vars.push({ name: '', value: '' })
  renderVars()
})

// 把 kv 拼成“预置全局变量”前缀（scss/sass 用 $，less 用 @，等价于在源码前写 $c: 10px;）
function varsPrefix() {
  const lines = []
  const sigil = lang === 'less' ? '@' : '$'
  const semi = lang === 'sass' ? '' : ';'
  for (const v of vars) {
    const name = v.name.trim()
    if (!name) continue
    lines.push(sigil + name + ': ' + v.value + semi)
  }
  return lines.join('\n')
}

// 每种语言一段初始示例（scss 用未定义的 $red-color 演示注入；sass/less 演示各自语法）
const samples = {
  scss: '.card {\n  background: $yellow;\n  color: $green;\n  border: 2px solid $red;\n  .title {\n    box-shadow: 0 0 6px $blue;\n  }\n}',
  sass: '.card\n  background: $yellow\n  color: $green\n  border: 2px solid $red\n  .title\n    box-shadow: 0 0 6px $blue',
  less: '.card {\n  background: @yellow;\n  color: @green;\n  border: 2px solid @red;\n  .title {\n    box-shadow: 0 0 6px @blue;\n  }\n}',
}

const sync = () => {
  const src = cm.getValue()
  const prefix = varsPrefix()
  const fed = prefix + '\n' + src
  let css = lang === 'less' ? compile_less(fed) : compile_scss(fed)
  if (trimChk.checked) css = trimBlankLines(css)
  if (minifyChk.checked) css = minify_css(css)
  out.innerHTML = hl(css || '')
}

cm.on('change', sync)
// 切换解析模式：更新左右两组的 active 强调色 + 自动载入该语言示例 + 重新编译
function updateActive() {
  langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang))
}
function setLang(l) {
  lang = l
  cm.setValue(samples[lang] || samples.scss)
  updateActive()
  sync()
}
langBtns.forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)))
updateActive()

minifyChk.addEventListener('change', sync)
trimChk.addEventListener('change', sync)

renderVars()
sync()
