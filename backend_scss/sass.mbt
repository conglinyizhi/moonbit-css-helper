///| sass 缩进语法识别
///
/// sass（缩进语法，`.sass`）用缩进代替花括号、换行代替分号。区分它和
/// scss：scss 一定含 `{`/`}` 块结构；sass 无花括号且存在缩进行。
/// 这里先**识别并明确报错**，避免把缩进语法当 scss 静默解析成空。

///| 判断源码是否为 sass 缩进语法（无花括号 + 有缩进行）
pub fn is_sass_indent(source : String) -> Bool {
  if source.contains("{") || source.contains("}") {
    return false
  }
  // 多行且至少一行以空白开头（缩进）
  let lines = source.split("\n")
  let mut has_indent = false
  for line in lines {
    if line.length() > 0 && (line[0] == ' ' || line[0] == '\t') {
      has_indent = true
      break
    }
  }
  has_indent
}
