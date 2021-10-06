const nav  = [
  {text: '首页', link: '/'},
  {text: '问答', link: '/Question/vue'},
  {text: '前端', link: '/FrontEnd/LifeCycle/'},
  {text: 'ECMAScript', link: '/ECMAScript/ES6/'},
  {text: 'JS', link: '/JavaScript/JavaScriptMechanism/'},
  {
    text: 'CSS',
    items: [
      { text: '知识点', link: '/Css/@Media/'},
      { text: '小案例', link: '/CssComponents/StreamerButton/'}
    ]
  },
  {
    text: '后端',
    items: [
      { text: 'Lambda', link: '/BackEnd/Lambda/'},
      { text: 'Stream', link: '/BackEnd/Stream/'},
      { text: '工具类', link: '/BackEnd/Utils/'}
    ]
  },
  {text: '算法', link: '/Algorithm/BubbleSort/'},
  {text: '网络请求', link: '/NetworkRequest/BrowserCache/'},
  {text: '网络', link: '/Network/'},
  {text: 'Git', link: '/Git/'},
  {text: '小技巧', link: '/Skill/ObserverModel/'},
  {text: '推荐', link: '/Recommend/'}
]

const sidebar = {
  '/Question/': ['vue', 'logic'],
  '/FrontEnd/': [ 'LifeCycle/', 'Render/', 'Template/'],
  '/ECMAScript/': [ 'ES6/'],
  '/JavaScript/': ['JavaScriptMechanism/', 'AsyncHell/', 'Closure/', 'PromiseStatus/', 'Event/', 'Fragment/', 'PromiseImage/'],
  '/Css/': ['@Media/'],
  '/CssComponents/': ['StreamerButton/', 'Login/', 'Shutters/', 'Checked/'],
  '/BackEnd/': ['Lambda/', 'Stream/', 'Utils/'],
  '/Algorithm/': ['BubbleSort/', 'RepeatSort/', 'Dichotomy/'],
  '/NetworkRequest/': ['BrowserCache/','CrossDomain/', 'Jsonp/', 'PromiseAjax/', 'RESTful/'],
  '/Network/': [''],
  '/Git/': [''],
  '/Skill/': ['ObserverModel/', 'SingletonModel/'],
  '/Recommend/': ['']
}

module.exports = {
  title: '如何形容一个人长得很好看', // 网站的标题
  description: 'Just playing around', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  base: './vuepress/', // base 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中
  host: '0.0.0.0', // 用于 dev server 的主机名
  port: 1111, // dev server 的端口
  // temp: '/path/to/@vuepress/core/.temp', // 客户端文件的临时目录
  dest: './prod', // vuepress build 的输出目录
  // repo: 'https://gitee.com/jin-shaohui/vuepress', // 添加 github 链接
  themeConfig: {
    logo: './logo.jpg',
    selectText: '选择语言', // 多语言下拉菜单的标题
    label: '简体中文', // 该语言在下拉菜单中的标签
    editLinkText: '在 GitHub 上编辑此页', // 编辑链接文字
    docsDir: 'src',
    /** Service Worker 的配置 **/
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    },
    /** 搜索配置 **/
    search: true,
    searchMaxSuggestions: 10, // 搜索信息最大数量
    algolia: {}, // 当前 locale 的 algolia docsearch 选项
    /**  **/
    displayAllHeaders: true, // 默认值：false
    /** 文件最后更新时间 string = 'Last Updated' | boolean 若为字符串则拼接在前  **/
    lastUpdated: '最近更新时间',
    /** 菜单配置，单页面禁用 则需要在相应md YAML front matter 配置 navbar: false **/
    navbar: true,
    nav: nav,
    sidebar: sidebar
  },
  /** 插件配置 **/
  plugins: [
    // '@vuepress/back-to-top',
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine',
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine',
          appId: '95aw4m784F9xbEVyrGUupt2v-9Nh9j0Va',
          appKey: 'dKalMVCST7hmiW7NA2PktxXI',
          // avater: 'c',
          visitor: true,
          placeholder: '留下你想说的话吧^_^',
          path: '<%- frontmatter.commentid || frontmatter.permalink %>'
        }
      }
    ]
  ]
}
