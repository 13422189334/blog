export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"主页\",\"heroImage\":\"/logo/logo.jpg\",\"heroImageDark\":\"/logo/logo.jpg\",\"heroText\":\"我站在风中，任你大雾四起\",\"heroFullScreen\":true,\"tagline\":\"谋生的路上不抛弃良知 | 谋爱的路上不丢失尊严\",\"projects\":[{\"name\":\"vue3-webpack-music\",\"icon\":\"link\",\"desc\":\"一个模仿网易云音乐的网站✨\",\"link\":\"https://jin-shaohui.gitee.io/vue3-webpack-music\"},{\"name\":\"simple-webpack\",\"icon\":\"project\",\"desc\":\"Eval实现简易版webpack✨\",\"link\":\"https://gitee.com/jin-shaohui/simple-webpack\"},{\"name\":\"simple-vue\",\"icon\":\"project\",\"desc\":\"vue数据劫持✨\",\"link\":\"https://gitee.com/jin-shaohui/simple-vue\"},{\"name\":\"simple-promise\",\"icon\":\"project\",\"desc\":\"简单实现promise✨\",\"link\":\"https://gitee.com/jin-shaohui/simple-promise\"},{\"name\":\"webpack-demo\",\"icon\":\"project\",\"desc\":\"手写webpack编译流程✨\",\"link\":\"https://gitee.com/jin-shaohui/webpack-demo\"}],\"summary\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://jin-shaohui.gitee.io/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"繁华中自律，落魄中自愈\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.51,\"words\":153},\"copyright\":\"著作权归JSH所有\\n基于MIT协议\\n原文链接：https://jin-shaohui.gitee.io/\",\"filePathRelative\":\"README.md\"}")

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
