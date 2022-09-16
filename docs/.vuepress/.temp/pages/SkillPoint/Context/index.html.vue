<template><div><div class="custom-container danger">
<p class="custom-container-title">警告</p>
<p>require.context()引入多个组件</p>
<p>常常用来在组件内引入多个组件, <code v-pre>require.context(directory, useSubdirectories, regExp)</code></p>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>// 原始写法
import titleCom from '@/components/home/titleCom'
import bannerCom from '@/components/home/bannerCom'
import cellCom from '@/components/home/cellCom'
components: {
  titleCom, bannerCom, cellCom
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就写了大量重复的代码,利用 <code v-pre>require.context</code> 可以写成</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> files <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">'@/components/home'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
<span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
files<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token string">'.vue'</span><span class="token punctuation">)</span>
  modules<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">files</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span>default <span class="token operator">||</span> <span class="token function">files</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token literal-property property">components</span><span class="token operator">:</span> modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在main.js中引入大量公共组件,利用 <code v-pre>require.context</code> 可以写成</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token comment">// 自定义组件</span>
<span class="token keyword">const</span> requireComponents <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">'../views/components'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.vue</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
<span class="token comment">// 打印结果</span>
<span class="token comment">// 遍历出每个组件的路径</span>
requireComponents<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fileName</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 组件实例</span>
  <span class="token keyword">const</span> reqCom <span class="token operator">=</span> <span class="token function">requireComponents</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span>
  <span class="token comment">// 截取路径作为组件名</span>
  <span class="token keyword">const</span> reqComName <span class="token operator">=</span>reqCom<span class="token punctuation">.</span>name<span class="token operator">||</span> fileName<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.\/(.*)\.vue</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token string">'$1'</span><span class="token punctuation">)</span>
  <span class="token comment">// 组件挂载</span>
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>reqComName<span class="token punctuation">,</span> reqCom<span class="token punctuation">.</span>default <span class="token operator">||</span> reqCom<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


