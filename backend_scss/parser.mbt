///| SCSS 解析器：token 序列 → AST
///
/// 递归下降，自顶向下解析一个样式表。声明、规则集、变量、mixin、
/// 控制流都作为 `Node` 产出。
priv struct Parser {
  toks : Array[String]
  mut pos : Int
}

///| 解析整个样式表
pub fn parse_sheet(toks : Array[String]) -> Array[Node] {
  let p = Parser::new(toks)
  p.parse_block()
}

///|
fn Parser::new(toks : Array[String]) -> Parser {
  { toks, pos: 0 }
}

///| 当前 token（无则 None）
fn Parser::peek(self : Parser) -> String? {
  if self.pos < self.toks.length() {
    Some(self.toks[self.pos])
  } else {
    None
  }
}

///| 取走当前 token
fn Parser::advance(self : Parser) -> String {
  let t = self.toks[self.pos]
  self.pos += 1
  t
}

///| 解析到块尾（`}` 或 EOF，不消费 `}`）
fn Parser::parse_block(self : Parser) -> Array[Node] {
  let nodes : Array[Node] = []
  while true {
    match self.peek() {
      None => break
      Some("}") => break
      Some(_) => {
        match self.parse_one() {
          Some(node) => nodes.push(node)
          None => break
        }
      }
    }
  }
  nodes
}

///| 解析一个节点
fn Parser::parse_one(self : Parser) -> Node? {
  match self.peek() {
    None => None
    Some("}") => None
    Some(first) => {
      if first.length() > 0 && first[0] == '$' {
        Some(self.parse_var())
      } else if first.length() > 0 && first[0] == '@' {
        self.parse_at()
      } else {
        self.parse_decl_or_rule()
      }
    }
  }
}

///| 变量定义 `$name : value ;`
fn Parser::parse_var(self : Parser) -> Node {
  let name = self.advance()
  self.consume(":")
  let value = self.read_value()
  VarDef(name, value)
}

///| at-rule：mixins / 控制流 / 透传
fn Parser::parse_at(self : Parser) -> Node? {
  let name = self.advance()
  if name == "@mixin" {
    let mixin_name = self.advance()
    let params = self.read_params()
    self.consume("{")
    let body = self.parse_block()
    self.consume("}")
    return Some(MixinDef(mixin_name, params, body))
  }
  if name == "@include" {
    let inc_name = self.advance()
    let args = self.read_value()
    return Some(MixinCall(inc_name, args))
  }
  if name == "@if" {
    let cond = self.read_until_brace()
    let body = self.parse_block()
    self.consume("}")
    let else_body = if self.peek() is Some("@else") {
      ignore(self.advance())
      let eb = self.parse_block()
      self.consume("}")
      eb
    } else {
      []
    }
    return Some(If(cond, body, else_body))
  }
  if name == "@for" {
    let var_name = self.advance()
    self.consume("from")
    let from = [self.advance()]
    self.consume("to")
    let to = self.read_until_brace()
    let body = self.parse_block()
    self.consume("}")
    return Some(For(var_name, from, to, body))
  }
  if name == "@else" {
    // 独立 @else 通常紧随 @if，这里按空块处理以免死循环
    return None
  }
  // 其余 at-rule（@media / @supports 等）透传
  let prelude = self.read_until_brace()
  let body = self.parse_block()
  self.consume("}")
  return Some(AtRule(name, prelude, body))
}

///| mixin 参数：`(a, b)` 或空
fn Parser::read_params(self : Parser) -> Array[String] {
  if self.peek() is Some("(") {
    self.pos += 1
    let ps : Array[String] = []
    while true {
      match self.peek() {
        Some(")") => {
          self.pos += 1
          break
        }
        Some(",") => {
          self.pos += 1
        }
        None => break
        Some(_) => {
          ps.push(self.advance())
        }
      }
    }
    return ps
  }
  []
}

///| 声明或规则集
fn Parser::parse_decl_or_rule(self : Parser) -> Node? {
  let head : Array[String] = []
  while true {
    match self.peek() {
      None => break
      Some("{") => {
        self.pos += 1
        let selectors = split_selectors(head)
        let body = self.parse_block()
        self.consume("}")
        return Some(RuleSet(selectors, body))
      }
      Some(";") => {
        self.pos += 1
        return parse_decl(head)
      }
      Some("}") => break
      Some(_) => {
        head.push(self.advance())
      }
    }
  }
  // 块结尾（} 或 EOF）：若形如 `name: value` 则按声明处理（SCSS 允许末尾声明省略分号）
  if has_colon(head) {
    return parse_decl(head)
  }
  Some(Raw(head.join(" ")))
}

///| head 中是否含冒号
fn has_colon(head : Array[String]) -> Bool {
  for t in head {
    if t == ":" {
      return true
    }
  }
  false
}

///| 从 `name : value` 头解析声明
fn parse_decl(head : Array[String]) -> Node? {
  let mut colon = -1
  let mut i = 0
  while i < head.length() {
    if head[i] == ":" {
      colon = i
      break
    }
    i += 1
  }
  if colon < 0 {
    // 没有冒号，无法当作声明；透传
    return Some(Raw(head.join(" ")))
  }
  let name = head[0:colon].join("")
  let value = head[colon + 1:].to_array()
  Some(Decl(name, value))
}

///| 读取值，遇到 `;` 或 `}` 停止（`;` 被消费）
fn Parser::read_value(self : Parser) -> Array[String] {
  let v : Array[String] = []
  while true {
    match self.peek() {
      None => break
      Some(";") => {
        self.pos += 1
        break
      }
      Some("}") => break
      Some(_) => {
        v.push(self.advance())
      }
    }
  }
  v
}

///| 读取到 `{` 为止（`{` 被消费）
fn Parser::read_until_brace(self : Parser) -> Array[String] {
  let v : Array[String] = []
  while true {
    match self.peek() {
      Some("{") => {
        self.pos += 1
        break
      }
      None => break
      Some(_) => {
        v.push(self.advance())
      }
    }
  }
  v
}

///| 消费一个期望 token（若匹配则跳过；不匹配也容错前进）
fn Parser::consume(self : Parser, tok : String) -> Unit {
  match self.peek() {
    Some(t) if t == tok => {
      self.pos += 1
    }
    _ => ()
  }
}

///| 把 token 数组按 `,` 拆成一组选择器
fn split_selectors(tokens : Array[String]) -> Array[String] {
  let groups : Array[Array[String]] = []
  let mut cur : Array[String] = []
  for t in tokens {
    if t == "," {
      groups.push(cur)
      let fresh : Array[String] = []
      cur = fresh
    } else {
      cur.push(t)
    }
  }
  groups.push(cur)
  let out : Array[String] = []
  for g in groups {
    let s = join_selector(g)
    if s.length() > 0 {
      out.push(s)
    }
  }
  out
}

///| 把选择器 token join 成字符串，连接符前不加空格
fn join_selector(tokens : Array[String]) -> String {
  let sb = StringBuilder()
  let mut prev = ""
  let mut first = true
  for t in tokens {
    if !first {
      let prev_tail = if prev.length() > 0 { prev[prev.length() - 1] } else { 0 }
      let no_space = is_joiner(t) || is_joiner_char(prev_tail)
      if !no_space {
        sb.write_string(" ")
      }
    }
    sb.write_string(t)
    prev = t
    first = false
  }
  sb.to_string()
}

///| 是否为会紧贴下一个 token 的选择器连接符字符
fn is_joiner_char(u : UInt16) -> Bool {
  u == '.' || u == ':' || u == '#' || u == '>' || u == '+' || u == '~' ||
    u == '-' || u == '&' || u == '@' || u == '%'
}

///| 是否为选择器连接符（前不加空格）
fn is_joiner(t : String) -> Bool {
  t == ":" || t == "." || t == "#" || t == "@" || t == "%" || t == "&" ||
    t == ">" || t == "+" || t == "~" || t == "[" || t == "]" ||
    t.starts_with("#{")
}
