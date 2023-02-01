export const data = JSON.parse("{\"key\":\"v-3700893a\",\"path\":\"/SkillPoint/@Hook/\",\"title\":\"父组件里监听子组件的生命周期\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"父组件里监听子组件的生命周期\",\"date\":\"2022-06-14T17:19:46.000Z\",\"permalink\":\"/SkillPoint/@Hook/\",\"category\":[\"VUE SKILL\"],\"tag\":[\"前端小技巧\"],\"summary\":\"比如有父组件 Parent 和子组件 Child，如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，常规的写法可能如下： 此外，还有一种特别简单的方式，子组件不需要任何处理，只需要在父组件引用的时候通过@hook 来监听即可，@hook也可以监听其它的生命周期事件,代码如下： 实现原理在vue源码的 /src/core/instance/life\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://jin-shaohui.gitee.io/SkillPoint/@Hook/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"繁华中自律，落魄中自愈\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"父组件里监听子组件的生命周期\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"前端小技巧\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-06-14T17:19:46.000Z\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.7,\"words\":209},\"copyright\":\"著作权归JSH所有\\n基于MIT协议\\n原文链接：https://jin-shaohui.gitee.io/SkillPoint/@Hook/\",\"filePathRelative\":\"Knowledge/FrontEnd/SkillPoint/@Hook/index.md\",\"localizedDate\":\"2022年6月15日\"}")

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
