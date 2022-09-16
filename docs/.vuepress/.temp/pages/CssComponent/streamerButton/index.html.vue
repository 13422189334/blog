<template><div>
<CodeDemo id="code-demo-31cf7806" type="vue" code="%7B%22html%22%3A%22%3Ctemplate%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22button-body%5C%22%3E%5Cn%20%20%20%20%3Ca%20class%3D%5C%22streamer-button%5C%22%3EStreamerButton%3C%2Fa%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%5Cn%3Cscript%3E%5Cn%20%20export%20default%20%7B%5Cn%20%20%20%20name%3A%20%5C%22StreamerButton%5C%22%5Cn%20%20%7D%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Cstyle%3E%5Cn%20%20.button-body%20%7B%5Cn%20%20%20%20%2F*%20%E5%BC%B9%E6%80%A7%E5%B8%83%E5%B1%80%20%E8%AE%A9%E9%A1%B5%E9%9D%A2%E5%85%83%E7%B4%A0%E5%9E%82%E7%9B%B4%20%2B%20%E6%B0%B4%E5%B9%B3%E5%B1%85%E4%B8%AD%20*%2F%5Cn%20%20%20%20display%3A%20flex%3B%5Cn%20%20%20%20justify-content%3A%20center%3B%5Cn%20%20%20%20align-items%3A%20center%3B%5Cn%20%20%20%20%2F*%20%E8%AE%A9%E9%A1%B5%E9%9D%A2%E5%8D%A0%E6%8D%AE%E5%B1%8F%E5%B9%95%E6%80%BB%E9%AB%98%20*%2F%5Cn%20%20%20%20height%3A%20100px%3B%5Cn%20%20%20%20%2F*background-color%3A%20%23000%3B*%2F%5Cn%20%20%7D%5Cn%5Cn%20%20.streamer-button%20%7B%5Cn%20%20%20%20%2F*%E7%9B%B8%E5%AF%B9%E5%AE%9A%E4%BD%8D*%2F%5Cn%20%20%20%20position%3A%20relative%3B%5Cn%20%20%20%20width%3A%20200px%3B%5Cn%20%20%20%20height%3A%2050px%3B%5Cn%20%20%20%20line-height%3A%2050px%3B%5Cn%20%20%20%20text-align%3A%20center%3B%5Cn%20%20%20%20%2F*%E5%8E%BB%E9%99%A4%E4%B8%8B%E5%88%92%E7%BA%BF*%2F%5Cn%20%20%20%20text-decoration%3A%20none%3B%5Cn%20%20%20%20%2F*%E6%96%87%E5%AD%97%E5%A4%A7%E5%86%99*%2F%5Cn%20%20%20%20text-transform%3A%20uppercase%3B%5Cn%20%20%20%20font-size%3A%2012px%3B%5Cn%20%20%20%20color%3A%20%23fff%3B%5Cn%20%20%20%20cursor%3A%20pointer%3B%5Cn%20%20%20%20%2F*%E5%9C%86%E8%A7%92*%2F%5Cn%20%20%20%20border-radius%3A%2025px%3B%5Cn%20%20%20%20%2F*%E8%83%8C%E6%99%AF%E6%B8%90%E5%8F%98%E8%89%B2*%2F%5Cn%20%20%20%20background-image%3A%20linear-gradient(to%20right%2C%20%2303a9f4%2C%20%23f441a5%2C%20%23ffeb3b%2C%20%2309a8f4)%3B%5Cn%20%20%20%20%2F*%E8%83%8C%E6%99%AF%E6%B8%90%E5%8F%98%E8%89%B2%E5%A4%A7%E5%B0%8F*%2F%5Cn%20%20%20%20background-size%3A%20400%25%3B%5Cn%20%20%20%20z-index%3A%201%3B%5Cn%20%20%7D%5Cn%5Cn%20%20.streamer-button%3A%3Abefore%20%7B%5Cn%20%20%20%20content%3A%20%5C%221%5C%22%3B%5Cn%20%20%20%20position%3A%20absolute%3B%5Cn%20%20%20%20top%3A%20-5px%3B%5Cn%20%20%20%20buttom%3A%20-5px%3B%5Cn%20%20%20%20left%3A%20-5px%3B%5Cn%20%20%20%20right%3A%20-5px%3B%5Cn%20%20%20%20%2F*%E5%9C%86%E8%A7%92*%2F%5Cn%20%20%20%20border-radius%3A%2025px%3B%5Cn%20%20%20%20%2F*%E8%83%8C%E6%99%AF%E6%B8%90%E5%8F%98%E8%89%B2*%2F%5Cn%20%20%20%20background-image%3A%20linear-gradient(to%20right%2C%20%2303a9f4%2C%20%23f441a5%2C%20%23ffeb3b%2C%20%2309a8f4)%3B%5Cn%20%20%20%20%2F*%E8%83%8C%E6%99%AF%E6%B8%90%E5%8F%98%E8%89%B2%E5%A4%A7%E5%B0%8F*%2F%5Cn%20%20%20%20background-size%3A%20400%25%3B%5Cn%20%20%20%20z-index%3A%20-1%3B%5Cn%20%20%20%20%2F*%E6%A8%A1%E7%B3%8A%20%E4%BA%A7%E7%94%9F%E5%8F%91%E5%85%89%E6%95%88%E6%9E%9C*%2F%5Cn%20%20%20%20filter%3A%20blur(10px)%3B%5Cn%20%20%7D%5Cn%5Cn%20%20.streamer-button%3Ahover%20%7B%5Cn%20%20%20%20%2F*%E5%8A%A8%E7%94%BB%20%E5%90%8D%E7%A7%B0%20%E6%97%B6%E9%97%B4%20%20%E6%97%A0%E7%BA%BF%E6%AC%A1%E6%92%AD%E6%94%BE*%2F%5Cn%20%20%20%20animation%3A%20sun%203s%20infinite%3B%5Cn%20%20%7D%5Cn%5Cn%20%20.streamer-button%3Ahover%3A%3Abefore%20%7B%5Cn%20%20%20%20animation%3A%20sun%203s%20infinite%3B%5Cn%20%20%7D%5Cn%5Cn%20%20%40keyframes%20sun%20%7B%5Cn%20%20%20%20100%25%20%7B%5Cn%20%20%20%20%20%20%2F*%E8%83%8C%E6%99%AF%E4%BD%8D%E7%BD%AE*%2F%5Cn%20%20%20%20%20%20background-position%3A%20-400%25%200%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%3C%2Fstyle%3E%5Cn%22%7D">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
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


