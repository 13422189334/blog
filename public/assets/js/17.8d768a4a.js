(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{539:function(e,t,v){e.exports=v.p+"assets/img/createdToBeforeMount.379d2467.png"},540:function(e,t,v){e.exports=v.p+"assets/img/beforeMountToMounted.9b151a4c.png"},617:function(e,t,v){"use strict";v.r(t);var o=v(14),_=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"前言"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),o("p",[e._v("​每个Vue实例再被创建之前，都会经过一系列的初始化过程，这个过程被称之为vue的生命周期。")]),e._v(" "),o("p",[e._v("​下面这张官网的图，想必大家都熟悉，那让我们一步一步的分析，并最后验证一下。")]),e._v(" "),o("p",[o("img",{attrs:{src:"/images/vueLifecycle.png",alt:"microInfo"}})]),e._v(" "),o("p",[e._v("​图中可以看到在一整个生命周期中会有很多的钩子函数，不同的钩子函数提供给我们在vue生命周期不同的时刻进行的操作, 那么我们先列出所有的钩子函数，然后我们再一一详解：")]),e._v(" "),o("blockquote",[o("p",[e._v("结合 "),o("RouterLink",{attrs:{to:"/FrontEnd/Vue/LifeCycle/demo.html"}},[e._v("生命周期案例")]),e._v(" ，F12看控制台更容易理解。")],1)]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("beforeCreate（创建前）")]),e._v(" 此阶段为实例初始化之后，此时的数据观察和事件机制都未形成，不能获得DOM节点。")])]),e._v(" "),o("p",[e._v("在 "),o("strong",[e._v("beforeCreate")]),e._v(" 和 "),o("strong",[e._v("created")]),e._v(" 生命周期之间，进行 "),o("strong",[e._v("初始化事件，进行数据的观测")]),e._v(" ，这时候我们可以看到在created钩子的时候数据已经和data中的属性进行绑定（其中在data中的属性值发生改变的时候，视图也会相对应改变，即所谓的双向绑定）。\n​\n注意事项：此时并没有el")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("created（创建后）")]),e._v(" 此阶段vue实例已经创建，仍然不能获取DOM元素。")])]),e._v(" "),o("p",[e._v("在 "),o("strong",[e._v("created")]),e._v(" 和 "),o("strong",[e._v("beforeMount")]),e._v(" 生命周期之间，发生的事情相对比较多，结合官网给出的生命周期图可以分析下：")]),e._v(" "),o("img",{staticStyle:{zoom:"50%"},attrs:{src:v(539),alt:"createdToBeforeMount"}}),e._v(" "),o("p",[e._v("首先会判断对象是否有 "),o("strong",[e._v("el")]),e._v(" 。如果有的话就继续向下编译，如果没有el选项，则停止编译，也就意味着停止了生命周期，直到在该vue实例上调用vm.$mount(el)。")]),e._v(" "),o("blockquote",[o("p",[e._v("​此时注释掉demo代码中的 "),o("strong",[e._v("el: '#app'")]),e._v(" ，然后可以看到控制台打印的日志到created的时候就停止了，如果我们在代码后面继续调用 "),o("strong",[e._v("vm.$mount(el)")]),e._v(" ，可以发现代码继续向下执行了，其中这个 "),o("strong",[e._v("el")]),e._v(" 参数就是挂载的dom节点")])]),e._v(" "),o("p",[e._v("然后，我们往下看，"),o("strong",[e._v("template")]),e._v(" 参数选项的对生命周期的影响。")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("如果vue实例对象中有template参数选项，则将其作为模板编译成 "),o("strong",[e._v("render函数")]),e._v("。")])]),e._v(" "),o("li",[o("p",[e._v("如果没有template选项，则将外部HTML作为模板编译。")])]),e._v(" "),o("li",[o("p",[e._v("可以看到template中的模板优先级要高于outer HTML的优先级。")])])]),e._v(" "),o("blockquote",[o("p",[e._v("​vue中还有一个 "),o("strong",[e._v("render 函数")]),e._v(" ，它是以createElement作为参数，然后做渲染操作，而且我们可以直接嵌入JSX，可以看到页面中渲染的是： "),o("strong",[e._v("render function")]),e._v(" 。若没有 "),o("strong",[e._v("rennder 函数")]),e._v(" ，则观察demo中的template参数，在有这个参数的时候，页面渲染出来的结果为 "),o("strong",[e._v("Vue的生命周期 --- 这是在template中的")]),e._v(" ，若注释掉 "),o("strong",[e._v("template")]),e._v(" 参数，则页面渲染结果为 "),o("strong",[e._v("Vue的生命周期 --- 这是在outer HTML中的")]),e._v(" ，证明以上三点结论。")])]),e._v(" "),o("p",[e._v("同时，也可以从侧面解释为什么 "),o("strong",[e._v("Has 'el' option")]),e._v(" 要在 "),o("strong",[e._v("Has 'template' option")]),e._v(" 之前，因为vue需要通过 "),o("strong",[e._v("el")]),e._v(" 去找到对应的 "),o("strong",[e._v("outer html")]),e._v(" ，最终可得出优先级结论："),o("strong",[e._v("render函数选项 > template选项 > outer HTML")])]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("beforeMount（载入前）")]),e._v(" 此阶段，依然得不到具体的DOM元素，但vue挂载的根节点已经创建，下面vue对DOM的操作将围绕这个根元素继续进行。")])]),e._v(" "),o("img",{staticStyle:{zoom:"50%"},attrs:{src:v(540),alt:"beforeMountToMounted"}}),e._v(" "),o("p",[e._v("在 "),o("strong",[e._v("beforeMount")]),e._v(" 和 "),o("strong",[e._v("mounted")]),e._v(" 生命周期之间，可以看到此时是给vue实例对象添加 "),o("strong",[e._v("$el成员")]),e._v(" ，并且替换掉挂载的DOM元素。")]),e._v(" "),o("blockquote",[o("p",[e._v("​demo中控制台打印的日志可以看出生命周期在 "),o("strong",[e._v("beforeMount")]),e._v(" 之前时 "),o("strong",[e._v("el")]),e._v(" 是undefined。")]),e._v(" "),o("p",[e._v("​同时，我们可以看下控制台打印的日志，"),o("strong",[e._v("beforeMount")]),e._v(" 和 "),o("strong",[e._v("mounted")]),e._v(" 两个生命周期上的 "),o("strong",[e._v("el")]),e._v(" ，在beforeMount时h1中还是使用 "),o("strong",[e._v(e._s(e.message+"  --- 这是在outer HTML中的"))]),e._v(" 进行占位，因为此时还有挂在到页面上，还是JavaScript中的虚拟DOM形式存在的。在mounted之后可以看到h1中的内容发生了变化。")])]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("mounted（载入后）")]),e._v(" 此阶段数据和DOM都已被渲染出来。")]),e._v(" "),o("li",[o("strong",[e._v("beforeUpdate（更新前）")]),e._v(" 此阶段，vue遵循数据驱动DOM的原则；函数在数据更新后虽然没立即更新数据，但是DOM中的数据会在Vue双向数据绑定的作用下改变。")]),e._v(" "),o("li",[o("strong",[e._v("updated（更新后）")]),e._v(" 此阶段DOM会和更改过的内容同步。")]),e._v(" "),o("li",[o("strong",[e._v("beforeDestroy（销毁前）")])]),e._v(" "),o("li",[o("strong",[e._v("destroyed（销毁后）")])])])])}),[],!1,null,null,null);t.default=_.exports}}]);