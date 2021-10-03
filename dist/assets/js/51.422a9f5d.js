(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{456:function(t,a,s){"use strict";s.r(a);var e=s(25),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"media"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#media"}},[t._v("#")]),t._v(" @media")]),t._v(" "),s("p",[t._v("什么是@media，@media又叫 "),s("strong",[t._v("媒体查询")]),t._v(" ，使用 @media 查询，你可以针对不同的媒体类型定义不同的样式。")]),t._v(" "),s("p",[t._v("@media 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，@media 是非常有用的。")]),t._v(" "),s("p",[t._v("当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。")]),t._v(" "),s("h2",{attrs:{id:"媒体类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#媒体类型"}},[t._v("#")]),t._v(" 媒体类型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("all")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于所有设备")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("print")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于打印机和打印预览")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("screen")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于电脑屏幕，平板电脑，智能手机等")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("speech")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("应用于屏幕阅读器等发声设备")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("其中较为常用的就是 "),s("strong",[t._v("screen")])])]),t._v(" "),s("h2",{attrs:{id:"媒体功能-宽高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#媒体功能-宽高"}},[t._v("#")]),t._v(" 媒体功能 - 宽高")]),t._v(" "),s("blockquote",[s("p",[t._v("设备的屏幕宽度 device-width | min-device-width | max-device-width")]),t._v(" "),s("p",[t._v("设备的屏幕高度 device-height | min-device-height | max-device-height")]),t._v(" "),s("p",[t._v("设备中的页面宽度 width | min-width | max-width")]),t._v(" "),s("p",[t._v("设备中的页面高度 height | min-height | max-height")])]),t._v(" "),s("p",[s("strong",[t._v("案例：")]),t._v(" 根据浏览器页面尺寸修改div背景色")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1000px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-device-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1001px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-device-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1300px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" chartreuse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);