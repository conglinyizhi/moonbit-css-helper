///| 编译门面：持有若干可插拔引擎
///
/// 门面只负责「识别格式 → 路由到引擎 → 统一错误」，不绑定任何具体预处理引擎。
pub struct Rabbita {
  engines : Array[Engine]
}

///| 用一组引擎构造门面
pub fn Rabbita::new(engines : Array[Engine]) -> Rabbita {
  { engines, }
}

///| 自动识别格式并编译
pub fn Rabbita::compile(self : Rabbita, source : String) -> String raise RabbitaError {
  let fmt = Format::detect(source)
  self.compile_with_format(source, fmt)
}

///| 以显式格式编译
pub fn Rabbita::compile_with_format(
  self : Rabbita,
  source : String,
  fmt : Format,
) -> String raise RabbitaError {
  let engine = self.pick(fmt)
  engine.compile(source)
}

///| 依据输入形态编译
pub fn Rabbita::compile_input(self : Rabbita, input : Input) -> String raise RabbitaError {
  match input {
    Source(source) => self.compile(source)
    SourceWithFormat(source, fmt) => self.compile_with_format(source, fmt)
  }
}

///| 编译文件
///
/// 读取函数由调用方注入，核心不耦合具体 IO 后端，跨 target 可用。
pub fn Rabbita::compile_file(
  self : Rabbita,
  path : String,
  read : (String) -> String raise RabbitaError,
) -> String raise RabbitaError {
  let source = read(path)
  self.compile(source)
}

///| 按格式挑选引擎
fn Rabbita::pick(self : Rabbita, fmt : Format) -> Engine raise RabbitaError {
  for e in self.engines {
    if e.supports(fmt) {
      return e
    }
  }
  raise RabbitaError::NoEngine(fmt)
}
