const nav  = [
  {text: '首页', link: '/'},
  {
    text: 'CSS小案例',
    items: [
      { text: '流光按钮', link: '/CssComponents/StreamerButton/'},
      { text: '登录页', link: '/CssComponents/Login/'},
      { text: '百叶窗', link: '/CssComponents/Shutters/'},
      { text: '打钩动画', link: '/CssComponents/Checked/'}
    ]
  },
  {
    text: '算法',
    items: [
      { text: '冒泡算法', link: '/Algorithm/BubbleSort/'},
      { text: '去重排序', link: '/Algorithm/RepeatSort/'},
      { text: '二分法', link: '/Algorithm/Dichotomy/'}
    ]
  },
  {text: '网络', link: '/Network/'},
  {text: '推荐', link: '/Recommend/'}
]

const sidebar = [
  {
    title: '面试问答题',   // 必要的
    collapsable: true , // 可选的, 默认值是 true,
    children: [
      {
        title: 'Vue 问题',   // 必要的
        path: '/Question/vue',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      },
      {
        title: 'logic',   // 必要的
        path: '/Question/logic',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true,
        children: []
      }
    ]
  },
  {
    title: '前端知识点',   // 必要的
    collapsable: true , // 可选的, 默认值是 true,
    children: [
      {
        title: '闭包',   // 必要的
        path: '/JavaScript/Closure/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      },
      {
        title: '异步加载图片',   // 必要的
        path: '/JavaScript/PromiseImage/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      },
      {
        title: '文档碎片减少dom操作',   // 必要的
        path: '/JavaScript/Fragment/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      },
      {
        title: '封装绑定事件处理函数',   // 必要的
        path: '/JavaScript/Event/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      },
      {
        title: 'Promise解决回调地狱',   // 必要的
        path: '/JavaScript/AsyncHell/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      },
      {
        title: 'JavaScript 执行机制',   // 必要的
        path: '/JavaScript/JavaScriptMechanism/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      },
    ]
  },
  {
    title: 'ECMAScript',   // 必要的
    collapsable: true , // 可选的, 默认值是 true,
    children: [
      {
        title: 'ECMAScript 2015',   // 必要的
        path: '/ECMAScript/ES6/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      }
    ]
  },
  {
    title: 'RESTful',   // 必要的
    collapsable: true , // 可选的, 默认值是 true,
    children: [
      {
        title: 'RESTful API',   // 必要的
        path: '/RESTful/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      }
    ]
  },
  {
    title: '微前端',   // 必要的
    collapsable: true , // 可选的, 默认值是 true,
    children: [
      {
        title: '乾坤',   // 必要的
        path: '/MicroFrontEnd/qiankun/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      }
    ]
  },
  {
    title: '前端框架知识点',   // 必要的
    collapsable: true , // 可选的, 默认值是 true,
    children: [
      {
        title: 'Vue生命周期',   // 必要的
        path: '/FrontEnd/LifeCycle/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      }
    ]
  },
  {
    title: '样式知识点',   // 必要的
    collapsable: true , // 可选的, 默认值是 true,
    children: [
      {
        title: '媒体查询',   // 必要的
        path: '/Css/@Media/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      }
    ]
  },
  {
    title: '后端知识点',   // 必要的
    collapsable: true , // 可选的, 默认值是 true,
    children: [
      {
        title: '工具类',   // 必要的
        path: '/BackEnd/Utils/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      },
      {
        title: 'Lambda',   // 必要的
        path: '/BackEnd/Lambda/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      },
      {
        title: 'Stream',   // 必要的
        path: '/BackEnd/Stream/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      }
    ]
  },
  {
    title: '设计模式',   // 必要的
    collapsable: true , // 可选的, 默认值是 true,
    children: [
      {
        title: '观察者模式',   // 必要的
        path: '/Skill/ObserverModel/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      },
      {
        title: '单例模式',   // 必要的
        path: '/Skill/SingletonModel/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      }
    ]
  },
  {
    title: '网络请求',   // 必要的
    collapsable: true , // 可选的, 默认值是 true,
    children: [
      {
        title: '浏览器缓存',   // 必要的
        path: '/NetworkRequest/BrowserCache/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      },
      {
        title: '跨域',   // 必要的
        path: '/NetworkRequest/CrossDomain/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      },
      {
        title: 'Jsonp',   // 必要的
        path: '/NetworkRequest/Jsonp/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      },
      {
        title: 'Promise和Ajax封装请求',   // 必要的
        path: '/NetworkRequest/PromiseAjax/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      }
    ]
  },
  {
    title: '版本控制',   // 必要的
    collapsable: true , // 可选的, 默认值是 true,
    children: [
      {
        title: 'Git',   // 必要的
        path: '/Git/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true , // 可选的, 默认值是 true
        children: []
      }
    ]
  },
]

module.exports = {
  title: '人生十有八九不如意', // 网站的标题
  description: 'Just playing around', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  base: '/vuepress/', // base 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中
  host: 'localhost', // 用于 dev server 的主机名
  port: 1111, // dev server 的端口
  // temp: '/path/to/@vuepress/core/.temp', // 客户端文件的临时目录
  dest: 'public', // vuepress build 的输出目录
  repo: 'https://gitee.com/jin-shaohui/vuepress', // 添加 github 链接
  theme: 'antdocs',
  themeConfig: {
    logo: '/logo.jpg',
    selectText: '选择语言', // 多语言下拉菜单的标题
    label: '简体中文', // 该语言在下拉菜单中的标签
    editLinkText: '在 Gitee 上编辑此页', // 编辑链接文字
    docsDir: 'src',
    /** 回到顶部 */
    backToTop: true,
    /** Service Worker 的配置 **/
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    },
    /** 菜单配置，单页面禁用 则需要在相应md YAML front matter 配置 navbar: false **/
    navbar: true,
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
    /** 广告位 */
    ads:{
      style: 1,
      image: 'https://jin-shaohui.gitee.io/vuepress/dijia.jpg',
      text: '这个世界真的有光',
      link: 'https://gitee.com/jin-shaohui/vuepress',
    },
  },
  /** 插件配置 **/
  plugins: [
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
