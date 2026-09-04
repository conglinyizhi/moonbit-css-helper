///| 统一 CLI：一个可执行 + 多个 subcommand（compile / compile-less / format / help）
///
/// 库（moonbit_css_helper）保持纯，这里是独立交付的 CLI 产物。
/// `opts`: 子命令本身逻辑
async fn main {
  let args = @env.args()
  let sub = if args.length() > 1 { args[1] } else { "help" }
  match sub {
    "compile" => run_compile()
    "compile-less" => run_compile_less()
    "format" => run_format(args)
    "help" | "-h" | "--help" => print_help()
    _ => {
      println("unknown subcommand: \{sub}\n")
      print_help()
    }
  }
}

fn print_help() -> Unit {
  println("moonbit-css-helper CLI")
  println("")
  println("用法：moon run cmd/cli -- <subcommand>")
  println("")
  println("subcommands:")
  println("  compile        批量编译 SCSS（stdin 以 NUL 分隔输入，NUL 分隔输出；差分 harness 协议）")
  println("  compile-less   批量编译 LESS（同上）")
  println("  format         格式化源码（stdin 输入，输出规范排版的 scss）")
  println("  help           显示本帮助")
}

///| 读全部 stdin
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

///| compile：stdin 以 NUL 分隔多个 SCSS，逐一编译，NUL 分隔输出，失败输出 MB_ERROR
async fn run_compile() -> Unit {
  let whole = try read_stdin_all() catch {
    e => {
      println("MB_ERROR: read \{e}")
      return
    }
  }
  emit_batch(whole, fn(src : String) -> String {
    try @mb.compile_scss(src) catch { e => "MB_ERROR: \{e}" }
  })
}

///| compile-less：同 compile，但走 LESS 引擎
async fn run_compile_less() -> Unit {
  let whole = try read_stdin_all() catch {
    e => {
      println("MB_ERROR: read \{e}")
      return
    }
  }
  emit_batch(whole, fn(src : String) -> String {
    try @mb.compile_less(src) catch { e => "MB_ERROR: \{e}" }
  })
}

///| 把 NUL 分隔的一批源喂给编译函数，NUL 分隔回写
fn emit_batch(whole : String, compile : (String) -> String) -> Unit {
  let cases = whole.split("\u0000")
  let results : Array[String] = []
  for c in cases {
    if c.trim().length() == 0 {
      continue
    }
    results.push(compile(c.to_owned()))
  }
  println(results.join("\u0000"))
}

///| 依内容特征判断糖种：sass(缩进) > scss($) > less(@) > scss
fn detect_type(src : String) -> String {
  if @scss.is_sass_indent(src) {
    return "sass"
  }
  if src.contains("$") {
    return "scss"
  }
  if src.contains("@") {
    return "less"
  }
  "scss"
}

///| format：stdin 输入源码，输出规范化排版；默认自动探测糖类型
///
/// flags（可选，偷懒时可全省略）：
///   --type <scss|sass|less>  显式指定类型
///   --scss / --sass / --less 快捷指定
///   --css                   输出编译后的 css（而非规范化源码）
async fn run_format(args : Array[String]) -> Unit {
  let mut out_css = false
  let mut forced_type : String? = None
  let mut i = 2
  while i < args.length() {
    match args[i] {
      "--css" => out_css = true
      "--type" => {
        if i + 1 < args.length() {
          forced_type = Some(args[i + 1])
          i += 1
        }
      }
      "--scss" => forced_type = Some("scss")
      "--sass" => forced_type = Some("sass")
      "--less" => forced_type = Some("less")
      "-h" | "--help" => {
        print_format_help()
        return
      }
      _ => ()
    }
    i += 1
  }
  let src = try read_stdin_all() catch {
    e => {
      println("ERR: read \{e}")
      return
    }
  }
  // 类型：显式指定 > 自动探测（偷懒默认）
  let kind = match forced_type {
    Some(t) => t
    None => detect_type(src)
  }
  if out_css {
    // 输出编译后的 css（所有糖都归一）
    let css : String = if kind == "less" {
      try @mb.compile_less(src) catch { e => "/* 编译失败: \{repr(e)} */" }
    } else {
      try @mb.compile_scss(src) catch { e => "/* 编译失败: \{repr(e)} */" }
    }
    println(css.trim())
  } else {
    // 输出规范化源码
    let formatted : String = if kind == "sass" {
      @scss.format_scss(@scss.sass_to_scss(src))
    } else if kind == "less" {
      let scss_src = try @less.less_to_scss(src) catch {
        e => "/* less→scss 转换失败: \{repr(e)} */\n"
      }
      @scss.format_scss(scss_src)
    } else {
      @scss.format_scss(src)
    }
    println(formatted.trim())
  }
}

fn print_format_help() -> Unit {
  println("format [flags]")
  println("  输入：stdin 源码；默认自动探测糖类型，输出规范化 scss")
  println("  --type <scss|sass|less>  显式指定类型")
  println("  --scss / --sass / --less 快捷指定")
  println("  --css                   输出编译后的 css")
}
