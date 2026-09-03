///| 开箱即用的 CSS 编译门面
///
/// 注册全部内置后端引擎，提供一个无需手动拼装的 `compile` 入口。
///
/// # Example
/// ```mbt check
/// test {
///   inspect(compile("body { color: red; }"), content="body { color: red; }")
/// }
/// ```
pub fn compile(source : String) -> String raise @core.RabbitaError {
  default().compile(source)
}

///| 以显式格式编译
pub fn compile_with_format(
  source : String,
  fmt : @core.Format,
) -> String raise @core.RabbitaError {
  default().compile_with_format(source, fmt)
}

///| 依据输入形态编译
pub fn compile_input(input : @core.Input) -> String raise @core.RabbitaError {
  default().compile_input(input)
}

///| 编译文件（读取函数由调用方注入）
pub fn compile_file(
  path : String,
  read : (String) -> String raise @core.RabbitaError,
) -> String raise @core.RabbitaError {
  default().compile_file(path, read)
}

///| 以显式 SCSS 格式编译
pub fn compile_scss(source : String) -> String raise @core.RabbitaError {
  default().compile_with_format(source, @core.Scss)
}

///| 以显式 LESS 格式编译
pub fn compile_less(source : String) -> String raise @core.RabbitaError {
  default().compile_with_format(source, @core.Less)
}

///| 以显式 CSS 格式编译
pub fn compile_css(source : String) -> String raise @core.RabbitaError {
  default().compile_with_format(source, @core.Css)
}

///| 编译多个输入（文件/字符串混用），带 @import 内联
pub fn compile_many(
  inputs : Array[@core.Input],
  read : (String) -> String raise @core.RabbitaError,
) -> String raise @core.RabbitaError {
  default().compile_many(inputs, read)
}

///| 内置引擎组成的默认门面
fn default() -> @core.Rabbita {
  @core.Rabbita::new([@backend_css.css_engine(), @backend_scss.scss_engine(), @backend_less.less_engine()])
}
