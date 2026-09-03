///| CLI：批量编译，供差分 harness 使用
///
/// 协议：stdin 接收多个 SCSS 文件内容，以 NUL（`\u0000`）分隔；
/// stdout 输出每个编译结果，同样以 NUL 分隔；失败的用例输出
/// `MB_ERROR: <msg>`。一次调用可处理一批，避免反复 spawn 进程。
async fn read_stdin_all() -> String {
  let sb = StringBuilder()
  while true {
    match @stdio.stdin.read_until("\n") {
      Some(line) => {
        sb.write_string(line)
        sb.write_string("\n")
      }
      None => break
    }
  }
  sb.to_string()
}

///| 编译一个 SCSS 块，失败时返回 `MB_ERROR: <msg>`
fn safe_compile(src : String) -> String {
  try {
    @mb.compile_scss(src)
  } catch {
    e => "MB_ERROR: \{e}"
  }
}

async fn main {
  let whole = try read_stdin_all() catch {
    e => {
      println("MB_ERROR: read \{e}")
      return
    }
  }
  let cases = whole.split("\u0000")
  let results : Array[String] = []
  for c in cases {
    if c.trim().length() == 0 {
      continue
    }
    results.push(safe_compile(c.to_owned()))
  }
  println(results.join("\u0000"))
}
