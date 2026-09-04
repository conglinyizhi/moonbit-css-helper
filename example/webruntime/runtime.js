// precss 浏览器运行时：扫描 `<style lang="scss|less|sass">`，
// 用 MoonBit 编译成 CSS 后替换原标签。多个模块 / 混用格式都行。
import { compile_scss, compile_less } from './web.js'

function initStyles() {
  const nodes = document.querySelectorAll('style[lang]')
  for (const st of nodes) {
    const lang = st.getAttribute('lang') || 'scss'
    const src = st.textContent
    // sass 缩进语法走 scss 引擎（自动识别缩进）；less 走 compile_less
    const css = lang === 'less' ? compile_less(src) : compile_scss(src)
    const out = document.createElement('style')
    out.textContent = css
    out.setAttribute('data-compiled', '1')
    st.replaceWith(out)
  }
  console.log(`precss: compiled ${nodes.length} style module(s)`)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStyles)
} else {
  initStyles()
}
