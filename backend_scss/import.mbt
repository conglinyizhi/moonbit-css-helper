///| @import 内联与多文件编译入口
///
/// `@import "path"` 节点在编译前用注入的 reader 递归展开，文件内容被
/// 解析后内联到当前位置。读取函数由调用方注入，核心不耦合具体 IO。

///| 编译一段可能包含 `@import` 的源码
pub fn compile_with_imports(
  source : String,
  read : (String) -> String raise @core.RabbitaError,
) -> String raise @core.RabbitaError {
  let nodes = parse_sheet(tokenize(source))
  let resolved = walk_imports(nodes, read, [])
  to_css(resolved)
}

///| 递归展开 import 节点
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
      other => out.push(other)
    }
  }
  out
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
