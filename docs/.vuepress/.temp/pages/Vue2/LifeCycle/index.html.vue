<template><div><h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1>
<p>每个Vue实例再被创建之前，都会经过一系列的初始化过程，这个过程被称之为vue的生命周期。</p>
<p>下面这张官网的图，想必大家都熟悉，那让我们一步一步的分析，并最后验证一下。</p>
<img :src="$withBase('/assets/knowledge/frontEnd/vue/lifeCycle/vueLifecycle.png')" alt="vueLifecycle" style="zoom:50%;" />
<p>图中可以看到在一整个生命周期中会有很多的钩子函数，不同的钩子函数提供给我们在vue生命周期不同的时刻进行的操作, 那么我们先列出所有的钩子函数，然后我们再一一详解：</p>
<!-- more -->
<blockquote>
<p>结合 <RouterLink to="/Knowledge/FrontEnd/Vue2/LifeCycle/demo.html">生命周期案例</RouterLink> ，F12看控制台更容易理解。</p>
</blockquote>
<ul>
<li><strong>beforeCreate（创建前）</strong> 此阶段为实例初始化之后，此时的数据观察和事件机制都未形成，不能获得DOM节点。</li>
</ul>
<p>在 <strong>beforeCreate</strong> 和 <strong>created</strong> 生命周期之间，进行 <strong>初始化事件，进行数据的观测</strong> ，这时候我们可以看到在created钩子的时候数据已经和data中的属性进行绑定（其中在data中的属性值发生改变的时候，视图也会相对应改变，即所谓的双向绑定）。</p>
<p>注意事项：此时并没有el</p>
<ul>
<li><strong>created（创建后）</strong> 此阶段vue实例已经创建，仍然不能获取DOM元素。</li>
</ul>
<p>在 <strong>created</strong> 和 <strong>beforeMount</strong> 生命周期之间，发生的事情相对比较多，结合官网给出的生命周期图可以分析下：</p>
<img :src="$withBase('/assets/knowledge/frontEnd/vue/lifeCycle/createdToBeforeMount.png')" alt="createdToBeforeMount" style="zoom:50%;" />
<p>首先会判断对象是否有 <strong>el</strong> 。如果有的话就继续向下编译，如果没有el选项，则停止编译，也就意味着停止了生命周期，直到在该vue实例上调用vm.$mount(el)。</p>
<blockquote>
<p>此时注释掉demo代码中的 <strong>el: '#app'</strong> ，然后可以看到控制台打印的日志到created的时候就停止了，如果我们在代码后面继续调用 <strong>vm.$mount(el)</strong> ，可以发现代码继续向下执行了，其中这个 <strong>el</strong> 参数就是挂载的dom节点</p>
</blockquote>
<p>然后，我们往下看，<strong>template</strong> 参数选项的对生命周期的影响。</p>
<ol>
<li>
<p>如果vue实例对象中有template参数选项，则将其作为模板编译成 <strong>render函数</strong>。</p>
</li>
<li>
<p>如果没有template选项，则将外部HTML作为模板编译。</p>
</li>
<li>
<p>可以看到template中的模板优先级要高于outer HTML的优先级。</p>
</li>
</ol>
<blockquote>
<p>vue中还有一个 <strong>render 函数</strong> ，它是以createElement作为参数，然后做渲染操作，而且我们可以直接嵌入JSX，可以看到页面中渲染的是： <strong>render function</strong> 。若没有 <strong>rennder 函数</strong> ，则观察demo中的template参数，在有这个参数的时候，页面渲染出来的结果为 <strong>Vue的生命周期 --- 这是在template中的</strong> ，若注释掉 <strong>template</strong> 参数，则页面渲染结果为 <strong>Vue的生命周期 --- 这是在outer HTML中的</strong> ，证明以上三点结论。</p>
</blockquote>
<p>同时，也可以从侧面解释为什么 <strong>Has 'el' option</strong> 要在 <strong>Has 'template' option</strong> 之前，因为vue需要通过 <strong>el</strong> 去找到对应的 <strong>outer html</strong> ，最终可得出优先级结论：<strong>render函数选项 &gt; template选项 &gt; outer HTML</strong></p>
<ul>
<li><strong>beforeMount（载入前）</strong> 此阶段，依然得不到具体的DOM元素，但vue挂载的根节点已经创建，下面vue对DOM的操作将围绕这个根元素继续进行。</li>
</ul>
<img :src="$withBase('/assets/knowledge/frontEnd/vue/lifeCycle/beforeMountToMounted.png')" alt="beforeMountToMounted" style="zoom:50%;" />
<p>在 <strong>beforeMount</strong> 和 <strong>mounted</strong> 生命周期之间，可以看到此时是给vue实例对象添加 <strong>$el成员</strong> ，并且替换掉挂载的DOM元素。</p>
<blockquote>
<p>demo中控制台打印的日志可以看出生命周期在 <strong>beforeMount</strong> 之前时 <strong>el</strong> 是undefined。</p>
<p>同时，我们可以看下控制台打印的日志，<strong>beforeMount</strong> 和 <strong>mounted</strong> 两个生命周期上的 <strong>el</strong> ，在beforeMount时h1中还是使用 <strong>{{ message + '  --- 这是在outer HTML中的' }}</strong> 进行占位，因为此时还有挂在到页面上，还是JavaScript中的虚拟DOM形式存在的。在mounted之后可以看到h1中的内容发生了变化。</p>
</blockquote>
<ul>
<li><strong>mounted（载入后）</strong> 此阶段数据和DOM都已被渲染出来。</li>
<li><strong>beforeUpdate（更新前）</strong> 此阶段，vue遵循数据驱动DOM的原则；函数在数据更新后虽然没立即更新数据，但是DOM中的数据会在Vue双向数据绑定的作用下改变。</li>
<li><strong>updated（更新后）</strong> 此阶段DOM会和更改过的内容同步。</li>
<li><strong>beforeDestroy（销毁前）</strong></li>
<li><strong>destroyed（销毁后）</strong></li>
</ul>
</div></template>


