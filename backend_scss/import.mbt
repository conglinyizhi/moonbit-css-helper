///| @import 内联与多文件编译入口
///
/// `@import "path"` 节点在编译前用注入的 reader 递归展开，文件内容被
/// 解析后内联到当前位置（含嵌套规则/控制流内的 @import）。读取函数由
/// 调用方注入，核心不耦合具体 IO。

///| 编译一段可能包含 `@import` 的源码
pub fn compile_with_imports(
  source : String,
  read : (String) -> String raise @core.RabbitaError,
) -> String raise @core.RabbitaError {
  let nodes = parse_sheet(tokenize(source))
  let resolved = walk_imports(nodes, read, [])
  to_css(resolved)
}

///| 递归展开 import 节点（顶层）
fn walk_imports(
  nodes : Array[Node],
  read : (String) -> String raise @core.RabbitaError,
  visited : Array[String],
) -> Array[Node] raise @core.RabbitaError {
  let out : Array[Node] = []
  for n in nodes {
    match n {
      Import(path) => {
        if !contains_str(visited, path) {
          let content = read(path)
          let inner = parse_sheet(tokenize(content))
          let v : Array[String] = []
          for x in visited {
            v.push(x)
          }
          v.push(path)
          let resolved = walk_imports(inner, read, v)
          for r in resolved {
            out.push(r)
          }
        }
      }
      other => out.push(walk_into(other, read, visited))
    }
  }
  out
}

///| 递归深入嵌套块，处理其中的 @import
fn walk_into(
  n : Node,
  read : (String) -> String raise @core.RabbitaError,
  visited : Array[String],
) -> Node raise @core.RabbitaError {
  match n {
    RuleSet(sel, body) => RuleSet(sel, walk_imports(body, read, visited))
    If(cond, tb, eb) => If(cond, walk_imports(tb, read, visited), walk_imports(eb, read, visited))
    For(v, f, t, b) => For(v, f, t, walk_imports(b, read, visited))
    Each(v, l, b) => Each(v, l, walk_imports(b, read, visited))
    While(cond, b) => While(cond, walk_imports(b, read, visited))
    AtRule(name, prelude, b) => AtRule(name, prelude, walk_imports(b, read, visited))
    MixinCall(nm, ar, cb) => MixinCall(nm, ar, walk_imports(cb, read, visited))
    other => other
  }
}

///| 数组中是否含某字符串
fn contains_str(arr : Array[String], s : String) -> Bool {
  for x in arr {
    if x == s {
      return true
    }
  }
  false
}
