///| LESS 引擎：变量转换 + 复用 SCSS 引擎
test "less basic" {
  try {
    inspect(@moonbit_css_helper.compile_less("@base: #333; .btn { color: @base; width: 10px + 5px; }"), content=(
      #|.btn {
      #|  color: #333;
      #|  width: 15px;
      #|}
      #|
    ))
  } catch {
    e => fail("compile less failed: \{repr(e)}")
  }
}

///| LESS at-rule 不被当变量（@media 保留），变量仍转换
test "less at-rule" {
  try {
    inspect(@moonbit_css_helper.compile_less("@c: red; @media screen { .x { color: @c; } }"), content=(
      #|@media screen {
      #|.x {
      #|  color: red;
      #|}
      #|}
      #|
    ))
  } catch {
    e => fail("compile less @media failed: \{repr(e)}")
  }
}
