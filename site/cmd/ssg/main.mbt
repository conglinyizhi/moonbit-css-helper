///| SSG：把库编译的 tailwind-like CSS + rabbit 渲染的页面写成静态 HTML（GitHub Pages 免后端）。
///
/// 流程：读 site/styles/tailwind.scss → 用本库 compile_scss 产出 CSS；
/// 渲染 rabbit 页面组件 → 写 site/out/index.html。页面引用自研 tailwind.css。
async fn main {
  // 1) 编译 tailwind.scss -> out/tailwind.css（用我们自己的预处理器）
  let scss = try read_text("styles/tailwind.scss") catch {
    _ => ""
  }
  let css = try @css.compile_scss(scss) catch {
    _ => "/* compile tailwind failed */"
  }
  try @fs.mkdir("out", recursive = true) catch { _ => () }
  try @fs.write_file("out/tailwind.css", css) catch { _ => () }

  // 2) 渲染首页 -> out/index.html（rabbit SSR）
  let page = @rabbita.new(fn() { home_page() })
  let html = try page.render(url="http://127.0.0.1/", timeout=5000) catch {
    _ => "<!DOCTYPE html><html><body>render error</body></html>"
  }
  try @fs.write_file("out/index.html", html) catch { _ => () }
}

///| 读文件为 utf8 文本（SSG 容错：失败返回空串）
async fn read_text(path : String) -> String {
  let data = try @fs.read_file(path) catch {
    _ => raise @core.RabbitaError::EngineFailed(engine="ssg", message="read fail: " + path)
  }
  try { data.text() } catch { _ => "" }
}

///| 首页：用自研 tailwind-like 的 class 布局
fn home_page() -> @rabbita.Val[@html.Html] {
  let (state, _emit) = @rabbita.create_pure_state((), update=fn(model, _msg) { model })
  state.view(_model => {
    @html.html([
      @html.node("head", @html.Attrs::build(), [
        @html.node(
          "link",
          @html.Attrs::build().rel("stylesheet").href("tailwind.css"),
          @html.nothing,
        ),
      ]),
      @html.node("body", @html.Attrs::build(), [
        @html.node("h1", @html.Attrs::build().class(@tw.flex()), [
          @html.text("moonbit_css_helper 智能提示 demo"),
        ]),
        @html.node("p", @html.Attrs::build().class(@tw.mt_4()), [
          @html.text("这行用了自研 tailwind 的 @tw.mt_4()："),
        ]),
        @html.node("p", @html.Attrs::build().class(@tw.text_red()), [
          @html.text("这行用了 @tw.text_red()。"),
        ]),
        @html.node("div", @html.Attrs::build().class(@tw.flex_row() + " " + @tw.gap_4()), [
          @html.node("p", @html.Attrs::build().class(@tw.bg_blue() + " " + @tw.rounded()), [
            @html.text("@tw.flex_row() / @tw.bg_blue() / @tw.rounded()"),
          ]),
        ]),
      ]),
    ])
  })
}
