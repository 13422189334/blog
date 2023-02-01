import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,b as p}from"./app.e0b07838.js";const t={},e=p(`<div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u8DEF\u7531\u61D2\u52A0\u8F7D\uFF0C\u80FD\u8BA9\u4F60\u9996\u6B21\u52A0\u8F7D\u66F4\u5FEB</p></div><p>\u8DEF\u7531\u61D2\u52A0\u8F7D\u53EF\u4EE5\u8BA9\u6211\u4EEC\u7684\u5305\u4E0D\u9700\u8981\u4E00\u6B21\u628A\u6240\u6709\u7684\u9875\u9762\u7684\u52A0\u8F7D\u8FDB\u6765\uFF0C\u53EA\u52A0\u8F7D\u5F53\u524D\u9875\u9762\u7684\u8DEF\u7531\u7EC4\u4EF6\u5C31\u884C\u3002</p><p>\u4E3E\u4E2A\u6817\u5B50\u{1F330}\uFF0C\u5982\u679C\u8FD9\u6837\u5199\uFF0C\u52A0\u8F7D\u7684\u65F6\u5019\u4F1A\u5168\u90E8\u90FD\u52A0\u8F7D\u8FDB\u6765\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> Home
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> About
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\uFF0C\u5E94\u8BE5\u907F\u514D\u4E0A\u9762\u7684\u5199\u6CD5\uFF0C\u5C3D\u91CF\u4F7F\u7528\u61D2\u52A0\u8F7D\u3002</p><p>\u8DEF\u7531\u7684\u61D2\u52A0\u8F7D\u53EF\u4EE5\u5206\u4E3A\u4EE5\u4E0B\u4E09\u79CD\u5199\u6CD5\u3002</p><ul><li>Vue\u5F02\u6B65\u7EC4\u4EF6</li><li>es6\u7684import</li><li>webpack\u63D0\u4F9B\u7684require.ensure()</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token comment">// 1\u3001Vue\u5F02\u6B65\u7EC4\u4EF6</span>
<span class="token function">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token function">reqire</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;path\u8DEF\u5F84&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> resolve<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 2\u3001es6\u7684import</span>
<span class="token function">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;path\u8DEF\u5F84&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 3\u3001webpack\u63D0\u4F9B\u7684require.ensure()</span>
<span class="token function">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token parameter">r</span> <span class="token operator">=&gt;</span> require<span class="token punctuation">.</span><span class="token function">ensure</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  <span class="token function">r</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path\u8DEF\u5F84&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;demo&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","index.html.vue"]]);export{k as default};
