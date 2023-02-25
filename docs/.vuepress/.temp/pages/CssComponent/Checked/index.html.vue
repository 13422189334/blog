<template><div>
<CodeDemo id="code-demo-0" type="vue" code="eJy9VU9v00gU/yojoxW7bJ3Yceim2Wy10l72vscNh8EeN0NtjzUzKQ0I1ApU9cCfgqigEIGQEC0cuIBQFaB8mTomJ74Cb+yx66ZVgQMcIs+893vv93vz3kwuG0t9YrSNjiRhHGBJ5rsRQh2PLiE3wEL81TXcHnEXiWeeZ96ga2R+QNAo7kskBzEpIOfZctdAGl0vcGJpAV2knuwBrGlZgOgRutCTxVbjAOlS7gbkgDbbAt6nQQD7iEVqx2Fpz6k8QnK2qNhPzbbIWadZmsyCz1YwdxlWjYzZHZRLjQxoRFwcg5mzfuSBQ3IcCZ/xMLNJOJFfzTkLQZT6/QaIojSQHLNgoFKUoiV1F49I/rrQhrLFjEZSJWm1Zhp2E9l/ODONVhM5VnPGdlonia44LkCWA0/Zhjr0oVj3GvP/9V2XCNGpwzpreB06DqtOvTIHHeFyGssMQJZjxiXyiI/7gUSX81QRDkkbdY1/8qZ3DWW+otKUoSqNHAT5XNWqs1QkyQ6hjWzL+uXP3OJRARoGbeQHZFnb1NL0KCeupCxqI5cF/TDSThzQhcikoF2Ah0SS8MwDUtSn1yi4fBZJ08chDSD7vyRYItAxrLOEmC/QyJQsbqOmFZfMKkbQS1CpM1tagZ/xNjrlOI62sBi7VEJeq8qd3ZP/s3tyurgmp8+19UGg35G6IDU9+1oljmiIdZm5o9YSiGBBTNDH+lIz1s+gZHWYbm4lw53xcCXZuLW/u5LsbqMz9alEpppIM2QeFAHDfRFzT3y/SjXdx2jMzD9MYRXjkWwsgOs7xF+t9L+iGoy12Z+n2a41DomeajmQ6kvsYdHDnOMB+vRqL/3wan93lAzXkjs7k82Pn9/fSG6+Hj/YS5+N0ofXQdd4883+7ksF2LiVrN5Ot9+BfXJtJ1lfg8D0xSjd+gBR+6Pt9N6T9N2D5NHeeHN9/HhYFDPNCkrtuebBUYyvvf70fDWXMnk6Gt9/O7m7DhlVAPN9QWSy8j6LQeY8stBkZS3HJOtbpbnhtFrl8VUY8wQVSn04wFs+rcnGjXRjTUcfGsGj0p2z+d07lqRwao6/F8nA5/CAieKSFW8EZ2GxPlltlkt9JDsxQJVfDTiqoFrWV/kPqvw2+kPoo9yV1/EQ89R7dixbibGnOOAfQL/6xpUvs9f2zw==">
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checked-body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>190<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#68e534<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-linecap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span> <span class="token attr-name">transform</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rotate(-90 200 200)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polyline</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tick<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#68e534<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>88,214 173,284 304,138<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-linecap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-linejoin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>round<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Checked"</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.checked-body</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 36px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">input[type='checkbox']:checked + svg .circle</span> <span class="token punctuation">{</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> circle .8s ease-in-out<span class="token punctuation">;</span>
    <span class="token comment">/* 停留在最后一帧 */</span>
    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">input[type='checkbox']:checked + svg .tick</span> <span class="token punctuation">{</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> tick .8s ease-in-out<span class="token punctuation">;</span>
    <span class="token comment">/* 停留在最后一帧 */</span>
    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token property">animation-delay</span><span class="token punctuation">:</span> .8s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">input[type='checkbox']:checked ~ h2</span> <span class="token punctuation">{</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> h2 .6s ease-in-out<span class="token punctuation">;</span>
    <span class="token comment">/* 停留在最后一帧 */</span>
    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token property">animation-delay</span><span class="token punctuation">:</span> 1.2s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.circle</span> <span class="token punctuation">{</span>
    <span class="token comment">/* stroke-dasharray 设置为圆周长，即显示的一整个圆后偏移的部分为空白，产生绘图效果*/</span>
    <span class="token property">stroke-dasharray</span><span class="token punctuation">:</span> 1194<span class="token punctuation">;</span>
    <span class="token comment">/* 想要设置顺时针，dashoffset值 1194 -> 0 逆时针则 1194 -> 2388 */</span>
    <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> 1194<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* polyline 同理 */</span>
  <span class="token selector">.tick</span> <span class="token punctuation">{</span>
    <span class="token property">stroke-dasharray</span><span class="token punctuation">:</span> 350<span class="token punctuation">;</span>
    <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> 350<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token atrule"><span class="token rule">@keyframes</span> circle</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
      <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> 1194<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
      <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> 2388<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token atrule"><span class="token rule">@keyframes</span> tick</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
      <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> 350<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
      <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token atrule"><span class="token rule">@keyframes</span> h2</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo></div></template>


