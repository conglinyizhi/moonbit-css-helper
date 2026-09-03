# conglinyizhi/moonbit-css-helper

可插拔的 CSS 预处理器编译门面：一个函数把 **SCSS / LESS / CSS** 源码（或文件）编译成 CSS。
核心只做「识别格式 → 路由到后端引擎 → 统一错误」，具体引擎（SCSS 子集、CSS 透传）可插拔、可替换。

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

## 门面 API（核心包 `conglinyizhi/moonbit-css-helper`）

- `compile(source)` — 自动识别格式并编译
- `compile_scss(source)` / `compile_less(source)` / `compile_css(source)` — 显式格式编译
- `compile_input(input)` — 按 `Input` 形态编译（正文 or 正文+显式格式）
- `compile_file(path, read)` — 编译文件，读取函数由调用方注入，核心不耦合 IO

统一错误 `RabbitaError`（`NoEngine` / `EngineFailed`），所有后端引擎的错误都映射到它。

## 引擎（可插拔）

- `backend_css` — CSS 透传
- `backend_scss` — SCSS 子集（变量、嵌套、`&`、`@mixin`/`@include`、`@if/@else`、`@for`、基础数字加减运算、`@media` 透传）

架构预埋了嵌入式扩展位（后续可接入 dart-sass 等完整引擎），LESS 留插件位二期。

## 已知限制（第一版）

- SCSS 为**子集**：尚未实现 `@extend`、完整内置函数（颜色/数学）、模块系统（`@use`/`@forward`）
- `@for` 支持变量插值，但选择器插值依赖 `#{$var}` 形态的解析
- LESS 引擎尚未实现
