///| SCSS 求值：AST → CSS 字符串
///
/// 维护作用域链与 mixin 表，实现变量替换（含块级遮蔽）、规则嵌套、
/// mixin 调用、`@if/@for` 控制流、`!default`/`!global` 变量旗标与 `@media` 透传。
priv struct Mixin {
  params : Array[String]
  body : Array[Node]
}

///| 作用域链：`scopes[0]` 为全局，越靠后越内层
priv struct Env {
  scopes : Array[Map[String, Array[String]]]
  mixins : Map[String, Mixin]
}

///| 编译样式表为 CSS
pub fn to_css(nodes : Array[Node]) -> String {
  let env = Env::new()
  let sb = StringBuilder()
  gen(nodes, [], env, sb)
  sb.to_string()
}

///|
fn Env::new() -> Env {
  { scopes: [Map([])], mixins: Map([]) }
}

///|
fn Env::push_scope(self : Env) -> Unit {
  self.scopes.push(Map([]))
}

///|
fn Env::pop_scope(self : Env) -> Unit {
  if self.scopes.length() > 1 {
    ignore(self.scopes.pop())
  }
}

///| 从内向外查找变量
fn Env::get_var(self : Env, name : String) -> Array[String]? {
  let mut i = self.scopes.length() - 1
  while i >= 0 {
    let found = self.scopes[i].get(name)
    if found is Some(_) {
      return found
    }
    i -= 1
  }
  None
}

///| 写入变量到作用域（默认当前层，`is_global` 则全局层）
fn Env::set_var(self : Env, name : String, value : Array[String], is_global : Bool) -> Unit {
  if is_global {
    self.scopes[0][name] = value
  } else {
    self.scopes[self.scopes.length() - 1][name] = value
  }
}

///| 定义变量（`is_default` 时仅在未定义时设置）
fn Env::define_var(
  self : Env,
  name : String,
  value : Array[String],
  is_default : Bool,
  is_global : Bool,
) -> Unit {
  if is_default && self.get_var(name) is Some(_) {
    return
  }
  self.set_var(name, value, is_global)
}

///| 在作用域内运行 `f`
fn with_scope(env : Env, f : () -> Unit) -> Unit {
  Env::push_scope(env)
  f()
  Env::pop_scope(env)
}

///| 生成一次 mixin 调用（绑定实参）
fn gen_mixin_call(
  name : String,
  args : Array[String],
  content : Array[Node],
  parent : Array[String],
  env : Env,
  sb : StringBuilder,
) -> Unit {
  match env.mixins.get(name) {
    Some(m) => with_scope(env, () => {
      bind_params(m, args, env)
      gen(replace_content(m.body, content), parent, env, sb)
    })
    None => ()
  }
}

///| 把实参按形参顺序绑定到当前作用域
fn bind_params(m : Mixin, args : Array[String], env : Env) -> Unit {
  let mut i = 0
  for pstr in m.params {
    if pstr.contains("...") {
      let v = pstr.replace(old="...", new="").trim().to_owned()
      let rest = args[i:].to_array()
      Env::set_var(env, v, [rest.join(", ")], false)
    } else if pstr.contains(":") {
      let colon = str_find_colon(pstr)
      let name = pstr[0:colon].trim().to_owned()
      let default = pstr[colon + 1:].trim().to_owned()
      if i < args.length() {
        Env::set_var(env, name, [args[i]], false)
        i += 1
      } else {
        Env::set_var(env, name, [default], false)
      }
    } else {
      let name = pstr.trim().to_owned()
      if i < args.length() {
        Env::set_var(env, name, [args[i]], false)
        i += 1
      }
    }
  }
}

///| 找第一个分号下标（找不到返回长度）
fn str_find_colon(s : String) -> Int {
  let mut i = 0
  while i < s.length() {
    if s[i] == ':' {
      return i
    }
    i += 1
  }
  s.length()
}

///| 从值 token 里解析 `!default` / `!global`，返回 (清洗后的值, default, global)
fn parse_flags(value : Array[String]) -> (Array[String], Bool, Bool) {
  let cleaned : Array[String] = []
  let mut is_default = false
  let mut is_global = false
  for t in value {
    if t == "!default" {
      is_default = true
    } else if t == "!global" {
      is_global = true
    } else {
      cleaned.push(t)
    }
  }
  (cleaned, is_default, is_global)
}

///| 处理一个变量定义节点
fn apply_vardef(env : Env, name : String, value : Array[String]) -> Unit {
  let (cleaned, is_default, is_global) = parse_flags(value)
  let resolved = resolve(cleaned, env)
  Env::define_var(env, name, [resolved], is_default, is_global)
}

///| 生成：按顶层节点顺序输出
fn gen(nodes : Array[Node], parent : Array[String], env : Env, sb : StringBuilder) -> Unit {
  for n in nodes {
    match n {
      RuleSet(sel, body) => gen_ruleset(sel, body, parent, env, sb)
      AtRule(name, prelude, body) => emit_atrule(name, prelude, body, env, sb)
      If(cond, tb, eb) => {
        let chosen = choose_branch(cond, tb, eb, env)
        gen(chosen, parent, env, sb)
      }
      For(v, from, to, body) => {
        gen(expand_for(v, from, to, body, env), parent, env, sb)
      }
      Each(v, list, body) => {
        gen(expand_each(v, list, body, env), parent, env, sb)
      }
      While(cond, body) => gen_while(cond, body, parent, env, sb)
      MixinCall(name, args, content) => gen_mixin_call(name, args, content, parent, env, sb)
      Content => ()
      VarDef(name, value) => apply_vardef(env, name, value)
      MixinDef(name, params, body) => {
        env.mixins[name] = { params, body }
      }
      Decl(name, value) => {
        sb.write_string("  \{name}: \{resolve(value, env)};\n")
      }
      Raw(s) => {
        sb.write_string(s)
        sb.write_string("\n")
      }
    }
  }
}

///| 生成一条规则集（合并其声明，再递归嵌套）
fn gen_ruleset(
  sel : Array[String],
  body : Array[Node],
  parent : Array[String],
  env : Env,
  sb : StringBuilder,
) -> Unit {
  let full = combine(parent, sel)
  let decl_lines : Array[String] = []
  let struct_nodes : Array[Node] = []
  Env::push_scope(env)
  split_body(body, full, env, decl_lines, struct_nodes)
  if decl_lines.length() > 0 {
    sb.write_string("\{join_resolved(full, env)} {\n")
    for line in decl_lines {
      sb.write_string("  \{line}\n")
    }
    sb.write_string("}\n")
  }
  for s in struct_nodes {
    gen_struct(s, full, env, sb)
  }
  Env::pop_scope(env)
}

///| 生成单个结构节点（嵌套规则 / at-rule / 控制流 / include）
fn gen_struct(node : Node, parent : Array[String], env : Env, sb : StringBuilder) -> Unit {
  match node {
    RuleSet(sel, body) => gen_ruleset(sel, body, parent, env, sb)
    AtRule(name, prelude, body) => emit_atrule(name, prelude, body, env, sb)
    If(cond, tb, eb) => {
      let chosen = choose_branch(cond, tb, eb, env)
      with_scope(env, () => {
        gen(chosen, parent, env, sb)
      })
    }
    For(v, from, to, body) => {
      with_scope(env, () => {
        gen(expand_for(v, from, to, body, env), parent, env, sb)
      })
    }
    Each(v, list, body) => {
      with_scope(env, () => {
        gen(expand_each(v, list, body, env), parent, env, sb)
      })
    }
    While(cond, body) => gen_while(cond, body, parent, env, sb)
    MixinCall(name, args, content) => gen_mixin_call(name, args, content, parent, env, sb)
    Content => ()
    VarDef(name, value) => apply_vardef(env, name, value)
    MixinDef(name, params, body) => {
      env.mixins[name] = { params, body }
    }
    Decl(name, value) => {
      sb.write_string("  \{name}: \{resolve(value, env)};\n")
    }
    Raw(s) => {
      sb.write_string(s)
      sb.write_string("\n")
    }
  }
}

///| 输出一条 at-rule（如 @media）
fn emit_atrule(
  name : String,
  prelude : Array[String],
  body : Array[Node],
  env : Env,
  sb : StringBuilder,
) -> Unit {
  let at_name = if name.starts_with("@") { name } else { "@" + name }
  sb.write_string("\{at_name} \{join_value(prelude, env)} {\n")
  with_scope(env, () => {
    gen(body, [], env, sb)
  })
  sb.write_string("}\n")
}

///| 把一个规则集内的节点拆成「声明行」和「结构节点」
fn split_body(
  body : Array[Node],
  _full : Array[String],
  env : Env,
  decl_lines : Array[String],
  struct_nodes : Array[Node],
) -> Unit {
  for n in body {
    match n {
      Decl(name, value) => decl_lines.push("\{name}: \{resolve(value, env)};")
      VarDef(name, value) => apply_vardef(env, name, value)
      MixinDef(name, params, body2) => {
        env.mixins[name] = { params, body: body2 }
      }
      MixinCall(name, args, content) => {
        match env.mixins.get(name) {
          Some(m) => with_scope(env, () => {
            bind_params(m, args, env)
            split_body(replace_content(m.body, content), _full, env, decl_lines, struct_nodes)
          })
          None => ()
        }
      }
      If(cond, tb, eb) => {
        let chosen = choose_branch(cond, tb, eb, env)
        with_scope(env, () => {
          split_body(chosen, _full, env, decl_lines, struct_nodes)
        })
      }
      For(v, from, to, body2) => {
        let expanded = expand_for(v, from, to, body2, env)
        with_scope(env, () => {
          split_body(expanded, _full, env, decl_lines, struct_nodes)
        })
      }
      Each(v, list, body2) => {
        let expanded = expand_each(v, list, body2, env)
        with_scope(env, () => {
          split_body(expanded, _full, env, decl_lines, struct_nodes)
        })
      }
      While(cond, body2) => {
        let mut iter = 0
        while eval_truthy(cond, env) && iter < 1000 {
          iter += 1
          split_body(body2, _full, env, decl_lines, struct_nodes)
        }
      }
      other => struct_nodes.push(other)
    }
  }
}

///| 选择 @if/@else 分支
fn choose_branch(
  cond : Array[String],
  tb : Array[Node],
  eb : Array[Node],
  env : Env,
) -> Array[Node] {
  if eval_truthy(cond, env) {
    tb
  } else {
    eb
  }
}

///| 展开 @for 循环：把 `$v` 替换为每个循环值，重复 body
fn expand_for(
  v : String,
  from : Array[String],
  to : Array[String],
  body : Array[Node],
  env : Env,
) -> Array[Node] {
  let a = to_int(resolve(from, env))
  let b = to_int(resolve(to, env))
  let out : Array[Node] = []
  let mut i = a
  while i < b {
    let sub = substitute_var(body, v, i.to_string())
    for s in sub {
      out.push(s)
    }
    i += 1
  }
  out
}

///| 展开 @each：把列表按 `,` 拆成多个值，对每个值替换 `$v` 并重复 body
fn expand_each(
  v : String,
  list : Array[String],
  body : Array[Node],
  env : Env,
) -> Array[Node] {
  let out : Array[Node] = []
  for group in split_on_commas(list) {
    let val = resolve(group, env)
    for s in substitute_var(body, v, val) {
      out.push(s)
    }
  }
  out
}

///| 按逗号拆分 token 数组
///| 生成 @while 循环
fn gen_while(
  cond : Array[String],
  body : Array[Node],
  parent : Array[String],
  env : Env,
  sb : StringBuilder,
) -> Unit {
  let mut iter = 0
  while eval_truthy(cond, env) && iter < 1000 {
    iter += 1
    gen(body, parent, env, sb)
  }
}

///| 把选择器数组里的插值 `#{$var}` 求值后 join
fn join_resolved(selectors : Array[String], env : Env) -> String {
  let parts : Array[String] = []
  for s in selectors {
    parts.push(resolve_sel_interp(s, env))
  }
  parts.join(", ")
}

///| 对选择器字符串里的 `#{$var}` 插值求值
fn resolve_sel_interp(s : String, env : Env) -> String {
  let mut out = s
  let mut changed = true
  while changed {
    changed = false
    let n = out.length()
    let mut start = -1
    let mut i = 0
    while i + 1 < n {
      if out[i] == '#' && out[i + 1] == '{' {
        start = i
        break
      }
      i += 1
    }
    if start < 0 {
      break
    }
    let mut j = start + 2
    while j < n && out[j] != '}' {
      j += 1
    }
    if j >= n {
      break
    }
    let inner = out[start + 2:j].to_owned()
    if inner.length() > 0 && inner[0] == '$' {
      match Env::get_var(env, inner) {
        Some(v) => {
          let val = resolve(v, env)
          out = out.replace(old="#{" + inner + "}", new=val)
          changed = true
        }
        None => break
      }
    } else {
      break
    }
  }
  out
}

fn replace_content(body : Array[Node], content : Array[Node]) -> Array[Node] {
  let out : Array[Node] = []
  for n in body {
    match n {
      Content => {
        for cn in content {
          out.push(cn)
        }
      }
      other => out.push(replace_into(other, content))
    }
  }
  out
}

///| 递归深入嵌套块替换 @content
fn replace_into(n : Node, content : Array[Node]) -> Node {
  match n {
    RuleSet(sel, body) => RuleSet(sel, replace_content(body, content))
    If(cond, tb, eb) => If(cond, replace_content(tb, content), replace_content(eb, content))
    For(v, f, t, b) => For(v, f, t, replace_content(b, content))
    Each(v, l, b) => Each(v, l, replace_content(b, content))
    While(cond, b) => While(cond, replace_content(b, content))
    AtRule(name, prelude, b) => AtRule(name, prelude, replace_content(b, content))
    MixinCall(nm, ar, cb) => MixinCall(nm, ar, replace_content(cb, content))
    other => other
  }
}

fn split_on_commas(toks : Array[String]) -> Array[Array[String]] {
  let groups : Array[Array[String]] = []
  let mut cur : Array[String] = []
  for t in toks {
    if t == "," {
      groups.push(cur)
      let fresh : Array[String] = []
      cur = fresh
    } else {
      cur.push(t)
    }
  }
  groups.push(cur)
  groups
}

fn substitute_var(nodes : Array[Node], v : String, val : String) -> Array[Node] {
  let out : Array[Node] = []
  for n in nodes {
    out.push(subst_node(n, v, val))
  }
  out
}

fn subst_node(n : Node, v : String, val : String) -> Node {
  match n {
    Decl(name, value) => Decl(name, subst_toks(value, v, val))
    RuleSet(sel, body) => RuleSet(subst_toks(sel, v, val), substitute_var(body, v, val))
    If(cond, tb, eb) => If(
      subst_toks(cond, v, val),
      substitute_var(tb, v, val),
      substitute_var(eb, v, val),
    )
    MixinCall(name, args, content) => MixinCall(
      name,
      subst_toks(args, v, val),
      substitute_var(content, v, val),
    )
    For(v2, from, to, body) => For(
      v2,
      subst_toks(from, v, val),
      subst_toks(to, v, val),
      substitute_var(body, v, val),
    )
    Each(v2, list, body) => Each(
      v2,
      subst_toks(list, v, val),
      substitute_var(body, v, val),
    )
    While(cond, body) => While(subst_toks(cond, v, val), substitute_var(body, v, val))
    AtRule(name, prelude, body) => AtRule(
      name,
      subst_toks(prelude, v, val),
      substitute_var(body, v, val),
    )
    other => other
  }
}

fn subst_toks(toks : Array[String], v : String, val : String) -> Array[String] {
  let out : Array[String] = []
  let interp = "#{" + v + "}"
  for t in toks {
    if t == v || t == interp {
      out.push(val)
    } else if t.contains(interp) || t.contains(v) {
      let s = t.replace(old=interp, new=val)
      out.push(s.replace(old=v, new=val))
    } else {
      out.push(t)
    }
  }
  out
}

///| 计算条件真假：非空、非 false
fn eval_truthy(cond : Array[String], env : Env) -> Bool {
  v_bool(e_expr(cond, env))
}

///| 把字符串解析为整数（去掉单位）
fn to_int(s : String) -> Int {
  let mut t = s.trim()
  if t.ends_with("px") {
    t = t[0:t.length() - 2].to_owned()
  }
  let mut result = 0
  let mut neg = false
  let mut i = 0
  if t.length() > 0 && t[0] == '-' {
    neg = true
    i = 1
  }
  while i < t.length() {
    let c = t[i]
    if c >= '0' && c <= '9' {
      result = result * 10 + (c - '0').to_int()
      i += 1
    } else {
      break
    }
  }
  if neg { -result } else { result }
}

///| 变量替换 + 值拼接
fn resolve(toks : Array[String], env : Env) -> String {
  let parts : Array[String] = []
  for t in toks {
    if t.length() > 0 && t[0] == '$' {
      match Env::get_var(env, t) {
        Some(v) => parts.push(resolve(v, env))
        None => parts.push(t)
      }
    } else if t.length() > 2 && t.starts_with("#{") && t.ends_with("}") {
      let inner = t[2:t.length() - 1].to_owned()
      if inner.length() > 0 && inner[0] == '$' {
        match Env::get_var(env, inner) {
          Some(v) => parts.push(resolve(v, env))
          None => parts.push(t)
        }
      } else {
        parts.push(t)
      }
    } else {
      parts.push(t)
    }
  }
  join_value_tokens(fold_arith(parts))
}

///| 判断是否为运算符 token
fn is_op(t : String) -> Bool {
  t == "+" || t == "-" || t == "*" || t == "/" || t == "%"
}

///| 值 token 序列化：运算符及其相邻 token 紧密拼接
fn join_value_tokens(parts : Array[String]) -> String {
  let sb = StringBuilder()
  let mut prev_is_op = false
  for i, t in parts {
    if i == 0 {
      prev_is_op = is_op(t)
    } else {
      let cur_is_op = is_op(t)
      if !cur_is_op && !prev_is_op {
        sb.write_string(" ")
      }
      prev_is_op = cur_is_op
    }
    sb.write_string(t)
  }
  sb.to_string()
}

fn join_value(toks : Array[String], env : Env) -> String {
  resolve(toks, env)
}

fn combine(parent : Array[String], sel : Array[String]) -> Array[String] {
  if parent.length() == 0 {
    return sel
  }
  let out : Array[String] = []
  for ps in parent {
    for s in sel {
      out.push(join_nested(ps, s))
    }
  }
  out
}

fn join_nested(parent : String, sel : String) -> String {
  if sel.contains("&") {
    sel.replace(old="&", new=parent)
  } else {
    parent + " " + sel
  }
}

///| 对值 token 做简单的数字加减折叠（`8px + 4px` -> `12px`）
fn fold_arith(parts : Array[String]) -> Array[String] {
  let out : Array[String] = []
  let mut i = 0
  while i < parts.length() {
    if i + 2 < parts.length() && is_num_str(parts[i]) &&
      (parts[i + 1] == "+" || parts[i + 1] == "-") && is_num_str(parts[i + 2]) {
      out.push(calc_num(parts[i], parts[i + 1], parts[i + 2]))
      i += 3
    } else {
      out.push(parts[i])
      i += 1
    }
  }
  out
}

fn is_num_str(s : String) -> Bool {
  let t = s.trim()
  if t.length() == 0 {
    return false
  }
  let mut j = t.length()
  while j > 0 && is_unit_char(t[j - 1]) {
    j -= 1
  }
  if j <= 0 {
    return false
  }
  let mut k = 0
  while k < j {
    let c = t[k]
    if !(c >= '0' && c <= '9') {
      return false
    }
    k += 1
  }
  true
}

fn calc_num(a : String, op : String, b : String) -> String {
  let (na, ua) = split_num(a)
  let (nb, _ub) = split_num(b)
  let r = if op == "+" { na + nb } else { na - nb }
  r.to_string() + ua
}

fn split_num(s : String) -> (Int, String) {
  let t = s.trim()
  let mut j = t.length()
  while j > 0 && is_unit_char(t[j - 1]) {
    j -= 1
  }
  let numpart = if j > 0 { t[0:j].to_owned() } else { t.to_owned() }
  let unit = if j < t.length() { t[j:].to_owned() } else { "" }
  (to_int(numpart), unit)
}

fn is_unit_char(u : UInt16) -> Bool {
  (u >= 'A' && u <= 'Z') || (u >= 'a' && u <= 'z') || u == '%'
}
