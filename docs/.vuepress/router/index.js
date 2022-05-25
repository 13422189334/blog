const nav  = [
  { text: '首页', link: '/' },
  { text: '前端知识库', link: '/FrontEnd/' },
  {
    text: '规范',
    items: [
      { text: 'RESTful', link: '/standard/RESTful/'},
      { text: 'ES6', link: '/standard/ECMAScript/ES6/'}
    ]
  },
  { text: '微前端', link: '/MicroFrontEnd/qiankun/' },
  { text: 'Webpack', link: '/Webpack/' },
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
  {
    text: 'Java',
    link: '/Java/Utils/',
    items: [
      { text: 'RESTful', link: '/Java/Utils/'},
      { text: 'JDK8', link: '/Java/Utils/'}
    ]
  },
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
  '/Algorithm/': [ // 算法
    'BubbleSort/', // 冒泡算法
    'RepeatSort/', //去重排序
    'Dichotomy/', // 二分法
  ],
  '/DesignPattern/': [ //
    'ObserverModel/', // 观察者模式
    'SingletonModel/', //单例模式
  ],
  '/Question/': [
    'vue'
  ]
}

module.exports = {
  nav, sidebar
}
