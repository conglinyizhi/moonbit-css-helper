class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function _M0TPB3MapGsRPB5ArrayGsEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRPB5ArrayGsEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0DTPC16option6OptionGRPB5ArrayGsEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGsEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGsEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGsEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGsEE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0TP312conglinyizhi20moonbit__css__helper4core6Engine(param0, param1, param2, param3) {
  this.name_fn = param0;
  this.supports_fn = param1;
  this.compile_fn = param2;
  this.compile_imports_fn = param3;
}
function _M0TP312conglinyizhi20moonbit__css__helper4core7Rabbita(param0) {
  this.engines = param0;
}
function _M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper4core6EngineRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper4core6EngineRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper4core6EngineRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper4core6EngineRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error68conglinyizhi_2fmoonbit__css__helper_2fcore_2eRabbitaError_2eNoEngine(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error68conglinyizhi_2fmoonbit__css__helper_2fcore_2eRabbitaError_2eNoEngine.prototype.$tag = 2;
function _M0DTPC15error5Error72conglinyizhi_2fmoonbit__css__helper_2fcore_2eRabbitaError_2eEngineFailed(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15error5Error72conglinyizhi_2fmoonbit__css__helper_2fcore_2eRabbitaError_2eEngineFailed.prototype.$tag = 1;
function _M0DTPC15error5Error77conglinyizhi_2fmoonbit__css__helper_2fcore_2eRabbitaError_2eUnsupportedSyntax(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error77conglinyizhi_2fmoonbit__css__helper_2fcore_2eRabbitaError_2eUnsupportedSyntax.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok.prototype.$tag = 1;
function _M0TP312conglinyizhi20moonbit__css__helper13backend__scss6Parser(param0, param1) {
  this.toks = param0;
  this.pos = param1;
}
function _M0TPB8MutLocalGRPB5ArrayGsEE(param0) {
  this.val = param0;
}
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node7RuleSet(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node7RuleSet.prototype.$tag = 0;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node4Decl(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node4Decl.prototype.$tag = 1;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node6VarDef(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node6VarDef.prototype.$tag = 2;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node8MixinDef(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node8MixinDef.prototype.$tag = 3;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node9MixinCall(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node9MixinCall.prototype.$tag = 4;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node7Content() {}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node7Content.prototype.$tag = 5;
const _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node7Content__ = new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node7Content();
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node2If(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node2If.prototype.$tag = 6;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node3For(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node3For.prototype.$tag = 7;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node4Each(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node4Each.prototype.$tag = 8;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node5While(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node5While.prototype.$tag = 9;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node6Import(param0) {
  this._0 = param0;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node6Import.prototype.$tag = 10;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node6AtRule(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node6AtRule.prototype.$tag = 11;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node3Raw(param0) {
  this._0 = param0;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node3Raw.prototype.$tag = 12;
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGRPC16string10StringViewE(param0) {
  this.val = param0;
}
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal4NumV(param0) {
  this._0 = param0;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal4NumV.prototype.$tag = 0;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal5BoolV(param0) {
  this._0 = param0;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal5BoolV.prototype.$tag = 1;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal4StrV(param0) {
  this._0 = param0;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal4StrV.prototype.$tag = 2;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal4NilV() {}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal4NilV.prototype.$tag = 3;
const _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal4NilV__ = new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal4NilV();
function _M0TPB8MutLocalGRP312conglinyizhi20moonbit__css__helper13backend__scss7CondValE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGUsRPB5ArrayGsEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB8MutLocalGRPB5ArrayGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeEE(param0) {
  this.val = param0;
}
function _M0TP312conglinyizhi20moonbit__css__helper13backend__scss5Mixin(param0, param1) {
  this.params = param0;
  this.body = param1;
}
function _M0TP312conglinyizhi20moonbit__css__helper13backend__scss3Env(param0, param1) {
  this.scopes = param0;
  this.mixins = param1;
}
function _M0TPB9ArrayViewGUsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16result6ResultGRPB5ArrayGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeERP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeERP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRPB5ArrayGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeERP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRPB5ArrayGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeERP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok.prototype.$tag = 1;
function _M0TP312conglinyizhi20moonbit__css__helper13backend__less10LessParser(param0, param1) {
  this.toks = param0;
  this.pos = param1;
}
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode7RuleSet(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode7RuleSet.prototype.$tag = 0;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode4Decl(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode4Decl.prototype.$tag = 1;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode6VarDef(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode6VarDef.prototype.$tag = 2;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode8MixinDef(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode8MixinDef.prototype.$tag = 3;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode9MixinCall(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode9MixinCall.prototype.$tag = 4;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode6AtRule(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode6AtRule.prototype.$tag = 5;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode6Import(param0) {
  this._0 = param0;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode6Import.prototype.$tag = 6;
function _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode3Raw(param0) {
  this._0 = param0;
}
_M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode3Raw.prototype.$tag = 7;
function _M0TPB8MutLocalGRPB13StringBuilderE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGdE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGdE4None() {}
_M0DTPC16option6OptionGdE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGdE4None__ = new _M0DTPC16option6OptionGdE4None();
function _M0DTPC16option6OptionGdE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGdE4Some.prototype.$tag = 1;
function _M0TPB8MutLocalGRPB5ArrayGUsRPB5ArrayGsEEEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGRPB5ArrayGUsURPB5ArrayGsERPB5ArrayGRP312conglinyizhi20moonbit__css__helper13backend__less8LessNodeEEEEE(param0) {
  this.val = param0;
}
function _M0TP312conglinyizhi20moonbit__css__helper13backend__less3Env(param0, param1, param2) {
  this.vars = param0;
  this.mixins = param1;
  this.parent = param2;
}
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0MPC16string10StringView4trimN7_2abindS6734 = "\t\n\r ";
const _M0MPC16string6String4trimN7_2abindS6835 = "\t\n\r ";
const _M0MPB4Iter4nextN6constrS9813GRPC16string10StringViewE = 0;
const _M0MPB4Iter4nextN6constrS9814GRPC16string10StringViewE = 0;
const _M0MPB4Iter4nextN6constrS9813GcE = 0;
const _M0MPB4Iter4nextN6constrS9814GcE = 0;
const _M0MPB4Iter3newN6constrS9821GRPC16string10StringViewE = 0;
const _M0MPB4Iter3newN6constrS9821GcE = 0;
const _M0MPC16string10StringView4findN6constrS9823 = 0;
const _M0FPB4seed = _M0FPB12random__seed();
function _M0FPC15abort5abortGkE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGRPC16string10StringViewE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0FPB13consume4__acc(acc, input) {
  return Math.imul(_M0FPB4rotl((acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC13int3Int16unsafe__to__char(self) {
  return self;
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return self >= 55296 && self <= 56319;
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return self >= 56320 && self <= 57343;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MPC16uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return _M0MPC16uint166UInt1616unsafe__to__char(c1);
  }
}
function _M0MPC16string10StringView6length(self) {
  return self.end - self.start | 0;
}
function _M0MPC16string10StringView11sub_2einner(self, start, end) {
  const str_len = self.str.length;
  let abs_end;
  if (end === undefined) {
    abs_end = self.end;
  } else {
    const _Some = end;
    const _end = _Some;
    abs_end = self.start + _end | 0;
  }
  const abs_start = self.start + start | 0;
  if (abs_start >= self.start && (abs_start <= abs_end && abs_end <= self.end)) {
    if (abs_start < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_start))) {
      } else {
        $panic();
      }
    }
    if (abs_end < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_end))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self.str, abs_start, abs_end);
  } else {
    return $panic();
  }
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGRPC16string10StringViewE("Invalid index for View");
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0IPC16uint166UInt16PB3Sub3sub(self, that) {
  return (self - that | 0) & 65535;
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0IPC16uint166UInt16PB2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0MPC16uint166UInt168to__uint(self) {
  return self;
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGbE(x, y) {
  return !(x === y);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0MPC16string10StringView4data(self) {
  return self.str;
}
function _M0MPC16string10StringView13start__offset(self) {
  return self.start;
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0MPB4Iter4nextGRPC16string10StringViewE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9814GRPC16string10StringViewE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9813GRPC16string10StringViewE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9814GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9813GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0FPB22index__out__of__boundsGkE(len, index) {
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(60);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "index out of bounds: the len is from 0 to ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, len);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " but the index is ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, index);
  return _M0FPC15abort5abortGkE(_M0MPB13StringBuilder10to__string(_string_builder));
}
function _M0MPC16string10StringView2at(self, index) {
  return index >= 0 && index < (self.end - self.start | 0) ? self.str.charCodeAt(self.start + index | 0) : _M0FPB22index__out__of__boundsGkE(self.end - self.start | 0, index);
}
function _M0MPB4Iter3newGRPC16string10StringViewE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9821GRPC16string10StringViewE;
  }
  return new _M0TPB4IterGRPC16string10StringViewE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9821GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(self.charCodeAt(self_off + i | 0), other.charCodeAt(other_off + i | 0))) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? new _M0TPC16string10StringView(self, start_offset, end_offset$2) : _M0FPC15abort5abortGRPC16string10StringViewE("Invalid index for View");
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return _M0FPC15abort5abortGOiE("Invalid start index");
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0MPB13StringBuilder11write__iter(self, iter) {
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(iter);
    if (_bind === -1) {
      return;
    } else {
      const _Some = _bind;
      const _ch = _Some;
      _M0IPB13StringBuilderPB6Logger11write__char(self, _ch);
      continue;
    }
  }
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < candidate_end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), first) && _M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos + last_offset | 0), last)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      if (_M0IPC16uint166UInt16PB2Eq10not__equal(left.charCodeAt(left_start + i | 0), right.charCodeAt(right_start + i | 0))) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB29two__anchor__should__fallback(failures, scanned) {
  if (failures > 64) {
    return true;
  } else {
    if (8 === 0) {
      $panic();
    }
    return failures > (4 + (scanned / 8 | 0) | 0);
  }
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const pattern_start = _M0MPC16string10StringView13start__offset(pattern);
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp = target_start;
  let _tmp$2 = 0;
  while (true) {
    const pos = _tmp;
    const failures = _tmp$2;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(_M0MPC16string10StringView4data(target), pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(_M0MPC16string10StringView4data(target), found + 1 | 0, _M0MPC16string10StringView4data(pattern), pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (_M0FPB29two__anchor__should__fallback(failures$2, scanned)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp = found + 1 | 0;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), code)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const found = _M0FPB30find__code__unit__from__string(_M0MPC16string10StringView4data(target), target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS9823;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0MPC16string6String4find(self, str) {
  return _M0MPC16string10StringView4find(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string10StringView11has__suffix(self, str) {
  const self_len = self.end - self.start | 0;
  const str_len = str.end - str.start | 0;
  if (str_len <= self_len) {
    const start = self_len - str_len | 0;
    return str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + start | 0), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start + start | 0, str.str, str.start, str_len) : false;
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__suffix(self, str) {
  return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView11has__prefix(self, str) {
  const str_len = str.end - str.start | 0;
  return str_len <= (self.end - self.start | 0) ? (str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start, str.str, str.start, str_len) : false) : false;
}
function _M0MPC16string6String11has__prefix(self, str) {
  return _M0MPC16string10StringView11has__prefix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC15array5Array11new_2einnerGsE(capacity) {
  return [];
}
function _M0MPC15array5Array4pushGsE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRPB5ArrayGsEE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(str.charCodeAt(i), code)) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC16string10StringView8contains(self, str) {
  const _bind = str.end - str.start | 0;
  switch (_bind) {
    case 0: {
      return true;
    }
    case 1: {
      return _M0MPC16string10StringView20contains__code__unit(self, str.str.charCodeAt(str.start));
    }
    default: {
      const _bind$2 = _M0MPC16string10StringView4find(self, str);
      return !(_bind$2 === undefined);
    }
  }
}
function _M0MPC16string6String8contains(self, str) {
  return _M0MPC16string10StringView8contains(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC14char4Char8to__uint(self) {
  return self;
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind = chars.str;
  const _bind$2 = chars.start;
  const _bind$3 = chars.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
          break _L;
        }
      }
      const code = _M0MPC14char4Char8to__uint(_decoded_char);
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$4 = code >>> 5 | 0;
        switch (_bind$4) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind = code >>> 5 | 0;
    switch (_bind) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos)))) {
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = end;
  while (true) {
    const pos = _tmp;
    if (pos > start && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos - 1 | 0)))) {
      _tmp = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < (len - 1 | 0)) {
                if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), high$2)) {
                  if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + (i + 1 | 0) | 0), low)) {
                    return true;
                  }
                  _tmp = i + 2 | 0;
                  continue;
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$2 = x.str;
      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind;
        _tmp$3 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$2, _tmp$3, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind = _M0FPB23build__ascii__char__set(chars);
  if (_bind === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string10StringView4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string10StringView4trimN7_2abindS6734, 0, _M0MPC16string10StringView4trimN7_2abindS6734.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string10StringView12trim_2einner(self, chars);
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6835, 0, _M0MPC16string6String4trimN7_2abindS6835.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return new _M0TPB4IterGRPC16string10StringViewE(() => {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0MPB4Iter3mapGRPC16string10StringViewsE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    const _bind = remaining.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$2 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$2;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  }, undefined);
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
}
function _M0MPB4Iter9to__arrayGsE(self) {
  const _bind = self.size_hint;
  let result;
  if (_bind === undefined) {
    result = [];
  } else {
    const _Some = _bind;
    const _n = _Some;
    result = _M0MPC15array5Array11new_2einnerGsE(_n);
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGsE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0MPC16string6String7replace(self, old, new_) {
  const _bind = _M0MPC16string6String4find(self, old);
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _end = _Some;
    const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
    _M0MPB13StringBuilder11write__iter(_self, _M0MPC16string10StringView4iter(_M0MPC16string6String12view_2einner(self, 0, _end)));
    _M0MPB13StringBuilder11write__iter(_self, _M0MPC16string10StringView4iter(new_));
    _M0MPB13StringBuilder11write__iter(_self, _M0MPC16string10StringView4iter(_M0MPC16string6String12view_2einner(self, _end + (old.end - old.start | 0) | 0, undefined)));
    return _M0MPB13StringBuilder10to__string(_self);
  }
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC16option6Option6unwrapGRPB5EntryGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15array9ArrayView9to__ownedGsE(self) {
  const len = self.end - self.start | 0;
  return len === 0 ? [] : _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self.buf, len, len, self.start, 0);
}
function _M0FPB21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRPB5ArrayGsEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRPB5ArrayGsEE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB8new__mapGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC13int3Int3max(self, other) {
  return self > other ? self : other;
}
function _M0MPB3Map20add__entry__to__tailGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinEE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinEE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB5ArrayGsEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPB5ArrayGsEE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPB5ArrayGsEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPB5ArrayGsEE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB5ArrayGsEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB5ArrayGsEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPB5ArrayGsEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB5ArrayGsEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB5ArrayGsEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPB5ArrayGsEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB5ArrayGsEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRPB5ArrayGsEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB5ArrayGsEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRPB5ArrayGsEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRPB5ArrayGsEE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB5ArrayGsEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB5ArrayGsEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(_entry.value);
      }
      if (i > _entry.psl) {
        return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC15array5Array3mapGssE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPB4Iter6filterGRPC16string10StringViewE(self, f) {
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    while (true) {
      const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
      if (_bind === undefined) {
        return undefined;
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (f(_x)) {
          return _x;
        }
        continue;
      }
    }
  }, undefined);
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0MPC16double6Double5floor(_tmp) {
  return Math.floor(_tmp);
}
function _M0MPC15array5Array12view_2einnerGsE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind = self;
    const _bind$2 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGsE(_bind, start, start + _bind$2 | 0);
  } else {
    return _M0FPC15abort5abortGRPC16string10StringViewE("View index out of bounds");
  }
}
function _M0MPC15array5Array9is__emptyGRPB3MapGsRPB5ArrayGsEEE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array11unsafe__popGRPB3MapGsRPB5ArrayGsEEE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGRPB3MapGsRPB5ArrayGsEEE(self) {
  if (_M0MPC15array5Array9is__emptyGRPB3MapGsRPB5ArrayGsEEE(self)) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGRPB3MapGsRPB5ArrayGsEEE(self);
    return v;
  }
}
function _M0MPC15array5Array2atGUisEE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MP312conglinyizhi20moonbit__css__helper4core6Engine3new(name, supports, compile, compile_imports) {
  return new _M0TP312conglinyizhi20moonbit__css__helper4core6Engine(name, supports, compile, compile_imports);
}
function _M0MP312conglinyizhi20moonbit__css__helper4core6Engine8supports(self, fmt) {
  const _func = self.supports_fn;
  return _func(fmt);
}
function _M0MP312conglinyizhi20moonbit__css__helper4core6Engine7compile(self, source) {
  const _func = self.compile_fn;
  return _func(source);
}
function _M0MP312conglinyizhi20moonbit__css__helper4core7Rabbita3new(engines) {
  return new _M0TP312conglinyizhi20moonbit__css__helper4core7Rabbita(engines);
}
function _M0MP312conglinyizhi20moonbit__css__helper4core7Rabbita4pick(self, fmt) {
  const _bind = self.engines;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const e = _bind[_];
      if (_M0MP312conglinyizhi20moonbit__css__helper4core6Engine8supports(e, fmt)) {
        return new _M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper4core6EngineRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(e);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper4core6EngineRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE3Err(new _M0DTPC15error5Error68conglinyizhi_2fmoonbit__css__helper_2fcore_2eRabbitaError_2eNoEngine(fmt));
}
function _M0MP312conglinyizhi20moonbit__css__helper4core7Rabbita21compile__with__format(self, source, fmt) {
  const _bind = _M0MP312conglinyizhi20moonbit__css__helper4core7Rabbita4pick(self, fmt);
  let engine;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    engine = _ok._0;
  } else {
    return _bind;
  }
  return _M0MP312conglinyizhi20moonbit__css__helper4core6Engine7compile(engine, source);
}
function _M0FP312conglinyizhi20moonbit__css__helper12backend__css11css__engine() {
  return _M0MP312conglinyizhi20moonbit__css__helper4core6Engine3new(() => "css", (fmt) => {
    if (fmt === 2) {
      return true;
    } else {
      return false;
    }
  }, (source) => new _M0DTPC16result6ResultGsRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(source), (source, _read) => new _M0DTPC16result6ResultGsRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(source));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss9is__alpha(u) {
  return u >= 65 && u <= 90 || u >= 97 && u <= 122;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss9is__digit(u) {
  return u >= 48 && u <= 57;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16is__ident__start(u) {
  return u >= 65 && u <= 90 || (u >= 97 && u <= 122 || _M0IPC16uint166UInt16PB2Eq5equal(u, 95));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss15is__ident__char(u) {
  return _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16is__ident__start(u) || (_M0FP312conglinyizhi20moonbit__css__helper13backend__scss9is__digit(u) || _M0IPC16uint166UInt16PB2Eq5equal(u, 45));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6is__ws(u) {
  return _M0IPC16uint166UInt16PB2Eq5equal(u, 32) || (_M0IPC16uint166UInt16PB2Eq5equal(u, 9) || (_M0IPC16uint166UInt16PB2Eq5equal(u, 10) || (_M0IPC16uint166UInt16PB2Eq5equal(u, 13) || _M0IPC16uint166UInt16PB2Eq5equal(u, 12))));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss8tokenize(src) {
  const toks = [];
  const n = src.length;
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < n) {
      const _tmp = i.val;
      const c = _tmp >>> 0 < src.length ? src.charCodeAt(_tmp) : $oob();
      if (_M0FP312conglinyizhi20moonbit__css__helper13backend__scss6is__ws(c)) {
        i.val = i.val + 1 | 0;
        continue;
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, 47) && (i.val + 1 | 0) < n) {
        const _tmp$2 = i.val + 1 | 0;
        if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$2 >>> 0 < src.length ? src.charCodeAt(_tmp$2) : $oob(), 47)) {
          while (true) {
            let _tmp$3;
            if (i.val < n) {
              const _tmp$4 = i.val;
              _tmp$3 = _M0IPC16uint166UInt16PB2Eq10not__equal(_tmp$4 >>> 0 < src.length ? src.charCodeAt(_tmp$4) : $oob(), 10);
            } else {
              _tmp$3 = false;
            }
            if (_tmp$3) {
              i.val = i.val + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          continue;
        }
        const _tmp$3 = i.val + 1 | 0;
        if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$3 >>> 0 < src.length ? src.charCodeAt(_tmp$3) : $oob(), 42)) {
          i.val = i.val + 2 | 0;
          while (true) {
            let _tmp$4;
            if ((i.val + 1 | 0) < n) {
              let _tmp$5;
              const _tmp$6 = i.val;
              if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$6 >>> 0 < src.length ? src.charCodeAt(_tmp$6) : $oob(), 42)) {
                const _tmp$7 = i.val + 1 | 0;
                _tmp$5 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$7 >>> 0 < src.length ? src.charCodeAt(_tmp$7) : $oob(), 47);
              } else {
                _tmp$5 = false;
              }
              _tmp$4 = !_tmp$5;
            } else {
              _tmp$4 = false;
            }
            if (_tmp$4) {
              i.val = i.val + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          i.val = i.val + 2 | 0;
          continue;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, 34) || _M0IPC16uint166UInt16PB2Eq5equal(c, 39)) {
        const q = c;
        const j = new _M0TPB8MutLocalGiE(i.val + 1 | 0);
        while (true) {
          let _tmp$2;
          if (j.val < n) {
            const _tmp$3 = j.val;
            _tmp$2 = _M0IPC16uint166UInt16PB2Eq10not__equal(_tmp$3 >>> 0 < src.length ? src.charCodeAt(_tmp$3) : $oob(), q);
          } else {
            _tmp$2 = false;
          }
          if (_tmp$2) {
            j.val = j.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (j.val < n) {
          j.val = j.val + 1 | 0;
        }
        _M0MPC15array5Array4pushGsE(toks, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(src, i.val, j.val)));
        i.val = j.val;
        continue;
      }
      let _tmp$2;
      if (_M0FP312conglinyizhi20moonbit__css__helper13backend__scss9is__digit(c)) {
        _tmp$2 = true;
      } else {
        let _tmp$3;
        if (_M0IPC16uint166UInt16PB2Eq5equal(c, 46)) {
          let _tmp$4;
          if ((i.val + 1 | 0) < n) {
            const _tmp$5 = i.val + 1 | 0;
            _tmp$4 = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss9is__digit(_tmp$5 >>> 0 < src.length ? src.charCodeAt(_tmp$5) : $oob());
          } else {
            _tmp$4 = false;
          }
          _tmp$3 = _tmp$4;
        } else {
          _tmp$3 = false;
        }
        _tmp$2 = _tmp$3;
      }
      if (_tmp$2) {
        const j = new _M0TPB8MutLocalGiE(i.val);
        while (true) {
          let _tmp$3;
          if (j.val < n) {
            let _tmp$4;
            const _tmp$5 = j.val;
            if (_M0FP312conglinyizhi20moonbit__css__helper13backend__scss9is__digit(_tmp$5 >>> 0 < src.length ? src.charCodeAt(_tmp$5) : $oob())) {
              _tmp$4 = true;
            } else {
              let _tmp$6;
              const _tmp$7 = j.val;
              if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$7 >>> 0 < src.length ? src.charCodeAt(_tmp$7) : $oob(), 46)) {
                _tmp$6 = true;
              } else {
                let _tmp$8;
                const _tmp$9 = j.val;
                if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$9 >>> 0 < src.length ? src.charCodeAt(_tmp$9) : $oob(), 37)) {
                  _tmp$8 = true;
                } else {
                  let _tmp$10;
                  const _tmp$11 = j.val;
                  if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$11 >>> 0 < src.length ? src.charCodeAt(_tmp$11) : $oob(), 101)) {
                    _tmp$10 = true;
                  } else {
                    const _tmp$12 = j.val;
                    _tmp$10 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$12 >>> 0 < src.length ? src.charCodeAt(_tmp$12) : $oob(), 69);
                  }
                  _tmp$8 = _tmp$10;
                }
                _tmp$6 = _tmp$8;
              }
              _tmp$4 = _tmp$6;
            }
            _tmp$3 = _tmp$4;
          } else {
            _tmp$3 = false;
          }
          if (_tmp$3) {
            j.val = j.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        while (true) {
          let _tmp$3;
          if (j.val < n) {
            const _tmp$4 = j.val;
            _tmp$3 = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss9is__alpha(_tmp$4 >>> 0 < src.length ? src.charCodeAt(_tmp$4) : $oob());
          } else {
            _tmp$3 = false;
          }
          if (_tmp$3) {
            j.val = j.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _M0MPC15array5Array4pushGsE(toks, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(src, i.val, j.val)));
        i.val = j.val;
        continue;
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, 36) || _M0IPC16uint166UInt16PB2Eq5equal(c, 64)) {
        const j = new _M0TPB8MutLocalGiE(i.val + 1 | 0);
        while (true) {
          let _tmp$3;
          if (j.val < n) {
            const _tmp$4 = j.val;
            _tmp$3 = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss15is__ident__char(_tmp$4 >>> 0 < src.length ? src.charCodeAt(_tmp$4) : $oob());
          } else {
            _tmp$3 = false;
          }
          if (_tmp$3) {
            j.val = j.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _M0MPC15array5Array4pushGsE(toks, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(src, i.val, j.val)));
        i.val = j.val;
        continue;
      }
      let _tmp$3;
      if ((i.val + 1 | 0) < n) {
        let _tmp$4;
        let _tmp$5;
        if (_M0IPC16uint166UInt16PB2Eq5equal(c, 61)) {
          let _tmp$6;
          const _tmp$7 = i.val + 1 | 0;
          if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$7 >>> 0 < src.length ? src.charCodeAt(_tmp$7) : $oob(), 61)) {
            _tmp$6 = true;
          } else {
            const _tmp$8 = i.val + 1 | 0;
            _tmp$6 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$8 >>> 0 < src.length ? src.charCodeAt(_tmp$8) : $oob(), 62);
          }
          _tmp$5 = _tmp$6;
        } else {
          _tmp$5 = false;
        }
        if (_tmp$5) {
          _tmp$4 = true;
        } else {
          let _tmp$6;
          let _tmp$7;
          if (_M0IPC16uint166UInt16PB2Eq5equal(c, 33)) {
            const _tmp$8 = i.val + 1 | 0;
            _tmp$7 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$8 >>> 0 < src.length ? src.charCodeAt(_tmp$8) : $oob(), 61);
          } else {
            _tmp$7 = false;
          }
          if (_tmp$7) {
            _tmp$6 = true;
          } else {
            let _tmp$8;
            let _tmp$9;
            if (_M0IPC16uint166UInt16PB2Eq5equal(c, 62)) {
              const _tmp$10 = i.val + 1 | 0;
              _tmp$9 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$10 >>> 0 < src.length ? src.charCodeAt(_tmp$10) : $oob(), 61);
            } else {
              _tmp$9 = false;
            }
            if (_tmp$9) {
              _tmp$8 = true;
            } else {
              let _tmp$10;
              if (_M0IPC16uint166UInt16PB2Eq5equal(c, 60)) {
                const _tmp$11 = i.val + 1 | 0;
                _tmp$10 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$11 >>> 0 < src.length ? src.charCodeAt(_tmp$11) : $oob(), 61);
              } else {
                _tmp$10 = false;
              }
              _tmp$8 = _tmp$10;
            }
            _tmp$6 = _tmp$8;
          }
          _tmp$4 = _tmp$6;
        }
        _tmp$3 = _tmp$4;
      } else {
        _tmp$3 = false;
      }
      if (_tmp$3) {
        _M0MPC15array5Array4pushGsE(toks, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(src, i.val, i.val + 2 | 0)));
        i.val = i.val + 2 | 0;
        continue;
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, 33)) {
        const j = new _M0TPB8MutLocalGiE(i.val + 1 | 0);
        while (true) {
          let _tmp$4;
          if (j.val < n) {
            const _tmp$5 = j.val;
            _tmp$4 = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss15is__ident__char(_tmp$5 >>> 0 < src.length ? src.charCodeAt(_tmp$5) : $oob());
          } else {
            _tmp$4 = false;
          }
          if (_tmp$4) {
            j.val = j.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _M0MPC15array5Array4pushGsE(toks, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(src, i.val, j.val)));
        i.val = j.val;
        continue;
      }
      let _tmp$4;
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, 35)) {
        let _tmp$5;
        if ((i.val + 1 | 0) < n) {
          const _tmp$6 = i.val + 1 | 0;
          _tmp$5 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$6 >>> 0 < src.length ? src.charCodeAt(_tmp$6) : $oob(), 123);
        } else {
          _tmp$5 = false;
        }
        _tmp$4 = _tmp$5;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        const j = new _M0TPB8MutLocalGiE(i.val + 2 | 0);
        while (true) {
          let _tmp$5;
          if (j.val < n) {
            const _tmp$6 = j.val;
            _tmp$5 = _M0IPC16uint166UInt16PB2Eq10not__equal(_tmp$6 >>> 0 < src.length ? src.charCodeAt(_tmp$6) : $oob(), 125);
          } else {
            _tmp$5 = false;
          }
          if (_tmp$5) {
            j.val = j.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        if (j.val < n) {
          j.val = j.val + 1 | 0;
        }
        _M0MPC15array5Array4pushGsE(toks, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(src, i.val, j.val)));
        i.val = j.val;
        continue;
      }
      if (_M0FP312conglinyizhi20moonbit__css__helper13backend__scss16is__ident__start(c) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 35) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 46) || (_M0IPC16uint166UInt16PB2Eq5equal(c, 37) || _M0IPC16uint166UInt16PB2Eq5equal(c, 38))))) {
        const j = new _M0TPB8MutLocalGiE(i.val);
        while (true) {
          let _tmp$5;
          if (j.val < n) {
            let _tmp$6;
            const _tmp$7 = j.val;
            if (_M0FP312conglinyizhi20moonbit__css__helper13backend__scss15is__ident__char(_tmp$7 >>> 0 < src.length ? src.charCodeAt(_tmp$7) : $oob())) {
              _tmp$6 = true;
            } else {
              let _tmp$8;
              const _tmp$9 = j.val;
              if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$9 >>> 0 < src.length ? src.charCodeAt(_tmp$9) : $oob(), 45)) {
                _tmp$8 = true;
              } else {
                let _tmp$10;
                const _tmp$11 = j.val;
                if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$11 >>> 0 < src.length ? src.charCodeAt(_tmp$11) : $oob(), 46)) {
                  _tmp$10 = true;
                } else {
                  let _tmp$12;
                  const _tmp$13 = j.val;
                  if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$13 >>> 0 < src.length ? src.charCodeAt(_tmp$13) : $oob(), 37)) {
                    _tmp$12 = true;
                  } else {
                    let _tmp$14;
                    const _tmp$15 = j.val;
                    if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$15 >>> 0 < src.length ? src.charCodeAt(_tmp$15) : $oob(), 38)) {
                      _tmp$14 = true;
                    } else {
                      let _tmp$16;
                      const _tmp$17 = j.val;
                      if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$17 >>> 0 < src.length ? src.charCodeAt(_tmp$17) : $oob(), 35)) {
                        let _tmp$18;
                        if ((j.val + 1 | 0) >= n) {
                          _tmp$18 = true;
                        } else {
                          const _tmp$19 = j.val + 1 | 0;
                          _tmp$18 = _M0IPC16uint166UInt16PB2Eq10not__equal(_tmp$19 >>> 0 < src.length ? src.charCodeAt(_tmp$19) : $oob(), 123);
                        }
                        _tmp$16 = _tmp$18;
                      } else {
                        _tmp$16 = false;
                      }
                      _tmp$14 = _tmp$16;
                    }
                    _tmp$12 = _tmp$14;
                  }
                  _tmp$10 = _tmp$12;
                }
                _tmp$8 = _tmp$10;
              }
              _tmp$6 = _tmp$8;
            }
            _tmp$5 = _tmp$6;
          } else {
            _tmp$5 = false;
          }
          if (_tmp$5) {
            j.val = j.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _M0MPC15array5Array4pushGsE(toks, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(src, i.val, j.val)));
        i.val = j.val;
        continue;
      }
      _M0MPC15array5Array4pushGsE(toks, _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(src, i.val, i.val + 1 | 0)));
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return toks;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser3new(toks) {
  return new _M0TP312conglinyizhi20moonbit__css__helper13backend__scss6Parser(toks, 0);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11tri__quotes(s) {
  const t = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(s, undefined));
  let _tmp;
  if (t.length >= 2) {
    let _tmp$2;
    let _tmp$3;
    if (_M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < t.length ? t.charCodeAt(0) : $oob(), 34)) {
      const _tmp$4 = t.length - 1 | 0;
      _tmp$3 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$4 >>> 0 < t.length ? t.charCodeAt(_tmp$4) : $oob(), 34);
    } else {
      _tmp$3 = false;
    }
    if (_tmp$3) {
      _tmp$2 = true;
    } else {
      let _tmp$4;
      if (_M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < t.length ? t.charCodeAt(0) : $oob(), 39)) {
        const _tmp$5 = t.length - 1 | 0;
        _tmp$4 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$5 >>> 0 < t.length ? t.charCodeAt(_tmp$5) : $oob(), 39);
      } else {
        _tmp$4 = false;
      }
      _tmp$2 = _tmp$4;
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    return _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(t, 1, t.length - 1 | 0));
  } else {
    return t;
  }
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self) {
  const t = _M0MPC15array5Array2atGUisEE(self.toks, self.pos);
  self.pos = self.pos + 1 | 0;
  return t;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser4peek(self) {
  return self.pos < self.toks.length ? _M0MPC15array5Array2atGUisEE(self.toks, self.pos) : undefined;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, tok) {
  let t;
  _L: {
    const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser4peek(self);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _t = _Some;
      if (_t === tok) {
        t = _t;
        break _L;
      } else {
        return;
      }
    }
  }
  self.pos = self.pos + 1 | 0;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser18read__until__brace(self) {
  const v = [];
  while (true) {
    const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser4peek(self);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === "{") {
        self.pos = self.pos + 1 | 0;
        break;
      } else {
        _M0MPC15array5Array4pushGsE(v, _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self));
      }
    }
    continue;
  }
  return v;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser16read__each__vars(self) {
  const vars = [];
  _L: while (true) {
    const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser4peek(self);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case "in": {
          break _L;
        }
        case ",": {
          self.pos = self.pos + 1 | 0;
          break;
        }
        default: {
          _M0MPC15array5Array4pushGsE(vars, _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self));
        }
      }
    }
    continue;
  }
  return vars;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser18read__invoke__args(self) {
  const out = [];
  const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser4peek(self);
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === "(") {
      self.pos = self.pos + 1 | 0;
      const cur = new _M0TPB8MutLocalGRPB5ArrayGsEE([]);
      _L: while (true) {
        const _bind$2 = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser4peek(self);
        if (_bind$2 === undefined) {
          break;
        } else {
          const _Some$2 = _bind$2;
          const _x$2 = _Some$2;
          switch (_x$2) {
            case ")": {
              self.pos = self.pos + 1 | 0;
              break _L;
            }
            case ",": {
              const _tmp = cur.val;
              const _bind$3 = " ";
              _M0MPC15array5Array4pushGsE(out, _M0MPC15array5Array4joinGsE(_tmp, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length)));
              self.pos = self.pos + 1 | 0;
              const fresh = [];
              cur.val = fresh;
              break;
            }
            default: {
              _M0MPC15array5Array4pushGsE(cur.val, _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self));
            }
          }
        }
        continue;
      }
      const _tmp = cur.val;
      const _bind$2 = " ";
      const last = _M0MPC15array5Array4joinGsE(_tmp, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
      if (last.length > 0) {
        _M0MPC15array5Array4pushGsE(out, last);
      }
    }
  }
  return out;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser12read__params(self) {
  const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser4peek(self);
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _x = _Some;
    if (_x === "(") {
      self.pos = self.pos + 1 | 0;
      const ps = [];
      const cur = new _M0TPB8MutLocalGRPB5ArrayGsEE([]);
      _L: while (true) {
        const _bind$2 = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser4peek(self);
        if (_bind$2 === undefined) {
          break;
        } else {
          const _Some$2 = _bind$2;
          const _x$2 = _Some$2;
          switch (_x$2) {
            case ")": {
              self.pos = self.pos + 1 | 0;
              const _tmp = cur.val;
              const _bind$3 = " ";
              _M0MPC15array5Array4pushGsE(ps, _M0MPC15array5Array4joinGsE(_tmp, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length)));
              break _L;
            }
            case ",": {
              self.pos = self.pos + 1 | 0;
              const _tmp$2 = cur.val;
              const _bind$4 = " ";
              _M0MPC15array5Array4pushGsE(ps, _M0MPC15array5Array4joinGsE(_tmp$2, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length)));
              const fresh = [];
              cur.val = fresh;
              break;
            }
            default: {
              _M0MPC15array5Array4pushGsE(cur.val, _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self));
            }
          }
        }
        continue;
      }
      return ps;
    }
  }
  return [];
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser11read__value(self) {
  const v = [];
  _L: while (true) {
    const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser4peek(self);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case ";": {
          self.pos = self.pos + 1 | 0;
          break _L;
        }
        case "}": {
          break _L;
        }
        default: {
          _M0MPC15array5Array4pushGsE(v, _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self));
        }
      }
    }
    continue;
  }
  return v;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss10has__colon(head) {
  const _bind = head.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const t = head[_];
      if (t === ":") {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11parse__decl(head) {
  const colon = new _M0TPB8MutLocalGiE(-1);
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < head.length) {
      if (_M0MPC15array5Array2atGUisEE(head, i.val) === ":") {
        colon.val = i.val;
        break;
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (colon.val < 0) {
    const _bind = " ";
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node3Raw(_M0MPC15array5Array4joinGsE(head, new _M0TPC16string10StringView(_bind, 0, _bind.length)));
  }
  const _tmp = _M0MPC15array5Array12view_2einnerGsE(head, 0, colon.val);
  const _bind = "";
  const name = _M0MPC15array9ArrayView4joinGsE(_tmp, new _M0TPC16string10StringView(_bind, 0, _bind.length));
  const value = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(head, colon.val + 1 | 0, undefined));
  return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node4Decl(name, value);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss10is__joiner(t) {
  if (t === ":") {
    return true;
  } else {
    let _tmp;
    if (t === ".") {
      _tmp = true;
    } else {
      let _tmp$2;
      if (t === "#") {
        _tmp$2 = true;
      } else {
        let _tmp$3;
        if (t === "@") {
          _tmp$3 = true;
        } else {
          let _tmp$4;
          if (t === "%") {
            _tmp$4 = true;
          } else {
            let _tmp$5;
            if (t === "&") {
              _tmp$5 = true;
            } else {
              let _tmp$6;
              if (t === ">") {
                _tmp$6 = true;
              } else {
                let _tmp$7;
                if (t === "+") {
                  _tmp$7 = true;
                } else {
                  let _tmp$8;
                  if (t === "~") {
                    _tmp$8 = true;
                  } else {
                    let _tmp$9;
                    if (t === "-") {
                      _tmp$9 = true;
                    } else {
                      let _tmp$10;
                      if (t === "[") {
                        _tmp$10 = true;
                      } else {
                        let _tmp$11;
                        if (t === "]") {
                          _tmp$11 = true;
                        } else {
                          const _bind = "#{";
                          _tmp$11 = _M0MPC16string6String11has__prefix(t, new _M0TPC16string10StringView(_bind, 0, _bind.length));
                        }
                        _tmp$10 = _tmp$11;
                      }
                      _tmp$9 = _tmp$10;
                    }
                    _tmp$8 = _tmp$9;
                  }
                  _tmp$7 = _tmp$8;
                }
                _tmp$6 = _tmp$7;
              }
              _tmp$5 = _tmp$6;
            }
            _tmp$4 = _tmp$5;
          }
          _tmp$3 = _tmp$4;
        }
        _tmp$2 = _tmp$3;
      }
      _tmp = _tmp$2;
    }
    return _tmp;
  }
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16is__joiner__char(u) {
  return _M0IPC16uint166UInt16PB2Eq5equal(u, 46) || (_M0IPC16uint166UInt16PB2Eq5equal(u, 58) || (_M0IPC16uint166UInt16PB2Eq5equal(u, 35) || (_M0IPC16uint166UInt16PB2Eq5equal(u, 62) || (_M0IPC16uint166UInt16PB2Eq5equal(u, 43) || (_M0IPC16uint166UInt16PB2Eq5equal(u, 126) || (_M0IPC16uint166UInt16PB2Eq5equal(u, 45) || (_M0IPC16uint166UInt16PB2Eq5equal(u, 38) || (_M0IPC16uint166UInt16PB2Eq5equal(u, 64) || _M0IPC16uint166UInt16PB2Eq5equal(u, 37)))))))));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss14join__selector(tokens) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const prev = new _M0TPB8MutLocalGsE("");
  const first = new _M0TPB8MutLocalGbE(true);
  const _bind = tokens.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const t = tokens[_];
      if (!first.val) {
        let prev_tail;
        if (prev.val.length > 0) {
          const _tmp$2 = prev.val;
          const _tmp$3 = prev.val.length - 1 | 0;
          prev_tail = _tmp$3 >>> 0 < _tmp$2.length ? _tmp$2.charCodeAt(_tmp$3) : $oob();
        } else {
          prev_tail = 0;
        }
        const no_space = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss10is__joiner(t) || _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16is__joiner__char(prev_tail);
        if (!no_space) {
          _M0IPB13StringBuilderPB6Logger13write__string(sb, " ");
        }
      }
      _M0IPB13StringBuilderPB6Logger13write__string(sb, t);
      prev.val = t;
      first.val = false;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(sb);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16split__selectors(tokens) {
  const groups = [];
  const cur = new _M0TPB8MutLocalGRPB5ArrayGsEE([]);
  const _bind = tokens.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const t = tokens[_];
      if (t === ",") {
        _M0MPC15array5Array4pushGRPB5ArrayGsEE(groups, cur.val);
        const fresh = [];
        cur.val = fresh;
      } else {
        _M0MPC15array5Array4pushGsE(cur.val, t);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGRPB5ArrayGsEE(groups, cur.val);
  const out = [];
  const _bind$2 = groups.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$2) {
      const g = groups[_];
      const s = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss14join__selector(g);
      if (s.length > 0) {
        _M0MPC15array5Array4pushGsE(out, s);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser10parse__var(self) {
  const name = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self);
  _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, ":");
  const value = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser11read__value(self);
  return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node6VarDef(name, value);
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser12parse__block(self) {
  const nodes = [];
  while (true) {
    const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser4peek(self);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === "}") {
        break;
      } else {
        let node;
        _L: {
          const _bind$2 = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser10parse__one(self);
          if (_bind$2 === undefined) {
            break;
          } else {
            const _Some$2 = _bind$2;
            const _node = _Some$2;
            node = _node;
            break _L;
          }
        }
        _M0MPC15array5Array4pushGsE(nodes, node);
      }
    }
    continue;
  }
  return nodes;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser10parse__one(self) {
  let first;
  _L: {
    const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser4peek(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === "}") {
        return undefined;
      } else {
        first = _x;
        break _L;
      }
    }
  }
  return first.length > 0 && _M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < first.length ? first.charCodeAt(0) : $oob(), 36) ? _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser10parse__var(self) : first.length > 0 && _M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < first.length ? first.charCodeAt(0) : $oob(), 64) ? _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser9parse__at(self) : _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser21parse__decl__or__rule(self);
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser9parse__at(self) {
  const name = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self);
  if (name === "@mixin") {
    const mixin_name = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self);
    const params = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser12read__params(self);
    _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, "{");
    const body = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser12parse__block(self);
    _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, "}");
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node8MixinDef(mixin_name, params, body);
  }
  if (name === "@include") {
    const inc_name = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self);
    const args = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser18read__invoke__args(self);
    let content;
    _L: {
      _L$2: {
        const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser4peek(self);
        if (_bind === undefined) {
          break _L$2;
        } else {
          const _Some = _bind;
          const _x = _Some;
          if (_x === "{") {
            self.pos = self.pos + 1 | 0;
            const b = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser12parse__block(self);
            _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, "}");
            content = b;
          } else {
            break _L$2;
          }
        }
        break _L;
      }
      content = [];
    }
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node9MixinCall(inc_name, args, content);
  }
  if (name === "@content") {
    return _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node7Content__;
  }
  if (name === "@warn" || (name === "@debug" || name === "@error")) {
    _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser11read__value(self);
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node3Raw("");
  }
  if (name === "@import") {
    const path_tok = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self);
    _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser11read__value(self);
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node6Import(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss11tri__quotes(path_tok));
  }
  if (name === "@if") {
    const cond = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser18read__until__brace(self);
    const body = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser12parse__block(self);
    _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, "}");
    const else_body = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser17parse__else__tail(self);
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node2If(cond, body, else_body);
  }
  if (name === "@for") {
    const var_name = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self);
    _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, "from");
    const from = [_M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self)];
    _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, "to");
    const to = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser18read__until__brace(self);
    const body = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser12parse__block(self);
    _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, "}");
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node3For(var_name, from, to, body);
  }
  if (name === "@each") {
    const vars = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser16read__each__vars(self);
    _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, "in");
    const list = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser18read__until__brace(self);
    const body = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser12parse__block(self);
    _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, "}");
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node4Each(vars, list, body);
  }
  if (name === "@while") {
    const cond = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser18read__until__brace(self);
    const body = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser12parse__block(self);
    _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, "}");
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node5While(cond, body);
  }
  if (name === "@else") {
    return undefined;
  }
  const prelude = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser18read__until__brace(self);
  const body = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser12parse__block(self);
  _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, "}");
  return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node6AtRule(name, prelude, body);
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser17parse__else__tail(self) {
  _L: {
    const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser4peek(self);
    if (_bind === undefined) {
      break _L;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === "@else") {
        _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self);
        const nx = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser4peek(self);
        _L$2: {
          let v;
          _L$3: {
            if (nx === undefined) {
              break _L$2;
            } else {
              const _Some$2 = nx;
              const _v = _Some$2;
              v = _v;
              break _L$3;
            }
          }
          if (v === "if") {
            _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self);
            const cond = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser18read__until__brace(self);
            const body = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser12parse__block(self);
            _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, "}");
            const tail = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser17parse__else__tail(self);
            return [new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node2If(cond, body, tail)];
          } else {
            break _L$2;
          }
        }
        _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, "{");
        const eb = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser12parse__block(self);
        _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, "}");
        return eb;
      } else {
        break _L;
      }
    }
  }
  return [];
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser21parse__decl__or__rule(self) {
  const head = [];
  _L: while (true) {
    const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser4peek(self);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case "{": {
          self.pos = self.pos + 1 | 0;
          const selectors = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16split__selectors(head);
          const body = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser12parse__block(self);
          _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7consume(self, "}");
          return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node7RuleSet(selectors, body);
        }
        case ";": {
          self.pos = self.pos + 1 | 0;
          return _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11parse__decl(head);
        }
        case "}": {
          break _L;
        }
        default: {
          _M0MPC15array5Array4pushGsE(head, _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser7advance(self));
        }
      }
    }
    continue;
  }
  if (_M0FP312conglinyizhi20moonbit__css__helper13backend__scss10has__colon(head)) {
    return _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11parse__decl(head);
  }
  const _bind = " ";
  return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node3Raw(_M0MPC15array5Array4joinGsE(head, new _M0TPC16string10StringView(_bind, 0, _bind.length)));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12parse__sheet(toks) {
  const p = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser3new(toks);
  return _M0MP312conglinyizhi20moonbit__css__helper13backend__scss6Parser12parse__block(p);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12parse__flags(value) {
  const cleaned = [];
  const is_default = new _M0TPB8MutLocalGbE(false);
  const is_global = new _M0TPB8MutLocalGbE(false);
  const _bind = value.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const t = value[_];
      if (t === "!default") {
        is_default.val = true;
      } else {
        if (t === "!global") {
          is_global.val = true;
        } else {
          _M0MPC15array5Array4pushGsE(cleaned, t);
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { _0: cleaned, _1: is_default.val, _2: is_global.val };
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss14is__unit__char(u) {
  return u >= 65 && u <= 90 || (u >= 97 && u <= 122 || _M0IPC16uint166UInt16PB2Eq5equal(u, 37));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7to__int(s) {
  const t = new _M0TPB8MutLocalGRPC16string10StringViewE(_M0MPC16string6String4trim(s, undefined));
  const _tmp = t.val;
  const _bind = "px";
  if (_M0MPC16string10StringView11has__suffix(_tmp, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
    const _bind$2 = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView11sub_2einner(t.val, 0, _M0MPC16string10StringView6length(t.val) - 2 | 0));
    t.val = new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length);
  }
  const result = new _M0TPB8MutLocalGiE(0);
  const neg = new _M0TPB8MutLocalGbE(false);
  const i = new _M0TPB8MutLocalGiE(0);
  if (_M0MPC16string10StringView6length(t.val) > 0 && _M0IPC16uint166UInt16PB2Eq5equal(_M0MPC16string10StringView2at(t.val, 0), 45)) {
    neg.val = true;
    i.val = 1;
  }
  while (true) {
    if (i.val < _M0MPC16string10StringView6length(t.val)) {
      const c = _M0MPC16string10StringView2at(t.val, i.val);
      if (c >= 48 && c <= 57) {
        result.val = (Math.imul(result.val, 10) | 0) + _M0IPC16uint166UInt16PB3Sub3sub(c, 48) | 0;
        i.val = i.val + 1 | 0;
      } else {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return neg.val ? -result.val | 0 : result.val;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss10split__num(s) {
  const t = _M0MPC16string6String4trim(s, undefined);
  const j = new _M0TPB8MutLocalGiE(_M0MPC16string10StringView6length(t));
  while (true) {
    if (j.val > 0 && _M0FP312conglinyizhi20moonbit__css__helper13backend__scss14is__unit__char(_M0MPC16string10StringView2at(t, j.val - 1 | 0))) {
      j.val = j.val - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const numpart = j.val > 0 ? _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView11sub_2einner(t, 0, j.val)) : _M0MPC16string10StringView9to__owned(t);
  const unit = j.val < _M0MPC16string10StringView6length(t) ? _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView11sub_2einner(t, j.val, undefined)) : "";
  return { _0: _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7to__int(numpart), _1: unit };
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss9calc__num(a, op, b) {
  let na;
  let ua;
  _L: {
    const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss10split__num(a);
    const _na = _bind._0;
    const _ua = _bind._1;
    na = _na;
    ua = _ua;
    break _L;
  }
  let nb;
  let _ub;
  _L$2: {
    const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss10split__num(b);
    const _nb = _bind._0;
    const __ub = _bind._1;
    nb = _nb;
    _ub = __ub;
    break _L$2;
  }
  const r = op === "+" ? na + nb | 0 : op === "-" ? na - nb | 0 : Math.imul(na, nb) | 0;
  return `${_M0MPC13int3Int18to__string_2einner(r, 10)}${ua}`;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12is__num__str(s) {
  const t = _M0MPC16string6String4trim(s, undefined);
  if (_M0MPC16string10StringView6length(t) === 0) {
    return false;
  }
  const j = new _M0TPB8MutLocalGiE(_M0MPC16string10StringView6length(t));
  while (true) {
    if (j.val > 0 && _M0FP312conglinyizhi20moonbit__css__helper13backend__scss14is__unit__char(_M0MPC16string10StringView2at(t, j.val - 1 | 0))) {
      j.val = j.val - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (j.val <= 0) {
    return false;
  }
  const k = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (k.val < j.val) {
      const c = _M0MPC16string10StringView2at(t, k.val);
      if (!(c >= 48 && c <= 57)) {
        return false;
      }
      k.val = k.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11fold__arith(parts) {
  const out = [];
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < parts.length) {
      if ((i.val + 2 | 0) < parts.length && (_M0FP312conglinyizhi20moonbit__css__helper13backend__scss12is__num__str(_M0MPC15array5Array2atGUisEE(parts, i.val)) && ((_M0MPC15array5Array2atGUisEE(parts, i.val + 1 | 0) === "+" || (_M0MPC15array5Array2atGUisEE(parts, i.val + 1 | 0) === "-" || _M0MPC15array5Array2atGUisEE(parts, i.val + 1 | 0) === "*")) && _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12is__num__str(_M0MPC15array5Array2atGUisEE(parts, i.val + 2 | 0))))) {
        _M0MPC15array5Array4pushGsE(out, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss9calc__num(_M0MPC15array5Array2atGUisEE(parts, i.val), _M0MPC15array5Array2atGUisEE(parts, i.val + 1 | 0), _M0MPC15array5Array2atGUisEE(parts, i.val + 2 | 0)));
        i.val = i.val + 3 | 0;
      } else {
        _M0MPC15array5Array4pushGsE(out, _M0MPC15array5Array2atGUisEE(parts, i.val));
        i.val = i.val + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6is__op(t) {
  return t === "+" || (t === "-" || (t === "*" || (t === "/" || t === "%")));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss9is__paren(t) {
  return t === "(" || t === ")";
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss19join__value__tokens(parts) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const prev_is_op = new _M0TPB8MutLocalGbE(false);
  const _bind = parts.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const t = parts[i];
      _L: {
        if (t === "+") {
          prev_is_op.val = true;
          break _L;
        }
        const joined = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6is__op(t) || _M0FP312conglinyizhi20moonbit__css__helper13backend__scss9is__paren(t);
        if (i === 0) {
          prev_is_op.val = joined;
        } else {
          if (!joined && !prev_is_op.val) {
            _M0IPB13StringBuilderPB6Logger13write__string(sb, " ");
          }
          prev_is_op.val = joined;
        }
        _M0IPB13StringBuilderPB6Logger13write__string(sb, t);
        break _L;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(sb);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss14is__ident__ish(s) {
  return s.length > 0 && ((0 >>> 0 < s.length ? s.charCodeAt(0) : $oob()) >= 65 && (0 >>> 0 < s.length ? s.charCodeAt(0) : $oob()) <= 90) || ((0 >>> 0 < s.length ? s.charCodeAt(0) : $oob()) >= 97 && (0 >>> 0 < s.length ? s.charCodeAt(0) : $oob()) <= 122 || _M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < s.length ? s.charCodeAt(0) : $oob(), 36));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss14is__func__call(parts, i) {
  return i > 0 && _M0FP312conglinyizhi20moonbit__css__helper13backend__scss14is__ident__ish(_M0MPC15array5Array2atGUisEE(parts, i - 1 | 0));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13strip__parens(parts) {
  const out = [];
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < parts.length) {
      const t = _M0MPC15array5Array2atGUisEE(parts, i.val);
      if (t === "(" && ((i.val + 2 | 0) < parts.length && (_M0MPC15array5Array2atGUisEE(parts, i.val + 2 | 0) === ")" && !_M0FP312conglinyizhi20moonbit__css__helper13backend__scss14is__func__call(parts, i.val)))) {
        _M0MPC15array5Array4pushGsE(out, _M0MPC15array5Array2atGUisEE(parts, i.val + 1 | 0));
        i.val = i.val + 3 | 0;
      } else {
        _M0MPC15array5Array4pushGsE(out, t);
        i.val = i.val + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env8get__var(self, name) {
  const i = new _M0TPB8MutLocalGiE(self.scopes.length - 1 | 0);
  while (true) {
    if (i.val >= 0) {
      const found = _M0MPB3Map3getGsRPB5ArrayGsEE(_M0MPC15array5Array2atGUisEE(self.scopes, i.val), name);
      if (found.$tag === 1) {
        return found;
      }
      i.val = i.val - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7resolve(toks, env) {
  const parts = [];
  const _bind = toks.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const t = toks[_];
      if (t.length > 0 && _M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < t.length ? t.charCodeAt(0) : $oob(), 36)) {
        let v;
        _L: {
          _L$2: {
            const _bind$2 = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env8get__var(env, t);
            if (_bind$2.$tag === 1) {
              const _Some = _bind$2;
              const _v = _Some._0;
              v = _v;
              break _L$2;
            } else {
              _M0MPC15array5Array4pushGsE(parts, t);
            }
            break _L;
          }
          _M0MPC15array5Array4pushGsE(parts, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7resolve(v, env));
        }
      } else {
        let _tmp$2;
        if (t.length > 2) {
          let _tmp$3;
          const _bind$2 = "#{";
          if (_M0MPC16string6String11has__prefix(t, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
            const _bind$3 = "}";
            _tmp$3 = _M0MPC16string6String11has__suffix(t, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
          } else {
            _tmp$3 = false;
          }
          _tmp$2 = _tmp$3;
        } else {
          _tmp$2 = false;
        }
        if (_tmp$2) {
          const inner = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(t, 2, t.length - 1 | 0));
          if (inner.length > 0 && _M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < inner.length ? inner.charCodeAt(0) : $oob(), 36)) {
            let v;
            _L: {
              _L$2: {
                const _bind$2 = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env8get__var(env, inner);
                if (_bind$2.$tag === 1) {
                  const _Some = _bind$2;
                  const _v = _Some._0;
                  v = _v;
                  break _L$2;
                } else {
                  _M0MPC15array5Array4pushGsE(parts, t);
                }
                break _L;
              }
              _M0MPC15array5Array4pushGsE(parts, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7resolve(v, env));
            }
          } else {
            _M0MPC15array5Array4pushGsE(parts, t);
          }
        } else {
          _M0MPC15array5Array4pushGsE(parts, t);
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FP312conglinyizhi20moonbit__css__helper13backend__scss19join__value__tokens(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss11fold__arith(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss13strip__parens(parts)));
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env8set__var(self, name, value, is_global) {
  if (is_global) {
    _M0MPB3Map3setGsRPB5ArrayGsEE(_M0MPC15array5Array2atGUisEE(self.scopes, 0), name, value);
    return;
  } else {
    _M0MPB3Map3setGsRPB5ArrayGsEE(_M0MPC15array5Array2atGUisEE(self.scopes, self.scopes.length - 1 | 0), name, value);
    return;
  }
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env11define__var(self, name, value, is_default, is_global) {
  if (is_default) {
    const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env8get__var(self, name);
    if (_bind.$tag === 1) {
      return undefined;
    }
  }
  _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env8set__var(self, name, value, is_global);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13apply__vardef(env, name, value) {
  let is_default;
  let cleaned;
  let is_global;
  _L: {
    const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12parse__flags(value);
    const _cleaned = _bind._0;
    const _is_default = _bind._1;
    const _is_global = _bind._2;
    is_default = _is_default;
    cleaned = _cleaned;
    is_global = _is_global;
    break _L;
  }
  const resolved = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7resolve(cleaned, env);
  _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env11define__var(env, name, [resolved], is_default, is_global);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16is__num__literal(s) {
  const t = _M0MPC16string6String4trim(s, undefined);
  if (_M0MPC16string10StringView6length(t) === 0) {
    return false;
  }
  const i = new _M0TPB8MutLocalGiE(0);
  if (_M0IPC16uint166UInt16PB2Eq5equal(_M0MPC16string10StringView2at(t, 0), 45) || _M0IPC16uint166UInt16PB2Eq5equal(_M0MPC16string10StringView2at(t, 0), 43)) {
    i.val = 1;
  }
  if (i.val >= _M0MPC16string10StringView6length(t)) {
    return false;
  }
  while (true) {
    if (i.val < _M0MPC16string10StringView6length(t)) {
      const c = _M0MPC16string10StringView2at(t, i.val);
      if (!(c >= 48 && c <= 57 || _M0IPC16uint166UInt16PB2Eq5equal(c, 46))) {
        break;
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return i.val > 0;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13tokenize__str(s) {
  return _M0FP312conglinyizhi20moonbit__css__helper13backend__scss8tokenize(s);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6v__neg(a, neg) {
  let n;
  _L: {
    if (a.$tag === 0) {
      const _NumV = a;
      const _n = _NumV._0;
      n = _n;
      break _L;
    } else {
      return a;
    }
  }
  return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal4NumV(neg ? -n | 0 : n);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7v__bool(v) {
  let s;
  _L: {
    let n;
    _L$2: {
      switch (v.$tag) {
        case 1: {
          const _BoolV = v;
          const _b = _BoolV._0;
          return _b;
        }
        case 0: {
          const _NumV = v;
          const _n = _NumV._0;
          n = _n;
          break _L$2;
        }
        case 2: {
          const _StrV = v;
          const _s = _StrV._0;
          s = _s;
          break _L;
        }
        default: {
          return false;
        }
      }
    }
    return n !== 0;
  }
  return s.length > 0;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6v__not(a) {
  return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal5BoolV(!_M0FP312conglinyizhi20moonbit__css__helper13backend__scss7v__bool(a));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss8v__arith(op, a, b) {
  _L: {
    let x;
    let y;
    _L$2: {
      if (a.$tag === 0) {
        const _NumV = a;
        const _x = _NumV._0;
        if (b.$tag === 0) {
          const _NumV$2 = b;
          const _y = _NumV$2._0;
          x = _x;
          y = _y;
          break _L$2;
        } else {
          break _L;
        }
      } else {
        break _L;
      }
    }
    let r;
    if (op === "+") {
      r = x + y | 0;
    } else {
      if (op === "-") {
        r = x - y | 0;
      } else {
        if (op === "*") {
          r = Math.imul(x, y) | 0;
        } else {
          if (op === "/") {
            if (y === 0) {
              r = 0;
            } else {
              if (y === 0) {
                $panic();
              }
              r = x / y | 0;
            }
          } else {
            if (y === 0) {
              r = 0;
            } else {
              if (y === 0) {
                $panic();
              }
              r = x % y | 0;
            }
          }
        }
      }
    }
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal4NumV(r);
  }
  return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal5BoolV(false);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7is__cmp(t) {
  return t === "==" || (t === "!=" || (t === "<" || (t === ">" || (t === "<=" || t === ">="))));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6v__cmp(op, a, b) {
  _L: {
    let x;
    let y;
    _L$2: {
      let x$2;
      let y$2;
      _L$3: {
        switch (a.$tag) {
          case 0: {
            const _NumV = a;
            const _x = _NumV._0;
            if (b.$tag === 0) {
              const _NumV$2 = b;
              const _y = _NumV$2._0;
              x$2 = _x;
              y$2 = _y;
              break _L$3;
            } else {
              break _L;
            }
          }
          case 1: {
            const _BoolV = a;
            const _x$2 = _BoolV._0;
            if (b.$tag === 1) {
              const _BoolV$2 = b;
              const _y = _BoolV$2._0;
              x = _x$2;
              y = _y;
              break _L$2;
            } else {
              break _L;
            }
          }
          default: {
            break _L;
          }
        }
      }
      const r = op === "==" ? x$2 === y$2 : op === "!=" ? x$2 !== y$2 : op === "<" ? x$2 < y$2 : op === ">" ? x$2 > y$2 : op === "<=" ? x$2 <= y$2 : x$2 >= y$2;
      return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal5BoolV(r);
    }
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal5BoolV(op === "==" ? x === y : op === "!=" ? _M0IP016_24default__implPB2Eq10not__equalGbE(x, y) : false);
  }
  return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal5BoolV(false);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6v__and(a, b) {
  return !_M0FP312conglinyizhi20moonbit__css__helper13backend__scss7v__bool(a) ? new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal5BoolV(false) : new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal5BoolV(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss7v__bool(b));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss5v__or(a, b) {
  return _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7v__bool(a) ? new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal5BoolV(true) : new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal5BoolV(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss7v__bool(b));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss5e__or(toks, pos, env) {
  let c0;
  let i0;
  _L: {
    const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6e__and(toks, pos, env);
    const _c0 = _bind._0;
    const _i0 = _bind._1;
    c0 = _c0;
    i0 = _i0;
    break _L;
  }
  const cur = new _M0TPB8MutLocalGRP312conglinyizhi20moonbit__css__helper13backend__scss7CondValE(c0);
  const i = new _M0TPB8MutLocalGiE(i0);
  while (true) {
    if (i.val < toks.length && _M0MPC15array5Array2atGUisEE(toks, i.val) === "or") {
      let rhs;
      let np;
      _L$2: {
        const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6e__and(toks, i.val + 1 | 0, env);
        const _rhs = _bind._0;
        const _np = _bind._1;
        rhs = _rhs;
        np = _np;
        break _L$2;
      }
      cur.val = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss5v__or(cur.val, rhs);
      i.val = np;
      continue;
    } else {
      break;
    }
  }
  return { _0: cur.val, _1: i.val };
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6e__and(toks, pos, env) {
  let c0;
  let i0;
  _L: {
    const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6e__cmp(toks, pos, env);
    const _c0 = _bind._0;
    const _i0 = _bind._1;
    c0 = _c0;
    i0 = _i0;
    break _L;
  }
  const cur = new _M0TPB8MutLocalGRP312conglinyizhi20moonbit__css__helper13backend__scss7CondValE(c0);
  const i = new _M0TPB8MutLocalGiE(i0);
  while (true) {
    if (i.val < toks.length && _M0MPC15array5Array2atGUisEE(toks, i.val) === "and") {
      let rhs;
      let np;
      _L$2: {
        const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6e__cmp(toks, i.val + 1 | 0, env);
        const _rhs = _bind._0;
        const _np = _bind._1;
        rhs = _rhs;
        np = _np;
        break _L$2;
      }
      cur.val = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6v__and(cur.val, rhs);
      i.val = np;
      continue;
    } else {
      break;
    }
  }
  return { _0: cur.val, _1: i.val };
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6e__cmp(toks, pos, env) {
  let l0;
  let i0;
  _L: {
    const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6e__add(toks, pos, env);
    const _l0 = _bind._0;
    const _i0 = _bind._1;
    l0 = _l0;
    i0 = _i0;
    break _L;
  }
  const lhs = new _M0TPB8MutLocalGRP312conglinyizhi20moonbit__css__helper13backend__scss7CondValE(l0);
  const i = new _M0TPB8MutLocalGiE(i0);
  while (true) {
    if (i.val < toks.length && _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7is__cmp(_M0MPC15array5Array2atGUisEE(toks, i.val))) {
      const op = _M0MPC15array5Array2atGUisEE(toks, i.val);
      let rhs;
      let np;
      _L$2: {
        const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6e__add(toks, i.val + 1 | 0, env);
        const _rhs = _bind._0;
        const _np = _bind._1;
        rhs = _rhs;
        np = _np;
        break _L$2;
      }
      lhs.val = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6v__cmp(op, lhs.val, rhs);
      i.val = np;
      continue;
    } else {
      break;
    }
  }
  return { _0: lhs.val, _1: i.val };
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6e__add(toks, pos, env) {
  let c0;
  let i0;
  _L: {
    const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6e__mul(toks, pos, env);
    const _c0 = _bind._0;
    const _i0 = _bind._1;
    c0 = _c0;
    i0 = _i0;
    break _L;
  }
  const cur = new _M0TPB8MutLocalGRP312conglinyizhi20moonbit__css__helper13backend__scss7CondValE(c0);
  const i = new _M0TPB8MutLocalGiE(i0);
  while (true) {
    if (i.val < toks.length && (_M0MPC15array5Array2atGUisEE(toks, i.val) === "+" || _M0MPC15array5Array2atGUisEE(toks, i.val) === "-")) {
      const op = _M0MPC15array5Array2atGUisEE(toks, i.val);
      let rhs;
      let np;
      _L$2: {
        const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6e__mul(toks, i.val + 1 | 0, env);
        const _rhs = _bind._0;
        const _np = _bind._1;
        rhs = _rhs;
        np = _np;
        break _L$2;
      }
      cur.val = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss8v__arith(op, cur.val, rhs);
      i.val = np;
      continue;
    } else {
      break;
    }
  }
  return { _0: cur.val, _1: i.val };
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6e__mul(toks, pos, env) {
  let c0;
  let i0;
  _L: {
    const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss8e__unary(toks, pos, env);
    const _c0 = _bind._0;
    const _i0 = _bind._1;
    c0 = _c0;
    i0 = _i0;
    break _L;
  }
  const cur = new _M0TPB8MutLocalGRP312conglinyizhi20moonbit__css__helper13backend__scss7CondValE(c0);
  const i = new _M0TPB8MutLocalGiE(i0);
  while (true) {
    if (i.val < toks.length && (_M0MPC15array5Array2atGUisEE(toks, i.val) === "*" || (_M0MPC15array5Array2atGUisEE(toks, i.val) === "/" || _M0MPC15array5Array2atGUisEE(toks, i.val) === "%"))) {
      const op = _M0MPC15array5Array2atGUisEE(toks, i.val);
      let rhs;
      let np;
      _L$2: {
        const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss8e__unary(toks, i.val + 1 | 0, env);
        const _rhs = _bind._0;
        const _np = _bind._1;
        rhs = _rhs;
        np = _np;
        break _L$2;
      }
      cur.val = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss8v__arith(op, cur.val, rhs);
      i.val = np;
      continue;
    } else {
      break;
    }
  }
  return { _0: cur.val, _1: i.val };
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss8e__unary(toks, pos, env) {
  if (pos < toks.length && _M0MPC15array5Array2atGUisEE(toks, pos) === "not") {
    let v;
    let i;
    _L: {
      const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss8e__unary(toks, pos + 1 | 0, env);
      const _v = _bind._0;
      const _i = _bind._1;
      v = _v;
      i = _i;
      break _L;
    }
    return { _0: _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6v__not(v), _1: i };
  }
  if (pos < toks.length && (_M0MPC15array5Array2atGUisEE(toks, pos) === "-" || _M0MPC15array5Array2atGUisEE(toks, pos) === "+")) {
    let v;
    let i;
    _L: {
      const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss8e__unary(toks, pos + 1 | 0, env);
      const _v = _bind._0;
      const _i = _bind._1;
      v = _v;
      i = _i;
      break _L;
    }
    const neg = _M0MPC15array5Array2atGUisEE(toks, pos) === "-";
    return { _0: _M0FP312conglinyizhi20moonbit__css__helper13backend__scss6v__neg(v, neg), _1: i };
  }
  return _M0FP312conglinyizhi20moonbit__css__helper13backend__scss10e__primary(toks, pos, env);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss10e__primary(toks, pos, env) {
  if (pos >= toks.length) {
    return { _0: new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal4StrV(""), _1: pos };
  }
  const t = _M0MPC15array5Array2atGUisEE(toks, pos);
  if (t === "(") {
    let v;
    let i;
    _L: {
      const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11e__expr__at(toks, pos + 1 | 0, env);
      const _v = _bind._0;
      const _i = _bind._1;
      v = _v;
      i = _i;
      break _L;
    }
    const j = new _M0TPB8MutLocalGiE(i);
    if (j.val < toks.length && _M0MPC15array5Array2atGUisEE(toks, j.val) === ")") {
      j.val = j.val + 1 | 0;
    }
    return { _0: v, _1: j.val };
  }
  if (t === "true") {
    return { _0: new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal5BoolV(true), _1: pos + 1 | 0 };
  }
  if (t === "false") {
    return { _0: new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal5BoolV(false), _1: pos + 1 | 0 };
  }
  if (t.length > 0 && _M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < t.length ? t.charCodeAt(0) : $oob(), 36)) {
    let v;
    _L: {
      const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env8get__var(env, t);
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _v = _Some._0;
        v = _v;
        break _L;
      } else {
        return { _0: _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal4NilV__, _1: pos + 1 | 0 };
      }
    }
    const inner = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7resolve(v, env);
    return _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11e__expr__at(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss13tokenize__str(inner), 0, env);
  }
  if (_M0FP312conglinyizhi20moonbit__css__helper13backend__scss16is__num__literal(t)) {
    return { _0: new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal4NumV(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss7to__int(t)), _1: pos + 1 | 0 };
  }
  return { _0: new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss7CondVal4StrV(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss11tri__quotes(t)), _1: pos + 1 | 0 };
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11e__expr__at(toks, pos, env) {
  return _M0FP312conglinyizhi20moonbit__css__helper13backend__scss5e__or(toks, pos, env);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7e__expr(toks, env) {
  const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss5e__or(toks, 0, env);
  const _v = _bind._0;
  return _v;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12eval__truthy(cond, env) {
  return _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7v__bool(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss7e__expr(cond, env));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss14choose__branch(cond, tb, eb, env) {
  return _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12eval__truthy(cond, env) ? tb : eb;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11join__value(toks, env) {
  return _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7resolve(toks, env);
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env10pop__scope(self) {
  if (self.scopes.length > 1) {
    _M0MPC15array5Array3popGRPB3MapGsRPB5ArrayGsEEE(self.scopes);
    return;
  } else {
    return;
  }
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env11push__scope(self) {
  const _tmp = self.scopes;
  const _bind = [];
  _M0MPC15array5Array4pushGsE(_tmp, _M0MPB3Map3MapGsRPB5ArrayGsEE(new _M0TPB9ArrayViewGUsRPB5ArrayGsEEE(_bind, 0, 0), undefined));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11with__scope(env, f) {
  _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env11push__scope(env);
  f();
  _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env10pop__scope(env);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss17split__on__commas(toks) {
  const groups = [];
  const cur = new _M0TPB8MutLocalGRPB5ArrayGsEE([]);
  const _bind = toks.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const t = toks[_];
      if (t === ",") {
        _M0MPC15array5Array4pushGRPB5ArrayGsEE(groups, cur.val);
        const fresh = [];
        cur.val = fresh;
      } else {
        _M0MPC15array5Array4pushGsE(cur.val, t);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGRPB5ArrayGsEE(groups, cur.val);
  return groups;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11subst__toks(toks, v, val) {
  const out = [];
  const interp = `#{${v}}`;
  const _bind = toks.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const t = toks[_];
      if (t === v || t === interp) {
        _M0MPC15array5Array4pushGsE(out, val);
      } else {
        if (_M0MPC16string6String8contains(t, new _M0TPC16string10StringView(interp, 0, interp.length)) || _M0MPC16string6String8contains(t, new _M0TPC16string10StringView(v, 0, v.length))) {
          const s = _M0MPC16string6String7replace(t, new _M0TPC16string10StringView(interp, 0, interp.length), new _M0TPC16string10StringView(val, 0, val.length));
          _M0MPC15array5Array4pushGsE(out, _M0MPC16string6String7replace(s, new _M0TPC16string10StringView(v, 0, v.length), new _M0TPC16string10StringView(val, 0, val.length)));
        } else {
          _M0MPC15array5Array4pushGsE(out, t);
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss15substitute__var(nodes, v, val) {
  const out = [];
  const _bind = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const n = nodes[_];
      _M0MPC15array5Array4pushGsE(out, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11subst__node(n, v, val));
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11subst__node(n, v, val) {
  let prelude;
  let name;
  let body;
  _L: {
    let cond;
    let body$2;
    _L$2: {
      let list;
      let v2;
      let body$3;
      _L$3: {
        let to;
        let v2$2;
        let from;
        let body$4;
        _L$4: {
          let args;
          let name$2;
          let content;
          _L$5: {
            let tb;
            let cond$2;
            let eb;
            _L$6: {
              let sel;
              let body$5;
              _L$7: {
                let name$3;
                let value;
                _L$8: {
                  switch (n.$tag) {
                    case 1: {
                      const _Decl = n;
                      const _name = _Decl._0;
                      const _value = _Decl._1;
                      name$3 = _name;
                      value = _value;
                      break _L$8;
                    }
                    case 0: {
                      const _RuleSet = n;
                      const _sel = _RuleSet._0;
                      const _body = _RuleSet._1;
                      sel = _sel;
                      body$5 = _body;
                      break _L$7;
                    }
                    case 6: {
                      const _If = n;
                      const _cond = _If._0;
                      const _tb = _If._1;
                      const _eb = _If._2;
                      tb = _tb;
                      cond$2 = _cond;
                      eb = _eb;
                      break _L$6;
                    }
                    case 4: {
                      const _MixinCall = n;
                      const _name$2 = _MixinCall._0;
                      const _args = _MixinCall._1;
                      const _content = _MixinCall._2;
                      args = _args;
                      name$2 = _name$2;
                      content = _content;
                      break _L$5;
                    }
                    case 7: {
                      const _For = n;
                      const _v2 = _For._0;
                      const _from = _For._1;
                      const _to = _For._2;
                      const _body$2 = _For._3;
                      to = _to;
                      v2$2 = _v2;
                      from = _from;
                      body$4 = _body$2;
                      break _L$4;
                    }
                    case 8: {
                      const _Each = n;
                      const _v2$2 = _Each._0;
                      const _list = _Each._1;
                      const _body$3 = _Each._2;
                      list = _list;
                      v2 = _v2$2;
                      body$3 = _body$3;
                      break _L$3;
                    }
                    case 9: {
                      const _While = n;
                      const _cond$2 = _While._0;
                      const _body$4 = _While._1;
                      cond = _cond$2;
                      body$2 = _body$4;
                      break _L$2;
                    }
                    case 11: {
                      const _AtRule = n;
                      const _name$3 = _AtRule._0;
                      const _prelude = _AtRule._1;
                      const _body$5 = _AtRule._2;
                      prelude = _prelude;
                      name = _name$3;
                      body = _body$5;
                      break _L;
                    }
                    default: {
                      return n;
                    }
                  }
                }
                return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node4Decl(name$3, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11subst__toks(value, v, val));
              }
              return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node7RuleSet(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss11subst__toks(sel, v, val), _M0FP312conglinyizhi20moonbit__css__helper13backend__scss15substitute__var(body$5, v, val));
            }
            return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node2If(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss11subst__toks(cond$2, v, val), _M0FP312conglinyizhi20moonbit__css__helper13backend__scss15substitute__var(tb, v, val), _M0FP312conglinyizhi20moonbit__css__helper13backend__scss15substitute__var(eb, v, val));
          }
          return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node9MixinCall(name$2, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11subst__toks(args, v, val), _M0FP312conglinyizhi20moonbit__css__helper13backend__scss15substitute__var(content, v, val));
        }
        return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node3For(v2$2, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11subst__toks(from, v, val), _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11subst__toks(to, v, val), _M0FP312conglinyizhi20moonbit__css__helper13backend__scss15substitute__var(body$4, v, val));
      }
      return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node4Each(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss11subst__toks(v2, v, val), _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11subst__toks(list, v, val), _M0FP312conglinyizhi20moonbit__css__helper13backend__scss15substitute__var(body$3, v, val));
    }
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node5While(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss11subst__toks(cond, v, val), _M0FP312conglinyizhi20moonbit__css__helper13backend__scss15substitute__var(body$2, v, val));
  }
  return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node6AtRule(name, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11subst__toks(prelude, v, val), _M0FP312conglinyizhi20moonbit__css__helper13backend__scss15substitute__var(body, v, val));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12expand__each(vars, list, body, env) {
  const out = [];
  if (vars.length === 1) {
    const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss17split__on__commas(list);
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const group = _bind[_];
        const val = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7resolve(group, env);
        const _bind$3 = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss15substitute__var(body, _M0MPC15array5Array2atGUisEE(vars, 0), val);
        const _bind$4 = _bind$3.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$4) {
            const s = _bind$3[_$2];
            _M0MPC15array5Array4pushGsE(out, s);
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  } else {
    const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss17split__on__commas(list);
    const _bind$2 = _bind.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind$2) {
        const group = _bind[_];
        const b = new _M0TPB8MutLocalGRPB5ArrayGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeEE(body);
        const k = new _M0TPB8MutLocalGiE(0);
        while (true) {
          if (k.val < vars.length && k.val < group.length) {
            const val = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7resolve([_M0MPC15array5Array2atGUisEE(group, k.val)], env);
            b.val = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss15substitute__var(b.val, _M0MPC15array5Array2atGUisEE(vars, k.val), val);
            k.val = k.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _bind$3 = b.val;
        const _bind$4 = _bind$3.length;
        let _tmp$2 = 0;
        while (true) {
          const _$2 = _tmp$2;
          if (_$2 < _bind$4) {
            const s = _bind$3[_$2];
            _M0MPC15array5Array4pushGsE(out, s);
            _tmp$2 = _$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return out;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11expand__for(v, from, to, body, env) {
  const a = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7to__int(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss7resolve(from, env));
  const b = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7to__int(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss7resolve(to, env));
  const out = [];
  const i = new _M0TPB8MutLocalGiE(a);
  while (true) {
    if (i.val < b) {
      const sub = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss15substitute__var(body, v, _M0MPC13int3Int18to__string_2einner(i.val, 10));
      const _bind = sub.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const s = sub[_];
          _M0MPC15array5Array4pushGsE(out, s);
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16str__find__colon(s) {
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < s.length) {
      const _tmp = i.val;
      if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp >>> 0 < s.length ? s.charCodeAt(_tmp) : $oob(), 58)) {
        return i.val;
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return s.length;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12bind__params(m, args, env) {
  const i = new _M0TPB8MutLocalGiE(0);
  const _bind = m.params;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const pstr = _bind[_];
      const _bind$3 = "...";
      if (_M0MPC16string6String8contains(pstr, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))) {
        const _bind$4 = "...";
        const _tmp$2 = new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length);
        const _bind$5 = "";
        const v = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPC16string6String7replace(pstr, _tmp$2, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length)), undefined));
        const rest = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(args, i.val, undefined));
        const _bind$6 = ", ";
        _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env8set__var(env, v, [_M0MPC15array5Array4joinGsE(rest, new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length))], false);
      } else {
        const _bind$4 = ":";
        if (_M0MPC16string6String8contains(pstr, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))) {
          const colon = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16str__find__colon(pstr);
          const name = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC16string6String11sub_2einner(pstr, 0, colon), undefined));
          const default_ = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(_M0MPC16string6String11sub_2einner(pstr, colon + 1 | 0, undefined), undefined));
          if (i.val < args.length) {
            _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env8set__var(env, name, [_M0MPC15array5Array2atGUisEE(args, i.val)], false);
            i.val = i.val + 1 | 0;
          } else {
            _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env8set__var(env, name, [default_], false);
          }
        } else {
          const name = _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(pstr, undefined));
          if (i.val < args.length) {
            _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env8set__var(env, name, [_M0MPC15array5Array2atGUisEE(args, i.val)], false);
            i.val = i.val + 1 | 0;
          }
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16replace__content(body, content) {
  const out = [];
  const _bind = body.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const n = body[_];
      let other;
      _L: {
        _L$2: {
          if (n.$tag === 5) {
            const _bind$2 = content.length;
            let _tmp$2 = 0;
            while (true) {
              const _$2 = _tmp$2;
              if (_$2 < _bind$2) {
                const cn = content[_$2];
                _M0MPC15array5Array4pushGsE(out, cn);
                _tmp$2 = _$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            other = n;
            break _L$2;
          }
          break _L;
        }
        _M0MPC15array5Array4pushGsE(out, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13replace__into(other, content));
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13replace__into(n, content) {
  let ar;
  let nm;
  let cb;
  _L: {
    let prelude;
    let name;
    let b;
    _L$2: {
      let cond;
      let b$2;
      _L$3: {
        let l;
        let v;
        let b$3;
        _L$4: {
          let t;
          let v$2;
          let f;
          let b$4;
          _L$5: {
            let tb;
            let cond$2;
            let eb;
            _L$6: {
              let sel;
              let body;
              _L$7: {
                switch (n.$tag) {
                  case 0: {
                    const _RuleSet = n;
                    const _sel = _RuleSet._0;
                    const _body = _RuleSet._1;
                    sel = _sel;
                    body = _body;
                    break _L$7;
                  }
                  case 6: {
                    const _If = n;
                    const _cond = _If._0;
                    const _tb = _If._1;
                    const _eb = _If._2;
                    tb = _tb;
                    cond$2 = _cond;
                    eb = _eb;
                    break _L$6;
                  }
                  case 7: {
                    const _For = n;
                    const _v = _For._0;
                    const _f = _For._1;
                    const _t = _For._2;
                    const _b = _For._3;
                    t = _t;
                    v$2 = _v;
                    f = _f;
                    b$4 = _b;
                    break _L$5;
                  }
                  case 8: {
                    const _Each = n;
                    const _v$2 = _Each._0;
                    const _l = _Each._1;
                    const _b$2 = _Each._2;
                    l = _l;
                    v = _v$2;
                    b$3 = _b$2;
                    break _L$4;
                  }
                  case 9: {
                    const _While = n;
                    const _cond$2 = _While._0;
                    const _b$3 = _While._1;
                    cond = _cond$2;
                    b$2 = _b$3;
                    break _L$3;
                  }
                  case 11: {
                    const _AtRule = n;
                    const _name = _AtRule._0;
                    const _prelude = _AtRule._1;
                    const _b$4 = _AtRule._2;
                    prelude = _prelude;
                    name = _name;
                    b = _b$4;
                    break _L$2;
                  }
                  case 4: {
                    const _MixinCall = n;
                    const _nm = _MixinCall._0;
                    const _ar = _MixinCall._1;
                    const _cb = _MixinCall._2;
                    ar = _ar;
                    nm = _nm;
                    cb = _cb;
                    break _L;
                  }
                  default: {
                    return n;
                  }
                }
              }
              return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node7RuleSet(sel, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16replace__content(body, content));
            }
            return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node2If(cond$2, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16replace__content(tb, content), _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16replace__content(eb, content));
          }
          return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node3For(v$2, f, t, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16replace__content(b$4, content));
        }
        return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node4Each(v, l, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16replace__content(b$3, content));
      }
      return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node5While(cond, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16replace__content(b$2, content));
    }
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node6AtRule(name, prelude, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16replace__content(b, content));
  }
  return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node9MixinCall(nm, ar, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16replace__content(cb, content));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12join__nested(parent, sel) {
  const _bind = "&";
  if (_M0MPC16string6String8contains(sel, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
    const _bind$2 = "&";
    return _M0MPC16string6String7replace(sel, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length), new _M0TPC16string10StringView(parent, 0, parent.length));
  } else {
    return `${parent} ${sel}`;
  }
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7combine(parent, sel) {
  if (parent.length === 0) {
    return sel;
  }
  const out = [];
  const _bind = parent.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const ps = parent[_];
      const _bind$2 = sel.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$2) {
          const s = sel[_$2];
          _M0MPC15array5Array4pushGsE(out, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12join__nested(ps, s));
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss20resolve__sel__interp(s, env) {
  const out = new _M0TPB8MutLocalGsE(s);
  const changed = new _M0TPB8MutLocalGbE(true);
  while (true) {
    if (changed.val) {
      changed.val = false;
      const n = out.val.length;
      const start = new _M0TPB8MutLocalGiE(-1);
      const i = new _M0TPB8MutLocalGiE(0);
      while (true) {
        if ((i.val + 1 | 0) < n) {
          let _tmp;
          const _tmp$2 = out.val;
          const _tmp$3 = i.val;
          if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$3 >>> 0 < _tmp$2.length ? _tmp$2.charCodeAt(_tmp$3) : $oob(), 35)) {
            const _tmp$4 = out.val;
            const _tmp$5 = i.val + 1 | 0;
            _tmp = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$5 >>> 0 < _tmp$4.length ? _tmp$4.charCodeAt(_tmp$5) : $oob(), 123);
          } else {
            _tmp = false;
          }
          if (_tmp) {
            start.val = i.val;
            break;
          }
          i.val = i.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (start.val < 0) {
        break;
      }
      const j = new _M0TPB8MutLocalGiE(start.val + 2 | 0);
      while (true) {
        let _tmp;
        if (j.val < n) {
          const _tmp$2 = out.val;
          const _tmp$3 = j.val;
          _tmp = _M0IPC16uint166UInt16PB2Eq10not__equal(_tmp$3 >>> 0 < _tmp$2.length ? _tmp$2.charCodeAt(_tmp$3) : $oob(), 125);
        } else {
          _tmp = false;
        }
        if (_tmp) {
          j.val = j.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (j.val >= n) {
        break;
      }
      const inner = _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(out.val, start.val + 2 | 0, j.val));
      if (inner.length > 0 && _M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < inner.length ? inner.charCodeAt(0) : $oob(), 36)) {
        let v;
        _L: {
          const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env8get__var(env, inner);
          if (_bind.$tag === 1) {
            const _Some = _bind;
            const _v = _Some._0;
            v = _v;
            break _L;
          } else {
            break;
          }
        }
        const val = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7resolve(v, env);
        const _tmp = out.val;
        const _bind = `#{${inner}}`;
        out.val = _M0MPC16string6String7replace(_tmp, new _M0TPC16string10StringView(_bind, 0, _bind.length), new _M0TPC16string10StringView(val, 0, val.length));
        changed.val = true;
      } else {
        break;
      }
      continue;
    } else {
      break;
    }
  }
  return out.val;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss14join__resolved(selectors, env) {
  const parts = [];
  const _bind = selectors.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const s = selectors[_];
      _M0MPC15array5Array4pushGsE(parts, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss20resolve__sel__interp(s, env));
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$2 = ", ";
  return _M0MPC15array5Array4joinGsE(parts, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11split__body(body, _full, env, decl_lines, struct_nodes) {
  const _bind = body.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const n = body[_];
      let other;
      _L: {
        _L$2: {
          let cond;
          let body2;
          _L$3: {
            _L$4: {
              let list;
              let vars;
              let body2$2;
              _L$5: {
                _L$6: {
                  let to;
                  let v;
                  let from;
                  let body2$3;
                  _L$7: {
                    _L$8: {
                      let tb;
                      let cond$2;
                      let eb;
                      _L$9: {
                        _L$10: {
                          let args;
                          let name;
                          let content;
                          _L$11: {
                            _L$12: {
                              let params;
                              let name$2;
                              let body2$4;
                              _L$13: {
                                _L$14: {
                                  let name$3;
                                  let value;
                                  _L$15: {
                                    _L$16: {
                                      let name$4;
                                      let value$2;
                                      _L$17: {
                                        switch (n.$tag) {
                                          case 1: {
                                            const _Decl = n;
                                            const _name = _Decl._0;
                                            const _value = _Decl._1;
                                            name$4 = _name;
                                            value$2 = _value;
                                            break _L$17;
                                          }
                                          case 2: {
                                            const _VarDef = n;
                                            const _name$2 = _VarDef._0;
                                            const _value$2 = _VarDef._1;
                                            name$3 = _name$2;
                                            value = _value$2;
                                            break _L$16;
                                          }
                                          case 3: {
                                            const _MixinDef = n;
                                            const _name$3 = _MixinDef._0;
                                            const _params = _MixinDef._1;
                                            const _body2 = _MixinDef._2;
                                            params = _params;
                                            name$2 = _name$3;
                                            body2$4 = _body2;
                                            break _L$14;
                                          }
                                          case 4: {
                                            const _MixinCall = n;
                                            const _name$4 = _MixinCall._0;
                                            const _args = _MixinCall._1;
                                            const _content = _MixinCall._2;
                                            args = _args;
                                            name = _name$4;
                                            content = _content;
                                            break _L$12;
                                          }
                                          case 6: {
                                            const _If = n;
                                            const _cond = _If._0;
                                            const _tb = _If._1;
                                            const _eb = _If._2;
                                            tb = _tb;
                                            cond$2 = _cond;
                                            eb = _eb;
                                            break _L$10;
                                          }
                                          case 7: {
                                            const _For = n;
                                            const _v = _For._0;
                                            const _from = _For._1;
                                            const _to = _For._2;
                                            const _body2$2 = _For._3;
                                            to = _to;
                                            v = _v;
                                            from = _from;
                                            body2$3 = _body2$2;
                                            break _L$8;
                                          }
                                          case 8: {
                                            const _Each = n;
                                            const _vars = _Each._0;
                                            const _list = _Each._1;
                                            const _body2$3 = _Each._2;
                                            list = _list;
                                            vars = _vars;
                                            body2$2 = _body2$3;
                                            break _L$6;
                                          }
                                          case 9: {
                                            const _While = n;
                                            const _cond$2 = _While._0;
                                            const _body2$4 = _While._1;
                                            cond = _cond$2;
                                            body2 = _body2$4;
                                            break _L$4;
                                          }
                                          default: {
                                            other = n;
                                            break _L$2;
                                          }
                                        }
                                      }
                                      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(3);
                                      _M0MPB13StringBuilder13write__objectGsE(_string_builder, name$4);
                                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": ");
                                      _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7resolve(value$2, env));
                                      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ";");
                                      _M0MPC15array5Array4pushGsE(decl_lines, _M0MPB13StringBuilder10to__string(_string_builder));
                                      break _L$15;
                                    }
                                    _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13apply__vardef(env, name$3, value);
                                  }
                                  break _L$13;
                                }
                                _M0MPB3Map3setGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(env.mixins, name$2, new _M0TP312conglinyizhi20moonbit__css__helper13backend__scss5Mixin(params, body2$4));
                              }
                              break _L$11;
                            }
                            let m;
                            _L$13: {
                              _L$14: {
                                const _bind$2 = _M0MPB3Map3getGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(env.mixins, name);
                                if (_bind$2 === undefined) {
                                } else {
                                  const _Some = _bind$2;
                                  const _m = _Some;
                                  m = _m;
                                  break _L$14;
                                }
                                break _L$13;
                              }
                              _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11with__scope(env, () => {
                                _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12bind__params(m, args, env);
                                _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11split__body(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss16replace__content(m.body, content), _full, env, decl_lines, struct_nodes);
                              });
                            }
                          }
                          break _L$9;
                        }
                        const chosen = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss14choose__branch(cond$2, tb, eb, env);
                        _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11with__scope(env, () => {
                          _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11split__body(chosen, _full, env, decl_lines, struct_nodes);
                        });
                      }
                      break _L$7;
                    }
                    const expanded = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11expand__for(v, from, to, body2$3, env);
                    _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11with__scope(env, () => {
                      _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11split__body(expanded, _full, env, decl_lines, struct_nodes);
                    });
                  }
                  break _L$5;
                }
                const expanded = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12expand__each(vars, list, body2$2, env);
                _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11with__scope(env, () => {
                  _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11split__body(expanded, _full, env, decl_lines, struct_nodes);
                });
              }
              break _L$3;
            }
            const iter = new _M0TPB8MutLocalGiE(0);
            while (true) {
              if (_M0FP312conglinyizhi20moonbit__css__helper13backend__scss12eval__truthy(cond, env) && iter.val < 1000) {
                iter.val = iter.val + 1 | 0;
                _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11split__body(body2, _full, env, decl_lines, struct_nodes);
                continue;
              } else {
                break;
              }
            }
          }
          break _L;
        }
        _M0MPC15array5Array4pushGsE(struct_nodes, other);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss3gen(nodes, parent, env, sb) {
  const _bind = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const n = nodes[_];
      let s;
      _L: {
        _L$2: {
          let name;
          let value;
          _L$3: {
            _L$4: {
              let params;
              let name$2;
              let body;
              _L$5: {
                _L$6: {
                  let name$3;
                  let value$2;
                  _L$7: {
                    _L$8: {
                      let args;
                      let name$4;
                      let content;
                      _L$9: {
                        _L$10: {
                          let cond;
                          let body$2;
                          _L$11: {
                            _L$12: {
                              let list;
                              let vars;
                              let body$3;
                              _L$13: {
                                _L$14: {
                                  let to;
                                  let v;
                                  let from;
                                  let body$4;
                                  _L$15: {
                                    _L$16: {
                                      let tb;
                                      let cond$2;
                                      let eb;
                                      _L$17: {
                                        _L$18: {
                                          let prelude;
                                          let name$5;
                                          let body$5;
                                          _L$19: {
                                            _L$20: {
                                              let sel;
                                              let body$6;
                                              _L$21: {
                                                _L$22: {
                                                  switch (n.$tag) {
                                                    case 0: {
                                                      const _RuleSet = n;
                                                      const _sel = _RuleSet._0;
                                                      const _body = _RuleSet._1;
                                                      sel = _sel;
                                                      body$6 = _body;
                                                      break _L$22;
                                                    }
                                                    case 11: {
                                                      const _AtRule = n;
                                                      const _name = _AtRule._0;
                                                      const _prelude = _AtRule._1;
                                                      const _body$2 = _AtRule._2;
                                                      prelude = _prelude;
                                                      name$5 = _name;
                                                      body$5 = _body$2;
                                                      break _L$20;
                                                    }
                                                    case 6: {
                                                      const _If = n;
                                                      const _cond = _If._0;
                                                      const _tb = _If._1;
                                                      const _eb = _If._2;
                                                      tb = _tb;
                                                      cond$2 = _cond;
                                                      eb = _eb;
                                                      break _L$18;
                                                    }
                                                    case 7: {
                                                      const _For = n;
                                                      const _v = _For._0;
                                                      const _from = _For._1;
                                                      const _to = _For._2;
                                                      const _body$3 = _For._3;
                                                      to = _to;
                                                      v = _v;
                                                      from = _from;
                                                      body$4 = _body$3;
                                                      break _L$16;
                                                    }
                                                    case 8: {
                                                      const _Each = n;
                                                      const _vars = _Each._0;
                                                      const _list = _Each._1;
                                                      const _body$4 = _Each._2;
                                                      list = _list;
                                                      vars = _vars;
                                                      body$3 = _body$4;
                                                      break _L$14;
                                                    }
                                                    case 9: {
                                                      const _While = n;
                                                      const _cond$2 = _While._0;
                                                      const _body$5 = _While._1;
                                                      cond = _cond$2;
                                                      body$2 = _body$5;
                                                      break _L$12;
                                                    }
                                                    case 4: {
                                                      const _MixinCall = n;
                                                      const _name$2 = _MixinCall._0;
                                                      const _args = _MixinCall._1;
                                                      const _content = _MixinCall._2;
                                                      args = _args;
                                                      name$4 = _name$2;
                                                      content = _content;
                                                      break _L$10;
                                                    }
                                                    case 5: {
                                                      break;
                                                    }
                                                    case 2: {
                                                      const _VarDef = n;
                                                      const _name$3 = _VarDef._0;
                                                      const _value = _VarDef._1;
                                                      name$3 = _name$3;
                                                      value$2 = _value;
                                                      break _L$8;
                                                    }
                                                    case 3: {
                                                      const _MixinDef = n;
                                                      const _name$4 = _MixinDef._0;
                                                      const _params = _MixinDef._1;
                                                      const _body$6 = _MixinDef._2;
                                                      params = _params;
                                                      name$2 = _name$4;
                                                      body = _body$6;
                                                      break _L$6;
                                                    }
                                                    case 1: {
                                                      const _Decl = n;
                                                      const _name$5 = _Decl._0;
                                                      const _value$2 = _Decl._1;
                                                      name = _name$5;
                                                      value = _value$2;
                                                      break _L$4;
                                                    }
                                                    case 10: {
                                                      break;
                                                    }
                                                    default: {
                                                      const _Raw = n;
                                                      const _s = _Raw._0;
                                                      s = _s;
                                                      break _L$2;
                                                    }
                                                  }
                                                  break _L$21;
                                                }
                                                _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12gen__ruleset(sel, body$6, parent, env, sb);
                                              }
                                              break _L$19;
                                            }
                                            _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12emit__atrule(name$5, prelude, body$5, env, sb);
                                          }
                                          break _L$17;
                                        }
                                        const chosen = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss14choose__branch(cond$2, tb, eb, env);
                                        _M0FP312conglinyizhi20moonbit__css__helper13backend__scss3gen(chosen, parent, env, sb);
                                      }
                                      break _L$15;
                                    }
                                    _M0FP312conglinyizhi20moonbit__css__helper13backend__scss3gen(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss11expand__for(v, from, to, body$4, env), parent, env, sb);
                                  }
                                  break _L$13;
                                }
                                _M0FP312conglinyizhi20moonbit__css__helper13backend__scss3gen(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss12expand__each(vars, list, body$3, env), parent, env, sb);
                              }
                              break _L$11;
                            }
                            _M0FP312conglinyizhi20moonbit__css__helper13backend__scss10gen__while(cond, body$2, parent, env, sb);
                          }
                          break _L$9;
                        }
                        _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16gen__mixin__call(name$4, args, content, parent, env, sb);
                      }
                      break _L$7;
                    }
                    _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13apply__vardef(env, name$3, value$2);
                  }
                  break _L$5;
                }
                _M0MPB3Map3setGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(env.mixins, name$2, new _M0TP312conglinyizhi20moonbit__css__helper13backend__scss5Mixin(params, body));
              }
              break _L$3;
            }
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(6);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "  ");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, name);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": ");
            _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7resolve(value, env));
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ";\n");
            _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPB13StringBuilder10to__string(_string_builder));
          }
          break _L;
        }
        _M0IPB13StringBuilderPB6Logger13write__string(sb, s);
        _M0IPB13StringBuilderPB6Logger13write__string(sb, "\n");
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12emit__atrule(name, prelude, body, env, sb) {
  let at_name;
  const _bind = "@";
  if (_M0MPC16string6String11has__prefix(name, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
    at_name = name;
  } else {
    at_name = `@${name}`;
  }
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, at_name);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11join__value(prelude, env));
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " {\n");
  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPB13StringBuilder10to__string(_string_builder));
  _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11with__scope(env, () => {
    _M0FP312conglinyizhi20moonbit__css__helper13backend__scss3gen(body, [], env, sb);
  });
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "}\n");
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16gen__mixin__call(name, args, content, parent, env, sb) {
  let m;
  _L: {
    const _bind = _M0MPB3Map3getGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(env.mixins, name);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _m = _Some;
      m = _m;
      break _L;
    }
  }
  _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11with__scope(env, () => {
    _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12bind__params(m, args, env);
    _M0FP312conglinyizhi20moonbit__css__helper13backend__scss3gen(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss16replace__content(m.body, content), parent, env, sb);
  });
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12gen__ruleset(sel, body, parent, env, sb) {
  const full = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7combine(parent, sel);
  const decl_lines = [];
  const struct_nodes = [];
  _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env11push__scope(env);
  _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11split__body(body, full, env, decl_lines, struct_nodes);
  if (decl_lines.length > 0) {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(3);
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss14join__resolved(full, env));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " {\n");
    _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPB13StringBuilder10to__string(_string_builder));
    const _bind = decl_lines.length;
    let _tmp = 0;
    while (true) {
      const _ = _tmp;
      if (_ < _bind) {
        const line = decl_lines[_];
        const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(3);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "  ");
        _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, line);
        _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "\n");
        _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPB13StringBuilder10to__string(_string_builder$2));
        _tmp = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0IPB13StringBuilderPB6Logger13write__string(sb, "}\n");
  }
  const _bind = struct_nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const s = struct_nodes[_];
      _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11gen__struct(s, full, env, sb);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env10pop__scope(env);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11gen__struct(node, parent, env, sb) {
  let s;
  _L: {
    let name;
    let value;
    _L$2: {
      let params;
      let name$2;
      let body;
      _L$3: {
        let name$3;
        let value$2;
        _L$4: {
          let args;
          let name$4;
          let content;
          _L$5: {
            let cond;
            let body$2;
            _L$6: {
              let list;
              let vars;
              let body$3;
              _L$7: {
                let to;
                let v;
                let from;
                let body$4;
                _L$8: {
                  let tb;
                  let cond$2;
                  let eb;
                  _L$9: {
                    let prelude;
                    let name$5;
                    let body$5;
                    _L$10: {
                      let sel;
                      let body$6;
                      _L$11: {
                        switch (node.$tag) {
                          case 0: {
                            const _RuleSet = node;
                            const _sel = _RuleSet._0;
                            const _body = _RuleSet._1;
                            sel = _sel;
                            body$6 = _body;
                            break _L$11;
                          }
                          case 11: {
                            const _AtRule = node;
                            const _name = _AtRule._0;
                            const _prelude = _AtRule._1;
                            const _body$2 = _AtRule._2;
                            prelude = _prelude;
                            name$5 = _name;
                            body$5 = _body$2;
                            break _L$10;
                          }
                          case 6: {
                            const _If = node;
                            const _cond = _If._0;
                            const _tb = _If._1;
                            const _eb = _If._2;
                            tb = _tb;
                            cond$2 = _cond;
                            eb = _eb;
                            break _L$9;
                          }
                          case 7: {
                            const _For = node;
                            const _v = _For._0;
                            const _from = _For._1;
                            const _to = _For._2;
                            const _body$3 = _For._3;
                            to = _to;
                            v = _v;
                            from = _from;
                            body$4 = _body$3;
                            break _L$8;
                          }
                          case 8: {
                            const _Each = node;
                            const _vars = _Each._0;
                            const _list = _Each._1;
                            const _body$4 = _Each._2;
                            list = _list;
                            vars = _vars;
                            body$3 = _body$4;
                            break _L$7;
                          }
                          case 9: {
                            const _While = node;
                            const _cond$2 = _While._0;
                            const _body$5 = _While._1;
                            cond = _cond$2;
                            body$2 = _body$5;
                            break _L$6;
                          }
                          case 4: {
                            const _MixinCall = node;
                            const _name$2 = _MixinCall._0;
                            const _args = _MixinCall._1;
                            const _content = _MixinCall._2;
                            args = _args;
                            name$4 = _name$2;
                            content = _content;
                            break _L$5;
                          }
                          case 5: {
                            return;
                          }
                          case 2: {
                            const _VarDef = node;
                            const _name$3 = _VarDef._0;
                            const _value = _VarDef._1;
                            name$3 = _name$3;
                            value$2 = _value;
                            break _L$4;
                          }
                          case 3: {
                            const _MixinDef = node;
                            const _name$4 = _MixinDef._0;
                            const _params = _MixinDef._1;
                            const _body$6 = _MixinDef._2;
                            params = _params;
                            name$2 = _name$4;
                            body = _body$6;
                            break _L$3;
                          }
                          case 1: {
                            const _Decl = node;
                            const _name$5 = _Decl._0;
                            const _value$2 = _Decl._1;
                            name = _name$5;
                            value = _value$2;
                            break _L$2;
                          }
                          case 10: {
                            return;
                          }
                          default: {
                            const _Raw = node;
                            const _s = _Raw._0;
                            s = _s;
                            break _L;
                          }
                        }
                      }
                      _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12gen__ruleset(sel, body$6, parent, env, sb);
                      return;
                    }
                    _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12emit__atrule(name$5, prelude, body$5, env, sb);
                    return;
                  }
                  const chosen = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss14choose__branch(cond$2, tb, eb, env);
                  _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11with__scope(env, () => {
                    _M0FP312conglinyizhi20moonbit__css__helper13backend__scss3gen(chosen, parent, env, sb);
                  });
                  return;
                }
                _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11with__scope(env, () => {
                  _M0FP312conglinyizhi20moonbit__css__helper13backend__scss3gen(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss11expand__for(v, from, to, body$4, env), parent, env, sb);
                });
                return;
              }
              _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11with__scope(env, () => {
                _M0FP312conglinyizhi20moonbit__css__helper13backend__scss3gen(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss12expand__each(vars, list, body$3, env), parent, env, sb);
              });
              return;
            }
            _M0FP312conglinyizhi20moonbit__css__helper13backend__scss10gen__while(cond, body$2, parent, env, sb);
            return;
          }
          _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16gen__mixin__call(name$4, args, content, parent, env, sb);
          return;
        }
        _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13apply__vardef(env, name$3, value$2);
        return;
      }
      _M0MPB3Map3setGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(env.mixins, name$2, new _M0TP312conglinyizhi20moonbit__css__helper13backend__scss5Mixin(params, body));
      return;
    }
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(6);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "  ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, name);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ": ");
    _M0MPB13StringBuilder13write__objectGsE(_string_builder, _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7resolve(value, env));
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, ";\n");
    _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0MPB13StringBuilder10to__string(_string_builder));
    return;
  }
  _M0IPB13StringBuilderPB6Logger13write__string(sb, s);
  _M0IPB13StringBuilderPB6Logger13write__string(sb, "\n");
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss10gen__while(cond, body, parent, env, sb) {
  const iter = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (_M0FP312conglinyizhi20moonbit__css__helper13backend__scss12eval__truthy(cond, env) && iter.val < 1000) {
      iter.val = iter.val + 1 | 0;
      _M0FP312conglinyizhi20moonbit__css__helper13backend__scss3gen(body, parent, env, sb);
      continue;
    } else {
      return;
    }
  }
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env3new() {
  const _bind = [];
  const _tmp = [_M0MPB3Map3MapGsRPB5ArrayGsEE(new _M0TPB9ArrayViewGUsRPB5ArrayGsEEE(_bind, 0, 0), undefined)];
  const _bind$2 = [];
  return new _M0TP312conglinyizhi20moonbit__css__helper13backend__scss3Env(_tmp, _M0MPB3Map3MapGsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinE(new _M0TPB9ArrayViewGUsRP312conglinyizhi20moonbit__css__helper13backend__scss5MixinEE(_bind$2, 0, 0), undefined));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss7to__css(nodes) {
  const env = _M0MP312conglinyizhi20moonbit__css__helper13backend__scss3Env3new();
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0FP312conglinyizhi20moonbit__css__helper13backend__scss3gen(nodes, [], env, sb);
  return _M0MPB13StringBuilder10to__string(sb);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13contains__str(arr, s) {
  const _bind = arr.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const x = arr[_];
      if (x === s) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13walk__imports(nodes, read, visited) {
  const out = [];
  const _bind = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const n = nodes[_];
      let other;
      _L: {
        _L$2: {
          let path;
          _L$3: {
            if (n.$tag === 10) {
              const _Import = n;
              const _path = _Import._0;
              path = _path;
              break _L$3;
            } else {
              other = n;
              break _L$2;
            }
          }
          if (!_M0FP312conglinyizhi20moonbit__css__helper13backend__scss13contains__str(visited, path)) {
            const _bind$2 = read(path);
            let content;
            if (_bind$2.$tag === 1) {
              const _ok = _bind$2;
              content = _ok._0;
            } else {
              return _bind$2;
            }
            const inner = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12parse__sheet(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss8tokenize(content));
            const v = [];
            const _bind$3 = visited.length;
            let _tmp$2 = 0;
            while (true) {
              const _$2 = _tmp$2;
              if (_$2 < _bind$3) {
                const x = visited[_$2];
                _M0MPC15array5Array4pushGsE(v, x);
                _tmp$2 = _$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGsE(v, path);
            const _bind$4 = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13walk__imports(inner, read, v);
            let resolved;
            if (_bind$4.$tag === 1) {
              const _ok = _bind$4;
              resolved = _ok._0;
            } else {
              return _bind$4;
            }
            const _bind$5 = resolved.length;
            let _tmp$3 = 0;
            while (true) {
              const _$2 = _tmp$3;
              if (_$2 < _bind$5) {
                const r = resolved[_$2];
                _M0MPC15array5Array4pushGsE(out, r);
                _tmp$3 = _$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          break _L;
        }
        const _bind$2 = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss10walk__into(other, read, visited);
        let _tmp$2;
        if (_bind$2.$tag === 1) {
          const _ok = _bind$2;
          _tmp$2 = _ok._0;
        } else {
          return _bind$2;
        }
        _M0MPC15array5Array4pushGsE(out, _tmp$2);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRPB5ArrayGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeERP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(out);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss10walk__into(n, read, visited) {
  let other;
  _L: {
    let ar;
    let nm;
    let cb;
    _L$2: {
      let prelude;
      let name;
      let b;
      _L$3: {
        let cond;
        let b$2;
        _L$4: {
          let l;
          let v;
          let b$3;
          _L$5: {
            let t;
            let v$2;
            let f;
            let b$4;
            _L$6: {
              let tb;
              let cond$2;
              let eb;
              _L$7: {
                let sel;
                let body;
                _L$8: {
                  switch (n.$tag) {
                    case 0: {
                      const _RuleSet = n;
                      const _sel = _RuleSet._0;
                      const _body = _RuleSet._1;
                      sel = _sel;
                      body = _body;
                      break _L$8;
                    }
                    case 6: {
                      const _If = n;
                      const _cond = _If._0;
                      const _tb = _If._1;
                      const _eb = _If._2;
                      tb = _tb;
                      cond$2 = _cond;
                      eb = _eb;
                      break _L$7;
                    }
                    case 7: {
                      const _For = n;
                      const _v = _For._0;
                      const _f = _For._1;
                      const _t = _For._2;
                      const _b = _For._3;
                      t = _t;
                      v$2 = _v;
                      f = _f;
                      b$4 = _b;
                      break _L$6;
                    }
                    case 8: {
                      const _Each = n;
                      const _v$2 = _Each._0;
                      const _l = _Each._1;
                      const _b$2 = _Each._2;
                      l = _l;
                      v = _v$2;
                      b$3 = _b$2;
                      break _L$5;
                    }
                    case 9: {
                      const _While = n;
                      const _cond$2 = _While._0;
                      const _b$3 = _While._1;
                      cond = _cond$2;
                      b$2 = _b$3;
                      break _L$4;
                    }
                    case 11: {
                      const _AtRule = n;
                      const _name = _AtRule._0;
                      const _prelude = _AtRule._1;
                      const _b$4 = _AtRule._2;
                      prelude = _prelude;
                      name = _name;
                      b = _b$4;
                      break _L$3;
                    }
                    case 4: {
                      const _MixinCall = n;
                      const _nm = _MixinCall._0;
                      const _ar = _MixinCall._1;
                      const _cb = _MixinCall._2;
                      ar = _ar;
                      nm = _nm;
                      cb = _cb;
                      break _L$2;
                    }
                    default: {
                      other = n;
                      break _L;
                    }
                  }
                }
                const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13walk__imports(body, read, visited);
                let _tmp;
                if (_bind.$tag === 1) {
                  const _ok = _bind;
                  _tmp = _ok._0;
                } else {
                  return _bind;
                }
                return new _M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node7RuleSet(sel, _tmp));
              }
              const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13walk__imports(tb, read, visited);
              let _tmp;
              if (_bind.$tag === 1) {
                const _ok = _bind;
                _tmp = _ok._0;
              } else {
                return _bind;
              }
              const _bind$2 = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13walk__imports(eb, read, visited);
              let _tmp$2;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _tmp$2 = _ok._0;
              } else {
                return _bind$2;
              }
              return new _M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node2If(cond$2, _tmp, _tmp$2));
            }
            const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13walk__imports(b$4, read, visited);
            let _tmp;
            if (_bind.$tag === 1) {
              const _ok = _bind;
              _tmp = _ok._0;
            } else {
              return _bind;
            }
            return new _M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node3For(v$2, f, t, _tmp));
          }
          const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13walk__imports(b$3, read, visited);
          let _tmp;
          if (_bind.$tag === 1) {
            const _ok = _bind;
            _tmp = _ok._0;
          } else {
            return _bind;
          }
          return new _M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node4Each(v, l, _tmp));
        }
        const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13walk__imports(b$2, read, visited);
        let _tmp;
        if (_bind.$tag === 1) {
          const _ok = _bind;
          _tmp = _ok._0;
        } else {
          return _bind;
        }
        return new _M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node5While(cond, _tmp));
      }
      const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13walk__imports(b, read, visited);
      let _tmp;
      if (_bind.$tag === 1) {
        const _ok = _bind;
        _tmp = _ok._0;
      } else {
        return _bind;
      }
      return new _M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node6AtRule(name, prelude, _tmp));
    }
    const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13walk__imports(cb, read, visited);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      return _bind;
    }
    return new _M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(new _M0DTP312conglinyizhi20moonbit__css__helper13backend__scss4Node9MixinCall(nm, ar, _tmp));
  }
  return new _M0DTPC16result6ResultGRP312conglinyizhi20moonbit__css__helper13backend__scss4NodeRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(other);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss22compile__with__imports(source, read) {
  const nodes = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12parse__sheet(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss8tokenize(source));
  const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13walk__imports(nodes, read, []);
  let resolved;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    resolved = _ok._0;
  } else {
    return _bind;
  }
  return new _M0DTPC16result6ResultGsRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss7to__css(resolved));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss16is__sass__indent(source) {
  let _tmp;
  const _bind = "{";
  if (_M0MPC16string6String8contains(source, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
    _tmp = true;
  } else {
    const _bind$2 = "}";
    _tmp = _M0MPC16string6String8contains(source, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
  }
  if (_tmp) {
    return false;
  }
  const _bind$2 = "\n";
  const lines = _M0MPC16string6String5split(source, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
  const has_indent = new _M0TPB8MutLocalGbE(false);
  const _it = lines;
  while (true) {
    let line;
    _L: {
      const _bind$3 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
      if (_bind$3 === undefined) {
        break;
      } else {
        const _Some = _bind$3;
        const _line = _Some;
        line = _line;
        break _L;
      }
    }
    if (_M0MPC16string10StringView6length(line) > 0 && (_M0IPC16uint166UInt16PB2Eq5equal(_M0MPC16string10StringView2at(line, 0), 32) || _M0IPC16uint166UInt16PB2Eq5equal(_M0MPC16string10StringView2at(line, 0), 9))) {
      has_indent.val = true;
      break;
    }
    continue;
  }
  return has_indent.val;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13count__indent(line) {
  const c = new _M0TPB8MutLocalGiE(0);
  const _bind = line.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$2 = line.charCodeAt(_string_index);
        if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
          const _bind$3 = line.charCodeAt(_string_index + 1 | 0);
          if (_bind$3 >= 56320 && _bind$3 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$2);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$2);
          break _L;
        }
      }
      const _next_string_index = _decoded_next_string_index;
      const ch = _decoded_char;
      if (ch === 32) {
        c.val = c.val + 1 | 0;
      } else {
        if (ch === 9) {
          c.val = c.val + 2 | 0;
        } else {
          break;
        }
      }
      _tmp = _next_string_index;
      continue;
    } else {
      break;
    }
  }
  return c.val;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11parse__sass(rows, i, indent) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const j = new _M0TPB8MutLocalGiE(i);
  while (true) {
    if (j.val < rows.length && _M0MPC15array5Array2atGUisEE(rows, j.val)._0 === indent) {
      const text = _M0MPC15array5Array2atGUisEE(rows, j.val)._1;
      if ((j.val + 1 | 0) < rows.length && _M0MPC15array5Array2atGUisEE(rows, j.val + 1 | 0)._0 > indent) {
        _M0IPB13StringBuilderPB6Logger13write__string(sb, `${text} {\n`);
        let sub;
        let ni;
        _L: {
          const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11parse__sass(rows, j.val + 1 | 0, _M0MPC15array5Array2atGUisEE(rows, j.val + 1 | 0)._0);
          const _sub = _bind._0;
          const _ni = _bind._1;
          sub = _sub;
          ni = _ni;
          break _L;
        }
        _M0IPB13StringBuilderPB6Logger13write__string(sb, sub);
        _M0IPB13StringBuilderPB6Logger13write__string(sb, "}\n");
        j.val = ni;
      } else {
        _M0IPB13StringBuilderPB6Logger13write__string(sb, `${text};\n`);
        j.val = j.val + 1 | 0;
      }
      continue;
    } else {
      break;
    }
  }
  return { _0: _M0MPB13StringBuilder10to__string(sb), _1: j.val };
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss14sass__to__scss(source) {
  const rows = [];
  const _bind = "\n";
  const _it = _M0MPC16string6String5split(source, new _M0TPC16string10StringView(_bind, 0, _bind.length));
  while (true) {
    let line;
    _L: {
      const _bind$2 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
      if (_bind$2 === undefined) {
        break;
      } else {
        const _Some = _bind$2;
        const _line = _Some;
        line = _line;
        break _L;
      }
    }
    const t = _M0MPC16string10StringView4trim(line, undefined);
    if (_M0MPC16string10StringView6length(t) === 0) {
      continue;
    }
    _M0MPC15array5Array4pushGsE(rows, { _0: _M0FP312conglinyizhi20moonbit__css__helper13backend__scss13count__indent(_M0MPC16string10StringView9to__owned(line)), _1: _M0MPC16string10StringView9to__owned(t) });
    continue;
  }
  if (rows.length === 0) {
    return "";
  }
  const _bind$2 = _M0FP312conglinyizhi20moonbit__css__helper13backend__scss11parse__sass(rows, 0, _M0MPC15array5Array2atGUisEE(rows, 0)._0);
  const _out = _bind$2._0;
  return _out;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12scss__engine() {
  return _M0MP312conglinyizhi20moonbit__css__helper4core6Engine3new(() => "scss", (fmt) => {
    if (fmt === 0) {
      return true;
    } else {
      return false;
    }
  }, (source) => {
    if (_M0FP312conglinyizhi20moonbit__css__helper13backend__scss16is__sass__indent(source)) {
      return new _M0DTPC16result6ResultGsRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss7to__css(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss12parse__sheet(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss8tokenize(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss14sass__to__scss(source)))));
    }
    return new _M0DTPC16result6ResultGsRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss7to__css(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss12parse__sheet(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss8tokenize(source))));
  }, (source, read) => _M0FP312conglinyizhi20moonbit__css__helper13backend__scss22compile__with__imports(source, read));
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser3new(toks) {
  return new _M0TP312conglinyizhi20moonbit__css__helper13backend__less10LessParser(toks, 0);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less21is__at__rule__keyword(name) {
  switch (name) {
    case "media": {
      return true;
    }
    case "import": {
      return true;
    }
    case "if": {
      return true;
    }
    case "for": {
      return true;
    }
    case "each": {
      return true;
    }
    case "while": {
      return true;
    }
    case "font-face": {
      return true;
    }
    case "supports": {
      return true;
    }
    case "keyframes": {
      return true;
    }
    case "charset": {
      return true;
    }
    case "page": {
      return true;
    }
    case "namespace": {
      return true;
    }
    case "document": {
      return true;
    }
    case "layer": {
      return true;
    }
    case "container": {
      return true;
    }
    case "property": {
      return true;
    }
    case "scope": {
      return true;
    }
    case "else": {
      return true;
    }
    case "plugin": {
      return true;
    }
    case "arguments": {
      return true;
    }
    default: {
      return false;
    }
  }
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less9strip__at(s) {
  return s.length > 0 && _M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < s.length ? s.charCodeAt(0) : $oob(), 64) ? _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(s, 1, undefined)) : s;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less10strip__dot(s) {
  return s.length > 0 && _M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < s.length ? s.charCodeAt(0) : $oob(), 46) ? _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(s, 1, undefined)) : s;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser7advance(self) {
  const t = _M0MPC15array5Array2atGUisEE(self.toks, self.pos);
  self.pos = self.pos + 1 | 0;
  return t;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser4peek(self) {
  return self.pos < self.toks.length ? _M0MPC15array5Array2atGUisEE(self.toks, self.pos) : undefined;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser7consume(self, tok) {
  let t;
  _L: {
    const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser4peek(self);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _t = _Some;
      t = _t;
      break _L;
    }
  }
  if (t === tok) {
    self.pos = self.pos + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less13strip__quotes(s) {
  const n = s.length;
  let _tmp;
  if (n >= 2) {
    let _tmp$2;
    if (_M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < s.length ? s.charCodeAt(0) : $oob(), 34) || _M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < s.length ? s.charCodeAt(0) : $oob(), 39)) {
      const _tmp$3 = n - 1 | 0;
      _tmp$2 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$3 >>> 0 < s.length ? s.charCodeAt(_tmp$3) : $oob(), 0 >>> 0 < s.length ? s.charCodeAt(0) : $oob());
    } else {
      _tmp$2 = false;
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    return _M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(s, 1, n - 1 | 0));
  } else {
    return s;
  }
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser10read__head(self) {
  const out = [];
  _L: while (true) {
    let t;
    _L$2: {
      const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser4peek(self);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case "}": {
            break _L;
          }
          case ";": {
            break _L;
          }
          case "{": {
            break _L;
          }
          default: {
            t = _x;
            break _L$2;
          }
        }
      }
    }
    _M0MPC15array5Array4pushGsE(out, t);
    self.pos = self.pos + 1 | 0;
    continue;
  }
  return out;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser18read__until__brace(self) {
  const out = [];
  _L: while (true) {
    let t;
    _L$2: {
      const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser4peek(self);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        switch (_x) {
          case "}": {
            break _L;
          }
          case "{": {
            break _L;
          }
          case ";": {
            self.pos = self.pos + 1 | 0;
            break _L;
          }
          default: {
            t = _x;
            break _L$2;
          }
        }
      }
    }
    _M0MPC15array5Array4pushGsE(out, t);
    self.pos = self.pos + 1 | 0;
    continue;
  }
  return out;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less23find__colon__in__tokens(toks) {
  const _bind = 0;
  const _bind$2 = toks.length;
  let _tmp = _bind;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      if (_M0MPC15array5Array2atGUisEE(toks, i) === ":") {
        return i;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return -1;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser19make__decl__or__raw(self, head) {
  const colon = _M0FP312conglinyizhi20moonbit__css__helper13backend__less23find__colon__in__tokens(head);
  if (colon > 0) {
    const _tmp = _M0MPC15array5Array12view_2einnerGsE(head, 0, colon);
    const _bind = " ";
    const prop = _M0MPC15array9ArrayView4joinGsE(_tmp, new _M0TPC16string10StringView(_bind, 0, _bind.length));
    const val = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(head, colon + 1 | 0, undefined));
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode4Decl(prop, val);
  } else {
    const _bind = " ";
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode3Raw(_M0MPC15array5Array4joinGsE(head, new _M0TPC16string10StringView(_bind, 0, _bind.length)));
  }
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser17read__paren__list(self) {
  const items = [];
  const cur = new _M0TPB8MutLocalGRPB13StringBuilderE(_M0MPB13StringBuilder21StringBuilder_2einner(0));
  const depth = new _M0TPB8MutLocalGiE(0);
  _L: while (true) {
    let t;
    _L$2: {
      _L$3: {
        _L$4: {
          _L$5: {
            const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser4peek(self);
            if (_bind === undefined) {
              break;
            } else {
              const _Some = _bind;
              const _x = _Some;
              switch (_x) {
                case ")": {
                  self.pos = self.pos + 1 | 0;
                  if (depth.val === 0) {
                    if (_M0MPC16string10StringView6length(_M0MPC16string6String4trim(_M0MPB13StringBuilder10to__string(cur.val), undefined)) > 0) {
                      _M0MPC15array5Array4pushGsE(items, _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPB13StringBuilder10to__string(cur.val), undefined)));
                    }
                    break _L;
                  } else {
                    _M0IPB13StringBuilderPB6Logger13write__string(cur.val, ")");
                    depth.val = depth.val - 1 | 0;
                  }
                  break;
                }
                case "(": {
                  self.pos = self.pos + 1 | 0;
                  _M0IPB13StringBuilderPB6Logger13write__string(cur.val, "(");
                  depth.val = depth.val + 1 | 0;
                  break;
                }
                case ",": {
                  break _L$5;
                }
                case ";": {
                  break _L$5;
                }
                default: {
                  t = _x;
                  break _L$3;
                }
              }
            }
            break _L$4;
          }
          self.pos = self.pos + 1 | 0;
          if (depth.val === 0) {
            _M0MPC15array5Array4pushGsE(items, _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPB13StringBuilder10to__string(cur.val), undefined)));
            cur.val = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          } else {
            _M0IPB13StringBuilderPB6Logger13write__string(cur.val, ",");
          }
        }
        break _L$2;
      }
      _M0IPB13StringBuilderPB6Logger13write__string(cur.val, t);
      self.pos = self.pos + 1 | 0;
      const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser4peek(self);
      if (_bind === undefined) {
      } else {
        if (_M0IP016_24default__implPB2Eq10not__equalGsE(_M0MPC15array5Array2atGUisEE(self.toks, self.pos - 1 | 0), "(")) {
          _M0IPB13StringBuilderPB6Logger13write__string(cur.val, " ");
        }
      }
    }
    continue;
  }
  return items;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser10parse__var(self) {
  const name = _M0FP312conglinyizhi20moonbit__css__helper13backend__less9strip__at(_M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser7advance(self));
  _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser7consume(self, ":");
  const value = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser10read__head(self);
  _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser7consume(self, ";");
  return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode6VarDef(name, value);
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser8peek__at(self, off) {
  const k = self.pos + off | 0;
  return k < self.toks.length ? _M0MPC15array5Array2atGUisEE(self.toks, k) : undefined;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser12parse__block(self) {
  const nodes = [];
  while (true) {
    const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser4peek(self);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === "}") {
        break;
      } else {
        let node;
        _L: {
          const _bind$2 = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser10parse__one(self);
          if (_bind$2 === undefined) {
            break;
          } else {
            const _Some$2 = _bind$2;
            const _node = _Some$2;
            node = _node;
            break _L;
          }
        }
        _M0MPC15array5Array4pushGsE(nodes, node);
      }
    }
    continue;
  }
  return nodes;
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser10parse__one(self) {
  let first;
  _L: {
    const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser4peek(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      if (_x === "}") {
        return undefined;
      } else {
        first = _x;
        break _L;
      }
    }
  }
  if (first.length > 0 && _M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < first.length ? first.charCodeAt(0) : $oob(), 64)) {
    const name = _M0FP312conglinyizhi20moonbit__css__helper13backend__less9strip__at(first);
    return _M0FP312conglinyizhi20moonbit__css__helper13backend__less21is__at__rule__keyword(name) ? _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser9parse__at(self) : _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser10parse__var(self);
  } else {
    if (first.length > 0 && _M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < first.length ? first.charCodeAt(0) : $oob(), 46)) {
      _L$2: {
        const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser8peek__at(self, 1);
        if (_bind === undefined) {
          break _L$2;
        } else {
          const _Some = _bind;
          const _x = _Some;
          switch (_x) {
            case "(": {
              return _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser12parse__mixin(self);
            }
            case ";": {
              const name = _M0FP312conglinyizhi20moonbit__css__helper13backend__less10strip__dot(_M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser7advance(self));
              _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser7consume(self, ";");
              return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode9MixinCall(name, []);
            }
            default: {
              break _L$2;
            }
          }
        }
      }
      return _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser21parse__decl__or__rule(self);
    } else {
      return _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser21parse__decl__or__rule(self);
    }
  }
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser9parse__at(self) {
  const name = _M0FP312conglinyizhi20moonbit__css__helper13backend__less9strip__at(_M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser7advance(self));
  if (name === "import") {
    const path_tok = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser7advance(self);
    _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser10read__head(self);
    _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser7consume(self, ";");
    return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode6Import(_M0FP312conglinyizhi20moonbit__css__helper13backend__less13strip__quotes(path_tok));
  }
  const prelude = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser18read__until__brace(self);
  _L: {
    const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser4peek(self);
    if (_bind === undefined) {
      break _L;
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case "{": {
          self.pos = self.pos + 1 | 0;
          const body = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser12parse__block(self);
          _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser7consume(self, "}");
          return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode6AtRule(name, prelude, body);
        }
        case ";": {
          self.pos = self.pos + 1 | 0;
          return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode6AtRule(name, prelude, []);
        }
        default: {
          break _L;
        }
      }
    }
  }
  return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode6AtRule(name, prelude, []);
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser21parse__decl__or__rule(self) {
  const head = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser10read__head(self);
  _L: {
    const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser4peek(self);
    if (_bind === undefined) {
      break _L;
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case "{": {
          self.pos = self.pos + 1 | 0;
          const body = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser12parse__block(self);
          _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser7consume(self, "}");
          return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode7RuleSet(head, body);
        }
        case ";": {
          self.pos = self.pos + 1 | 0;
          return _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser19make__decl__or__raw(self, head);
        }
        default: {
          break _L;
        }
      }
    }
  }
  return _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser19make__decl__or__raw(self, head);
}
function _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser12parse__mixin(self) {
  const name = _M0FP312conglinyizhi20moonbit__css__helper13backend__less10strip__dot(_M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser7advance(self));
  _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser7consume(self, "(");
  const params = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser17read__paren__list(self);
  _L: {
    const _bind = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser4peek(self);
    if (_bind === undefined) {
      break _L;
    } else {
      const _Some = _bind;
      const _x = _Some;
      switch (_x) {
        case "{": {
          self.pos = self.pos + 1 | 0;
          const body = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser12parse__block(self);
          _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser7consume(self, "}");
          return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode8MixinDef(name, params, body);
        }
        case ";": {
          self.pos = self.pos + 1 | 0;
          return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode9MixinCall(name, params);
        }
        default: {
          break _L;
        }
      }
    }
  }
  return new _M0DTP312conglinyizhi20moonbit__css__helper13backend__less8LessNode9MixinCall(name, params);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less11parse__less(toks) {
  const p = _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser3new(toks);
  return _M0MP312conglinyizhi20moonbit__css__helper13backend__less10LessParser12parse__block(p);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less17combine__selector(parent, sel) {
  if (parent.length === 0) {
    const _bind = " ";
    return _M0MPC15array5Array4joinGsE(sel, new _M0TPC16string10StringView(_bind, 0, _bind.length));
  }
  const _bind = " ";
  const s = _M0MPC15array5Array4joinGsE(sel, new _M0TPC16string10StringView(_bind, 0, _bind.length));
  const _bind$2 = "&";
  if (_M0MPC16string6String8contains(s, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
    const _bind$3 = "&";
    const r = new _M0TPB8MutLocalGsE(_M0MPC16string6String7replace(s, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length), new _M0TPC16string10StringView(parent, 0, parent.length)));
    const _tmp = r.val;
    const _bind$4 = " :";
    const _tmp$2 = new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length);
    const _bind$5 = ":";
    r.val = _M0MPC16string6String7replace(_tmp, _tmp$2, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length));
    const _tmp$3 = r.val;
    const _bind$6 = " ";
    const _tmp$4 = new _M0TPC16string10StringView(_bind$6, 0, _bind$6.length);
    const _bind$7 = "";
    r.val = _M0MPC16string6String7replace(_tmp$3, _tmp$4, new _M0TPC16string10StringView(_bind$7, 0, _bind$7.length));
    return r.val;
  }
  return `${parent} ${s}`;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less10is__number(t) {
  const n = t.length;
  if (n === 0) {
    return false;
  }
  const seen_digit = new _M0TPB8MutLocalGbE(false);
  const _bind = 0;
  let _tmp = _bind;
  while (true) {
    const i = _tmp;
    if (i < n) {
      _L: {
        const c = i >>> 0 < t.length ? t.charCodeAt(i) : $oob();
        if (_M0IPC16uint166UInt16PB2Eq5equal(c, 46)) {
          break _L;
        }
        if (c >= 48 && c <= 57) {
          seen_digit.val = true;
          break _L;
        }
        if (c >= 97 && c <= 122 || c >= 65 && c <= 90) {
          break _L;
        }
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return seen_digit.val;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less12is__operator(t) {
  return t === "+" || (t === "-" || (t === "*" || t === "/"));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less8fmt__num(v) {
  return v === _M0MPC16double6Double5floor(v) ? _M0MPC13int3Int18to__string_2einner(_M0MPC16double6Double7to__int(_M0MPC16double6Double5floor(v)), 10) : String(v);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less9to__digit(c) {
  return (c - 48 | 0) + 0;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less13parse__double(s) {
  const sign = new _M0TPB8MutLocalGdE(1);
  const i = new _M0TPB8MutLocalGiE(0);
  let _tmp;
  if (i.val < s.length) {
    let _tmp$2;
    const _tmp$3 = i.val;
    if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$3 >>> 0 < s.length ? s.charCodeAt(_tmp$3) : $oob(), 45)) {
      _tmp$2 = true;
    } else {
      const _tmp$4 = i.val;
      _tmp$2 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$4 >>> 0 < s.length ? s.charCodeAt(_tmp$4) : $oob(), 43);
    }
    _tmp = _tmp$2;
  } else {
    _tmp = false;
  }
  if (_tmp) {
    const _tmp$2 = i.val;
    if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp$2 >>> 0 < s.length ? s.charCodeAt(_tmp$2) : $oob(), 45)) {
      sign.val = -1;
    }
    i.val = i.val + 1 | 0;
  }
  const int_part = new _M0TPB8MutLocalGdE(0);
  while (true) {
    let _tmp$2;
    if (i.val < s.length) {
      let _tmp$3;
      const _tmp$4 = i.val;
      if ((_tmp$4 >>> 0 < s.length ? s.charCodeAt(_tmp$4) : $oob()) >= 48) {
        const _tmp$5 = i.val;
        _tmp$3 = (_tmp$5 >>> 0 < s.length ? s.charCodeAt(_tmp$5) : $oob()) <= 57;
      } else {
        _tmp$3 = false;
      }
      _tmp$2 = _tmp$3;
    } else {
      _tmp$2 = false;
    }
    if (_tmp$2) {
      const _tmp$3 = int_part.val * 10;
      const _tmp$4 = i.val;
      int_part.val = _tmp$3 + _M0FP312conglinyizhi20moonbit__css__helper13backend__less9to__digit(_tmp$4 >>> 0 < s.length ? s.charCodeAt(_tmp$4) : $oob());
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const frac = new _M0TPB8MutLocalGdE(0);
  const div = new _M0TPB8MutLocalGdE(1);
  let _tmp$2;
  if (i.val < s.length) {
    const _tmp$3 = i.val;
    _tmp$2 = _M0IPC16uint166UInt16PB2Eq5equal(_tmp$3 >>> 0 < s.length ? s.charCodeAt(_tmp$3) : $oob(), 46);
  } else {
    _tmp$2 = false;
  }
  if (_tmp$2) {
    i.val = i.val + 1 | 0;
    while (true) {
      let _tmp$3;
      if (i.val < s.length) {
        let _tmp$4;
        const _tmp$5 = i.val;
        if ((_tmp$5 >>> 0 < s.length ? s.charCodeAt(_tmp$5) : $oob()) >= 48) {
          const _tmp$6 = i.val;
          _tmp$4 = (_tmp$6 >>> 0 < s.length ? s.charCodeAt(_tmp$6) : $oob()) <= 57;
        } else {
          _tmp$4 = false;
        }
        _tmp$3 = _tmp$4;
      } else {
        _tmp$3 = false;
      }
      if (_tmp$3) {
        const _tmp$4 = frac.val * 10;
        const _tmp$5 = i.val;
        frac.val = _tmp$4 + _M0FP312conglinyizhi20moonbit__css__helper13backend__less9to__digit(_tmp$5 >>> 0 < s.length ? s.charCodeAt(_tmp$5) : $oob());
        div.val = div.val * 10;
        i.val = i.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return sign.val * (int_part.val + frac.val / div.val);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less10parse__num(t) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const unit = new _M0TPB8MutLocalGsE("");
  const _bind = t.length;
  let _tmp = 0;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$2 = t.charCodeAt(_string_index);
        if (_bind$2 >= 55296 && _bind$2 <= 56319 && (_string_index + 1 | 0) < _bind) {
          const _bind$3 = t.charCodeAt(_string_index + 1 | 0);
          if (_bind$3 >= 56320 && _bind$3 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$2 - 55296 | 0, 1024) | 0) + _bind$3 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$2);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$2);
          break _L;
        }
      }
      const _next_string_index = _decoded_next_string_index;
      const ch = _decoded_char;
      if (ch >= 48 && ch <= 57 || (ch === 46 || (ch === 45 || (ch === 43 || (ch === 101 || ch === 69))))) {
        _M0IPB13StringBuilderPB6Logger11write__char(sb, ch);
      } else {
        unit.val = `${unit.val}${_M0IPC14char4CharPB4Show10to__string(ch)}`;
      }
      _tmp = _next_string_index;
      continue;
    } else {
      break;
    }
  }
  const v = _M0MPB13StringBuilder10to__string(sb);
  const num = v.length > 0 ? _M0FP312conglinyizhi20moonbit__css__helper13backend__less13parse__double(v) : 0;
  return { _0: num, _1: unit.val };
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less10num__arith(a, op, b) {
  let anum;
  let aunit;
  _L: {
    const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__less10parse__num(a);
    const _anum = _bind._0;
    const _aunit = _bind._1;
    anum = _anum;
    aunit = _aunit;
    break _L;
  }
  let bnum;
  let bunit;
  _L$2: {
    const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__less10parse__num(b);
    const _bnum = _bind._0;
    const _bunit = _bind._1;
    bnum = _bnum;
    bunit = _bunit;
    break _L$2;
  }
  let res;
  switch (op) {
    case "+": {
      res = new _M0DTPC16option6OptionGdE4Some(anum + bnum);
      break;
    }
    case "-": {
      res = new _M0DTPC16option6OptionGdE4Some(anum - bnum);
      break;
    }
    case "*": {
      res = new _M0DTPC16option6OptionGdE4Some(anum * bnum);
      break;
    }
    case "/": {
      res = bnum === 0 ? _M0DTPC16option6OptionGdE4None__ : new _M0DTPC16option6OptionGdE4Some(anum / bnum);
      break;
    }
    default: {
      res = _M0DTPC16option6OptionGdE4None__;
    }
  }
  let v;
  _L$3: {
    if (res.$tag === 0) {
      return `${a} ${op} ${b}`;
    } else {
      const _Some = res;
      const _v = _Some._0;
      v = _v;
      break _L$3;
    }
  }
  return `${_M0FP312conglinyizhi20moonbit__css__helper13backend__less8fmt__num(v)}${aunit}`;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less11merge__math(toks) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < toks.length) {
      const t = _M0MPC15array5Array2atGUisEE(toks, i.val);
      if (_M0FP312conglinyizhi20moonbit__css__helper13backend__less10is__number(t) && ((i.val + 2 | 0) < toks.length && (_M0FP312conglinyizhi20moonbit__css__helper13backend__less12is__operator(_M0MPC15array5Array2atGUisEE(toks, i.val + 1 | 0)) && _M0FP312conglinyizhi20moonbit__css__helper13backend__less10is__number(_M0MPC15array5Array2atGUisEE(toks, i.val + 2 | 0))))) {
        const r = _M0FP312conglinyizhi20moonbit__css__helper13backend__less10num__arith(t, _M0MPC15array5Array2atGUisEE(toks, i.val + 1 | 0), _M0MPC15array5Array2atGUisEE(toks, i.val + 2 | 0));
        _M0IPB13StringBuilderPB6Logger13write__string(sb, r);
        i.val = i.val + 3 | 0;
      } else {
        _M0IPB13StringBuilderPB6Logger13write__string(sb, t);
        i.val = i.val + 1 | 0;
      }
      if (i.val < toks.length) {
        _M0IPB13StringBuilderPB6Logger13write__string(sb, " ");
      }
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(sb);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less11lookup__var(env, name) {
  let _tmp = env;
  let _tmp$2 = name;
  while (true) {
    const env$2 = _tmp;
    const name$2 = _tmp$2;
    const _bind = env$2.vars;
    const _bind$2 = _bind.length;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$2) {
        const v = _bind[_];
        if (v._0 === name$2) {
          return new _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(v._1);
        }
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let p;
    _L: {
      const _bind$3 = env$2.parent;
      if (_bind$3 === undefined) {
        return _M0DTPC16option6OptionGRPB5ArrayGsEE4None__;
      } else {
        const _Some = _bind$3;
        const _p = _Some;
        p = _p;
        break _L;
      }
    }
    _tmp = p;
    continue;
  }
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less11eval__value(toks, env) {
  const resolved = _M0MPC15array5Array3mapGssE(toks, (t) => _M0FP312conglinyizhi20moonbit__css__helper13backend__less11resolve__at(t, env));
  return _M0FP312conglinyizhi20moonbit__css__helper13backend__less11merge__math(resolved);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less11resolve__at(t, env) {
  if (t.length > 0 && _M0IPC16uint166UInt16PB2Eq5equal(0 >>> 0 < t.length ? t.charCodeAt(0) : $oob(), 64)) {
    const name = _M0FP312conglinyizhi20moonbit__css__helper13backend__less9strip__at(t);
    let val;
    _L: {
      const _bind = _M0FP312conglinyizhi20moonbit__css__helper13backend__less11lookup__var(env, name);
      if (_bind.$tag === 0) {
        return t;
      } else {
        const _Some = _bind;
        const _val = _Some._0;
        val = _val;
        break _L;
      }
    }
    return _M0FP312conglinyizhi20moonbit__css__helper13backend__less11eval__value(val, env);
  } else {
    return t;
  }
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less16overwrite__mixin(mixins, name, params, body) {
  const rs = [];
  const _bind = mixins.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const m = mixins[_];
      _L: {
        if (m._0 === name) {
          break _L;
        }
        _M0MPC15array5Array4pushGsE(rs, m);
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGsE(rs, { _0: name, _1: { _0: params, _1: body } });
  return rs;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less14overwrite__var(vars, name, val) {
  const rs = [];
  const _bind = vars.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = vars[_];
      _L: {
        if (v._0 === name) {
          break _L;
        }
        _M0MPC15array5Array4pushGsE(rs, v);
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGsE(rs, { _0: name, _1: val });
  return rs;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less10new__scope(nodes, parent) {
  const vars = new _M0TPB8MutLocalGRPB5ArrayGUsRPB5ArrayGsEEEE([]);
  const mixins = new _M0TPB8MutLocalGRPB5ArrayGUsURPB5ArrayGsERPB5ArrayGRP312conglinyizhi20moonbit__css__helper13backend__less8LessNodeEEEEE([]);
  const _bind = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const node = nodes[_];
      let params;
      let name;
      let body;
      _L: {
        _L$2: {
          let name$2;
          let val;
          _L$3: {
            _L$4: {
              switch (node.$tag) {
                case 2: {
                  const _VarDef = node;
                  const _name = _VarDef._0;
                  const _val = _VarDef._1;
                  name$2 = _name;
                  val = _val;
                  break _L$4;
                }
                case 3: {
                  const _MixinDef = node;
                  const _name$2 = _MixinDef._0;
                  const _params = _MixinDef._1;
                  const _body = _MixinDef._2;
                  params = _params;
                  name = _name$2;
                  body = _body;
                  break _L$2;
                }
              }
              break _L$3;
            }
            vars.val = _M0FP312conglinyizhi20moonbit__css__helper13backend__less14overwrite__var(vars.val, name$2, val);
          }
          break _L;
        }
        mixins.val = _M0FP312conglinyizhi20moonbit__css__helper13backend__less16overwrite__mixin(mixins.val, name, params, body);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP312conglinyizhi20moonbit__css__helper13backend__less3Env(vars.val, mixins.val, parent);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less11split__args(s) {
  const _bind = " ";
  return _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPB4Iter6filterGRPC16string10StringViewE(_M0MPC16string6String5split(s, new _M0TPC16string10StringView(_bind, 0, _bind.length)), (x) => _M0MPC16string10StringView6length(x) > 0), (x) => _M0MPC16string10StringView9to__owned(x)));
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less11find__colon(s) {
  const n = s.length;
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < n) {
      const _tmp = i.val;
      if (_M0IPC16uint166UInt16PB2Eq5equal(_tmp >>> 0 < s.length ? s.charCodeAt(_tmp) : $oob(), 58)) {
        return i.val;
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return -1;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less12split__param(p) {
  const idx = _M0FP312conglinyizhi20moonbit__css__helper13backend__less11find__colon(p);
  return idx >= 0 ? { _0: _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0FP312conglinyizhi20moonbit__css__helper13backend__less9strip__at(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(p, 0, idx))), undefined)), _1: _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0MPC16string10StringView9to__owned(_M0MPC16string6String11sub_2einner(p, idx + 1 | 0, undefined)), undefined)) } : { _0: _M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(_M0FP312conglinyizhi20moonbit__css__helper13backend__less9strip__at(p), undefined)), _1: "" };
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less12bind__params(env, params, args) {
  const vars = [];
  const _bind = 0;
  const _bind$2 = params.length;
  let _tmp = _bind;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const p = _M0MPC15array5Array2atGUisEE(params, i);
      let pname;
      let pdef;
      _L: {
        const _bind$3 = _M0FP312conglinyizhi20moonbit__css__helper13backend__less12split__param(p);
        const _pname = _bind$3._0;
        const _pdef = _bind$3._1;
        pname = _pname;
        pdef = _pdef;
        break _L;
      }
      if (i < args.length && _M0MPC15array5Array2atGUisEE(args, i).length > 0) {
        _M0MPC15array5Array4pushGsE(vars, { _0: pname, _1: _M0FP312conglinyizhi20moonbit__css__helper13backend__less11split__args(_M0MPC15array5Array2atGUisEE(args, i)) });
      } else {
        if (pdef.length > 0) {
          _M0MPC15array5Array4pushGsE(vars, { _0: pname, _1: _M0FP312conglinyizhi20moonbit__css__helper13backend__less11split__args(pdef) });
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP312conglinyizhi20moonbit__css__helper13backend__less3Env(vars, [], env);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less13lookup__mixin(env, name) {
  let _tmp = env;
  let _tmp$2 = name;
  while (true) {
    const env$2 = _tmp;
    const name$2 = _tmp$2;
    const _bind = env$2.mixins;
    const _bind$2 = _bind.length;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$2) {
        const m = _bind[_];
        if (m._0 === name$2) {
          return m._1;
        }
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    let p;
    _L: {
      const _bind$3 = env$2.parent;
      if (_bind$3 === undefined) {
        return undefined;
      } else {
        const _Some = _bind$3;
        const _p = _Some;
        p = _p;
        break _L;
      }
    }
    _tmp = p;
    continue;
  }
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less14collect__decls(nodes, env, out) {
  const _bind = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const node = nodes[_];
      let name;
      let args;
      _L: {
        _L$2: {
          let prop;
          let val;
          _L$3: {
            _L$4: {
              switch (node.$tag) {
                case 1: {
                  const _Decl = node;
                  const _prop = _Decl._0;
                  const _val = _Decl._1;
                  prop = _prop;
                  val = _val;
                  break _L$4;
                }
                case 4: {
                  const _MixinCall = node;
                  const _name = _MixinCall._0;
                  const _args = _MixinCall._1;
                  name = _name;
                  args = _args;
                  break _L$2;
                }
              }
              break _L$3;
            }
            _M0MPC15array5Array4pushGsE(out, { _0: prop, _1: _M0FP312conglinyizhi20moonbit__css__helper13backend__less11eval__value(val, env) });
          }
          break _L;
        }
        let params;
        let body;
        _L$3: {
          _L$4: {
            const _bind$2 = _M0FP312conglinyizhi20moonbit__css__helper13backend__less13lookup__mixin(env, name);
            if (_bind$2 === undefined) {
            } else {
              const _Some = _bind$2;
              const _x = _Some;
              const _params = _x._0;
              const _body = _x._1;
              params = _params;
              body = _body;
              break _L$4;
            }
            break _L$3;
          }
          _M0FP312conglinyizhi20moonbit__css__helper13backend__less14collect__decls(body, _M0FP312conglinyizhi20moonbit__css__helper13backend__less12bind__params(env, params, args), out);
        }
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less13contains__key(seen, key) {
  const _bind = seen.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const s = seen[_];
      if (s === key) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less17gen__block__decls(nodes, env, read) {
  const out = [];
  _M0FP312conglinyizhi20moonbit__css__helper13backend__less14collect__decls(nodes, env, out);
  const seen = [];
  const rev = [];
  const k = new _M0TPB8MutLocalGiE(out.length - 1 | 0);
  while (true) {
    if (k.val >= 0) {
      let p;
      let v;
      _L: {
        const _bind = _M0MPC15array5Array2atGUisEE(out, k.val);
        const _p = _bind._0;
        const _v = _bind._1;
        p = _p;
        v = _v;
        break _L;
      }
      const key = `${p}\u0000${v}`;
      if (_M0FP312conglinyizhi20moonbit__css__helper13backend__less13contains__key(seen, key) === false) {
        _M0MPC15array5Array4pushGsE(rev, { _0: p, _1: v });
        _M0MPC15array5Array4pushGsE(seen, key);
      }
      k.val = k.val - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const m = new _M0TPB8MutLocalGiE(rev.length - 1 | 0);
  while (true) {
    if (m.val >= 0) {
      let p;
      let v;
      _L: {
        const _bind = _M0MPC15array5Array2atGUisEE(rev, m.val);
        const _p = _bind._0;
        const _v = _bind._1;
        p = _p;
        v = _v;
        break _L;
      }
      _M0IPB13StringBuilderPB6Logger13write__string(sb, `  ${p}: ${v};\n`);
      m.val = m.val - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(sb);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less10gen__block(nodes, parent, env, read) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const node = nodes[_];
      const s = _M0FP312conglinyizhi20moonbit__css__helper13backend__less9gen__node(node, parent, env, read);
      if (_M0MPC16string10StringView6length(_M0MPC16string6String4trim(s, undefined)) > 0) {
        _M0IPB13StringBuilderPB6Logger13write__string(sb, s);
        _M0IPB13StringBuilderPB6Logger13write__string(sb, "\n");
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(sb);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less9gen__node(node, parent, env, read) {
  let text;
  _L: {
    let path;
    _L$2: {
      let prelude;
      let name;
      let body;
      _L$3: {
        let sel;
        let body$2;
        _L$4: {
          let prop;
          let val;
          _L$5: {
            switch (node.$tag) {
              case 2: {
                return "";
              }
              case 3: {
                return "";
              }
              case 1: {
                const _Decl = node;
                const _prop = _Decl._0;
                const _val = _Decl._1;
                prop = _prop;
                val = _val;
                break _L$5;
              }
              case 0: {
                const _RuleSet = node;
                const _sel = _RuleSet._0;
                const _body = _RuleSet._1;
                sel = _sel;
                body$2 = _body;
                break _L$4;
              }
              case 5: {
                const _AtRule = node;
                const _name = _AtRule._0;
                const _prelude = _AtRule._1;
                const _body$2 = _AtRule._2;
                prelude = _prelude;
                name = _name;
                body = _body$2;
                break _L$3;
              }
              case 6: {
                const _Import = node;
                const _path = _Import._0;
                path = _path;
                break _L$2;
              }
              case 4: {
                return "";
              }
              default: {
                const _Raw = node;
                const _text = _Raw._0;
                text = _text;
                break _L;
              }
            }
          }
          return `  ${prop}: ${_M0FP312conglinyizhi20moonbit__css__helper13backend__less11eval__value(val, env)};\n`;
        }
        return _M0FP312conglinyizhi20moonbit__css__helper13backend__less9gen__rule(_M0FP312conglinyizhi20moonbit__css__helper13backend__less17combine__selector(parent, sel), body$2, env, read);
      }
      return _M0FP312conglinyizhi20moonbit__css__helper13backend__less13gen__at__rule(name, prelude, body, parent, env, read);
    }
    return _M0FP312conglinyizhi20moonbit__css__helper13backend__less11gen__import(path, parent, env, read);
  }
  return `${text}\n`;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less13gen__at__rule(name, prelude, body, parent, env, read) {
  const pre = _M0FP312conglinyizhi20moonbit__css__helper13backend__less11eval__value(prelude, env);
  const child_env = _M0FP312conglinyizhi20moonbit__css__helper13backend__less10new__scope(body, env);
  return `@${name} ${pre} {\n${_M0FP312conglinyizhi20moonbit__css__helper13backend__less10gen__block(body, parent, child_env, read)}}\n`;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less11gen__import(path, parent, env, read) {
  let f;
  _L: {
    if (read === undefined) {
      return "";
    } else {
      const _Some = read;
      const _f = _Some;
      f = _f;
      break _L;
    }
  }
  let imported;
  let _try_err;
  _L$2: {
    _L$3: {
      const _bind = f(path);
      if (_bind.$tag === 1) {
        const _ok = _bind;
        imported = _ok._0;
      } else {
        const _err = _bind;
        _try_err = _err._0;
        break _L$3;
      }
      break _L$2;
    }
    imported = "";
  }
  const nodes = _M0FP312conglinyizhi20moonbit__css__helper13backend__less11parse__less(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss8tokenize(imported));
  const child_env = _M0FP312conglinyizhi20moonbit__css__helper13backend__less10new__scope(nodes, env);
  return _M0FP312conglinyizhi20moonbit__css__helper13backend__less10gen__block(nodes, parent, child_env, read);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less9gen__rule(full, body, env, read) {
  const child_env = _M0FP312conglinyizhi20moonbit__css__helper13backend__less10new__scope(body, env);
  const decls = _M0FP312conglinyizhi20moonbit__css__helper13backend__less17gen__block__decls(body, child_env, read);
  const lifted = _M0FP312conglinyizhi20moonbit__css__helper13backend__less18gen__block__lifted(body, full, child_env, read);
  const head = _M0MPC16string10StringView6length(_M0MPC16string6String4trim(decls, undefined)) > 0 ? `${full} {\n${decls}}\n` : "";
  return `${head}${lifted}`;
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less18gen__block__lifted(nodes, full, env, read) {
  const sb = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const _bind = nodes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const node = nodes[_];
      let path;
      _L: {
        _L$2: {
          let prelude;
          let name;
          let body;
          _L$3: {
            _L$4: {
              let name$2;
              let args;
              _L$5: {
                _L$6: {
                  let sel;
                  let body$2;
                  _L$7: {
                    _L$8: {
                      switch (node.$tag) {
                        case 0: {
                          const _RuleSet = node;
                          const _sel = _RuleSet._0;
                          const _body = _RuleSet._1;
                          sel = _sel;
                          body$2 = _body;
                          break _L$8;
                        }
                        case 4: {
                          const _MixinCall = node;
                          const _name = _MixinCall._0;
                          const _args = _MixinCall._1;
                          name$2 = _name;
                          args = _args;
                          break _L$6;
                        }
                        case 5: {
                          const _AtRule = node;
                          const _name$2 = _AtRule._0;
                          const _prelude = _AtRule._1;
                          const _body$2 = _AtRule._2;
                          prelude = _prelude;
                          name = _name$2;
                          body = _body$2;
                          break _L$4;
                        }
                        case 6: {
                          const _Import = node;
                          const _path = _Import._0;
                          path = _path;
                          break _L$2;
                        }
                      }
                      break _L$7;
                    }
                    _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0FP312conglinyizhi20moonbit__css__helper13backend__less9gen__rule(_M0FP312conglinyizhi20moonbit__css__helper13backend__less17combine__selector(full, sel), body$2, env, read));
                  }
                  break _L$5;
                }
                let params;
                let body$2;
                _L$7: {
                  _L$8: {
                    const _bind$2 = _M0FP312conglinyizhi20moonbit__css__helper13backend__less13lookup__mixin(env, name$2);
                    if (_bind$2 === undefined) {
                    } else {
                      const _Some = _bind$2;
                      const _x = _Some;
                      const _params = _x._0;
                      const _body = _x._1;
                      params = _params;
                      body$2 = _body;
                      break _L$8;
                    }
                    break _L$7;
                  }
                  const penv = _M0FP312conglinyizhi20moonbit__css__helper13backend__less12bind__params(env, params, args);
                  _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0FP312conglinyizhi20moonbit__css__helper13backend__less18gen__block__lifted(body$2, full, penv, read));
                }
              }
              break _L$3;
            }
            _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0FP312conglinyizhi20moonbit__css__helper13backend__less13gen__at__rule(name, prelude, body, full, env, read));
          }
          break _L;
        }
        _M0IPB13StringBuilderPB6Logger13write__string(sb, _M0FP312conglinyizhi20moonbit__css__helper13backend__less11gen__import(path, full, env, read));
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPB13StringBuilder10to__string(sb);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less10eval__less(nodes, read) {
  const env = _M0FP312conglinyizhi20moonbit__css__helper13backend__less10new__scope(nodes, undefined);
  return _M0FP312conglinyizhi20moonbit__css__helper13backend__less10gen__block(nodes, "", env, read);
}
function _M0FP312conglinyizhi20moonbit__css__helper13backend__less12less__engine() {
  return _M0MP312conglinyizhi20moonbit__css__helper4core6Engine3new(() => "less", (fmt) => {
    if (fmt === 1) {
      return true;
    } else {
      return false;
    }
  }, (source) => new _M0DTPC16result6ResultGsRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(_M0FP312conglinyizhi20moonbit__css__helper13backend__less10eval__less(_M0FP312conglinyizhi20moonbit__css__helper13backend__less11parse__less(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss8tokenize(source)), undefined)), (source, read) => new _M0DTPC16result6ResultGsRP312conglinyizhi20moonbit__css__helper4core12RabbitaErrorE2Ok(_M0FP312conglinyizhi20moonbit__css__helper13backend__less10eval__less(_M0FP312conglinyizhi20moonbit__css__helper13backend__less11parse__less(_M0FP312conglinyizhi20moonbit__css__helper13backend__scss8tokenize(source)), read)));
}
function _M0FP212conglinyizhi20moonbit__css__helper7default() {
  return _M0MP312conglinyizhi20moonbit__css__helper4core7Rabbita3new([_M0FP312conglinyizhi20moonbit__css__helper12backend__css11css__engine(), _M0FP312conglinyizhi20moonbit__css__helper13backend__scss12scss__engine(), _M0FP312conglinyizhi20moonbit__css__helper13backend__less12less__engine()]);
}
function _M0FP212conglinyizhi20moonbit__css__helper13compile__scss(source) {
  return _M0MP312conglinyizhi20moonbit__css__helper4core7Rabbita21compile__with__format(_M0FP212conglinyizhi20moonbit__css__helper7default(), source, 0);
}
function _M0FP212conglinyizhi20moonbit__css__helper13compile__less(source) {
  return _M0MP312conglinyizhi20moonbit__css__helper4core7Rabbita21compile__with__format(_M0FP212conglinyizhi20moonbit__css__helper7default(), source, 1);
}
function _M0FP512conglinyizhi20moonbit__css__helper7example10webruntime3web13compile__scss(src) {
  let _try_err;
  _L: {
    const _bind = _M0FP212conglinyizhi20moonbit__css__helper13compile__scss(src);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      return _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
  }
  return "";
}
function _M0FP512conglinyizhi20moonbit__css__helper7example10webruntime3web13compile__less(src) {
  let _try_err;
  _L: {
    const _bind = _M0FP212conglinyizhi20moonbit__css__helper13compile__less(src);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      return _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
  }
  return "";
}
export { _M0FP512conglinyizhi20moonbit__css__helper7example10webruntime3web13compile__scss as compile_scss, _M0FP512conglinyizhi20moonbit__css__helper7example10webruntime3web13compile__less as compile_less }
//# sourceMappingURL=web.js.map
