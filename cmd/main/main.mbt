///| CLI 演示：展示 SCSS 子集各特性的端到端输出
///
/// 运行：`moon run cmd/main`
fn main {
  demo("css 透传", "body { color: red; }", @rabbita.compile_css)
  demo("scss 变量 + 嵌套", "body { color: red; a { width: 10px; } }", @rabbita.compile_scss)
  demo("scss mixin", "@mixin border { border: 1px solid black; } .box { @include border; }", @rabbita.compile_scss)
  demo("scss @if", "$flag: true; a { @if $flag { color: red; } }", @rabbita.compile_scss)
  demo("scss @for", "@for $i from 1 to 3 { .col-#{$i} { width: 100px; } }", @rabbita.compile_scss)
  demo("scss @media 透传", "@media screen { body { color: red; } }", @rabbita.compile_scss)
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
