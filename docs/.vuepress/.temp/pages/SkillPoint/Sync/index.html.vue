<template><div><div class="custom-container danger">
<p class="custom-container-title">警告</p>
<p><code v-pre>.sync</code>提供了一种与父组件沟通的思路！</p>
<p>你如果只是单纯的在子组件当中修改父组件的某个数据时，建议使用 <code v-pre>sync</code> ，简单，快捷，不需要在传一个自定义方法来接收了</p>
</div>
<p>vue中我们经常会用 <code v-pre>v-bind(缩写为:)</code> 给子组件传入参数，然后子组件 <code v-pre>emit</code> 事件去改变父组件的状态。</p>
<p>或者我们会给子组件传入一个函数，子组件通过调用传入的函数来改变父组件的状态。</p>
<p>举个例子🌰</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//父组件 给子组件传入一个函数
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyFooter</span> <span class="token attr-name">:age</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token attr-name">@setAge</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(res)=> age = res<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MyFooter</span><span class="token punctuation">></span></span>
 
 
 //子组件 通过调用这个函数来实现修改父组件的状态。
 mounted () {
    console.log(this.$emit('setAge',1234567));
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在只需要使用.sync就可以轻松更新赋组件的值</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//父组件 将age传给子组件并使用.sync修饰符。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyFooter</span> <span class="token attr-name">:age.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MyFooter</span><span class="token punctuation">></span></span>


//子组件 触发事件
 mounted () {
   console.log(this.$emit('update:age',1234567));
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


