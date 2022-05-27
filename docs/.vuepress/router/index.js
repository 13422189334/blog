const nav  = [
  { text: '首页', link: '/' },
  { text: '前端知识库', link: '/FrontEnd/' },
  { text: '后端知识库', link: '/BackEnd/' },
  {
    text: '规范',
    items: [
      { text: 'RESTful', link: '/standard/RESTful/'},
      { text: 'ES6', link: '/standard/ECMAScript/ES6/'}
    ]
  },
  { text: '算法', link: '/Algorithm/' },
  { text: '设计模式', link: '/DesignPattern/ObserverModel/' },
  {
    text: '网络',
    items: [
      { text: '浏览器缓存', link: '/Network/BrowserCache/'},
      { text: '跨域', link: '/Network/CrossDomain/'}
    ]
  },
  { text: '网管', link: '/NetworkManagement/' },
  { text: '版本控制', link: '/Git/' },
  { text: '推荐', link: '/Recommend/' }
]

const sidebar = {}

module.exports = {
  nav, sidebar
}
