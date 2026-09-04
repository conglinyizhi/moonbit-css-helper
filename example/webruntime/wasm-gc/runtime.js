// wasm-gc 版浏览器运行时：依赖 WebAssembly JS String Builtins
// （Chrome 支持；Firefox / Waterfox 需实测）。见 README 的兼容性说明。
const importObject = {
  spectest: { print_char: (c) => {} },
  'moonbit:ffi': { make_closure: (f, c) => f.bind(null, c) },
}

WebAssembly.instantiateStreaming(fetch('./web.wasm'), importObject)
  .then(({ instance }) => {
    const { _start, compile_scss, compile_less } = instance.exports
    _start()
    const nodes = document.querySelectorAll('style[lang]')
    for (const st of nodes) {
      const lang = st.getAttribute('lang') || 'scss'
      const css = lang === 'less' ? compile_less(st.textContent) : compile_scss(st.textContent)
      const out = document.createElement('style')
      out.textContent = css
      out.setAttribute('data-compiled', '1')
      st.replaceWith(out)
    }
    console.log(`precss (wasm-gc): compiled ${nodes.length} style module(s)`)
  })
  .catch((e) => console.error('precss (wasm-gc) init failed:', e))
