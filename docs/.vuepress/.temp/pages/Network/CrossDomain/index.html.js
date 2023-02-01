export const data = JSON.parse("{\"key\":\"v-0fb4daf6\",\"path\":\"/Network/CrossDomain/\",\"title\":\"跨域\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"跨域\",\"lang\":\"zh-CN\",\"date\":\"2022-06-01T15:28:16.000Z\",\"permalink\":\"/Network/CrossDomain/\",\"sidebar\":true,\"article\":true,\"comment\":true,\"editLink\":true,\"category\":[\"Network\"],\"tag\":[\"跨域\"],\"summary\":\"白话解释：所谓跨域其实就是浏览器对我们发送的接口请求进行拦截，不允许我们直接访问，浏览器就像是一个中间桥梁，它说让我们通过就让通过，它说不让通过那就通过不了。\\n# 发生跨域的三个必要条件：\\n一般情况，我们己的项目地址和接口地址的域名不同时，如：https://localhost:9527，也许会不假思索的就能回答出：不同协议，不同域名，不同端口。没有问题，但并不准确，我更倾向于把这三个叫 跨域的三要素 ，那什么是跨域形成的必要条件呢？\\n\\n浏览器限制： 即浏览器对跨域行为进行检测和阻止\\n触发跨域的三要素之一： 即协议、域名和端口三个条件满足其一\\n发起的是xhr请求： 即发起的是 XMLHttpRequest 类型的请求。\\n\\n\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://jin-shaohui.gitee.io/Network/CrossDomain/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"繁华中自律，落魄中自愈\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"跨域\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"跨域\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-06-01T15:28:16.000Z\"}]]},\"excerpt\":\"<p>白话解释：所谓跨域其实就是浏览器对我们发送的接口请求进行拦截，不允许我们直接访问，浏览器就像是一个中间桥梁，它说让我们通过就让通过，它说不让通过那就通过不了。</p>\\n<h2 id=\\\"发生跨域的三个必要条件\\\" tabindex=\\\"-1\\\"><a class=\\\"header-anchor\\\" href=\\\"#发生跨域的三个必要条件\\\" aria-hidden=\\\"true\\\">#</a> 发生跨域的三个必要条件：</h2>\\n<p>一般情况，我们己的项目地址和接口地址的域名不同时，如：https://localhost:9527，也许会不假思索的就能回答出：<strong>不同协议，不同域名，不同端口</strong>。没有问题，但并不准确，我更倾向于把这三个叫 <strong>跨域的三要素</strong> ，那什么是跨域形成的必要条件呢？</p>\\n<blockquote>\\n<p>浏览器限制： 即浏览器对跨域行为进行检测和阻止</p>\\n<p>触发跨域的三要素之一： 即协议、域名和端口三个条件满足其一</p>\\n<p>发起的是xhr请求： 即发起的是 XMLHttpRequest 类型的请求。</p>\\n</blockquote>\\n\",\"headers\":[{\"level\":2,\"title\":\"发生跨域的三个必要条件：\",\"slug\":\"发生跨域的三个必要条件\",\"children\":[]},{\"level\":2,\"title\":\"如何解决跨域？\",\"slug\":\"如何解决跨域\",\"children\":[{\"level\":3,\"title\":\"补充后端解决跨域问题\",\"slug\":\"补充后端解决跨域问题\",\"children\":[]}]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"children\":[]}],\"readingTime\":{\"minutes\":7.43,\"words\":2229},\"copyright\":\"著作权归JSH所有\\n基于MIT协议\\n原文链接：https://jin-shaohui.gitee.io/Network/CrossDomain/\",\"filePathRelative\":\"Knowledge/FrontEnd/Network/CrossDomain/index.md\",\"localizedDate\":\"2022年6月1日\"}")

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
