import {
  useScrollPromise
} from "./chunk-UMSPRTGH.js";
import "./chunk-WVEKK445.js";
import "./chunk-6QUCW4GD.js";
import "./chunk-TMJVQBRG.js";
import "./chunk-KHE7BIUW.js";
import "./chunk-YACYAO4R.js";
import {
  Transition,
  defineComponent,
  h
} from "./chunk-IU5U32L3.js";
import "./chunk-XYQ66V4O.js";
import "./chunk-TH2OHAGX.js";

// node_modules/vuepress-theme-hope/lib/client/components/transitions/FadeSlideY.js
import "F:/_ _project/\u81EA\u5DF1/vuepress/node_modules/vuepress-theme-hope/lib/client/styles/fade-slide-y.scss";
var FadeSlideY_default = defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const scrollPromise = useScrollPromise();
    const onBeforeEnter = scrollPromise.resolve;
    const onBeforeLeave = scrollPromise.pending;
    return () => h(Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a;
      return (_a = slots["default"]) == null ? void 0 : _a.call(slots);
    });
  }
});

// dep:@theme-hope_components_transitions_FadeSlideY__js
var theme_hope_components_transitions_FadeSlideY_js_default = FadeSlideY_default;
export {
  theme_hope_components_transitions_FadeSlideY_js_default as default
};
//# sourceMappingURL=@theme-hope_components_transitions_FadeSlideY__js.js.map
