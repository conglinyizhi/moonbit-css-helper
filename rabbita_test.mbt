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
