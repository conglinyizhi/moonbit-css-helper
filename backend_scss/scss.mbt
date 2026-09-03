///| SCSS 后端引擎
///
/// 把源码经 tokenize → parse → to_css 编译成 CSS，
/// 交给门面 `Rabbita` 路由使用。
pub fn scss_engine() -> @core.Engine {
  @core.Engine::new(
    name = () => "scss",
    supports = (fmt) => fmt is @core.Scss,
    compile = (source) => {
      if is_sass_indent(source) {
        return to_css(parse_sheet(tokenize(sass_to_scss(source))))
      }
      to_css(parse_sheet(tokenize(source)))
    },
    compile_imports = (source, read) => compile_with_imports(source, read),
  )
}
