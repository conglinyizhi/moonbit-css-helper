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
