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

  // 3) 复制性能页前端与 CI 生成的 JSON 数据
  copy_file("static/benchmark.js", "out/benchmark/benchmark.js")
  copy_file("static/data/benchmark.json", "out/data/benchmark.json")

  // 4) 渲染首页与性能页 -> out（rabbit SSR）
  let home = @rabbita.new(fn() { home_page() })
  let home_html = try home.render(url="http://127.0.0.1/", timeout=5000) catch {
    _ => "<!DOCTYPE html><html><body>render error</body></html>"
  }
  let benchmark = @rabbita.new(fn() { benchmark_page() })
  let benchmark_html = try benchmark.render(url="http://127.0.0.1/benchmark/", timeout=5000) catch {
    _ => "<!DOCTYPE html><html><body>render error</body></html>"
  }
  // rabbit SSR 的 <head> 默认不带 charset，补一个避免中文/特殊字符按默认编码乱码
  let home_with_cs = home_html.replace(old="<head>", new="<head><meta charset=\"utf-8\">")
  let benchmark_with_cs = benchmark_html.replace(old="<head>", new="<head><meta charset=\"utf-8\">")
  try @fs.write_file("out/index.html", home_with_cs) catch { _ => () }
  try @fs.mkdir("out/benchmark", recursive = true) catch { _ => () }
  try @fs.write_file("out/benchmark/index.html", benchmark_with_cs) catch { _ => () }
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
  if txt.length() > 0 {
    let dir = dir_of(dst)
    try @fs.mkdir(dir, recursive = true) catch { _ => () }
    try @fs.write_file(dst, txt) catch { _ => () }
  }
}

///| 取路径的父目录（去最后一个 / 之后的部分）
///| 初始变量 tag（rabbita 静态渲染，避免 JS 空窗；key 锁定、不可删）
fn vars_tag(name : String, value : String) -> @html.Html {
  @html.node("div", @html.Attrs::build().class("vars-tag"), [
    @html.node("input", @html.Attrs::build().class("vars-tag-name").readonly_(true).value(name), @html.nothing),
    @html.node("input", @html.Attrs::build().class("vars-tag-value").value(value), @html.nothing),
    @html.node("button", @html.Attrs::build().class("vars-tag-del").disabled(true), [@html.text("×")]),
  ])
}

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

///| 性能页：说明测试方法，结果由前端从静态 JSON 加载
fn benchmark_page() -> @rabbita.Val[@html.Html] {
  let (state, _emit) = @rabbita.create_pure_state((), update=fn(model, _msg) { model })
  state.view(_model => {
    @html.html([
      @html.node("head", @html.Attrs::build(), [
        @html.node("title", @html.Attrs::build(), [@html.text("precss 性能比较")]),
        @html.node("link", @html.Attrs::build().rel("stylesheet").href("../site.css?v=4"), @html.nothing),
      ]),
      @html.node("body", @html.Attrs::build().class("site-dark benchmark-page"), [
        @html.node("header", @html.Attrs::build().class("site-header"), [
          @html.node("a", @html.Attrs::build().class("site-logo").href("../"), [@html.text("precss")]),
          @html.node("a", @html.Attrs::build().class("benchmark-back").href("../"), [@html.text("返回 Playground")]),
        ]),
        @html.node("main", @html.Attrs::build().class("benchmark-main"), [
          @html.node("h1", @html.Attrs::build().class("site-title benchmark-title"), [@html.text("性能比较")]),
          @html.node("p", @html.Attrs::build().class("site-sub benchmark-sub"), [
            @html.text("用可复现的数据，看看 precss 在共同支持语法子集上的表现"),
          ]),
          @html.node("section", @html.Attrs::build().class("benchmark-card"), [
            @html.node("h2", @html.Attrs::build(), [@html.text("最近一次基准结果")]),
            @html.node("div", @html.Attrs::build().id("benchmark-results"), [
              @html.node("p", @html.Attrs::build().class("benchmark-loading"), [@html.text("正在加载基准数据……")]),
            ]),
          ]),
          @html.node("section", @html.Attrs::build().class("benchmark-card benchmark-method"), [
            @html.node("h2", @html.Attrs::build(), [@html.text("测试方法")]),
            @html.node("p", @html.Attrs::build(), [@html.text("基准使用同一棵确定性随机规则树生成 SCSS、缩进式 SASS 和 LESS 输入。每份输入先与对比实现进行归一化正确性校验，只有双方输出一致的数据才计入性能结果。")]),
            @html.node("p", @html.Attrs::build(), [@html.text("当前结果衡量批量吞吐量：precss 每次采样启动一个 native CLI，通过 NUL 分隔批量编译；Dart Sass 与 less.js 在同一 Node.js 进程内循环调用 API。结果受输入、版本、硬件和系统负载影响，不代表所有项目中的固定加速比。")]),
            @html.node("p", @html.Attrs::build().class("benchmark-warning"), [@html.text("注意：Dart Sass 对比项是 sass npm 包的 JavaScript API，不是 Dart Sass 原生 CLI；SASS 入口当前先转换为 SCSS 再编译。")]),
          ]),
          @html.node("section", @html.Attrs::build().class("benchmark-card benchmark-reproduce"), [
            @html.node("h2", @html.Attrs::build(), [@html.text("本地复现")]),
            @html.node("pre", @html.Attrs::build(), [@html.text("pnpm install\nmoon build --target native cmd/cli\nnode example/perf/bench.mjs --count 200 --depth 4 --seed 1 --iterations 5 --warmup 1")]),
            @html.node("p", @html.Attrs::build(), [
              @html.text("原始数据："),
              @html.node("a", @html.Attrs::build().href("../data/benchmark.json"), [@html.text("benchmark.json")]),
              @html.text(" · "),
              @html.node("a", @html.Attrs::build().href("https://github.com/conglinyizhi/precss/tree/main/example/perf"), [@html.text("基准源码")]),
            ]),
          ]),
        ]),
        @html.node("script", @html.Attrs::build().type_("module").src("./benchmark.js"), @html.nothing),
      ]),
    ])
  })
}

///| 首页：深色 landing landing —— 深色 + 黄标题 + CTA + 双栏实时编译
fn home_page() -> @rabbita.Val[@html.Html] {
  let (state, _emit) = @rabbita.create_pure_state((), update=fn(model, _msg) { model })
  state.view(_model => {
    @html.html([
      @html.node("head", @html.Attrs::build(), [
        @html.node(
          "link",
          @html.Attrs::build().rel("stylesheet").href("site.css?v=4"),
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
            @html.node("a", @html.Attrs::build().href("benchmark/"), [@html.text("性能")]),
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
          @html.node("div", @html.Attrs::build().class("site-editor").id("try"), [
            @html.node("div", @html.Attrs::build().class("engine-control engine-loading"), [
              @html.node("label", @html.Attrs::build().class("engine-switch"), [
                @html.node("span", @html.Attrs::build().class("engine-wasm-label"), [@html.text("WASM")]),
                @html.node("input", @html.Attrs::build().type_("checkbox").id("wasm-toggle").checked(true), @html.nothing),
                @html.node("span", @html.Attrs::build().class("engine-switch-track"), [
                  @html.node("span", @html.Attrs::build().class("engine-switch-thumb"), @html.nothing),
                ]),
                @html.node("span", @html.Attrs::build().class("engine-js-label"), [@html.text("JS")]),
              ]),
              @html.node("span", @html.Attrs::build().class("engine-js-only"), [@html.text("JS Only")]),
            ]),
            @html.node("div", @html.Attrs::build().class("editor-col editor-input-col"), [
              @html.node("div", @html.Attrs::build().class("editor-head"), [
                @html.node("div", @html.Attrs::build().class("editor-head-left"), [
                  @html.node("span", @html.Attrs::build().class("editor-head-title"), [@html.text("输入")]),
                  @html.node("div", @html.Attrs::build().class("lang-group"), [
                    @html.node("button", @html.Attrs::build().class("lang-btn").data_set("lang", "scss"), [@html.text("SCSS")]),
                    @html.node("button", @html.Attrs::build().class("lang-btn").data_set("lang", "sass"), [@html.text("SASS")]),
                    @html.node("button", @html.Attrs::build().class("lang-btn").data_set("lang", "less"), [@html.text("LESS")]),
                  ]),
                ]),
              ]),
              @html.node("textarea", @html.Attrs::build().id("scss-in"), [
                @html.text(".card {\n  background: $yellow;\n  color: $green;\n  border: 2px solid $red;\n  .title {\n    box-shadow: 0 0 6px $blue;\n  }\n}"),
              ]),
            ]),
            @html.node("div", @html.Attrs::build().class("editor-col editor-output-col"), [
              @html.node("div", @html.Attrs::build().class("editor-head editor-head-out"), [
                @html.node("div", @html.Attrs::build().class("lang-group"), [
                  @html.node("button", @html.Attrs::build().class("lang-btn").data_set("lang", "less"), [@html.text("LESS")]),
                  @html.node("button", @html.Attrs::build().class("lang-btn").data_set("lang", "sass"), [@html.text("SASS")]),
                  @html.node("button", @html.Attrs::build().class("lang-btn").data_set("lang", "scss"), [@html.text("SCSS")]),
                ]),
                @html.node("span", @html.Attrs::build().class("editor-head-title"), [@html.text("输出")]),
              ]),
              @html.node("pre", @html.Attrs::build().id("css-out"), @html.nothing),
            ]),
            // 变量注入 + 压缩输出（代码块下方，grid 内跨列与代码块同宽）
            @html.node("div", @html.Attrs::build().class("vars-bar"), [
              @html.node("div", @html.Attrs::build().class("vars-bar-top"), [
                @html.node("span", @html.Attrs::build().class("vars-title"), [@html.text("变量注入")]),
                @html.node("button", @html.Attrs::build().id("add-var"), [@html.text("创建变量")]),
                @html.node("label", @html.Attrs::build().class("minify-toggle").title("默认多行 = Sass 的 expanded 可读格式；勾选后压缩为单行（对应 Sass 的 compressed 模式）"), [
                  @html.node("input", @html.Attrs::build().type_("checkbox").id("minify"), @html.nothing),
                  @html.text(" 压缩输出 (.min.css)"),
                ]),
                @html.node("label", @html.Attrs::build().class("minify-toggle").title("去掉输出开头/末尾的不可见空行（不动行与行之间的换行）"), [
                  @html.node("input", @html.Attrs::build().type_("checkbox").id("trim-blank").checked(true), @html.nothing),
                  @html.text(" 去掉首尾空行"),
                ]),
              ]),
              @html.node("div", @html.Attrs::build().id("vars"), [
                vars_tag("red", "#e74c3c"),
                vars_tag("yellow", "#f5d563"),
                vars_tag("green", "#2ecc71"),
                vars_tag("blue", "#3498db"),
              ]),
            ]),
          ]),
        ]),
        // footer
        @html.node("footer", @html.Attrs::build().class("site-footer"), [
          @html.node("p", @html.Attrs::build(), [
            @html.text("想了解更多？看看我们的 "),
            @html.node("a", @html.Attrs::build().href("#docs"), [@html.text("入门指南")]),
            @html.text("，也可以查看 "),
            @html.node("a", @html.Attrs::build().href("benchmark/"), [@html.text("性能基准")]),
            @html.text(" 或背后的人和想法"),
          ]),
        ]),
        // 本地 CodeMirror + demo（不依赖运行时 CDN）
        @html.node("script", @html.Attrs::build().src("./codemirror/lib/codemirror.js"), @html.nothing),
        @html.node("script", @html.Attrs::build().src("./codemirror/mode/css/css.js"), @html.nothing),
        @html.node("script", @html.Attrs::build().type_("module").src("./demo.js?v=4"), @html.nothing)
      ]),
    ])
  })
}
