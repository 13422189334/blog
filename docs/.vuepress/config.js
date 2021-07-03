let nav = [
    {text: 'home', link: '/'},
    {text: 'Question', link: '/Question/vue'},
    {text: 'FrontEnd', link: '/FrontEnd/JavaScriptMechanism/'},
    {text: 'Tools', link: '/Tools/Git/'}
]

let sidebar = {
    '/Question/': ['vue', 'javaScript', 'algorithm', 'network', 'logic'],
    '/FrontEnd/': ['JavaScriptMechanism/', 'BrowserCache/', 'LifeCycle/', 'Render/', 'Template/'],
    '/Tools/': ['Git/']
}

module.exports = {
    title: '冰冰全栈MD', // 网站的标题
    description: 'Just playing around', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
    base: '/', // base 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中
    host: '0.0.0.0', // 用于 dev server 的主机名
    port: 1111, // dev server 的端口
    // temp: '/path/to/@vuepress/core/.temp', // 客户端文件的临时目录
    dest: '.vuepress/dist', // vuepress build 的输出目录
    themeConfig: {
        logo: '/logo.jpg',
        selectText: '选择语言', // 多语言下拉菜单的标题
        label: '简体中文', // 该语言在下拉菜单中的标签
        editLinkText: '在 GitHub 上编辑此页', // 编辑链接文字
        // Service Worker 的配置
        serviceWorker: {
            updatePopup: {
                message: "发现新内容可用.",
                buttonText: "刷新"
            }
        },
        algolia: {}, // 当前 locale 的 algolia docsearch 选项
        displayAllHeaders: true, // 默认值：false
        navbar: true, // 禁用导航栏，单页面禁用 则需要在相应md YAML front matter 配置 navbar: false
        nav: nav,
        sidebar: sidebar
    }
}