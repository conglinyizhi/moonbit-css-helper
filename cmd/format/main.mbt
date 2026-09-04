///| CLI：源码格式化（formatter）
///
/// 从 stdin 接收 CSS 糖源码（scss / sass 缩进 / less），自动探测格式，
/// 输出**规范化排版的源码**（2 空格缩进）。scss / sass 求值后仍输出 scss；
/// less 因无独立 AST，暂转换为等价的规范 scss 输出。
///
/// 用法：
///   echo "a{color:red;}" | moon run cmd/format
///   cat style.scss  | moon run cmd/format
///   moon run cmd/format -- < style.less
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

///| 依内容特征尽量判断糖种：sass(缩进) > scss($) > less(@) > scss
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

async fn main {
  let src = try read_stdin_all() catch {
    e => {
      println("ERR: read \{e}")
      return
    }
  }
  let kind = detect_type(src)
  let formatted : String =
    if kind == "sass" {
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
