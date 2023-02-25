import { defineClientConfig } from "@vuepress/client";
import ChartJS from "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "F:/_ _project/自己/vuepress/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Mermaid from "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Tabs from "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import { defineAsyncComponent } from "vue";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app))
      app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app))
      app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Tabs", Tabs);
    app.component("VuePlayground", defineAsyncComponent(() => import("F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
        
  },
});
