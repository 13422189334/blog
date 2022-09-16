<template><div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token class-name">Matcher</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token class-name">Pattern</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UrlUtils</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 解析出url请求的路径，包括页面
     * <span class="token keyword">@param</span> <span class="token parameter">strURL</span> url地址
     * <span class="token keyword">@return</span> url路径
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token class-name">GetUrl</span><span class="token punctuation">(</span><span class="token class-name">String</span> strURL<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">String</span> strPage<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrSplit<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
        strURL<span class="token operator">=</span>strURL<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrSplit<span class="token operator">=</span>strURL<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"[?]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>strURL<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arrSplit<span class="token punctuation">.</span>length<span class="token operator">></span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>arrSplit<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    strPage<span class="token operator">=</span>arrSplit<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> strPage<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 去掉url中的路径，留下请求参数部分
     * <span class="token keyword">@param</span> <span class="token parameter">strURL</span> url地址
     * <span class="token keyword">@return</span> url请求参数部分
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token class-name">TruncateUrlPage</span><span class="token punctuation">(</span><span class="token class-name">String</span> strURL<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">String</span> strAllParam<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrSplit<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
        strURL<span class="token operator">=</span>strURL<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrSplit<span class="token operator">=</span>strURL<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"[?]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>strURL<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">></span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arrSplit<span class="token punctuation">.</span>length<span class="token operator">></span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>arrSplit<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    strAllParam<span class="token operator">=</span>arrSplit<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> strAllParam<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">URL</span>  url地址
     * <span class="token keyword">@param</span> <span class="token parameter">name</span> 获取参数名
     * <span class="token keyword">@return</span>  url请求参数部分
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getParam</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token constant">URL</span><span class="token punctuation">,</span><span class="token class-name">String</span> name<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> mapRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrSplit<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> strUrlParam<span class="token operator">=</span><span class="token class-name">TruncateUrlPage</span><span class="token punctuation">(</span><span class="token constant">URL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>strUrlParam<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">//每个键值为一组</span>
        arrSplit<span class="token operator">=</span>strUrlParam<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"[&amp;]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> strSplit<span class="token operator">:</span>arrSplit<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrSplitEqual<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
            arrSplitEqual<span class="token operator">=</span> strSplit<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"[=]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//解析出键值</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arrSplitEqual<span class="token punctuation">.</span>length<span class="token operator">></span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                mapRequest<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>arrSplitEqual<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arrSplitEqual<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//正确解析</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>arrSplitEqual<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">!=</span><span class="token string">""</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">//只有参数没有值，不加入</span>
                    mapRequest<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>arrSplitEqual<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> mapRequest<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 请求url</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">"https://xxx.com/easy-xxx/xxx/xxx/xxx?fileName=dmlkZW8vMjAxOS0wOS0yNC8xNTY5MzM2NzQ0MjQ1Lm1wMw=="</span><span class="token punctuation">;</span>
        <span class="token comment">//url页面路径</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">UrlUtils<span class="token punctuation">.</span>GetUrl</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//url参数键值对</span>
        <span class="token class-name">String</span> strRequestKeyAndValues <span class="token operator">=</span> <span class="token class-name">UrlUtils</span><span class="token punctuation">.</span><span class="token function">getParam</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span><span class="token string">"fileName"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取无效键时，输出null</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>strRequestKeyAndValues<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


