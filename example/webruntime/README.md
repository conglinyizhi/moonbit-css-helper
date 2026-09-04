# moonbit_css_helper 浏览器运行时范例

把库编译到浏览器运行，扫描 `<style lang="scss|less|sass">` 标签，加载后用 MoonBit
把源码编译成 CSS，创建新 `<style>` 替换原标签。多个模块 / 混用 scss / less / sass 都行。

> 库核心是纯 `String→String`，所以「浏览器运行时」就是让它把字符串进出边界。本范例给两条路：
> **JS backend**（浏览器全覆盖）与 **wasm-gc**（真 `.wasm`，Chrome 直接可用）。

## 目录

```
example/webruntime/
  web/            # #export_name 导出 compile_scss / compile_less（String→String）
    main.mbt
  web.js          # build --target js 产物（ESM named export，开箱即用）
  runtime.js      # JS 版运行时：scan style[lang] → 调 compile_* → 替换
  index.html      # JS 版演示（scss / less / sass 三个 style[lang]）
  wasm-gc/
    web.wasm      # build --target wasm-gc 产物（真 .wasm）
    runtime.js    # wasm-gc 运行时：instantiate + _start + scan
    index.html    # wasm-gc 版演示
  README.md
```

## JS backend 版（推荐，浏览器全覆盖）

构建：

```bash
moon build --target js example/webruntime/web
# 产物: _build/js/debug/build/example/webruntime/web/web.js
cp _build/js/debug/build/example/webruntime/web/web.js example/webruntime/web.js
```

运行（ESM 在 `file://` 下受限，起静态服务）：

```bash
python3 -m http.server
# 打开 http://localhost:8000/example/webruntime/index.html
```

**浏览器兼容性：现代 Chrome / Firefox / Waterfox / Safari 全部无问题**（就是普通 JS 模块，
String 直接是 JS string，零 ABI 握手）。

## wasm-gc 版（真 .wasm 文件，Chrome 可用）

构建：

```bash
moon build --target wasm-gc example/webruntime/web
# 产物: _build/wasm-gc/debug/build/example/webruntime/web/web.wasm
cp _build/wasm-gc/debug/build/example/webruntime/web/web.wasm example/webruntime/wasm-gc/web.wasm
```

运行：

```bash
python3 -m http.server
# 打开 http://localhost:8000/example/webruntime/wasm-gc/index.html
```

**浏览器兼容性：Chrome 可用；Firefox / Waterfox 需实测**——wasm-gc 的 `String`
跨边界依赖 **WebAssembly JS String Builtins**（`use-js-builtin-string`），Chrome（V8）实现，
Firefox / Waterfox 对 JS String Builtins 支持滞后，很可能不默认开。要在 Firefox / Waterfox
也跑纯 wasm，需走「普通 wasm（`export-memory-name` 导出 memory）+ JS 端 UTF-8 编解码胶水」，
这是 MoonBit 的探索型路径（另见下）。

## 为什么纯 wasm 在 MoonBit 上对浏览器是"绕一圈"

MoonBit wasm 的字符串跨边界主线用 **wasm-gc + `use-js-builtin-string`**（JS String Builtins），
而这恰好是 Firefox / Waterfox 没做的子特性。要走「Firefox 也能跑的纯 wasm」，只能用**普通
wasm + 手写 memory 胶水**（把 JS string 编码进 wasm memory、传指针、从 memory 解码结果），
需要 MoonBit 导出 memory + 摸清 String ABI。这条已探明是**可行但要手工**的路径。

## 原理

- `web/main.mbt`：`#export_name` 导出 `compile_scss` / `compile_less`（`String→String`，错误返回空串）。
- JS backend：`moon build --target js` 产出 ESM（named export，String 零 ABI）。
- wasm-gc：`moon build --target wasm-gc` 产出 `.wasm`（`instantiateStreaming` + `_start` + String externref）。
- `runtime.js`：`querySelectorAll('style[lang]')` → 按 `lang` 调 `compile_*` → `replaceWith`。

## 扩展

- 想保留原 `<style>` 作 fallback？把 `replaceWith` 改成 `insertBefore` + `remove()`。
- 想更早初始化？把脚本内联到 `</head>` 前，或 `readyState !== 'loading'` 分支已处理。
