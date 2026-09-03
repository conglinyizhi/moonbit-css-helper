///| 条件/运算表达式求值（用于 @if/@else if/@while 条件）
///
/// 递归下降解析：or/and/not、比较（== != < > <= >=）、
/// 算术（+ - * / %）、括号、变量、数字、布尔、字符串。
/// 返回 `(值, 消费到下一 token 的下标)`。

priv enum CondVal {
  NumV(Int)
  BoolV(Bool)
  StrV(String)
  NilV
}

///| 求值整个表达式（条件用），返回 CondVal
fn e_expr(toks : Array[String], env : Env) -> CondVal {
  let (v, _) = e_or(toks, 0, env)
  v
}

///|
fn e_or(toks : Array[String], pos : Int, env : Env) -> (CondVal, Int) {
  let (c0, i0) = e_and(toks, pos, env)
  let mut cur = c0
  let mut i = i0
  while i < toks.length() && toks[i] == "or" {
    let (rhs, np) = e_and(toks, i + 1, env)
    cur = v_or(cur, rhs)
    i = np
  }
  (cur, i)
}

///|
fn e_and(toks : Array[String], pos : Int, env : Env) -> (CondVal, Int) {
  let (c0, i0) = e_cmp(toks, pos, env)
  let mut cur = c0
  let mut i = i0
  while i < toks.length() && toks[i] == "and" {
    let (rhs, np) = e_cmp(toks, i + 1, env)
    cur = v_and(cur, rhs)
    i = np
  }
  (cur, i)
}

///|
fn e_cmp(toks : Array[String], pos : Int, env : Env) -> (CondVal, Int) {
  let (l0, i0) = e_add(toks, pos, env)
  let mut lhs = l0
  let mut i = i0
  while i < toks.length() && is_cmp(toks[i]) {
    let op = toks[i]
    let (rhs, np) = e_add(toks, i + 1, env)
    lhs = v_cmp(op, lhs, rhs)
    i = np
  }
  (lhs, i)
}

///|
fn e_add(toks : Array[String], pos : Int, env : Env) -> (CondVal, Int) {
  let (c0, i0) = e_mul(toks, pos, env)
  let mut cur = c0
  let mut i = i0
  while i < toks.length() && (toks[i] == "+" || toks[i] == "-") {
    let op = toks[i]
    let (rhs, np) = e_mul(toks, i + 1, env)
    cur = v_arith(op, cur, rhs)
    i = np
  }
  (cur, i)
}

///|
fn e_mul(toks : Array[String], pos : Int, env : Env) -> (CondVal, Int) {
  let (c0, i0) = e_unary(toks, pos, env)
  let mut cur = c0
  let mut i = i0
  while i < toks.length() && (toks[i] == "*" || toks[i] == "/" || toks[i] == "%") {
    let op = toks[i]
    let (rhs, np) = e_unary(toks, i + 1, env)
    cur = v_arith(op, cur, rhs)
    i = np
  }
  (cur, i)
}

///| 一元：not / 负号 / primary
fn e_unary(toks : Array[String], pos : Int, env : Env) -> (CondVal, Int) {
  if pos < toks.length() && toks[pos] == "not" {
    let (v, i) = e_unary(toks, pos + 1, env)
    return (v_not(v), i)
  }
  if pos < toks.length() && (toks[pos] == "-" || toks[pos] == "+") {
    let (v, i) = e_unary(toks, pos + 1, env)
    let neg = toks[pos] == "-"
    return (v_neg(v, neg), i)
  }
  e_primary(toks, pos, env)
}

///| primary：数字 / 变量 / 布尔 / 字符串 / 括号
fn e_primary(toks : Array[String], pos : Int, env : Env) -> (CondVal, Int) {
  if pos >= toks.length() {
    return (StrV(""), pos)
  }
  let t = toks[pos]
  if t == "(" {
    let (v, i) = e_expr_at(toks, pos + 1, env)
    // 跳过配对的 `)`
    let mut j = i
    if j < toks.length() && toks[j] == ")" {
      j += 1
    }
    return (v, j)
  }
  if t == "true" {
    return (BoolV(true), pos + 1)
  }
  if t == "false" {
    return (BoolV(false), pos + 1)
  }
  // 变量：解析值递归求值
  if t.length() > 0 && t[0] == '$' {
    match Env::get_var(env, t) {
      Some(v) => {
        let inner = resolve(v, env)
        return e_expr_at(tokenize_str(inner), 0, env)
      }
      None => return (NilV, pos + 1)
    }
  }
  // 数字：去掉单位取整
  if is_num_literal(t) {
    return (NumV(to_int(t)), pos + 1)
  }
  // 字符串（含引号）
  (StrV(tri_quotes(t)), pos + 1)
}

///| 在给定位置求值表达式（跳过已匹配的括号起始）
fn e_expr_at(toks : Array[String], pos : Int, env : Env) -> (CondVal, Int) {
  e_or(toks, pos, env)
}

///| 字符串内容去引号
fn tri_quotes(s : String) -> String {
  let t = s.trim().to_owned()
  if t.length() >= 2 && ((t[0] == '"' && t[t.length() - 1] == '"') || (t[0] == '\'' && t[t.length() - 1] == '\'')) {
    t[1:t.length() - 1].to_owned()
  } else {
    t
  }
}

///| 是否为数字字面量
fn is_num_literal(s : String) -> Bool {
  let t = s.trim()
  if t.length() == 0 {
    return false
  }
  let mut i = 0
  if t[0] == '-' || t[0] == '+' {
    i = 1
  }
  if i >= t.length() {
    return false
  }
  while i < t.length() {
    let c = t[i]
    if !((c >= '0' && c <= '9') || c == '.') {
      break
    }
    i += 1
  }
  i > 0
}

// ---- 值运算 ----

fn v_or(a : CondVal, b : CondVal) -> CondVal {
  if v_bool(a) { BoolV(true) } else { BoolV(v_bool(b)) }
}

fn v_and(a : CondVal, b : CondVal) -> CondVal {
  if !v_bool(a) { BoolV(false) } else { BoolV(v_bool(b)) }
}

fn v_not(a : CondVal) -> CondVal {
  BoolV(if v_bool(a) { false } else { true })
}

fn v_neg(a : CondVal, neg : Bool) -> CondVal {
  match a {
    NumV(n) => NumV(if neg { -n } else { n })
    other => other
  }
}

fn v_cmp(op : String, a : CondVal, b : CondVal) -> CondVal {
  match (a, b) {
    (NumV(x), NumV(y)) => {
      let r = if op == "==" { x == y } else if op == "!=" { x != y } else if op == "<" { x < y } else if op == ">" { x > y } else if op == "<=" { x <= y } else { x >= y }
      BoolV(r)
    }
    (BoolV(x), BoolV(y)) => {
      BoolV(if op == "==" { x == y } else if op == "!=" { x != y } else { false })
    }
    _ => BoolV(false)
  }
}

fn v_arith(op : String, a : CondVal, b : CondVal) -> CondVal {
  match (a, b) {
    (NumV(x), NumV(y)) => {
      let r = if op == "+" { x + y } else if op == "-" { x - y } else if op == "*" { x * y } else if op == "/" {
        if y == 0 { 0 } else { x / y }
      } else {
        // %
        if y == 0 { 0 } else { x % y }
      }
      NumV(r)
    }
    _ => BoolV(false)
  }
}

///| 取布尔真值判断
fn v_bool(v : CondVal) -> Bool {
  match v {
    BoolV(b) => b
    NumV(n) => n != 0
    StrV(s) => s.length() > 0
    NilV => false
  }
}

fn is_cmp(t : String) -> Bool {
  t == "==" || t == "!=" || t == "<" || t == ">" || t == "<=" || t == ">="
}

///| 把字符串切成 token（用于变量值再求值）
fn tokenize_str(s : String) -> Array[String] {
  tokenize(s)
}
