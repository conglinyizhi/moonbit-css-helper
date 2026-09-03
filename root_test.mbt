///| 根包公开 API 的黑盒测试

test "compile css 透传" {
  inspect(@moonbit_css_helper.compile_css("body { color: red; }"), content="body { color: red; }")
}

test "compile scss 变量" {
  inspect(
    @moonbit_css_helper.compile_scss("$c: red; body { color: $c; }"),
    content=(#|body {
    #|  color: red;
    #|}
    #|
    ),
  )
}

test "compile 自动识别格式" {
  inspect(
    @moonbit_css_helper.compile("$w: 10px; a { width: $w; }"),
    content=(#|a {
    #|  width: 10px;
    #|}
    #|
    ),
  )
}

///|

test "compile many" {
  let read = fn(p : String) -> String raise @core.RabbitaError {
    if p == "a" { "$c: red; .x { color: $c; }" } else { "" }
  }
  inspect(@moonbit_css_helper.compile_many(
    [@core.Input::Source("body { color: red; }"), @core.Input::File("a"), @core.Input::Source(".y { width: 1px; }")],
    read,
  ), content=(
    #|body {
    #|  color: red;
    #|}
    #|
    #|.x {
    #|  color: red;
    #|}
    #|
    #|.y {
    #|  width: 1px;
    #|}
    #|
  ))
}

///|

///| sass 缩进语法：应被转成 scss 并编译
test "sass indent compile" {
  let src = "$c: blue\n.box\n  color: $c\n  a\n    margin: 1px\n"
  try {
    inspect(@moonbit_css_helper.compile_scss(src), content=(
      #|.box {
      #|  color: blue;
      #|}
      #|.box a {
      #|  margin: 1px;
      #|}
      #|
    ))
  } catch {
    e => fail("compile sass failed: \{repr(e)}")
  }
}

///| conflict: sass_to_scss 中间产物（供后端白盒参考）
test "sass to scss" {
  inspect(@backend_scss.sass_to_scss("$c: blue\n.box\n  color: $c\n"), content=(
    #|$c: blue;
    #|.box {
    #|color: $c;
    #|}
    #|
  ))
}

///|

test "less mixin" {
  inspect(@moonbit_css_helper.compile_less(
    ".rounded(@r) { border-radius: @r; }\n.btn { .rounded(5px); }",
  ), content=(
    #|.btn {
    #|  border-radius: 5px;
    #|}
    #|
    #|
  ))
}

test "less mixin 默认值" {
  inspect(@moonbit_css_helper.compile_less(
    ".pad(@p: 8px) { padding: @p; }\n.x { .pad(); }\n.y { .pad(12px); }",
  ), content=(
    #|.x {
    #|  padding: 8px;
    #|}
    #|
    #|.y {
    #|  padding: 12px;
    #|}
    #|
    #|

  ))
}
