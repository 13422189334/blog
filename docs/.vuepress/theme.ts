import { hopeTheme } from "vuepress-theme-hope";
import { nav, sidebar } from "./router";


export default hopeTheme({
  hostname: 'https://jin-shaohui.gitee.io/', // 当前网站部署到的域名。
  author: {
    name: "JSH",
    url: "https://jin-shaohui.gitee.io",
  },
  iconPrefix: "iconfont icon-",
  logo: '/logo/logo.jpg',
  repo: 'https://gitee.com/jin-shaohui/jin-shaohui',
  repoDisplay: false,
  docsDir: "src",
  fullscreen: true, // 全屏
  pure: false,  // 纯净模式
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  locales: {
    "/": {
      navbar: nav,
      sidebar: sidebar,

      blog: {
        intro: "/",
        sidebarDisplay: "mobile",
        medias: {
          QQ: "http://wpa.qq.com/msgrd?v=3&uin=1051131737&site=qq&menu=yes",
          Qzone: "https://1051131737.qzone.qq.com/",
          Gmail: "mailto:a1051131737@outlook.com",
          // Zhihu: "https://www.zhihu.com/people/mister-hope",
          // Steam: "https://steamcommunity.com/id/Mr-Hope/",
          Weibo: "https://weibo.com/6459900628/profile?topnav=1&wvr=6&is_all=1",
          // GitHub: "https://github.com/Mister-Hope",
          Gitee: "https://gitee.com/jin-shaohui",
        },
      },
    }
  },
  plugins: {
    blog: true,
    feed: {
      atom: true,
      json: true,
      rss: true,
    },
    photoSwipe: {
      selector: '.theme-hope-content:not(.custom) img',
      delay: 500,
    },
    copyright: {
      hostname: 'https://jin-shaohui.gitee.io/',
      author: "JSH",
      license: 'MIT',
      triggerWords: 10,
      global: true,
      disableCopy: false,
      disableSelection: false
    },
    mdEnhance: {
      align: true,
      demo: true,
      flowchart: true,
      mermaid: true,
      footnote: true,
      presentation: true,
      sub: true,
      sup: true,
      tex: true,
      vpre: true
    }
  },
  displayFooter: true,
  copyright: "MIT Licensed | Copyright © 2019-present JSH",
})