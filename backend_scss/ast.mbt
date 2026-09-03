///| SCSS 子集的中间表示
///
/// 一个自上而下、面向样式的 AST。声明与规则集共用 `Node`，
/// 变量、mixin、控制流都作为一等节点，便于求值阶段展开。
pub(all) enum Node {
  /// 规则集：选择器数组 + 规则体（内含声明或嵌套规则）
  RuleSet(Array[String], Array[Node])
  /// 声明：属性名 + 值 token 序列
  Decl(String, Array[String])
  /// 变量定义：`$name : value`
  VarDef(String, Array[String])
  /// mixin 定义
  MixinDef(String, Array[String], Array[Node])
  /// mixin 调用
  MixinCall(String, Array[String])
  /// `@if` 条件分支（else_body 可为空数组）
  If(Array[String], Array[Node], Array[Node])
  /// `@for $i from A to B` 循环
  For(String, Array[String], Array[String], Array[Node])
  /// `@each $x in list` 列表迭代
  Each(String, Array[String], Array[Node])
  /// `@while cond` 循环
  While(Array[String], Array[Node])
  /// 透传的 at-rule（如 @media / @supports）
  AtRule(String, Array[String], Array[Node])
  /// 无法解析时原样透传的文本
  Raw(String)
} derive(Debug)
