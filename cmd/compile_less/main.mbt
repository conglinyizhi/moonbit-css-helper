///| CLI：批量编译 LESS，供 less 差分 harness 使用
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

fn safe_compile(src : String) -> String {
  try {
    @mb.compile_less(src)
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
