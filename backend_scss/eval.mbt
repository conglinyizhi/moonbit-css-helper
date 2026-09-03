///| SCSS 求值：AST → CSS 字符串
///
/// 维护变量/混入作用域，实现变量替换、规则嵌套展开、mixin 调用、
/// `@if/@for` 控制流与 `@media` 透传。
struct Mixin {
  params : Array[String]
  body : Array[Node]
}

struct Env {
  vars : Map[String, Array[String]]
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
  { vars: Map([]), mixins: Map([]) }
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
      MixinCall(name, args) => {
        match env.mixins.get(name) {
          Some(m) => gen(m.body, parent, env, sb)
          None => ()
        }
      }
      VarDef(name, value) => {
        env.vars[name] = value
      }
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
  split_body(body, full, env, decl_lines, struct_nodes)
  if decl_lines.length() > 0 {
    sb.write_string("\{full.join(", ")} {\n")
    for line in decl_lines {
      sb.write_string("  \{line}\n")
    }
    sb.write_string("}\n")
  }
  for s in struct_nodes {
    gen_struct(s, full, env, sb)
  }
}

///| 生成单个结构节点（嵌套规则 / at-rule / 控制流 / include）
fn gen_struct(node : Node, parent : Array[String], env : Env, sb : StringBuilder) -> Unit {
  match node {
    RuleSet(sel, body) => gen_ruleset(sel, body, parent, env, sb)
    AtRule(name, prelude, body) => emit_atrule(name, prelude, body, env, sb)
    If(cond, tb, eb) => {
      let chosen = choose_branch(cond, tb, eb, env)
      gen(chosen, parent, env, sb)
    }
    For(v, from, to, body) => {
      gen(expand_for(v, from, to, body, env), parent, env, sb)
    }
    MixinCall(name, args) => {
      match env.mixins.get(name) {
        Some(m) => gen(m.body, parent, env, sb)
        None => ()
      }
    }
    VarDef(name, value) => {
      env.vars[name] = value
    }
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
  gen(body, [], env, sb)
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
      VarDef(name, value) => {
        env.vars[name] = value
      }
      MixinDef(name, params, body2) => {
        env.mixins[name] = { params, body: body2 }
      }
      MixinCall(name, args) => {
        match env.mixins.get(name) {
          Some(m) => split_body(m.body, _full, env, decl_lines, struct_nodes)
          None => ()
        }
      }
      If(cond, tb, eb) => {
        let chosen = choose_branch(cond, tb, eb, env)
        split_body(chosen, _full, env, decl_lines, struct_nodes)
      }
      For(v, from, to, body2) => {
        let expanded = expand_for(v, from, to, body2, env)
        split_body(expanded, _full, env, decl_lines, struct_nodes)
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

///| 递归地把 AST 里 `$v` 相关的 token 替换为 `val`
fn substitute_var(nodes : Array[Node], v : String, val : String) -> Array[Node] {
  let out : Array[Node] = []
  for n in nodes {
    out.push(subst_node(n, v, val))
  }
  out
}

///|
fn subst_node(n : Node, v : String, val : String) -> Node {
  match n {
    Decl(name, value) => Decl(name, subst_toks(value, v, val))
    RuleSet(sel, body) => RuleSet(subst_toks(sel, v, val), substitute_var(body, v, val))
    If(cond, tb, eb) => If(
      subst_toks(cond, v, val),
      substitute_var(tb, v, val),
      substitute_var(eb, v, val),
    )
    MixinCall(name, args) => MixinCall(name, subst_toks(args, v, val))
    For(v2, from, to, body) => For(
      v2,
      subst_toks(from, v, val),
      subst_toks(to, v, val),
      substitute_var(body, v, val),
    )
    AtRule(name, prelude, body) => AtRule(
      name,
      subst_toks(prelude, v, val),
      substitute_var(body, v, val),
    )
    other => other
  }
}

///| 替换 token 数组里等于 `$v` 的项
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
  let r = resolve(cond, env).trim()
  r.length() > 0 && r != "false"
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
      match env.vars.get(t) {
        Some(v) => parts.push(resolve(v, env))
        None => parts.push(t)
      }
    } else if t.length() > 2 && t.starts_with("#{") && t.ends_with("}") {
      // 插值 #{$name}：提取内部变量并替换
      let inner = t[2:t.length() - 1].to_owned()
      if inner.length() > 0 && inner[0] == '$' {
        match env.vars.get(inner) {
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
  parts.join(" ")
}

///| 值 token 数组拼接（用于 at-rule prelude 等）
fn join_value(toks : Array[String], env : Env) -> String {
  resolve(toks, env)
}

///| 组合父选择器与子选择器（处理嵌套与 `&`）
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

///| 把子选择器接到父选择器后（`&` 则原位替换）
fn join_nested(parent : String, sel : String) -> String {
  if sel.contains("&") {
    sel.replace(old="&", new=parent)
  } else {
    parent + " " + sel
  }
}
