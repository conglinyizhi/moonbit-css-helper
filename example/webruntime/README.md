# moonbit_css_helper 浏览器运行时范例

把库编译为 **JS backend ESM**，在浏览器里扫描 `<style lang="scss|less|sass">` 标签，
DOMContentLoaded 后用 MoonBit 把源码编译成 CSS，创建新 `<style>` 替换原标签。
多个模块 / 混用 scss / less / sass 都行。

> 为什么用 JS backend 而非纯 wasm：库核心是纯 `String→String`，JS backend 的 String
> 直接是 JS string，浏览器 `import` 即用、零 ABI 握手。纯 wasm（wasm-gc）也行，但 MoonBit
> wasm 的字符串参数/返还需要 WebAssembly JS-string-builtins（Chrome 支持，node/老浏览器
> 要开 flag），浏览器端做字符串 transform 更折腾。

## 目录

```
example/webruntime/
  web/            # 导出入口（#export_name 导出 compile_scss / compile_less）
    main.mbt
  web.js          # build 产物（从 _build 复制来的 ESM）
  runtime.js      # 扫描 style[lang] → 调 compile_* → 替换
  index.html      # 演示：三个 style[lang]（scss / less / sass）
```

## 构建

```bash
moon build --target js example/webruntime/web
# 产物: _build/js/debug/build/example/webruntime/web/web.js
# 复制到本目录：
cp _build/js/debug/build/example/webruntime/web/web.js example/webruntime/web.js
```

## 运行

ESM 在 `file://` 下受限，起个静态服务：

```bash
python3 -m http.server
# 打开 http://localhost:8000/example/webruntime/index.html
```

控制台应输出 `moonbit-css-helper: compiled 3 style module(s)`，
三个 `<style lang>` 各自被替换为编译后的 CSS。

## 原理

- `web/main.mbt`：`#export_name` 导出 `compile_scss` / `compile_less`（`String→String`，错误返回空串）。
- `moon build --target js`：产出 ESM `web.js`（named export）。
- `runtime.js`：`querySelectorAll('style[lang]')`，按 `lang` 调 `compile_*`，`document.createElement('style')` 写入 CSS 后 `replaceWith`。

## 扩展

- 想同时保留原 `<style>` 作 fallback？把 `replaceWith` 改成 `insertBefore` + `remove()` 即可。
- 想更早初始化（等不到 DOMContentLoaded）？直接在 `</head>` 前内联 `<script type="module">`，或 `readyState !== 'loading'` 分支早已处理。
