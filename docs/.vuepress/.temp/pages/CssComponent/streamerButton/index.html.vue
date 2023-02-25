<template><div>
<CodeDemo id="code-demo-0" type="vue" code="eJzdVd1u0zAUfhUrCAkGoe3WSRAGQrwCt71xGqc1pHbkOGMFIU1M438MpsEYvxtCKgg2Nhio2xi8zJysb8FJUjft2ATX3LTOOT7f9/k7J851oy4bnmEZY5I0fA9Lcr7CEBpz6DiqejgIzlUMO5SSM9PmTrNipGnYgHvpQAqCG0SY2T7YcqkbuZgGxgo4wywAKKzGCn1U8BhUBfVluoVM+FxI5BAXh55E1zMuBlgWqhiDsBUjyd5I8HoICZpsetkZTvXp1lCFIaR+bEaTLdWeUuuTaG/1Q2f5W+fVWzU9FW8sqdc34xcb6ASK1jbU5le1Pr3bXkFDhazYoQHIblrI9cjE2Sx2OQwkdZtmlTNJmLRQFX6J6GaxR2vMpHDeYF8GhOTcM0vRzKpan1WbT6LJ7c7HZz3KOqG1OqCWikVfUxaGbFy9UhM8ZA7welxY6EixWDybFYEj6en3tSV3IH7RVp831erz3Z0ZzePzgErKmYUEgc7QcdIlu0odWbfQcB+/1jSahzzKiHlAXJIJaaYm/HF89XC7s/hut31f3ZmLt35pIWmFQ6pcgIpED+NMaykMRU9vq5UF9a6lbi0OVEiBWeBy0bBQ6PtEVHGgq1zojBnQazBCpeGeMu2b67o6EoogCfmcDgp9eWuvNafZbC4c8FRgh4bQ0+HRvrbsTT2IFj9H7Udq9tne3S+9krxbtIFroCOxCwuzlqCAK8ckRyLx7iT0cQSfccuwcMvlEh5NFi6xR+wkdQafdsvHD6NLXFmbPYA0O3u5WDzaLb1mUuaQCfAjDRwyMJZlE3CU6MHpTXjFKFWMLlQ+N9gOuBdK7brkvoXM3J0UE7rTF/KIC2h9gdSDgch/7b6Z2Z/O9fvl+Os9tLvViuffqNnHavpu9ORO9PqlBnSpBzNpIdsLxbESvGCZkMNaV+fjRORvvLr3Pp7fRurRTNxaQ9HC987CBoL/JXjxok/L0dxKNP9TU2EGPmU9DUKGRgJEmUsZXGJ/p9w/M/+GdeEKaboCwIJ0V7cWrryjep0bDndWvLOqtQ44nc+imdiNil17gUV/J7rfBuPGbyMGlqY=">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button-body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>streamer-button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>StreamerButton<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"StreamerButton"</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.button-body</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 弹性布局 让页面元素垂直 + 水平居中 */</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token comment">/* 让页面占据屏幕总高 */</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token comment">/*background-color: #000;*/</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.streamer-button</span> <span class="token punctuation">{</span>
    <span class="token comment">/*相对定位*/</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token comment">/*去除下划线*/</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token comment">/*文字大写*/</span>
    <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token comment">/*圆角*/</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token comment">/*背景渐变色*/</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #03a9f4<span class="token punctuation">,</span> #f441a5<span class="token punctuation">,</span> #ffeb3b<span class="token punctuation">,</span> #09a8f4<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*背景渐变色大小*/</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> 400%<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.streamer-button::before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"1"</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -5px<span class="token punctuation">;</span>
    <span class="token property">buttom</span><span class="token punctuation">:</span> -5px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -5px<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> -5px<span class="token punctuation">;</span>
    <span class="token comment">/*圆角*/</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token comment">/*背景渐变色*/</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #03a9f4<span class="token punctuation">,</span> #f441a5<span class="token punctuation">,</span> #ffeb3b<span class="token punctuation">,</span> #09a8f4<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*背景渐变色大小*/</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> 400%<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
    <span class="token comment">/*模糊 产生发光效果*/</span>
    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.streamer-button:hover</span> <span class="token punctuation">{</span>
    <span class="token comment">/*动画 名称 时间  无线次播放*/</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> sun 3s infinite<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.streamer-button:hover::before</span> <span class="token punctuation">{</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> sun 3s infinite<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token atrule"><span class="token rule">@keyframes</span> sun</span> <span class="token punctuation">{</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
      <span class="token comment">/*背景位置*/</span>
      <span class="token property">background-position</span><span class="token punctuation">:</span> -400% 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo></div></template>


