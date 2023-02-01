export const data = JSON.parse("{\"key\":\"v-2ff766e1\",\"path\":\"/SkillPoint/Freeze/\",\"title\":\"数据冻结\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"数据冻结\",\"date\":\"2022-06-15T10:50:58.000Z\",\"permalink\":\"/SkillPoint/Freeze/\",\"category\":[\"VUE SKILL\"],\"tag\":[\"前端小技巧\"],\"summary\":\"vue 2.0版本会通过 Object.defineProperty 对数据进行劫持，遇到数组和对象必须循环遍历所有的域值才能劫持每一个属性。 vue 3.0版本会通过 Proxy 构造函数来进行数据劫持，来实现视图响应数据的变化 然而有些时候我们的组件就是纯粹的数据展示，不会有任何改变，我们就不需要 vue 来劫持我们的数据，在大量数据展示的情况下，这能够\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://jin-shaohui.gitee.io/SkillPoint/Freeze/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"繁华中自律，落魄中自愈\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"数据冻结\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"前端小技巧\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-06-15T10:50:58.000Z\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":1.19,\"words\":358},\"copyright\":\"著作权归JSH所有\\n基于MIT协议\\n原文链接：https://jin-shaohui.gitee.io/SkillPoint/Freeze/\",\"filePathRelative\":\"Knowledge/FrontEnd/SkillPoint/Freeze/index.md\",\"localizedDate\":\"2022年6月15日\"}")

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
