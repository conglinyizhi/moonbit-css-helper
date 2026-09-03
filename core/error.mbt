///| 统一的编译错误
///
/// 把各个后端引擎的错误统一成一种 `RabbitaError`，让调用方只需处理它。
pub(all) suberror RabbitaError {
  /// 没有任何引擎负责该格式
  NoEngine(Format)
  /// 引擎在编译过程中失败
  EngineFailed(engine~ : String, message~ : String)
  /// 语法尚未支持（如 sass 缩进语法）
  UnsupportedSyntax(String)
} derive(Debug)

///|
pub impl Show for RabbitaError with fn to_string(self) {
  match self {
    NoEngine(fmt) => "no engine for format \{fmt}"
    EngineFailed(engine~, message~) => "\{engine} failed: \{message}"
    UnsupportedSyntax(feature) => "unsupported syntax: \{feature}"
  }
}
