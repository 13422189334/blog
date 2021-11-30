const nav  = [
  { text: '首页', link: '/' },
  {
    text: 'CSS',
    link: '/Css/@Media/',
    items: [
      { text: '媒体查询', link: '/Css/@Media/'},
      { text: 'Demo', link: '/Css/Demo/StreamerButton/'},
    ]
  },
  // { text: 'CSS Demo', link: '/CssDemo/StreamerButton/' },
  { text: 'JS 技巧', link: '/JavaScript/Closure/' },
  {
    text: '规范',
    items: [
      { text: 'RESTful', link: '/standard/RESTful/'},
      { text: 'ES6', link: '/standard/ECMAScript/ES6/'}
    ]
  },
  { text: 'JavaScript 机制', link: '/JavaScript/JavaScriptMechanism/' },
  { text: '微前端', link: '/MicroFrontEnd/qiankun/' },
  {
    text: 'VUE',
    items: [
      { text: '生命周期', link: '/Vue/LifeCycle/' }
    ]
  },
  {
    text: 'REACT',
    items: [
      { text: '生命周期'  }
    ]
  },
  { text: '算法', link: '/Algorithm/BubbleSort/' },
  { text: 'Java', link: '/Java/Utils/' },
  { text: '设计模式', link: '/DesignPattern/ObserverModel/' },
  {
    text: '网络',
    items: [
      { text: '浏览器缓存', link: '/Network/BrowserCache/'},
      { text: '跨域', link: '/Network/CrossDomain/'},
      { text: 'Jsonp', link: '/Network/Jsonp/'}
    ]
  },
  { text: '网管', link: '/NetworkManagement/' },
  { text: '版本控制', link: '/Git/' },
  { text: 'Q & A', link: '/Question/vue' },
  { text: '推荐', link: '/Recommend/' }
]

const sidebar = {
  '/Css/Demo/': [
    'StreamerButton/', // 流光按钮
    'Login/', //登录页
    'Shutters/', // 百叶窗
    'Checked/', // 打钩动画
  ],
  '/JavaScript/': [
    'Closure/', // 闭包
    'PromiseImage/', //异步加载图片
    'Fragment/', // 文档碎片减少dom操作
    'Event/', // 封装绑定事件处理函数
    'AsyncHell/', // Promise解决回调地狱
    'PromiseAjax/', // Promise和Ajax封装请求
  ],
  '/Algorithm/': [ // 算法
    'BubbleSort/', // 冒泡算法
    'RepeatSort/', //去重排序
    'Dichotomy/', // 二分法
  ],
  '/Java/': [ //
    'Utils/', // 工具类
    'Lambda/', //Lambda
    'Stream/', // Stream
  ],
  '/DesignPattern/': [ //
    'ObserverModel/', // 观察者模式
    'SingletonModel/', //单例模式
  ],
  '/Question/': [
    'vue'
  ]
}


const sidebar1 = [
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
        path: '/standard/ECMAScript/ES6/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
        path: '/standard/RESTful/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
  nav, sidebar
}