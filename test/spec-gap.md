# 差分测试缺口报告（dart-sass / less.js 作 oracle）

用 `scripts/diff.mjs` 对 moonbit 引擎产物与 dart-sass（`sass@1.103`）做差分对比（scss/sass）；
`scripts/less_diff.mjs` 与 less.js 做差分（less）：同一份源码两边编译，压缩空白后比较。
scss/sass 用例来自自写 `test/cases/` 与上游 `sass-spec`（`spec/variables`、`spec/operators`、
`spec/directives`、`spec/css`）；less 用例来自 `test/less_cases/`。

用法：
```bash
node scripts/diff.mjs              # scss/sass，跑 test/cases
node scripts/diff.mjs test/sass-spec/spec/variables
node scripts/less_diff.mjs         # less，跑 test/less_cases
```

## 当前通过率（2026-09-03）

| 用例集 | 用例数 | 一致 | 不一致 | moonbit 报错 | sass 无法编译 |
| --- | --- | --- | --- | --- | --- |
| test/cases（scss 自写） | 24 | 24 | 0 | 0 | 0 |
| spec/variables | 14 | 14 | 0 | 0 | 0 |
| spec/operators | 30 | 19 | 10 | 0 | 1 |
| spec/directives | 776 | 79 | 118 | 0 | 579 |
| test/less_cases（less 自写） | 11 | 11 | 0 | 0 | 0 |

`dart-sass 无法编译` 多为 sass-spec 的多文件 `@import` 用例（单文件 `compileString` 缺依赖），
不代表 moonbit 问题，属跳过项。

## 缺口分类（后续 roadmap）

### 1. 运算 / 词法语义（operators 19/30，剩余为 value 系统深水区）
已完成：值序列化运算符紧密拼接、`+` 字符串连接（`c + d` → `cd`）、裸括号吸收（`(c)-(d)` → `c-d`）、
负值、`font: 12px/1.5`。
剩余 10 个 diff 属**完整 SCSS value/运算模型**（属全新求值器工程，子集不建议挤牙膏）：
- **括号吸收**：`c-(d)` 应运算吸收为 `c-d`，需真正表达式求值。
- **标识符字符串连接**：`c + d` → `cd`（`+` 的非数字连接语义）。
- **单位运算 / `calc()` / `infinity`/`NaN`**：需 Number 带单位、Color、CalcValue 等值类型。

### 2. 变量作用域与指令（已修，variables 14/14）
- 已实现块级作用域链（rule/mixin/@if/@for 各自独立、嵌套遮蔽）。
- 已支持 `!default` / `!global` 旗标（含重复旗标）。
- 已修复规则块结尾无分号声明的解析（`c { d: $a }`）。

### 3. 多文件 / 模块系统（API 已支持 @import，579 用例待 harness）
已实现：`@import "path"` 内联（注入 reader 递归解析、去循环依赖）、`compile_many(inputs, read)`
（File/Source 混用输入，逐个编译拼接）、根包 `compile_many` 便利入口、`Input::File`。
待办：sass-spec 那 579 个多文件用例需 harness 工程（materialize partial + 相对路径解析 +
dart-sass `loadPaths` + CLI 文件读取）才能真正跑差分；`@use`/`@forward` 尚未支持。

### 4. 控制流 / mixin（directives 79/776）
已支持：`@if/@else if/@else`（比较/逻辑条件）、`@while`、`@for`、`@each`（多变量
解构 + 选择器/值插值）、`@content`、mixin 参数默认值与 `...` 可变参数、
`@warn/@debug/@error`（忽略消息，旁随内容正常输出）。
仍缺：条件里的嵌套比较优先级完备、数学/颜色内置函数、`@return`。另有 579 个多文件 `@import` 用例无法单文件编译（见 #3）。

### 5. LESS 独立引擎（对齐 less.js）

LESS 走**独立引擎**（不复用 SCSS）：变量 lazy 作用域（最后定义优先、可用后定义）、
嵌套 `&`、类 mixin（`.name()` 定义/调用/分离/参数默认值/`;` 分隔/类混入）、基础运算、
`@media` 透传、`@import` 内联、**同名同值重复声明去重**（保留最后一次）。

- `test/less_cases` 11/11 全一致；随机构建基准（`example/perf/bench.mjs`）三格式均
  200/200 一致（less 与 less.js 对齐，含深嵌套 + 重复属性）。
- 仍缺：mixin 守卫 `when`、`@arguments`、更深的 lazy 作用域（属 less 语义深水区）。

## 结论

子集在「变量（含作用域/!global/!default）/ 嵌套 / 无参 mixin / 简单 @if / 数字加减」上已与
dart-sass 对齐（自写 24/24，variables 14/14）；LESS 在独立引擎下与 less.js 对齐
（less_cases 11/11，随机基准三格式 200/200）。完整 SCSS 语义（运算、作用域、模块、控制流细节）
需要分阶段推进，本报告给出优先级参考。
