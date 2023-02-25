<template><div>
<CodeDemo id="code-demo-0" type="vue" code="eJy1V91u2zYUfhXOQ4HEiGzLjpNY9foEewTf0BJtc5FFgaLysyAXw9B0GzqsF/vrrjJswIINW4f1YsB+MCDPMie56yv0kKIk6sdp3Lo3AnV4dH6+8/Hw6KQxE3O/4TSGgsxDHwvyYBQgNPToAXJ9HEXvjRo+m9LAGjPveNRQu7X7LgsEpgHhmVJZjUxErVZJT1DhE9geRiEOHlw//Xvx71fDtnoZtkFx2Xc0CONlDkBVbSNxHBLpgxyJUQMFeC7f4ohwuQQJQOCSGfM9wmHj+suLq0/+XDz5fNRo32IthAAOGfdyi4akaHHx7Oz6/KOiuVuzmpMowlOyPC8FzOK/b29++z0xrrFaZr/0ZvridDq7U4k4mdJI8ONXRHX1/GJx9vgV8ZRMY1dQVs8mw/AXT/7/68cVEs3X6WrYNggPr5HLaSiUCjkKGRfIIxMc+wKdJCZkZR00arwv2T5qSOGpNJN9KI2IYz85QO1mE50028kSoTnm8JWDOvdzWYg9jwZTU3gqF8myJc+laWJGZHUc1Ot3wiPDzCH1xMxBdqdzr2qnlZ/dNA+PRpD2sYMmPjm6n8g+iCNBJ0k5SQBOXHgSrnexT6eBRQGvqLRTjCmRtZtZYv17WW5KziIqi+sgTgB4ekCyzTF296ecxYFn0TnQ3UE+FB9za8qxR8HlhmBozIRgc6RYuoX4dLxh29tbyO71t1C3v72pZb3OFtrbA/nezuamCgrqVAZDrzOapeiYUeJxxPxY5FFqqHc6ebYZAnY/k2XFRjgWTAvH0A0It2Q6McBoqI/ZkRXNsMcO5Sc22EYSTljLdPqDLbS7A9kMtpNkCmC5zGcc8ATFAaBQULxL1q1iU65whAayDtbYZ+6+9q5B6PVyEHRugoWWslebpFJJSrhUK2POjmH8dakBFFB47PQ0Mwa78NbpAVlsewVmlDFqqQsqhUpX4N3JZKIDnoCmFdEPIVJ7T6fxBn5kj0udFVCEGgBLgKLUU+l1e5Bft2vLxxtkV7pGU9dZabqKm+uzn9ykhQRlSywX30EBC8jSEyA4DgApDnxA79C5bOA4EFqdxUJyJjebnlAjl0IlqybMLls6I+bhyFufYVjFpntKqxvVnQiwXKilPYBjbw9kLe1BoZjtpgLsxT/fWYdkvE+FJZvMhPp+2vzVvlPedWbsgPBEZ4nGhLlxdKsNeTkfkMRI1jBvfvphcfb85tHPi88uFt//snj48OrrR4tfv7n5+PHV02c3n/6Rtk8Th3IFoeV1IkRwRCygDxQMwWulCu3m5fnleaX6l+dG+S/Pdb/WgIE9uLAC7GdpWBHxiSuIl+awamBrJn9SmtozntI7ay/aq5PVJrFoDJmlxnQ7m1aLvjKLpr7Mlredde563t8eF+zHPJIKIVOFW2O0RZwNZO/sojQgr3Bd2tv5LZfODC723Q3ZUZCFbNmKUgggSkFh11KTFzQ3FtZdkKt04XLkreoIn50G+DdKPRemvbtddVp6qJPsdtYc5du+DysxlP9I6kifjytVkNJyG3fHUohrRuQ1Bl6FrnzvVDEzOGdkWWK8liryp+l2K8NfOvAZOzXDdvqJvhZzn/J860Oz24WoLWUojXJJs3ndZnI3MEudu3Yur4N0+die/1bqX8nG6Uu72tUk">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>login-body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>login-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户名<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>密码<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>忘记密码<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>registry-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>注册<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>action-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>提交<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Login"</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token comment">/** {*/</span>
  <span class="token comment">/*  margin: 0;*/</span>
  <span class="token comment">/*  padding: 0;*/</span>
  <span class="token comment">/*}*/</span>

  <span class="token comment">/*.html {*/</span>
  <span class="token comment">/*  height: 350px;*/</span>
  <span class="token comment">/*  width: 100%;*/</span>
  <span class="token comment">/*}*/</span>

  <span class="token selector">.login-body</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
    <span class="token comment">/*padding: 5% 0;*/</span>
    <span class="token comment">/*position: relative;*/</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom right<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>114<span class="token punctuation">,</span> 135<span class="token punctuation">,</span> 254<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>130<span class="token punctuation">,</span> 88<span class="token punctuation">,</span> 186<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.login-body .login-container</span> <span class="token punctuation">{</span>
    <span class="token comment">/*position: absolute;*/</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 315px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 10px 50px 0 <span class="token function">rgb</span><span class="token punctuation">(</span>59<span class="token punctuation">,</span> 76<span class="token punctuation">,</span> 194<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>95<span class="token punctuation">,</span> 76<span class="token punctuation">,</span> 194<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.login-body .login-container .left-container</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 330px<span class="token punctuation">;</span>
    <span class="token property">border-top-left-radius</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">border-bottom-left-radius</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom right<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>118<span class="token punctuation">,</span> 76<span class="token punctuation">,</span> 163<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>97<span class="token punctuation">,</span> 103<span class="token punctuation">,</span> 211<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.login-body .login-container .left-container .title</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.login-body .login-container .left-container .title span</span> <span class="token punctuation">{</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 3px solid <span class="token function">rgb</span><span class="token punctuation">(</span>237<span class="token punctuation">,</span> 221<span class="token punctuation">,</span> 22<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.login-body .login-container .left-container .input-container</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.login-body .login-container .left-container .input-container input</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> transparent <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px 0<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> .2s<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgb</span><span class="token punctuation">(</span>199<span class="token punctuation">,</span> 191<span class="token punctuation">,</span> 219<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/*input：-webkit-autofill*/</span>
  <span class="token comment">/*input:-webkit-autofill:hover*/</span>
  <span class="token property">input</span><span class="token punctuation">:</span><span class="token property">-webkit-autofill</span><span class="token punctuation">:</span>focus
  <span class="token comment">/*input:-webkit-autofill:active*/</span>
  <span class="token punctuation">{</span>
    <span class="token comment">/*解决自动填充文字背景色*/</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> background-color 500s ease-in-out 0s <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token comment">/*  background-color: transparent ;*/</span>
  <span class="token punctuation">}</span>

  <span class="token selector">-internal-autofill-selected</span> <span class="token punctuation">{</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> background-color 500s ease-in-out 0s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.login-body .login-container .left-container .input-container input:hover</span> <span class="token punctuation">{</span>
    <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">::-webkit-input-placeholder</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>199<span class="token punctuation">,</span> 191<span class="token punctuation">,</span> 219<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.login-body .login-container .left-container .message-container</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> .2s<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>199<span class="token punctuation">,</span> 191<span class="token punctuation">,</span> 219<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.login-body .login-container .left-container .message-container:hover</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff
  <span class="token punctuation">}</span>

  <span class="token selector">.login-body .login-container .right-container</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 145px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 120px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 60px 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.login-body .login-container .right-container .registry-container</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> 200<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.login-body .login-container .right-container .registry-container span</span> <span class="token punctuation">{</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 3px solid <span class="token function">rgb</span><span class="token punctuation">(</span>237<span class="token punctuation">,</span> 221<span class="token punctuation">,</span> 22<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.login-body .login-container .right-container .action-container</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.login-body .login-container .right-container .action-container span</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgb</span><span class="token punctuation">(</span>237<span class="token punctuation">,</span> 221<span class="token punctuation">,</span> 22<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>72px - 25px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> .2s<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.login-body .login-container .right-container .action-container span:hover</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>237<span class="token punctuation">,</span> 221<span class="token punctuation">,</span> 22<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>95<span class="token punctuation">,</span> 76<span class="token punctuation">,</span> 194<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo></div></template>


