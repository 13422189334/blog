import {
  useScrollPromise
} from "./chunk-QN5N4Q3X.js";
import "./chunk-3DCDQLB2.js";
import "./chunk-6QUCW4GD.js";
import "./chunk-4Q7REXDD.js";
import "./chunk-SWJALXVA.js";
import "./chunk-YACYAO4R.js";
import {
  Transition,
  defineComponent,
  h
} from "./chunk-3JL2R52N.js";
import "./chunk-XYQ66V4O.js";
import "./chunk-TH2OHAGX.js";

// node_modules/vuepress-theme-hope/lib/client/components/transitions/FadeSlideY.js
import "E:/\u4E2A\u4EBA/jin-shaohui/node_modules/vuepress-theme-hope/lib/client/styles/fade-slide-y.scss";
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
