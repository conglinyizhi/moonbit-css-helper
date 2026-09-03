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
