export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"繁华中自律，落魄中自愈\",\"description\":\"Just playing around\",\"head\":[[\"meta\",{\"name\":\"baidu-site-verification\",\"content\":\"nGf5yi0Gec\"}],[\"meta\",{\"name\":\"baidu-site-verification\",\"content\":\"4H7tszevS8\"}],[\"link\",{\"rel\":\"mask-icon\",\"href\":\"/assets/safari-pinned-tab.svg\",\"color\":\"#5c92d1\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
