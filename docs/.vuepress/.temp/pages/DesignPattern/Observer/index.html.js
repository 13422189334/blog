export const data = JSON.parse("{\"key\":\"v-2c569a3a\",\"path\":\"/DesignPattern/Observer/\",\"title\":\"观察者模式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"观察者模式\",\"lang\":\"zh-CN\",\"date\":\"2022-05-16T11:21:30.000Z\",\"permalink\":\"/DesignPattern/Observer/\",\"category\":[\"设计模式\"],\"tag\":[\"很菜的设计模式\"],\"summary\":\"观察者模式 我们学习vue的时候，经常会遇到消息通信，但大部分组件不是父子关系，就是兄弟关系。 那如果两个没有任何关系的组件，既要进行消息通信，要保证通信不丢失，那么这时候 观察者模式（发布-订阅模式） 就很好用了。 发布-订阅\\r\\\" 发布：数据推送方，如：组件A想获取组件B数据，组件B抛出组件A需要的数据\\\"\\r\\\"\\\"\\r\\\" 订阅：提出诉求方，如：组件A想获取组件B\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://jin-shaohui.gitee.io/DesignPattern/Observer/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"繁华中自律，落魄中自愈\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"观察者模式\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"很菜的设计模式\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-05-16T11:21:30.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"发布-订阅\",\"slug\":\"发布-订阅\",\"link\":\"#发布-订阅\",\"children\":[]},{\"level\":2,\"title\":\"代码编写\",\"slug\":\"代码编写\",\"link\":\"#代码编写\",\"children\":[]},{\"level\":2,\"title\":\"实际应用\",\"slug\":\"实际应用\",\"link\":\"#实际应用\",\"children\":[]}],\"readingTime\":{\"minutes\":2.69,\"words\":807},\"copyright\":\"著作权归JSH所有\\n基于MIT协议\\n原文链接：https://jin-shaohui.gitee.io/DesignPattern/Observer/\",\"filePathRelative\":\"DesignPattern/Observer/index.md\",\"localizedDate\":\"2022年5月16日\"}")

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
