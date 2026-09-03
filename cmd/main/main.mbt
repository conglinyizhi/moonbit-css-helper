///| CLI 演示：展示 compile / compile_scss 的端到端输出
///
/// 运行：`moon run cmd/main`
fn main {
  demo("css 透传", "body { color: red; }", compile_css)
  demo("scss 自动识别", "$c: red; body { color: $c; }", compile_auto)
}

///| 对一段源码做自动化（自动识别格式）
fn compile_auto(source : String) -> String raise @core.RabbitaError {
  @rabbita.compile(source)
}

///| 对一段源码按 CSS 处理
fn compile_css(source : String) -> String raise @core.RabbitaError {
  @rabbita.compile_css(source)
}

///| 统一演示：编译并打印输出或错误
fn demo(label : String, source : String, compile : (String) -> String raise @core.RabbitaError) -> Unit {
  println("== \{label} ==")
  try {
    println(compile(source))
  } catch {
    e => println("error: \{e}")
  }
  println("")
}
