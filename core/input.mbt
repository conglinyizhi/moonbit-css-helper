///| 编译入口的输入形态
///
/// 传给 `compile_input` 的输入，决定格式如何解析。
pub(all) enum Input {
  /// 源码正文，格式走自动识别
  Source(String)
  /// 源码正文 + 显式指定格式
  SourceWithFormat(String, Format)
  /// 文件路径（用注入 reader 读取）
  File(String)
} derive(Debug, Eq)
