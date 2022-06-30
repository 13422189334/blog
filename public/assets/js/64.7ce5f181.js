(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{789:function(t,e,a){"use strict";a.r(e);var s=a(16),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("vue 2.0版本会通过 "),a("code",[t._v("Object.defineProperty")]),t._v(" 对数据进行劫持，遇到数组和对象必须循环遍历所有的域值才能劫持每一个属性。")]),t._v(" "),a("p",[t._v("vue 3.0版本会通过 "),a("code",[t._v("Proxy")]),t._v(" 构造函数来进行数据劫持，来实现视图响应数据的变化")])]),t._v(" "),a("p",[t._v("然而有些时候我们的组件就是纯粹的数据展示，不会有任何改变，我们就不需要 vue 来劫持我们的数据，在大量数据展示的情况下，这能够很明显的减少组件初始化的时间。")]),t._v(" "),a("p",[t._v("所以，我们可以通过 "),a("code",[t._v("Object.freeze")]),t._v(" 方法来冻结一个对象，这个对象一旦被冻结，vue就不会对数据进行劫持了。")]),t._v(" "),a("p",[a("code",[t._v("Object.freeze()")]),t._v(" 可以冻结一个对象，冻结之后不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。该方法返回被冻结的对象。")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item in list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ item.value }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\nexport default {\n  data: {\n    // vue不会对list里的object做getter、setter绑定\n    list: Object.freeze([\n        { value: 1 },\n        { value: 2 }\n    ])\n  },\n  created () {\n    // 界面不会有响应\n    this.list[0].value = 100;\n\n    // 下面两种做法，界面都会响应\n    this.list = [\n        { value: 100 },\n        { value: 200 }\n    ];\n    this.list = Object.freeze([\n        { value: 100 },\n        { value: 200 }\n    ]);\n  }\n}\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);