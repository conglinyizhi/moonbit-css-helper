pub struct TW { classes : Array[String] }

pub fn tw() -> TW { { classes: [] } }

pub fn TW::add(self : TW, c : String) -> TW {
  self.classes.push(c)
  self
}

pub fn TW::class(self : TW) -> String { self.classes.join(" ") }

pub fn TW::m_0(self : TW) -> TW { self.add("m-0") }
pub fn TW::mx_0(self : TW) -> TW { self.add("mx-0") }
pub fn TW::my_0(self : TW) -> TW { self.add("my-0") }
pub fn TW::mt_0(self : TW) -> TW { self.add("mt-0") }
pub fn TW::mb_0(self : TW) -> TW { self.add("mb-0") }
pub fn TW::p_0(self : TW) -> TW { self.add("p-0") }
pub fn TW::px_0(self : TW) -> TW { self.add("px-0") }
pub fn TW::py_0(self : TW) -> TW { self.add("py-0") }
pub fn TW::pt_0(self : TW) -> TW { self.add("pt-0") }
pub fn TW::pb_0(self : TW) -> TW { self.add("pb-0") }
pub fn TW::m_1(self : TW) -> TW { self.add("m-1") }
pub fn TW::mx_1(self : TW) -> TW { self.add("mx-1") }
pub fn TW::my_1(self : TW) -> TW { self.add("my-1") }
pub fn TW::mt_1(self : TW) -> TW { self.add("mt-1") }
pub fn TW::mb_1(self : TW) -> TW { self.add("mb-1") }
pub fn TW::p_1(self : TW) -> TW { self.add("p-1") }
pub fn TW::px_1(self : TW) -> TW { self.add("px-1") }
pub fn TW::py_1(self : TW) -> TW { self.add("py-1") }
pub fn TW::pt_1(self : TW) -> TW { self.add("pt-1") }
pub fn TW::pb_1(self : TW) -> TW { self.add("pb-1") }
pub fn TW::m_2(self : TW) -> TW { self.add("m-2") }
pub fn TW::mx_2(self : TW) -> TW { self.add("mx-2") }
pub fn TW::my_2(self : TW) -> TW { self.add("my-2") }
pub fn TW::mt_2(self : TW) -> TW { self.add("mt-2") }
pub fn TW::mb_2(self : TW) -> TW { self.add("mb-2") }
pub fn TW::p_2(self : TW) -> TW { self.add("p-2") }
pub fn TW::px_2(self : TW) -> TW { self.add("px-2") }
pub fn TW::py_2(self : TW) -> TW { self.add("py-2") }
pub fn TW::pt_2(self : TW) -> TW { self.add("pt-2") }
pub fn TW::pb_2(self : TW) -> TW { self.add("pb-2") }
pub fn TW::m_4(self : TW) -> TW { self.add("m-4") }
pub fn TW::mx_4(self : TW) -> TW { self.add("mx-4") }
pub fn TW::my_4(self : TW) -> TW { self.add("my-4") }
pub fn TW::mt_4(self : TW) -> TW { self.add("mt-4") }
pub fn TW::mb_4(self : TW) -> TW { self.add("mb-4") }
pub fn TW::p_4(self : TW) -> TW { self.add("p-4") }
pub fn TW::px_4(self : TW) -> TW { self.add("px-4") }
pub fn TW::py_4(self : TW) -> TW { self.add("py-4") }
pub fn TW::pt_4(self : TW) -> TW { self.add("pt-4") }
pub fn TW::pb_4(self : TW) -> TW { self.add("pb-4") }
pub fn TW::m_6(self : TW) -> TW { self.add("m-6") }
pub fn TW::mx_6(self : TW) -> TW { self.add("mx-6") }
pub fn TW::my_6(self : TW) -> TW { self.add("my-6") }
pub fn TW::mt_6(self : TW) -> TW { self.add("mt-6") }
pub fn TW::mb_6(self : TW) -> TW { self.add("mb-6") }
pub fn TW::p_6(self : TW) -> TW { self.add("p-6") }
pub fn TW::px_6(self : TW) -> TW { self.add("px-6") }
pub fn TW::py_6(self : TW) -> TW { self.add("py-6") }
pub fn TW::pt_6(self : TW) -> TW { self.add("pt-6") }
pub fn TW::pb_6(self : TW) -> TW { self.add("pb-6") }
pub fn TW::m_8(self : TW) -> TW { self.add("m-8") }
pub fn TW::mx_8(self : TW) -> TW { self.add("mx-8") }
pub fn TW::my_8(self : TW) -> TW { self.add("my-8") }
pub fn TW::mt_8(self : TW) -> TW { self.add("mt-8") }
pub fn TW::mb_8(self : TW) -> TW { self.add("mb-8") }
pub fn TW::p_8(self : TW) -> TW { self.add("p-8") }
pub fn TW::px_8(self : TW) -> TW { self.add("px-8") }
pub fn TW::py_8(self : TW) -> TW { self.add("py-8") }
pub fn TW::pt_8(self : TW) -> TW { self.add("pt-8") }
pub fn TW::pb_8(self : TW) -> TW { self.add("pb-8") }
pub fn TW::text_red(self : TW) -> TW { self.add("text-red") }
pub fn TW::bg_red(self : TW) -> TW { self.add("bg-red") }
pub fn TW::text_blue(self : TW) -> TW { self.add("text-blue") }
pub fn TW::bg_blue(self : TW) -> TW { self.add("bg-blue") }
pub fn TW::text_green(self : TW) -> TW { self.add("text-green") }
pub fn TW::bg_green(self : TW) -> TW { self.add("bg-green") }
pub fn TW::text_gray(self : TW) -> TW { self.add("text-gray") }
pub fn TW::bg_gray(self : TW) -> TW { self.add("bg-gray") }
pub fn TW::text_zinc(self : TW) -> TW { self.add("text-zinc") }
pub fn TW::bg_zinc(self : TW) -> TW { self.add("bg-zinc") }
pub fn TW::text_white(self : TW) -> TW { self.add("text-white") }
pub fn TW::bg_white(self : TW) -> TW { self.add("bg-white") }
pub fn TW::flex(self : TW) -> TW { self.add("flex") }
pub fn TW::inline_flex(self : TW) -> TW { self.add("inline-flex") }
pub fn TW::grid(self : TW) -> TW { self.add("grid") }
pub fn TW::hidden(self : TW) -> TW { self.add("hidden") }
pub fn TW::flex_row(self : TW) -> TW { self.add("flex-row") }
pub fn TW::flex_col(self : TW) -> TW { self.add("flex-col") }
pub fn TW::items_center(self : TW) -> TW { self.add("items-center") }
pub fn TW::justify_center(self : TW) -> TW { self.add("justify-center") }
pub fn TW::justify_between(self : TW) -> TW { self.add("justify-between") }
pub fn TW::gap_2(self : TW) -> TW { self.add("gap-2") }
pub fn TW::gap_4(self : TW) -> TW { self.add("gap-4") }
pub fn TW::w_full(self : TW) -> TW { self.add("w-full") }
pub fn TW::h_screen(self : TW) -> TW { self.add("h-screen") }
pub fn TW::text_sm(self : TW) -> TW { self.add("text-sm") }
pub fn TW::text_lg(self : TW) -> TW { self.add("text-lg") }
pub fn TW::text_xl(self : TW) -> TW { self.add("text-xl") }
pub fn TW::font_bold(self : TW) -> TW { self.add("font-bold") }
pub fn TW::text_center(self : TW) -> TW { self.add("text-center") }
pub fn TW::border(self : TW) -> TW { self.add("border") }
pub fn TW::rounded(self : TW) -> TW { self.add("rounded") }
pub fn TW::rounded_lg(self : TW) -> TW { self.add("rounded-lg") }
pub fn TW::shadow(self : TW) -> TW { self.add("shadow") }

