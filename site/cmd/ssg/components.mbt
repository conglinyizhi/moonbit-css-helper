///| 展示站的最小 HTML 组件层。
///
/// Rabbita 的 `node` 是底层逃生舱；站点日常页面使用这里的组件，
/// 让页面代码表达结构，而不是反复书写标签名和 Attrs::build。

fn txt(value : String) -> @html.Html {
  @html.text(value)
}

fn el(tag : String, class_ : String, children : Array[@html.Html]) -> @html.Html {
  let attrs = @html.Attrs::build()
  let attrs = if class_ == "" { attrs } else { attrs.class(class_) }
  @html.node(tag, attrs, children)
}

fn el_id(tag : String, id_ : String, class_ : String, children : Array[@html.Html]) -> @html.Html {
  let attrs = @html.Attrs::build().id(id_)
  let attrs = if class_ == "" { attrs } else { attrs.class(class_) }
  @html.node(tag, attrs, children)
}

fn plain(tag : String, children : Array[@html.Html]) -> @html.Html {
  @html.node(tag, @html.Attrs::build(), children)
}

fn link(href : String, class_ : String, label : String) -> @html.Html {
  @html.a(class=class_, href~, [txt(label)])
}

fn action_button(label : String, class_ : String, data_name : String?, data_value : String?) -> @html.Html {
  let attrs = @html.Attrs::build()
  let attrs = match (data_name, data_value) {
    (Some(name), Some(value)) => attrs.data_set(name, value)
    _ => attrs
  }
  @html.button(class=class_, attrs~, [txt(label)])
}

fn disabled_button(label : String, class_ : String) -> @html.Html {
  @html.button(class=class_, disabled=true, [txt(label)])
}

fn identified_button(id_ : String, label : String, class_ : String) -> @html.Html {
  @html.button(id=id_, class=class_, [txt(label)])
}

fn input_control(
  id_ : String,
  class_ : String,
  value : String?,
  read_only : Bool,
  checked : Bool,
) -> @html.Html {
  match value {
    Some(v) => @html.input(
      id=id_, class=class_, value=v, read_only=read_only, checked=checked,
    )
    None => @html.input(
      id=id_, class=class_, read_only=read_only, checked=checked,
    )
  }
}

fn checkbox(id_ : String, checked : Bool) -> @html.Html {
  @html.input(input_type=@html.InputType::Checkbox, id=id_, checked=checked)
}

fn resource_link(href : String, rel : String) -> @html.Html {
  @html.link(href=href, rel=rel, attrs=@html.Attrs::build())
}

fn resource_script(src : String, type_ : String?) -> @html.Html {
  match type_ {
    Some(t) => @html.script(src=src, type_=t, @html.nothing)
    None => @html.script(src=src, @html.nothing)
  }
}

fn lang_button(name : String) -> @html.Html {
  let value = match name {
    "SCSS" => "scss"
    "SASS" => "sass"
    "LESS" => "less"
    _ => name
  }
  action_button(name, "lang-btn", Some("lang"), Some(value))
}

fn lang_group(names : Array[String]) -> @html.Html {
  el("div", "lang-group", names.map(lang_button))
}

fn site_head(title_ : String, stylesheet : String) -> @html.Html {
  plain("head", [
    @html.title([txt(title_)]),
    resource_link(stylesheet, "stylesheet"),
  ])
}

fn vars_tag(name : String, value : String) -> @html.Html {
  el("div", "vars-tag", [
    input_control("vars-name-" + name, "vars-tag-name", Some(name), true, false),
    input_control("vars-value-" + name, "vars-tag-value", Some(value), false, false),
    disabled_button("×", "vars-tag-del"),
  ])
}

fn site_header(back_label : String?, back_href : String?) -> @html.Html {
  let back = match (back_label, back_href) {
    (Some(label), Some(href)) => [link(href, "benchmark-back", label)]
    _ => []
  }
  el("header", "site-header", [link("#", "site-logo", "precss")] + back)
}

fn benchmark_page() -> @rabbita.Val[@html.Html] {
  let (state, _emit) = @rabbita.create_pure_state((), update=fn(model, _msg) { model })
  state.view(_model => {
    @html.html([
      site_head("precss 性能比较", "../site.css?v=4"),
      el("body", "site-dark benchmark-page", [
        site_header(Some("返回 Playground"), Some("../")),
        el("main", "benchmark-main", [
          el("h1", "site-title benchmark-title", [txt("性能比较")]),
          el("p", "site-sub benchmark-sub", [
            txt("用可复现的数据，看看 precss 在共同支持语法子集上的表现"),
          ]),
          el("section", "benchmark-card", [
            plain("h2", [txt("最近一次基准结果")]),
            el_id("div", "benchmark-results", "", [
              el("p", "benchmark-loading", [txt("正在加载基准数据……")]),
            ]),
          ]),
          el("section", "benchmark-card benchmark-method", [
            plain("h2", [txt("测试方法")]),
            plain("p", [txt("基准使用同一棵确定性随机规则树生成 SCSS、缩进式 SASS 和 LESS 输入。每份输入先与对比实现进行归一化正确性校验，只有双方输出一致的数据才计入性能结果。")]),
            plain("p", [txt("当前结果衡量批量吞吐量：precss 每次采样启动一个 native CLI，通过 NUL 分隔批量编译；Dart Sass 与 less.js 在同一 Node.js 进程内循环调用 API。结果受输入、版本、硬件和系统负载影响，不代表所有项目中的固定加速比。")]),
            el("p", "benchmark-warning", [txt("注意：Dart Sass 对比项是 sass npm 包的 JavaScript API，不是 Dart Sass 原生 CLI；SASS 入口当前先转换为 SCSS 再编译。")]),
          ]),
          el("section", "benchmark-card benchmark-reproduce", [
            plain("h2", [txt("本地复现")]),
            plain("pre", [txt("pnpm install\nmoon build --target native cmd/cli\nnode example/perf/bench.mjs --count 200 --depth 4 --seed 1 --iterations 5 --warmup 1")]),
            plain("p", [
              txt("原始数据："),
              link("../data/benchmark.json", "", "benchmark.json"),
              txt(" · "),
              link("https://github.com/conglinyizhi/precss/tree/main/example/perf", "", "基准源码"),
            ]),
          ]),
        ]),
        resource_script("./benchmark.js", Some("module")),
      ]),
    ])
  })
}

fn home_page() -> @rabbita.Val[@html.Html] {
  let (state, _emit) = @rabbita.create_pure_state((), update=fn(model, _msg) { model })
  state.view(_model => {
    @html.html([
      plain("head", [
        resource_link("site.css?v=4", "stylesheet"),
        resource_link("tailwind.css", "stylesheet"),
        resource_link("codemirror/lib/codemirror.css", "stylesheet"),
        resource_link("codemirror/theme/dracula.css", "stylesheet"),
      ]),
      el("body", "site-dark", [
        site_header(None, None),
        plain("main", [
          el("h1", "site-title", [txt("precss")]),
          el("p", "site-sub", [txt("MoonBit 实现的 CSS 预处理引擎")]),
          link("#docs", "site-cta", "快速开始"),
          el("p", "site-note", [txt("左边编辑器用 CodeMirror 实现着色；右侧不是")]),
          editor(),
        ]),
        el("footer", "site-footer", [
          plain("p", [
            txt("想了解更多？看看我们的 "),
            link("#docs", "", "入门指南"),
            txt("，也可以查看 "),
            link("benchmark/", "", "性能基准"),
            txt(" 或背后的人和想法"),
          ]),
        ]),
        resource_script("./codemirror/lib/codemirror.js", None),
        resource_script("./codemirror/mode/css/css.js", None),
        resource_script("./demo.js?v=4", Some("module")),
      ]),
    ])
  })
}

fn editor() -> @html.Html {
  el_id("div", "try", "site-editor", [
    engine_control(),
    editor_column(true),
    editor_column(false),
    vars_bar(),
  ])
}

fn engine_control() -> @html.Html {
  el("div", "engine-control engine-loading", [
    el("label", "engine-switch", [
      el("span", "engine-wasm-label", [txt("WASM")]),
      checkbox("wasm-toggle", true),
      el("span", "engine-switch-track", [el("span", "engine-switch-thumb", [])]),
      el("span", "engine-js-label", [txt("JS")]),
    ]),
    el("span", "engine-js-only", [txt("JS Only")]),
  ])
}

fn editor_column(input : Bool) -> @html.Html {
  if input {
    el("div", "editor-col editor-input-col", [
      el("div", "editor-head", [
        el("div", "editor-head-left", [
          el("span", "editor-head-title", [txt("输入")]),
          lang_group(["SCSS", "SASS", "LESS"]),
        ]),
      ]),
      @html.textarea(id="scss-in", [txt(".card {\n  background: $yellow;\n  color: $green;\n  border: 2px solid $red;\n  .title {\n    box-shadow: 0 0 6px $blue;\n  }\n}")]),
    ])
  } else {
    el("div", "editor-col editor-output-col", [
      el("div", "editor-head editor-head-out", [
        lang_group(["LESS", "SASS", "SCSS"]),
        el("span", "editor-head-title", [txt("输出")]),
      ]),
      el_id("pre", "css-out", "", []),
    ])
  }
}

fn vars_bar() -> @html.Html {
  el("div", "vars-bar", [
    el("div", "vars-bar-top", [
      el("span", "vars-title", [txt("变量注入")]),
      identified_button("add-var", "创建变量", ""),
      el("label", "minify-toggle", [
        checkbox("minify", false),
        txt(" 压缩输出 (.min.css)"),
      ]),
      el("label", "minify-toggle", [
        checkbox("trim-blank", true),
        txt(" 去掉首尾空行"),
      ]),
    ]),
    el_id("div", "vars", "", [
      vars_tag("red", "#e74c3c"),
      vars_tag("yellow", "#f5d563"),
      vars_tag("green", "#2ecc71"),
      vars_tag("blue", "#3498db"),
    ]),
  ])
}
