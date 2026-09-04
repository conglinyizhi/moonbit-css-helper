///| SSG：把库编译的样式 + rabbit 渲染的 深色 landing landing 页写成静态 HTML（GitHub Pages 免后端）。
///
/// 流程：
///   styles/tailwind.scss → 本库 compile_scss → out/tailwind.css（自研 tailwind-like）
///   styles/site.scss      → 本库 compile_scss → out/site.css    （深色 landing landing 样式）
///   rabbit 渲染 home_page → out/index.html（深色 + 黄标题 + 双栏实时编译）
async fn main {
  // 1) 编译 tailwind.scss -> out/tailwind.css
  let tw_scss = try read_text("styles/tailwind.scss") catch { _ => "" }
  let tw_css = try @css.compile_scss(tw_scss) catch { _ => "" }
  // 2) 编译 site.scss -> out/site.css（深色 landing）
  let site_scss = try read_text("styles/site.scss") catch { _ => "" }
  let site_css = try @css.compile_scss(site_scss) catch { _ => "" }
  try @fs.mkdir("out", recursive = true) catch { _ => () }
  try @fs.write_file("out/tailwind.css", tw_css) catch { _ => () }
  try @fs.write_file("out/site.css", site_css) catch { _ => () }

  // 复制前端逻辑（CodeMirror 初始化 + 实时编译）到 out/demo.js
  let demo = try read_text("static/demo.js") catch { _ => "" }
  try @fs.write_file("out/demo.js", demo) catch { _ => () }

  // 本地打包 CodeMirror 5（不依赖运行时 CDN）——复制到 out/codemirror/
  copy_file("static/codemirror/lib/codemirror.js", "out/codemirror/lib/codemirror.js")
  copy_file("static/codemirror/lib/codemirror.css", "out/codemirror/lib/codemirror.css")
  copy_file("static/codemirror/mode/css/css.js", "out/codemirror/mode/css/css.js")
  copy_file("static/codemirror/theme/dracula.css", "out/codemirror/theme/dracula.css")

  // 3) 渲染首页 -> out/index.html（rabbit SSR）
  let page = @rabbita.new(fn() { home_page() })
  let html = try page.render(url="http://127.0.0.1/", timeout=5000) catch {
    _ => "<!DOCTYPE html><html><body>render error</body></html>"
  }
  // rabbit SSR 的 <head> 默认不带 charset，补一个避免中文/特殊字符按默认编码乱码
  let html_with_cs = html.replace(old="<head>", new="<head><meta charset=\"utf-8\">")
  try @fs.write_file("out/index.html", html_with_cs) catch { _ => () }
}

///| 读文件为 utf8 文本（SSG 容错：失败返回空串）
async fn read_text(path : String) -> String {
  let data = try @fs.read_file(path) catch {
    _ => raise @core.RabbitaError::EngineFailed(engine="ssg", message="read fail: " + path)
  }
  try { data.text() } catch { _ => "" }
}

///| 复制文本文件到 out（自动建父目录，容错）
async fn copy_file(src : String, dst : String) -> Unit {
  let txt = try read_text(src) catch { _ => "" }
  let dir = dir_of(dst)
  try @fs.mkdir(dir, recursive = true) catch { _ => () }
  try @fs.write_file(dst, txt) catch { _ => () }
}

///| 取路径的父目录（去最后一个 / 之后的部分）
fn dir_of(p : String) -> String {
  let n = p.length()
  let mut i = n - 1
  while i >= 0 && p[i] != '/' {
    i -= 1
  }
  if i < 0 {
    "."
  } else {
    p[0:i].to_string()
  }
}

///| 首页：深色 landing landing —— 深色 + 黄标题 + CTA + 双栏实时编译
fn home_page() -> @rabbita.Val[@html.Html] {
  let (state, _emit) = @rabbita.create_pure_state((), update=fn(model, _msg) { model })
  state.view(_model => {
    @html.html([
      @html.node("head", @html.Attrs::build(), [
        @html.node(
          "link",
          @html.Attrs::build().rel("stylesheet").href("site.css"),
          @html.nothing,
        ),
        @html.node(
          "link",
          @html.Attrs::build().rel("stylesheet").href("tailwind.css"),
          @html.nothing,
        ),
        @html.node(
          "link",
          @html.Attrs::build().rel("stylesheet").href("codemirror/lib/codemirror.css"),
          @html.nothing,
        ),
        @html.node(
          "link",
          @html.Attrs::build().rel("stylesheet").href("codemirror/theme/dracula.css"),
          @html.nothing,
        ),
      ]),
      @html.node("body", @html.Attrs::build().class("site-dark"), [
        // header
        @html.node("header", @html.Attrs::build().class("site-header"), [
          @html.node("a", @html.Attrs::build().class("site-logo").href("#"), [
            @html.text("precss"),
          ]),
          @html.node("nav", @html.Attrs::build().class("site-nav"), [
            @html.node("a", @html.Attrs::build().href("#docs"), [@html.text("文档")]),
            @html.node("a", @html.Attrs::build().href("#setup"), [@html.text("安装")]),
            @html.node("a", @html.Attrs::build().href("#try"), [@html.text("试用")]),
            @html.node("a", @html.Attrs::build().href("#github"), [@html.text("GitHub")]),
          ]),
        ]),
        // hero
        @html.node("main", @html.Attrs::build(), [
          @html.node("h1", @html.Attrs::build().class("site-title"), [
            @html.text("precss"),
          ]),
          @html.node("p", @html.Attrs::build().class("site-sub"), [
            @html.text("MoonBit 实现的 CSS 预处理引擎"),
          ]),
          @html.node("a", @html.Attrs::build().class("site-cta").href("#docs"), [
            @html.text("快速开始"),
          ]),
          // CTA 下方灰色小字（玩梗：说明着色的实现）
          @html.node("p", @html.Attrs::build().class("site-note"), [
            @html.text("左边编辑器用 CodeMirror 实现着色；右侧不是"),
          ]),
          // 双栏编辑器：左输入 next-gen CSS，右输出浏览器兼容 CSS（实时）
          @html.node("div", @html.Attrs::build().class("site-editor"), [
            @html.node("div", @html.Attrs::build().class("editor-col"), [
              @html.node("div", @html.Attrs::build().class("editor-head"), [
                @html.node("div", @html.Attrs::build().class("editor-head-left"), [
                  @html.node("button", @html.Attrs::build().id("load-sample"), [@html.text("载入示例")]),
                  @html.node("select", @html.Attrs::build().id("lang-select"), [
                    @html.node("option", @html.Attrs::build().value("scss"), [@html.text("SCSS")]),
                    @html.node("option", @html.Attrs::build().value("sass"), [@html.text("SASS")]),
                    @html.node("option", @html.Attrs::build().value("less"), [@html.text("LESS")]),
                  ]),
                ]),
              ]),
              @html.node("textarea", @html.Attrs::build().id("scss-in"), [
                @html.text("$c: blue; $gap: 8px;\n.card {\n  color: $c;\n  .title { margin-top: $gap; }\n}"),
              ]),
            ]),
            @html.node("div", @html.Attrs::build().class("editor-col"), [
              @html.node("div", @html.Attrs::build().class("editor-head"), [
                @html.text("输出 - CSS"),
              ]),
              @html.node("pre", @html.Attrs::build().id("css-out"), @html.nothing),
            ]),
          ]),
        ]),
        // footer
        @html.node("footer", @html.Attrs::build().class("site-footer"), [
          @html.node("p", @html.Attrs::build(), [
            @html.text("想了解更多？看看我们的 "),
            @html.node("a", @html.Attrs::build().href("#docs"), [@html.text("入门指南")]),
            @html.text(" 或背后的人和想法"),
          ]),
        ]),
        // 本地 CodeMirror + demo（不依赖运行时 CDN）
        @html.node("script", @html.Attrs::build().src("./codemirror/lib/codemirror.js"), @html.nothing),
        @html.node("script", @html.Attrs::build().src("./codemirror/mode/css/css.js"), @html.nothing),
        @html.node("script", @html.Attrs::build().type_("module").src("./demo.js"), @html.nothing),
      ]),
    ])
  })
}
