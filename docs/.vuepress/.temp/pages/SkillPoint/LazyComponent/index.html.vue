<template><div><div class="custom-container danger">
<p class="custom-container-title">警告</p>
<p>异步组件可以让我们在需要一些组件时才将它加载进来，而不是一初始化就加载进来，这跟路由懒加载是一个概念。</p>
</div>
<p>以前是这么引入组件的</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>import BureauDetail from './components/ChildFirst'
import addBureau from './components/ChildSecond'

//在vue的comoinents中
components: {
  ChildFirst,
  ChildSecond 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不是一开始就要加载的组件，我们可以使用组件懒加载</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//在vue的comoinents中
components: {
  BureauDetail: () => import('./components/ChildFirst'),
  addBureau: () => import('./components/ChildSecond')
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>异步组件还有一种比较完善的写法</p>
<p>export default {
components:{
ChildFirst:()=&gt;({
component:import(/* webpackChunkName: &quot;ChildFirst&quot; */ './Async'),
delay:200, // 延迟几毫秒，默认200
timeout:3000, // 加载几毫米之后就超时，触发error组件
loading:LoadingComponent, // 组件未加载回来前显示
error:ErrorComponent // 组件超时时显示
})
}
}</p>
</div></template>


