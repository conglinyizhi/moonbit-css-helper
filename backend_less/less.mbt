///| LESS 后端引擎
///
/// LESS 与 SCSS 在嵌套/运算/@import/@media 上高度重叠，核心差异是变量前缀
/// `@var`（LESS）与类 mixin `.mixin()`。这里通过 `less_to_scss` 把 LESS 的
/// 变量转成 `$var`，其余复用 SCSS 引擎编译；@import 内联文件同样走变量转换。

///| 把 LESS 变量前缀 `@name` 转成 `$name`，保留 at-rule 关键词
pub fn less_to_scss(source : String) -> String {
  let sb = StringBuilder()
  let n = source.length()
  let mut i = 0
  while i < n {
    if source[i] == '@' {
      let mut j = i + 1
      while j < n && is_ident_char(source[j]) {
        j += 1
      }
      let name = source[i + 1:j].to_owned()
      if is_at_rule_keyword(name) {
        sb.write_string("@")
        sb.write_string(name)
      } else {
        sb.write_string("$")
        sb.write_string(name)
      }
      i = j
    } else {
      sb.write_string(source[i:i + 1].to_owned())
      i += 1
    }
  }
  sb.to_string()
}

///| LESS 引擎：复用 SCSS 引擎编译（变量转换后）
pub fn less_engine() -> @core.Engine {
  @core.Engine::new(
    name = () => "less",
    supports = (fmt) => fmt is @core.Less,
    compile = (source) => @scss.to_css(@scss.parse_sheet(@scss.tokenize(less_to_scss(source)))),
    compile_imports = (source, read) => @scss.compile_with_imports(
      less_to_scss(source),
      fn(path : String) -> String raise @core.RabbitaError {
        less_to_scss(read(path))
      },
    ),
  )
}

///| 是否为 LESS 保留的 at-rule 关键词（不当作变量）
fn is_at_rule_keyword(name : String) -> Bool {
  match name {
    "media" => true
    "import" => true
    "if" => true
    "for" => true
    "each" => true
    "while" => true
    "font-face" => true
    "supports" => true
    "keyframes" => true
    "charset" => true
    "page" => true
    "namespace" => true
    "document" => true
    "layer" => true
    "container" => true
    "property" => true
    "scope" => true
    "else" => true
    "plugin" => true
    "arguments" => true
    _ => false
  }
}

///| 标识符字符
fn is_ident_char(u : UInt16) -> Bool {
  (u >= 'A' && u <= 'Z') || (u >= 'a' && u <= 'z') || (u >= '0' && u <= '9') || u == '-' || u == '_'
}
