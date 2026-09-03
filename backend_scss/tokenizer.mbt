///| SCSS 词法：把源码切成 token 序列
///
/// token 以裸字符串表示（`$var`、`@mixin`、`1px`、`red`、`{`、`:`……），
/// 便于上层 parser 直接用字符串字面匹配。注释与空白被丢弃。
pub fn tokenize(src : String) -> Array[String] {
  let toks : Array[String] = []
  let n = src.length()
  let mut i = 0
  while i < n {
    let c = src[i]
    if is_ws(c) {
      i += 1
      continue
    }
    // 注释
    if c == '/' && i + 1 < n {
      if src[i + 1] == '/' {
        while i < n && src[i] != '\n' {
          i += 1
        }
        continue
      }
      if src[i + 1] == '*' {
        i += 2
        while i + 1 < n && !(src[i] == '*' && src[i + 1] == '/') {
          i += 1
        }
        i += 2
        continue
      }
    }
    // 引号字符串（保留引号）
    if c == '"' || c == '\'' {
      let q = c
      let mut j = i + 1
      while j < n && src[j] != q {
        j += 1
      }
      if j < n {
        j += 1
      }
      toks.push(src[i:j].to_owned())
      i = j
      continue
    }
    // 数字（含 .5、-2 等）
    if is_digit(c) || (c == '.' && i + 1 < n && is_digit(src[i + 1])) {
      let mut j = i
      while j < n && (is_digit(src[j]) || src[j] == '.' || src[j] == '%' || src[j] == 'e' || src[j] == 'E') {
        j += 1
      }
      // 紧跟的字母单位（px / em / rem / vh / deg 等）并入数字 token
      while j < n && is_alpha(src[j]) {
        j += 1
      }
      toks.push(src[i:j].to_owned())
      i = j
      continue
    }
    // 变量 `$name` 或 at-rule `@name`
    if c == '$' || c == '@' {
      let mut j = i + 1
      while j < n && is_ident_char(src[j]) {
        j += 1
      }
      toks.push(src[i:j].to_owned())
      i = j
      continue
    }
    // 多字符运算符 `==` `!=` `>=` `<=`
    if i + 1 < n && ((c == '=' && (src[i + 1] == '=' || src[i + 1] == '>')) ||
      (c == '!' && src[i + 1] == '=') || (c == '>' && src[i + 1] == '=') ||
      (c == '<' && src[i + 1] == '=')) {
      toks.push(src[i:i + 2].to_owned())
      i += 2
      continue
    }
    // `!word`（!default / !global / !important 等）作为一个整体 token
    if c == '!' {
      let mut j = i + 1
      while j < n && is_ident_char(src[j]) {
        j += 1
      }
      toks.push(src[i:j].to_owned())
      i = j
      continue
    }
    // 插值 `#{...}` 作为一个整体 token
    if c == '#' && i + 1 < n && src[i + 1] == '{' {
      let mut j = i + 2
      while j < n && src[j] != '}' {
        j += 1
      }
      if j < n {
        j += 1
      }
      toks.push(src[i:j].to_owned())
      i = j
      continue
    }
    // 标识符 / 选择器字符
    if is_ident_start(c) || c == '#' || c == '.' || c == '%' || c == '&' {
      let mut j = i
      while j < n && (is_ident_char(src[j]) || src[j] == '-' || src[j] == '.' || src[j] == '%' || src[j] == '&' || (src[j] == '#' && (j + 1 >= n || src[j + 1] != '{'))) {
        j += 1
      }
      toks.push(src[i:j].to_owned())
      i = j
      continue
    }
    // 单字符符号：; : , { } ( ) + - * / 等
    toks.push(src[i:i + 1].to_owned())
    i += 1
  }
  toks
}

///| 是否为空白字符
fn is_ws(u : UInt16) -> Bool {
  u == 0x20 || u == 0x09 || u == 0x0A || u == 0x0D || u == 0x0C
}

///| 是否为十进制数字
fn is_digit(u : UInt16) -> Bool {
  u >= '0' && u <= '9'
}

///| 标识符起始字符
fn is_ident_start(u : UInt16) -> Bool {
  (u >= 'A' && u <= 'Z') || (u >= 'a' && u <= 'z') || u == '_'
}

///| 标识符字符
fn is_ident_char(u : UInt16) -> Bool {
  is_ident_start(u) || is_digit(u) || u == '-'
}

///| 字母字符
fn is_alpha(u : UInt16) -> Bool {
  (u >= 'A' && u <= 'Z') || (u >= 'a' && u <= 'z')
}
