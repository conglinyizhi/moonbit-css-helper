///| 预处理引擎句柄
///
/// 每个后端构造一个 `Engine`，用函数闭包承载其行为。这是「可插拔契约」的载体：
/// 门面 `Rabbita` 只依赖 `Engine` 的 `supports` / `compile`，不关心是哪个后端。
pub struct Engine {
  name_fn : () -> String
  supports_fn : (Format) -> Bool
  compile_fn : (String) -> String raise RabbitaError
}

///| 构造一个引擎
///
/// 三个回调分别返回引擎名、是否负责某格式、以及把源码编译为 CSS。
pub fn Engine::new(
  name~ : () -> String,
  supports~ : (Format) -> Bool,
  compile~ : (String) -> String raise RabbitaError,
) -> Engine {
  { name_fn: name, supports_fn: supports, compile_fn: compile }
}

///| 引擎名
pub fn Engine::engine_name(self : Engine) -> String {
  (self.name_fn)()
}

///| 是否负责某格式
pub fn Engine::supports(self : Engine, fmt : Format) -> Bool {
  (self.supports_fn)(fmt)
}

///| 把源码编译为 CSS
pub fn Engine::compile(self : Engine, source : String) -> String raise RabbitaError {
  (self.compile_fn)(source)
}
