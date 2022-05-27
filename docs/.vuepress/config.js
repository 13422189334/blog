const path = require('path')
const { nav, sidebar } = require('./router/index')
const { homeSidebarB } = require('./ads/index')

module.exports = (options, context) => ({
  title: '繁华中自律，落魄中自愈', // 网站的标题
  description: 'Just playing around', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  base: '/', // base 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中
  // host: '10.0.3.148', // 用于 dev server 的主机名
  // host: '10.0.3.204', // 用于 dev server 的主机名
  host: '127.0.0.1', // 用于 dev server 的主机名
  port: 1111, // dev server 的端口
  // temp: '/path/to/@vuepress/core/.temp', // 客户端文件的临时目录
  dest: 'public', // vuepress build 的输出目录
  repo: 'https://gitee.com/jin-shaohui/vuepress', // 添加 github 链接
  theme: 'vdoing',
  themeConfig: {
    /** vuepress的配置 ------------------------- 开始 */
    logo: '/logo.jpg',
    selectText: '选择语言', // 多语言下拉菜单的标题
    label: '简体中文', // 该语言在下拉菜单中的标签
    editLinkText: '在 Gitee 上编辑此页', // 编辑链接文字
    docsDir: 'src',
    /** 平滑滚动 */
    smoothScroll: true,
    /** 回到顶部 */
    backToTop: true,
    /** Service Worker 的配置 **/
    serviceWorker: {
      updatePopup: {
        message: '发现新内容可用.',
        buttonText: '刷新'
      }
    },
    /** 菜单配置，单页面禁用 则需要在相应md YAML front matter 配置 navbar: false **/
    navbar: true,
    // sidebar: 'auto',
    collapsable: true,
    nav: nav,
    sidebar: sidebar,
    /** 搜索配置 **/
    search: true,
    searchMaxSuggestions: 10, // 搜索信息最大数量
    algolia: {}, // 当前 locale 的 algolia docsearch 选项
    /**  **/
    displayAllHeaders: true, // 默认值：false
    /** 文件最后更新时间 string = 'Last Updated' | boolean 若为字符串则拼接在前  **/
    lastUpdated: '最近更新时间',
    /** vuepress的配置 ------------------------- 结束 */

    /** vuepress-theme-vdoing的配置 ------------------------- 开始 */
    /**
     * 分类功能
     * 自动生成的front matter包含分类字段
     * 页面中显示与分类相关的信息和模块
     * 自动生成分类页面（在@pages文件夹）
     * */
    category: true,
    /**
     * 标签功能
     * 自动生成的front matter包含分类字段
     * 页面中显示与分类相关的信息和模块
     * 自动生成分类页面（在@pages文件夹）
     * */
    tag: true,
    /**
     * 归档功能
     * 自动生成分类页面（在@pages文件夹）
     * */
    archive: true,
    /** 碎片化文章默认分类值 */
    categoryText: '随笔',
    /** body背景大图 */
    // bodyBgImg: '/bingbing.jpg',  // 你的图片路径(必须位于 public 下)，可以是 URL
    // bodyBgImgOpacity: 1, // body 背景图透明度，选值 0 ~ 1.0, 默认0.5
    // bodyBgImg: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b175d84f08ac4298b0a19a95ff1e8e2f~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?',
    // bodyBgImg: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0f9630edc484bfb89643866cee572d9~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?',
    // bodyBgImg: ['./background/white-001.jpg', './background/black-001.jpg'],
    /** body背景图透明度 0 ~ 1.0 */
    // bodyBgImgOpacity: 0.5,
    /** 文章标题图标的地址 */
    titleBadge: true,
    /** 文章标题图标的地址 */
    titleBadgeIcons: ['https://jin-shaohui.gitee.io/vuepress/bingbing.jpg', 'https://jin-shaohui.gitee.io/vuepress/dijia.jpg'],
    /** 文章内容块的背景底纹 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状 */
    contentBgStyle: 6,
    /** 初始状态下是否打开侧边栏 */
    sidebarOpen: false,
    /**
     * 最近更新栏，显示于文章页底部和简约版首页文章列表
     * showToArticle 显示到文章页底部，默认true
     * moreArticle “更多文章”跳转的页面，默认'/archives/'
     * */
    updateBar: { showToArticle: true, moreArticle: '/archives/' },
    /** 右侧文章大纲栏 */
    rightMenuBar: true,
    /** 快捷翻页按钮 */
    pageButton: true,
    /** 文章作者信息 */
    author: { name: 'JSH', link: '404' },
    /** 博主信息
     * avatar 头像，必需
     * name 博主名称，必需
     * slogan 标语，可选
     * */
    blogger: { avatar: './bingbing.jpg', name: '石怜安', slogan: '在线找大长腿小姐姐' },
    /** 社交图标 */
    social: {
      /*iconfontCssFile: String, */
      icons: [
        { iconClass: 'icon-QQ', title: '1051131737', link: 'String' },
        { iconClass: 'icon-youjian', title: '1051131737@qq.com', link: 'String' },
        { iconClass: 'icon-weixin', title: 'jsh1051131737', link: 'String' },
        ]
    },
    footer: { createYear: '2021', copyrightInfo: 'JSH' },
    /**
     * 广告
     * homeSidebarB 首页侧边栏底部
     * sidebarT 所有左侧边栏顶部
     * sidebarB 所有左侧边栏底部
     * pageT 页面顶部
     * pageB 页面底部
     * pageTshowMode 页面顶部的显示方式
     *   未配置 默认所有页面显示
     *   'article' 仅文章页①显示
     *   'custom' 仅自定义页①显示
     * pageBshowMode 页面底部的显示方式
     *   未配置 默认全局显示
     *   'article' 仅文章页①显示
     *   'custom' 仅自定义页①显示
     * windowLB 全局窗口左下角②
     * windowRB 全局窗口右下角②
     * */
    htmlModules: {
      // homeSidebarB: homeSidebarB(),
      // sidebarT: 'htmlString',
      // sidebarB: 'htmlString',
      // pageT: 'htmlString',
      // pageB: 'htmlString',
      // pageTshowMode: 'article' | 'custom',
      // pageBshowMode: 'article' | 'custom',
      // windowLB: 'htmlString',
      // windowRB: 'htmlString',
    }
    /** vuepress-theme-vdoing的配置 ------------------------- 结束 */
  },
  /** 插件配置 **/
  plugins: [
    ['demo-container'],
    ['vuepress-plugin-reading-progress'], //顶部进度条
    ['vuepress-plugin-mermaidjs'], // 支持 mermaid 绘图的插件
    [
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: 'Copied successfully!', // default is 'Copied successfully!'
        toolTipMessage: 'Copy to clipboard', // default is ''Copy to clipboard'
        duration: 300, // prompt message display time
       }
    ],
    // [
    //   'vuepress-plugin-comment', {
    //     choosen: 'valine',
    //     // options选项中的所有参数，会传给Valine的配置
    //     options: {
    //       el: '#valine',
    //       appId: '95aw4m784F9xbEVyrGUupt2v-9Nh9j0Va',
    //       appKey: 'dKalMVCST7hmiW7NA2PktxXI',
    //       // avater: 'c',
    //       visitor: true,
    //       placeholder: '留下你想说的话吧^_^',
    //       path: '<%- frontmatter.commentid || frontmatter.permalink %>'
    //     }
    //   }
    // ],
  ],

  chainWebpack (config) {
    console.log(__dirname, path.resolve(__dirname, '../FrontEnd/'), '===========')
    config.resolve.alias.set('@frontEnd',  path.resolve(__dirname, '../FrontEnd/'))
  }
})
