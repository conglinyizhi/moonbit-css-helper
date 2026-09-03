# conglinyizhi/moonbit-css-helper

可插拔的 CSS 预处理器编译门面：一个函数把 **SCSS / LESS / CSS** 源码（或文件）编译成 CSS。
核心只做「识别格式 → 路由到后端引擎 → 统一错误」，引擎可插拔、输入可单可多、文件读取由调用方注入（核心零 IO 耦合）。

> 对外名 `moonbit-css-helper`；**import 路径**用下划线 `conglinyizhi/moonbit_css_helper`
> （MoonBit 包名含连字符会让 `_test.mbt`/`README` 的 auto-import alias 失效，故标识收成下划线）。

## 安装

```bash
moon add conglinyizhi/moonbit_css_helper
```

## 快速开始

```mbt check
test {
  // 自动识别格式编译
  inspect(
    @moonbit_css_helper.compile("$c: red; body { color: $c; }"),
    content=(#|body {
    #|  color: red;
    #|}
    #|
    ),
  )
}
```

```mbt check
test {
  // 显式指定为 CSS（透传）
  inspect(@moonbit_css_helper.compile_css("body { color: red; }"), content="body { color: red; }")
}
```

```mbt check
test {
  // SCSS 变量 + 嵌套
  inspect(
    @moonbit_css_helper.compile_scss("$gap: 8px; a { margin: $gap; b { padding: $gap; } }"),
    content=(#|a {
    #|  margin: 8px;
    #|}
    #|a b {
    #|  padding: 8px;
    #|}
    #|
    ),
  )
}
```

## 多文件 & 灵活输入（`compile_many`）

允许多个文件 / 多个 SCSS 字符串 / **混用**，并支持 `@import "path"` 内联。
读取函数由调用方注入（`read : (path) -> String raise RabbitaError`），核心不耦合具体 IO。

```mbt check
test {
  let read = fn(p : String) -> String raise @core.RabbitaError {
    if p == "a.scss" { "$c: blue; .x { color: $c; }" } else { "" }
  }
  inspect(@moonbit_css_helper.compile_many(
    [@core.Input::Source("body { color: red; }"),
     @core.Input::File("a.scss"),        // read 读取，内容里的 @import 也会内联
     @core.Input::Source(".y { width: 1px; }")],
    read,
  ), content=(#|body {
    #|  color: red;
    #|}
    #|
    #|.x {
    #|  color: blue;
    #|}
    #|
    #|.y {
    #|  width: 1px;
    #|}
    #|
    ))
}
```

## 门面 API（核心包）

- `compile(source)` — 自动识别格式并编译
- `compile_scss(source)` / `compile_less(source)` / `compile_css(source)` — 显式格式
- `compile_input(input)` — 按 `Input` 形态（`Source` / `SourceWithFormat` / `File`）
- `compile_file(path, read)` — 编译单文件（read 注入）
- `compile_many(inputs, read)` — 编译多个输入（`File`/`Source` 混用），逐个带 `@import` 内联后拼接

统一错误 `RabbitaError`（`NoEngine` / `EngineFailed`），所有后端引擎错误都会映射到它。多文件 `@import` 内联在 AST 层递归展开（含嵌套规则/控制流体），调用方 `read` 负责路径解析；循环 import 会被去重。

## 引擎（可插拔）

- `backend_css` — CSS 透传
- `backend_scss` — SCSS 子集（变量 + 作用域 `!default/!global`、嵌套、`&`、mixin 含默认/可变参数与 `@content`、`@if/@else if/@while/@for/@each`(多变量)、比较/逻辑运算、`+` 字符串连接、裸括号吸收、选择器/值插值、`@import` 内联、`@media` 透传、`@warn/@debug/@error` 忽略）

## Rabbita 全栈嵌合指南

`moonbit-community/rabbita`（MoonBit 函数式 Web UI）+ `hackwaly/moonback`（Express 级后端）是 MoonBit 全栈 SSR 的生态。要在 rabbit 项目里用本库把 SCSS 编译成 CSS：

### 嵌合点

本库是**纯库**（String→String，无 IO）。嵌合发生在 rabbit 项目的**后端/构建期**：给它一个 `read` 从 scss 源码集合读取，`compile_many` 产出 CSS，再挂到静态资源或直接注入。

```mbt
// 在 rabbit 项目（后端 cmd/server 或独立构建工具）里
#warnings("-alert_experimental")   // rabbits 大量 API 带 #internal(experimental)
let read = fn(p : String) -> String raise @core.RabbitaError {
  // 从构建期 scss 源码 map 读，或从文件系统读（读文件用 @fs，见下方坑）
  scss_sources.get(p) or ""
}
let css = @moonbit_css_helper.compile_many(
  [@core.Input::File("app.scss"),
   @core.Input::File("partials/_button.scss"),
   @core.Input::Source("$z: 10; .top { z-index: $z; }")],
  read,
)
// 把 css 写进 public/site.css，或作为 string 交给 moonback
```

静态资源：moonback 用 `@static.new(root="public")` 中间件服务 `public/` 下的 `site.css`；rabbit 页面里用 `<link rel="stylesheet" href="/site.css">`。

### 关键坑（来自 `clyzhi-moonwell-spring` skill 的一手经验）

- **`#internal(experimental)`**：rabbita 大量 API（`App::render`/`hydrate` 等）标注 experimental，入口加 `#warnings("-alert_experimental")` 压制，别因为它 experimental 就绕开——它是当前 full-stack SSR 的必要上游。
- **native target**：`moon new` 默认 `preferred_target="wasm"`；rabbit 后端/服务端要 `preferred_target="native"` + 依赖 `moonbitlang/async`。
- **core 无文件 IO**：读文件用 `moonbitlang/async/fs`（`@fs.read_file`）。但 **async trait impl 未稳定**——同步 trait 方法体里调 `@fs` 会被静默丢弃。若你的 `read` 用在同步 trait/构建脚本里，先异步读完再喂给 `compile_many`，或分开处理。
- **`MOON_CC`**：native build 需 C 驱动，工具链可能找 `/usr/bin/lib.exe`——`MOON_CC=gcc moon build --target native`。
- **代理坑**：本地代理会让 `moon`/请求超时——`--noproxy '*'`。
- **static 中间件路径**：`hackwaly/moonback/middlewares/unstable_static`（习惯别名 `@static`）。
- **SSR 无 on_mount**：首屏数据必须在服务端预取后经 input 注入（闭包捕获）；`@rabbita.new(component : () -> Val[Html])` 无参。

## 给 Agent / 开发者的提示（避免痛苦调查）

本项目与 rabbit 全栈都属于 **MoonBit 官方技能未覆盖** 的生态。动手前先读：

- **`~/.pi/agent/skills/external/clyzhi-moonwell-spring/references/rabbita-fullstack.md`** — rabbit + moonback 全栈 SSR 的 API 速查与八大失败经验（SSR 无 on_mount、MPA 回退、`@html.Attrs::inner_html` 注入 RawHtml、`@html.nothing`、组件签名 `(input) -> Val[Html]`、`create_pure_state` 等）。
- **同目录 `patches.md`** — 补丁 20（服务端 native/默认 wasm 陷阱）、21（数组模式至多一个 `..`、`Show`→`@debug.to_string`/`repr`、`catch`/`<|` 优先级）、22（rabbit 全栈）、23（async trait impl 静默丢弃、core 无文件 IO、`MOON_CC`、`--noproxy`）、24（生态包：moonai/openai/pi-moonbit/mcp、`conglinyizhi/moondbus`+`moonsni` 桌面集成）。
- 生态包速查在 `references/patches.min.md`。

这些是踩过的坑，能省掉大量重复调查。

## 差分测试（质量背书）

用 dart-sass 作 oracle 做差分对比；用例来自 `test/cases` + 上游 `sass-spec`：

```bash
node scripts/diff.mjs                            # 自带 cases
node scripts/diff.mjs test/sass-spec/spec/variables
```

差分报告见 `test/spec-gap.md`（通过率、已支持特性、归档的 deep-water：完整 SCSS value 模型、`@use/@forward` 模块系统等）。

## 已知限制

- SCSS 为**子集**：`@extend`、完整内置函数（颜色/数学）、`@use/@forward` 模块系统未实现
- 运算对齐到「运算符紧密/连接/裸括号吸收」；剩余 `calc()`/`infinity`/多单位运算属 value 系统深水区
- LESS 引擎尚未实现
