export const data = JSON.parse("{\"key\":\"v-5e533bfa\",\"path\":\"/JavaScript/EventLoop/\",\"title\":\"JavaScript 执行机制\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"JavaScript 执行机制\",\"lang\":\"zh-CN\",\"date\":\"2022-06-01T16:15:33.000Z\",\"permalink\":\"/JavaScript/EventLoop/\",\"sidebar\":true,\"article\":true,\"comment\":true,\"editLink\":true,\"category\":[\"JavaScript\",\"EventLoop\"],\"tag\":[\"JS执行机制\"],\"summary\":\"# 这一次，彻底弄懂 JavaScript 执行机制\\n不论你是javascript新手还是老鸟，不论是面试求职，还是日常开发工作，\\n我们经常会遇到这样的情况：给定的几行代码，我们需要知道其输出内容和顺序。\\n因为javascript是一门单线程语言，所以我们可以得出结论：\\njavascript是按照语句出现的顺序执行的\\n看到这里读者要打人了：我难道不知道js是一行一行执行的？还用你说？稍安勿躁，正因为js是一行一行执行的，所以我们以为js都是这样的：\\nlet a = '1';\\nconsole.log(a);\\n\\nlet b = '2';\\nconsole.log(b);\\n\\n\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://jin-shaohui.gitee.io/JavaScript/EventLoop/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"繁华中自律，落魄中自愈\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"JavaScript 执行机制\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"JS执行机制\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-06-01T16:15:33.000Z\"}]]},\"excerpt\":\"<h1 id=\\\"这一次-彻底弄懂-javascript-执行机制\\\" tabindex=\\\"-1\\\"><a class=\\\"header-anchor\\\" href=\\\"#这一次-彻底弄懂-javascript-执行机制\\\" aria-hidden=\\\"true\\\">#</a> 这一次，彻底弄懂 JavaScript 执行机制</h1>\\n<p>不论你是javascript新手还是老鸟，不论是面试求职，还是日常开发工作，\\n我们经常会遇到这样的情况：给定的几行代码，我们需要知道其输出内容和顺序。\\n因为javascript是一门单线程语言，所以我们可以得出结论：</p>\\n<p>javascript是按照语句出现的顺序执行的\\n看到这里读者要打人了：我难道不知道js是一行一行执行的？还用你说？稍安勿躁，正因为js是一行一行执行的，所以我们以为js都是这样的：</p>\\n<div class=\\\"language-javascript ext-js line-numbers-mode\\\"><pre v-pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">let</span> a <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">'1'</span><span class=\\\"token punctuation\\\">;</span>\\nconsole<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>a<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">let</span> b <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">'2'</span><span class=\\\"token punctuation\\\">;</span>\\nconsole<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>b<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div><p><img src=\\\"/assets/knowledge/frontEnd/javaScript/eventLoop/001.jpg\\\" alt=\\\"microInfo\\\"></p>\\n\",\"headers\":[{\"level\":2,\"title\":\"关于javascript\",\"slug\":\"关于javascript\",\"children\":[]},{\"level\":2,\"title\":\"javascript事件循环\",\"slug\":\"javascript事件循环\",\"children\":[]},{\"level\":2,\"title\":\"又爱又恨的setTimeout\",\"slug\":\"又爱又恨的settimeout\",\"children\":[]},{\"level\":2,\"title\":\"又恨又爱的setInterval\",\"slug\":\"又恨又爱的setinterval\",\"children\":[]},{\"level\":2,\"title\":\"Promise与process.nextTick(callback)\",\"slug\":\"promise与process-nexttick-callback\",\"children\":[]},{\"level\":2,\"title\":\"写在最后\",\"slug\":\"写在最后\",\"children\":[]}],\"readingTime\":{\"minutes\":11.2,\"words\":3360},\"copyright\":\"著作权归JSH所有\\n基于MIT协议\\n原文链接：https://jin-shaohui.gitee.io/JavaScript/EventLoop/\",\"filePathRelative\":\"Knowledge/FrontEnd/JavaScript/EventLoop/index.md\",\"localizedDate\":\"2022年6月2日\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
