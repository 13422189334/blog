const nav  = [
  { text: '首页', link: '/' },
  { text: '前端知识库', link: '/FrontEnd/' },
  { text: '后端知识库', link: '/BackEnd/' },
  { text: '设计模式', link: '/DesignPattern/' },
  { text: '常用算法', link: '/Algorithm/' },
  { text: 'Git', link: '/Git/' },
  {
    text: '规范',
    items: [
      { text: 'RESTful', link: '/standard/RESTful/'},
      { text: 'ES6', link: '/standard/ECMAScript/ES6/'}
    ]
  },
  {
    text: '网络',
    items: [
      { text: '浏览器缓存', link: '/Network/BrowserCache/'},
      { text: '跨域', link: '/Network/CrossDomain/'}
    ]
  },
  { text: '网管', link: '/NetworkManagement/' },
  { text: '推荐', link: '/Recommend/' }
]

const sidebar = {}

module.exports = {
  nav, sidebar
}
