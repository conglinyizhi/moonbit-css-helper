pub struct TW { classes : Array[String] }

pub fn tw() -> TW { { classes: [] } }

pub fn add(self : TW, c : String) -> TW {
  self.classes.push(c)
  self
}

pub fn class(self : TW) -> String { self.classes.join(" ") }

pub fn m_0(self : TW) -> TW { self.add("m-0") }
pub fn mx_0(self : TW) -> TW { self.add("mx-0") }
pub fn my_0(self : TW) -> TW { self.add("my-0") }
pub fn mt_0(self : TW) -> TW { self.add("mt-0") }
pub fn mb_0(self : TW) -> TW { self.add("mb-0") }
pub fn p_0(self : TW) -> TW { self.add("p-0") }
pub fn px_0(self : TW) -> TW { self.add("px-0") }
pub fn py_0(self : TW) -> TW { self.add("py-0") }
pub fn pt_0(self : TW) -> TW { self.add("pt-0") }
pub fn pb_0(self : TW) -> TW { self.add("pb-0") }
pub fn m_1(self : TW) -> TW { self.add("m-1") }
pub fn mx_1(self : TW) -> TW { self.add("mx-1") }
pub fn my_1(self : TW) -> TW { self.add("my-1") }
pub fn mt_1(self : TW) -> TW { self.add("mt-1") }
pub fn mb_1(self : TW) -> TW { self.add("mb-1") }
pub fn p_1(self : TW) -> TW { self.add("p-1") }
pub fn px_1(self : TW) -> TW { self.add("px-1") }
pub fn py_1(self : TW) -> TW { self.add("py-1") }
pub fn pt_1(self : TW) -> TW { self.add("pt-1") }
pub fn pb_1(self : TW) -> TW { self.add("pb-1") }
pub fn m_2(self : TW) -> TW { self.add("m-2") }
pub fn mx_2(self : TW) -> TW { self.add("mx-2") }
pub fn my_2(self : TW) -> TW { self.add("my-2") }
pub fn mt_2(self : TW) -> TW { self.add("mt-2") }
pub fn mb_2(self : TW) -> TW { self.add("mb-2") }
pub fn p_2(self : TW) -> TW { self.add("p-2") }
pub fn px_2(self : TW) -> TW { self.add("px-2") }
pub fn py_2(self : TW) -> TW { self.add("py-2") }
pub fn pt_2(self : TW) -> TW { self.add("pt-2") }
pub fn pb_2(self : TW) -> TW { self.add("pb-2") }
pub fn m_4(self : TW) -> TW { self.add("m-4") }
pub fn mx_4(self : TW) -> TW { self.add("mx-4") }
pub fn my_4(self : TW) -> TW { self.add("my-4") }
pub fn mt_4(self : TW) -> TW { self.add("mt-4") }
pub fn mb_4(self : TW) -> TW { self.add("mb-4") }
pub fn p_4(self : TW) -> TW { self.add("p-4") }
pub fn px_4(self : TW) -> TW { self.add("px-4") }
pub fn py_4(self : TW) -> TW { self.add("py-4") }
pub fn pt_4(self : TW) -> TW { self.add("pt-4") }
pub fn pb_4(self : TW) -> TW { self.add("pb-4") }
pub fn m_6(self : TW) -> TW { self.add("m-6") }
pub fn mx_6(self : TW) -> TW { self.add("mx-6") }
pub fn my_6(self : TW) -> TW { self.add("my-6") }
pub fn mt_6(self : TW) -> TW { self.add("mt-6") }
pub fn mb_6(self : TW) -> TW { self.add("mb-6") }
pub fn p_6(self : TW) -> TW { self.add("p-6") }
pub fn px_6(self : TW) -> TW { self.add("px-6") }
pub fn py_6(self : TW) -> TW { self.add("py-6") }
pub fn pt_6(self : TW) -> TW { self.add("pt-6") }
pub fn pb_6(self : TW) -> TW { self.add("pb-6") }
pub fn m_8(self : TW) -> TW { self.add("m-8") }
pub fn mx_8(self : TW) -> TW { self.add("mx-8") }
pub fn my_8(self : TW) -> TW { self.add("my-8") }
pub fn mt_8(self : TW) -> TW { self.add("mt-8") }
pub fn mb_8(self : TW) -> TW { self.add("mb-8") }
pub fn p_8(self : TW) -> TW { self.add("p-8") }
pub fn px_8(self : TW) -> TW { self.add("px-8") }
pub fn py_8(self : TW) -> TW { self.add("py-8") }
pub fn pt_8(self : TW) -> TW { self.add("pt-8") }
pub fn pb_8(self : TW) -> TW { self.add("pb-8") }
pub fn text_red(self : TW) -> TW { self.add("text-red") }
pub fn bg_red(self : TW) -> TW { self.add("bg-red") }
pub fn text_blue(self : TW) -> TW { self.add("text-blue") }
pub fn bg_blue(self : TW) -> TW { self.add("bg-blue") }
pub fn text_green(self : TW) -> TW { self.add("text-green") }
pub fn bg_green(self : TW) -> TW { self.add("bg-green") }
pub fn text_gray(self : TW) -> TW { self.add("text-gray") }
pub fn bg_gray(self : TW) -> TW { self.add("bg-gray") }
pub fn text_zinc(self : TW) -> TW { self.add("text-zinc") }
pub fn bg_zinc(self : TW) -> TW { self.add("bg-zinc") }
pub fn text_white(self : TW) -> TW { self.add("text-white") }
pub fn bg_white(self : TW) -> TW { self.add("bg-white") }
pub fn flex(self : TW) -> TW { self.add("flex") }
pub fn inline_flex(self : TW) -> TW { self.add("inline-flex") }
pub fn grid(self : TW) -> TW { self.add("grid") }
pub fn hidden(self : TW) -> TW { self.add("hidden") }
pub fn flex_row(self : TW) -> TW { self.add("flex-row") }
pub fn flex_col(self : TW) -> TW { self.add("flex-col") }
pub fn items_center(self : TW) -> TW { self.add("items-center") }
pub fn justify_center(self : TW) -> TW { self.add("justify-center") }
pub fn justify_between(self : TW) -> TW { self.add("justify-between") }
pub fn gap_2(self : TW) -> TW { self.add("gap-2") }
pub fn gap_4(self : TW) -> TW { self.add("gap-4") }
pub fn w_full(self : TW) -> TW { self.add("w-full") }
pub fn h_screen(self : TW) -> TW { self.add("h-screen") }
pub fn text_sm(self : TW) -> TW { self.add("text-sm") }
pub fn text_lg(self : TW) -> TW { self.add("text-lg") }
pub fn text_xl(self : TW) -> TW { self.add("text-xl") }
pub fn font_bold(self : TW) -> TW { self.add("font-bold") }
pub fn text_center(self : TW) -> TW { self.add("text-center") }
pub fn border(self : TW) -> TW { self.add("border") }
pub fn rounded(self : TW) -> TW { self.add("rounded") }
pub fn rounded_lg(self : TW) -> TW { self.add("rounded-lg") }
pub fn shadow(self : TW) -> TW { self.add("shadow") }

