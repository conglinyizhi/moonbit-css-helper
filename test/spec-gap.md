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
| test/cases（自写 8） | 8 | 8 | 0 | 0 | 0 |
| spec/variables | 14 | 11 | 3 | 0 | 0 |
| spec/operators | 30 | 0 | 29 | 0 | 1 |
| spec/directives | 776 | 70 | 127 | 0 | 579 |

`dart-sass 无法编译` 多为 sass-spec 的多文件 `@import` 用例（单文件 `compileString` 缺依赖），
不代表 moonbit 问题，属跳过项。

## 缺口分类（后续 roadmap）

### 1. 运算 / 词法完整语义（operators 0/30，最大缺口）
- **连字符标识符**：`c-d` 应作为单个标识符紧凑输出，我们 tokenizer 常把 `-` 拆开导致 `c - d`。
- **`-`/`+` 的空格语义**：dart-sass 按前后空格决定是减法还是标识符/字符串连接，我们简单折叠、误伤。
- **单位运算**（`px + px`、乘除、`%`）、`calc()` 透传、`infinity/NaN` 等边界。
- 完整对齐 SCSS 运算是深水区，需按 dart-sass 算术语义逐块补。

### 2. 变量作用域与指令（variables 3 个 diff）
- `!default` / `!global` 声明不支持。
- 块级（rule/mixin）局部作用域遮蔽：当前实现用单一全局环境，局部变量会泄漏/遮蔽错误。

### 3. 多文件 / 模块系统（directives 579 跳过）
- `@import` / `@use` / `@forward` 不支持 —— sass-spec 大量用例因此无法单文件编译。

### 4. 控制流 / mixin 细节（directives 127 个不一致）
- `@each`、`@while`、`@for` 的步长/多值、`@content`、带参数 mixin 的默认值等未覆盖。
- `@else if`、条件里的比较运算符（`==`/`<`/`>`）求值未实现。

## 结论

子集在「变量 / 嵌套 / 无参 mixin / 简单 @if / 数字加减」上已与 dart-sass 对齐（自写 case 全绿，
variables 11/14）。完整 SCSS 语义（运算、作用域、模块、控制流细节）需要分阶段推进，
本报告给出优先级参考。
