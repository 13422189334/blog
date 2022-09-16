import { defineClientConfig } from "@vuepress/client";
    import { defineAsyncComponent } from "vue";
import CodeDemo from "F:/_ _project/自己/sla-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo";
import FlowChart from "F:/_ _project/自己/sla-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import Mermaid from "F:/_ _project/自己/sla-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "F:/_ _project/自己/sla-blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "F:/_ _project/自己/sla-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "F:/_ _project/自己/sla-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "F:/_ _project/自己/sla-blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    
  }
});