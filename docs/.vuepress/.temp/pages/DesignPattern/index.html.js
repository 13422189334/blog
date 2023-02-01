export const data = JSON.parse("{\"key\":\"v-24cea5d6\",\"path\":\"/DesignPattern/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"hero\":true,\"heroText\":\"设计模式\",\"tagline\":\"23种设计模式\",\"heroImage\":\"./heroImages/designPattern-light.jpg\",\"heroImageDark\":\"./heroImages/designPattern-dark.jpg\",\"heroAlt\":\"主页图标的替代文字\",\"actions\":[{\"text\":\"快速阅读 💡\",\"link\":\"/DesignPattern/Observer/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"观察者模式\",\"icon\":\"markdown\",\"details\":null,\"link\":\"/DesignPattern/Observer/\"}],\"summary\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://jin-shaohui.gitee.io/DesignPattern/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"繁华中自律，落魄中自愈\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.2,\"words\":60},\"copyright\":\"著作权归JSH所有\\n基于MIT协议\\n原文链接：https://jin-shaohui.gitee.io/DesignPattern/\",\"filePathRelative\":\"DesignPattern/index.md\"}")

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
