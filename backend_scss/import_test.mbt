test "import" {
  let read = fn(path : String) -> String raise @core.RabbitaError {
    if path == "a" { "$c: blue; .x { color: $c; }" } else { "" }
  }
  inspect(@backend_scss.compile_with_imports("@import \"a\"; body { color: red; }", read), content=(
    #|.x {
    #|  color: blue;
    #|}
    #|body {
    #|  color: red;
    #|}
    #|
  ))
}
