///| 支持的 CSS 预处理格式
///
/// 分发给后端引擎的格式标签。
pub(all) enum Format {
  Scss
  Less
  Css
} derive(Debug, Eq)

///| 启发式自动识别源码格式
///
/// 优先判 SCSS（含 `$` 变量或 Sass 控制指令），其次判 LESS
/// （`@name :` 变量定义），否则当作普通 CSS。
pub fn Format::detect(source : String) -> Format {
  if Format::looks_scss(source) {
    return Scss
  }
  if Format::looks_less(source) {
    return Less
  }
  Css
}

///|
fn Format::looks_scss(source : String) -> Bool {
  if source.contains("$") {
    return true
  }
  let controls = [
    "@mixin",
    "@include",
    "@each",
    "@for",
    "@extend",
    "@function",
    "@use",
    "@forward",
    "@while",
    "@at-root",
    "@if",
    "@else",
    "@return",
    "@debug",
    "@warn",
    "@error",
    "@content",
  ]
  for k in controls {
    if source.contains(k) {
      return true
    }
  }
  false
}

///| 判断是否存在 LESS 变量定义（`@name : expr`）
fn Format::looks_less(source : String) -> Bool {
  let n = source.length()
  let mut i = 0
  while i < n {
    if source[i] == '@' {
      if is_less_variable_at(source, i) {
        return true
      }
    }
    i += 1
  }
  false
}

///| 判断 `source[i]`（为 `@`）处是否为 LESS 变量定义
fn is_less_variable_at(source : String, i : Int) -> Bool {
  let n = source.length()
  let mut j = i + 1
  if j >= n || !is_ident_start(source[j]) {
    return false
  }
  while j < n && is_ident_char(source[j]) {
    j += 1
  }
  let mut k = j
  while k < n && source[k] == ' ' {
    k += 1
  }
  k < n && source[k] == ':'
}

///|
fn is_ident_start(u : UInt16) -> Bool {
  (u >= 'A' && u <= 'Z') || (u >= 'a' && u <= 'z') || u == '_' || u == '-'
}

///|
fn is_ident_char(u : UInt16) -> Bool {
  is_ident_start(u) || (u >= '0' && u <= '9')
}

///|
pub impl Show for Format with fn to_string(self) {
  match self {
    Scss => "scss"
    Less => "less"
    Css => "css"
  }
}
