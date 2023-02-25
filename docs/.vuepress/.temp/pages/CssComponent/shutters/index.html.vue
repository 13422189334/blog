<template><div>
<CodeDemo id="code-demo-0" type="vue" code="eJyNVUtrW0cU/isHlWLZ1dXDamtzowT6WLSLrppFoepidGckDb66c5mZK9kRBpcSKK0TSptAFtl0EwwNKYUuTNvk11i2s+pfyLnzuFcvP2yQRt+Z8/rOY6aVoR7FlbDS0WyUxkSze90EoEP5GDi9262QKBKScpF0KxDFRKlFzNx291fEQU/so9o46AuJeJWjjxrwhLL9TfyCmCtdmEAjPEkzDfogZXg7GrJozxpIyChHFItZhAprHBWiRmltfUia65ih045KSXJvOoU8qLpB4fCw0zBwp4HKN1mKRKJZkifgrTjE2CkNlGd/6jTmyMafKpI81eYK20+F1EBZn2Sxhqk1kRMQQrfy9TDTmknVrdSsgBJNqpv+GoBkOpNJ+RsMxyF8WwIAUzDphrBxP/9ubdTARY7QZ/bU2oBD52Ot0vY6pe0blNrrlNqoVOp8548OM1/4gYXxJOWE6YPYNmpjC86f/n32+rfZ6Q+zv45gq5Gj9aJKngpspEDxBzwZhHiWlMm8Oe9YYR8jCfpkxOODED6RnMQ1+ILFY6Z5RGqgSKKwwyTvu/sTTvUwhFaz+b5DGlvOaCRiIUN4j7L8/44NZ05uIg9BiZjTVak3nO4XMisxmNUqbM/LA0koz1QIu6jqjQ4ZHwyRaZJp4ewhk4v85Cx4jlbTolxhmyIp/ZgVZOExoFzivKF+iAWNs1HihGLMZD8WkxCGnFJmYecUS2XHFGa/HtvGgPNnf54/eTN7fjL75fjs9Ojy9+P//zuePfzx8tWbi9evZg9fXjw5yRG88Ojpxc8vLb5SZTvVpvXmQOetaAES7Q2kyBJaVKlv/lzsHtzp7+7s7lxZas/qxx8VVJv+we7CwrY8usq0C8dFE2VS5e5SwXEMZFG0EZEDjrQ2iw4QKYm4xiI03aUHgVmh6KzQgvPHJ2enP80e/4tsWUdnp4/ePj+6fPH92z+ezf554TgDsA6w7lqLUQjBXB5OJG2C3p1DtUg95nJbTi0c5uWHD25ZmNBseEbXKNyuZKsULyinQnHbopLhruXjxZGZHyktccRTInEdLY6VZck7l4Nedbv9YQ38x+a1ceRPSbl/LN2e1JgnLFjTStfuqWIce7GI9hxYpkl6mE2mfZqTIT5KAQYRYV8mYiJJemVTp4RS47MJ7XYRjKEF326MWwqNz1W1SdnAJg0QjFQwkeg7GQQjQdFJLAPd8zPBY2xr7G8pBpyGn3/z5YgM2H1vsf4Vj6RQoq/rnxLFIyOtGi+Yy93mVcz6J/Y2a71cRmYD3tAVJlknsi0PzXpbASOK4amlfIXW9ORO/n/dGvGV3t5tLk9bMYhrZEuTWFSpXd5cruVVe+e6aVuAPMOe4qUwl7bCQoT2nXZvc+XwHUUrfUI=">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accordion<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accordion<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accordion-box<span class="token punctuation">"</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>select<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accordion-select<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accordion-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accordion-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.content }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Shutters"</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Title1'</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'Content1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Title2'</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'Content2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Title3'</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'Content3'</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token comment">/* 整体布局 */</span>
  <span class="token selector">.accordion</span> <span class="token punctuation">{</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token comment">/*border-color: #dedede;*/</span>
    <span class="token comment">/*border-style: solid;*/</span>
    <span class="token comment">/*border-width: 1px;*/</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #dedede<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token comment">/*height: auto;*/</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.accordion-box</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* select 和 title 是放在同一行，先设置公用，在单独设置 */</span>
  <span class="token selector">.accordion-title,
  .accordion-select</span>  <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #7f8787<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 65px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.accordion-select</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token comment">/*margin: 0;*/</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token comment">/* 推上去，select不需要高度 */</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> -65px<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">accordion-select:hover + .accordion-title,
  .accordion-select:checked + .accordion-title</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.accordion-title</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid transparent<span class="token punctuation">;</span>
    <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>234<span class="token punctuation">,</span> 234<span class="token punctuation">,</span> 234<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.accordion-title span</span> <span class="token punctuation">{</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 65px<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 33px<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-ms-writing-mode</span><span class="token punctuation">:</span> lr-tb<span class="token punctuation">;</span>
    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token property">progid</span><span class="token punctuation">:</span>DXImageTransform.Microsoft.<span class="token function">BasicImage</span><span class="token punctuation">(</span>rotation=0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.accordion-content</span> <span class="token punctuation">{</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> margin 0.3s ease 0.1s<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f7f7f7<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #7f8787<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 280px<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> -280px<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.accordion-select:checked + .accordion-title + .accordion-content</span>  <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo></div></template>


