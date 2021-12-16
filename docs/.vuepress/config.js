
const { nav, sidebar } = require('./router/index')

module.exports = {
  title: '繁华中自律，落魄中自愈', // 网站的标题
  description: 'Just playing around', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  base: '/vuepress/', // base 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中
  host: '192.168.31.160', // 用于 dev server 的主机名
  // host: '10.0.3.204', // 用于 dev server 的主机名
  // host: '127.0.0.1', // 用于 dev server 的主机名
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
    /** 广告位 */
    ads:{
      style: 1,
      image: 'https://jin-shaohui.gitee.io/vuepress/dijia.jpg',
      text: '这个世界真的有光',
      link: 'https://gitee.com/jin-shaohui/vuepress',
    },
    ads:{
      style: 2,
      speed: 2000,
      items:[
        {
          text: '图片1详情',
          image:'https://cn.bing.com/th?id=OHR.LoughriggTarn_ZH-CN1404327665_1920x1080.jpg',
          link: 'https://jin-shaohui.gitee.io/vuepress'
        },
        {
          text: '图片2详情',
          image:'https://cn.bing.com/th?id=OHR.MetamorphicRocks_ZH-CN9753251368_1920x1080.jpg',
          link: 'https://jin-shaohui.gitee.io/vuepress'
        },
        {
          text: '图片3详情',
          image:'https://cn.bing.com/th?id=OHR.KeichitsuCrocuse_ZH-CN1061292366_1920x1080.jpg',
          link: 'https://jin-shaohui.gitee.io/vuepress'
        }
      ]
    },
    ads:{
      style: 3,
      title: '悄悄话',
      btnText: '我有话说',
      msgTitle: '我有话说',
      msgText: '如果您有新问题、新知识点等需求，欢迎联系我们（微信：xxxx）。',
      msgOkText: '确定',
    },
  },
  /** 插件配置 **/
  plugins: [
    ['go-top'], // 悬挂猫返回顶部
    ['vuepress-plugin-reading-progress'], //顶部进度条
    // [
    //   'cursor-effects', {
    //     size: 4, // size of the particle, default: 2
    //     shape: ['star'], // shape of the particle,  'star' | 'circle' default: 'star'
    //     zIndex: 999999999, // z-index property of the canvas, default: 999999999
    //   },
    // ],
    [
      'vuepress-plugin-code-copy', {
        color: '#6D7EAD',
        successText: '🌈复制成功！🌈',
      },
    ],
    [
      'vuepress-plugin-comment', {
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
    ],
    [
      'vuepress-plugin-helper-live2d', {
      // 是否开启控制台日志打印(default: false)
      log: false,
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 模型名称(default: hibiki)>>>取值请参考：
        // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
        // model: 'hibiki',
        model: 'shizuku',
        display: {
          position: 'right', // 显示位置：left/right(default: 'right')
          width: 135, // 模型的长度(default: 135)
          height: 300, // 模型的高度(default: 300)
          hOffset: 0, //  水平偏移(default: 65)
          vOffset: 0, //  垂直偏移(default: 0)
        },
        mobile: {
          show: true // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 0.9 // 模型透明度(default: 0.8)
        }
      }
    }],
    // [ '@vuepress-reco/vuepress-plugin-bgm-player', {
    //   position: { right: '10px', bottom: '10px', 'z-index': '999999'},
    //   autoplay: true, // 是否自动播放  默认false
    //   autoShrink: false, // 是否自动缩小  默认false
    //   shrinkMode: 'mini', // 指定PC端缩小为哪种模式 'mini'/'float'  默认 'float'
    //   floatPosition: 'right', // 指定浮窗模式浮动在哪一侧  'left'/'right'  默认 'left'
    //   floatStyle: { bottom: '200px', 'z-index': '999999' }, // 浮窗的样式
    //   audios: [
    //     {
    //       name: '百年孤寂',
    //       artist: '王菲',
    //       url: 'https://freetyst.nf.migu.cn/public/product9th/product43/product/24bit/2021/04/10/60054043262/60054043262.flac?Key=1173bb34b1c0b356&Tim=1637059496456&channelid=00&msisdn=9faac2f957454e6f988039cccbdcf647&CI=600540432622600907000006976959&F=011005',
    //       cover: 'https://jin-shaohui.gitee.io/vuepress/bingbing.jpg'
    //     }
    //   ]
    // }]
  ]
}
