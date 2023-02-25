import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import Badge from "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


import "F:/_ _project/自己/vuepress/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
