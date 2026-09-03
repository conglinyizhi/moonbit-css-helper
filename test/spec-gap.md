# 差分测试缺口报告（dart-sass 作 oracle）

用 `scripts/diff.mjs` 对 moonbit `scss_engine` 产物与 dart-sass（`sass@1.103`）做差分对比：
同一份 SCSS 输入，两边编译，压缩空白后比较。用例来自自写 `test/cases/` 与上游
`sass-spec`（`spec/variables`、`spec/operators`、`spec/directives`、`spec/css`）。

用法：
```bash
node scripts/diff.mjs              # 跑 test/cases
node scripts/diff.mjs test/sass-spec/spec/variables
```

## 当前通过率（2026-09-03）

| 用例集 | 用例数 | 一致 | 不一致 | moonbit 报错 | sass 无法编译 |
| --- | --- | --- | --- | --- | --- |
| test/cases（自写 11） | 11 | 11 | 0 | 0 | 0 |
| spec/variables | 14 | 14 | 0 | 0 | 0 |
| spec/operators | 30 | 3 | 26 | 0 | 1 |
| spec/directives | 776 | 70 | 127 | 0 | 579 |

`dart-sass 无法编译` 多为 sass-spec 的多文件 `@import` 用例（单文件 `compileString` 缺依赖），
不代表 moonbit 问题，属跳过项。

## 缺口分类（后续 roadmap）

### 1. 运算 / 词法语义（operators 3/30，剩余为 value 系统深水区）
已完成：值序列化改为运算符与相邻 token 紧密拼接（`c - d` → `c-d`、负值 `-1px`、`font: 12px/1.5`）。
剩余 26 个 diff 属**完整 SCSS value/运算模型**（属全新求值器工程，子集不建议挤牙膏）：
- **括号吸收**：`c-(d)` 应运算吸收为 `c-d`，需真正表达式求值。
- **标识符字符串连接**：`c + d` → `cd`（`+` 的非数字连接语义）。
- **单位运算 / `calc()` / `infinity`/`NaN`**：需 Number 带单位、Color、CalcValue 等值类型。

### 2. 变量作用域与指令（已修，variables 14/14）
- 已实现块级作用域链（rule/mixin/@if/@for 各自独立、嵌套遮蔽）。
- 已支持 `!default` / `!global` 旗标（含重复旗标）。
- 已修复规则块结尾无分号声明的解析（`c { d: $a }`）。

### 3. 多文件 / 模块系统（directives 579 跳过）
- `@import` / `@use` / `@forward` 不支持 —— sass-spec 大量用例因此无法单文件编译。

### 4. 控制流 / mixin 细节（directives 126 个不一致）
已支持：基本 `@each $x in a,b,c` 列表迭代（含选择器/值插值，自带 each.scss 验证）。
仍缺：`@each` 多变量解构、`@while`、`@for` 步长/多值、`@content`、带参数 mixin 默认值、
`@return`、`@error/@warn/@debug`、条件里的比较运算符（`==`/`<`/`>`）。
另有 579 个 sass-spec 多文件 `@import` 用例无法单文件编译（见 #3）。

## 结论

子集在「变量（含作用域/!global/!default）/ 嵌套 / 无参 mixin / 简单 @if / 数字加减」上已与
dart-sass 对齐（自写 11/11，variables 14/14）。完整 SCSS 语义（运算、作用域、模块、控制流细节）需要分阶段推进，
本报告给出优先级参考。
