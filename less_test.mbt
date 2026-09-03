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
