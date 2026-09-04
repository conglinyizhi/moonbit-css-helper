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
需要 MoonBit 导出 memory + 摸清 String ABI。

### 普通 wasm 的当前探索状态（`wasm/` 子目录）

- ✅ **memory 已导出**：`options(link: {"wasm": {"export-memory-name": "memory"}})` 生效，
  exports 含 `memory` + `compile_scss` / `compile_less`。
- ✅ **wasm String ABI 已确认**：`compile_scss: (i32) -> (i32)`（单指针，非 ptr/len 双参）。
- ✅ **String 是 UTF-16**（`moonbit.h`: `typedef uint16_t *moonbit_string_t`，
  `moonbit_make_string(size, uint16_t value)`）——不是 UTF-8。
- ✅ **对象 header 前置**（native：`Moonbit_object_header(obj) = (obj)-1`，rc + meta）。
- ⚠️ **未解（专项，需读 moonbit-compiler 的 wasm 后端）**：wasm 线性内存里 String 对象的
  **确切字段布局**（header 大小/字段）、对象分配区位置、data 是否紧接 header。
  之前的 UTF-8 + `[len][data]` 构造全部返回空串引用（`11608`），因为 MoonBit String 是
  UTF-16 + header 前置。要解码得**仿照 MoonBit 对象布局构造 String + 解析返回值**（源码级逆向）。

**结论**：Firefox / Waterfox 上要纯 wasm，先攻克 MoonBit wasm 的 String 对象布局（源码级专项）；
在攻克前，**Firefox / Waterfox 用 JS backend 版即可全覆盖**（`web.js` + `runtime.js`）。

### 下一个源码点（若要继续逆）

- `moonbit-compiler` 的 **wasm 后端**（String 对象的生成/字段布局）。
- MoonBit **wasm runtime**（对象分配器在 wasm 线性内存的落位）。
- `moonbit.h` 的 `moonbit_make_string` / `moonbit_object`（native 参考，UTF-16 + header 前置）。

## 原理

- `web/main.mbt`：`#export_name` 导出 `compile_scss` / `compile_less`（`String→String`，错误返回空串）。
- JS backend：`moon build --target js` 产出 ESM（named export，String 零 ABI）。
- wasm-gc：`moon build --target wasm-gc` 产出 `.wasm`（`instantiateStreaming` + `_start` + String externref）。
- `runtime.js`：`querySelectorAll('style[lang]')` → 按 `lang` 调 `compile_*` → `replaceWith`。

## 扩展

- 想保留原 `<style>` 作 fallback？把 `replaceWith` 改成 `insertBefore` + `remove()`。
- 想更早初始化？把脚本内联到 `</head>` 前，或 `readyState !== 'loading'` 分支已处理。
