export const data = JSON.parse("{\"key\":\"v-630f3ddb\",\"path\":\"/SkillPoint/LazyRouter/\",\"title\":\"路由懒加载\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"路由懒加载\",\"date\":\"2022-06-14T14:41:41.000Z\",\"permalink\":\"/SkillPoint/LazyRouter/\",\"category\":[\"VUE SKILL\"],\"tag\":[\"前端小技巧\"],\"summary\":\"路由懒加载，能让你首次加载更快 路由懒加载可以让我们的包不需要一次把所有的页面的加载进来，只加载当前页面的路由组件就行。 举个栗子🌰，如果这样写，加载的时候会全部都加载进来。 所以，应该避免上面的写法，尽量使用懒加载。 路由的懒加载可以分为以下三种写法。\\rVue异步组件; \\res6的import; \\rwebpack提供的require.ensure();\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://jin-shaohui.gitee.io/SkillPoint/LazyRouter/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"繁华中自律，落魄中自愈\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"路由懒加载\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"前端小技巧\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-06-14T14:41:41.000Z\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.79,\"words\":238},\"copyright\":\"著作权归JSH所有\\n基于MIT协议\\n原文链接：https://jin-shaohui.gitee.io/SkillPoint/LazyRouter/\",\"filePathRelative\":\"Knowledge/FrontEnd/SkillPoint/LazyRouter/index.md\",\"localizedDate\":\"2022年6月14日\"}")

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
