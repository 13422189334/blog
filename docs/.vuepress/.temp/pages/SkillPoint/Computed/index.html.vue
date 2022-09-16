<template><div><p>我们平时在 <code v-pre>computed</code> 属性中可以通过 <code v-pre>this.xxx</code> 去拿 <code v-pre>data</code> 里面的数据和 <code v-pre>methods</code> 里面的方法，</p>
<p>或许还会通过 <code v-pre>this.$store</code> 去拿 <code v-pre>vuex</code> 的 <code v-pre>state</code> 和 <code v-pre>commit</code> 等，</p>
<p>甚至，还会通过 this.<code v-pre>$route</code> 去获取路由里面的数据。</p>
<p>其实，我们可以避免这些丑陋的this，它甚至会给我们带来看不见的性能问题。</p>
<p>实现上，我们通过this能访问到的数据，在computed的第一个参数上都能结构出来。</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>export default {
  computed: {
    a({$attrs,$route,$store,$listeners,$ref}){
     // 还能结构很多属性，可自行打印看看
     return 
   }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


