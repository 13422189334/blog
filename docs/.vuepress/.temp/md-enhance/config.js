import { defineClientConfig } from "@vuepress/client";
    import { defineAsyncComponent } from "vue";
import "E:/个人/jin-shaohui/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "E:/个人/jin-shaohui/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import FlowChart from "E:/个人/jin-shaohui/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "E:/个人/jin-shaohui/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import Mermaid from "E:/个人/jin-shaohui/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Presentation from "E:/个人/jin-shaohui/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import "E:/个人/jin-shaohui/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    
  }
});