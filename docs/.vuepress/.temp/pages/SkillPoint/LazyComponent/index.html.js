export const data = JSON.parse("{\"key\":\"v-58b18add\",\"path\":\"/SkillPoint/LazyComponent/\",\"title\":\"组件懒加载\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"组件懒加载\",\"date\":\"2022-06-14T16:06:41.000Z\",\"permalink\":\"/SkillPoint/LazyComponent/\",\"category\":[\"VUE SKILL\"],\"tag\":[\"前端小技巧\"],\"summary\":\"异步组件可以让我们在需要一些组件时才将它加载进来，而不是一初始化就加载进来，这跟路由懒加载是一个概念。 以前是这么引入组件的 如果不是一开始就要加载的组件，我们可以使用组件懒加载 异步组件还有一种比较完善的写法 export default { components:{ ChildFirst:()=>({ component:import(/ webpack\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://jin-shaohui.gitee.io/SkillPoint/LazyComponent/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"繁华中自律，落魄中自愈\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"组件懒加载\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"前端小技巧\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-06-14T16:06:41.000Z\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.74,\"words\":223},\"copyright\":\"著作权归JSH所有\\n基于MIT协议\\n原文链接：https://jin-shaohui.gitee.io/SkillPoint/LazyComponent/\",\"filePathRelative\":\"Knowledge/FrontEnd/SkillPoint/LazyComponent/index.md\",\"localizedDate\":\"2022年6月15日\"}")

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
