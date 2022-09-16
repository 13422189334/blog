<template><div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">StringEscapeUtils</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token class-name">Matcher</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token class-name">Pattern</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringUtils</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isBlank</span><span class="token punctuation">(</span><span class="token class-name">Object</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> str <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> str<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isBlank</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> str <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> str<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Pattern</span> <span class="token constant">TRIM_PATTERN</span> <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">"\\s*|\t|\r|\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 去除首位空格
     * <span class="token keyword">@param</span> <span class="token parameter">str</span> 输入字符串
     * <span class="token keyword">@return</span> 去除首位空格后的字符串
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">trimString</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        str <span class="token operator">=</span> str <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">;</span>
        str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> str<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 替换参数格式化
     * <span class="token keyword">@param</span> <span class="token parameter">formatString</span> 待格式化字符串
     * <span class="token keyword">@param</span> <span class="token parameter">matchReplaceList</span> 匹配替换列表
     * <span class="token keyword">@return</span> 替换结果
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">parseString</span><span class="token punctuation">(</span><span class="token class-name">String</span> formatString<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> matchReplaceList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> matchReplaceList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> formatString<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> matchReplaceList<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            url <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> matchReplaceList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> url<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 限制字符串长度
     * 如果输入字符串越界，则打印信息
     * <span class="token keyword">@param</span> <span class="token parameter">inputStr</span> 输入字符串
     * <span class="token keyword">@param</span> <span class="token parameter">limitLength</span> 限制字符长度
     * <span class="token keyword">@return</span> 处理后的字符串
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">limitLength</span><span class="token punctuation">(</span><span class="token class-name">String</span> inputStr<span class="token punctuation">,</span> <span class="token keyword">int</span> limitLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 正则表达式规则</span>
        <span class="token class-name">String</span> regEx <span class="token operator">=</span> <span class="token string">"^\\w*\\s*\\.\\s*"</span><span class="token punctuation">;</span>
        <span class="token comment">// 编译正则表达式</span>
        <span class="token class-name">Pattern</span> pattern <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>regEx<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 忽略大小写的写法</span>
        <span class="token comment">// Pattern pat = Pattern.compile(regEx, Pattern.CASE_INSENSITIVE);</span>
        <span class="token class-name">Matcher</span> matcher <span class="token operator">=</span> pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span>inputStr<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 查找字符串中是否有匹配正则表达式的字符/字符串</span>
        <span class="token class-name">String</span> result <span class="token operator">=</span> matcher<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>limitLength <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> limitLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> limitLength <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 清除空白字符串
     * <span class="token keyword">@param</span> <span class="token parameter">str</span> 原始字符串
     * <span class="token keyword">@return</span> 清除空白字符后的字符串
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">replaceBlank</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> dest <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>str <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> dest<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token class-name">Matcher</span> m <span class="token operator">=</span> <span class="token constant">TRIM_PATTERN</span><span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
            dest <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> dest<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 隐藏信息
     * <span class="token keyword">@param</span> <span class="token parameter">str</span> 输入字符串
     * <span class="token keyword">@param</span> <span class="token parameter">replaceSymbol</span> 替换符号
     * <span class="token keyword">@param</span> <span class="token parameter">beforeLength</span> 开始长度
     * <span class="token keyword">@param</span> <span class="token parameter">afterLength</span> 尾部长度，两者之间内容用符号替换
     * <span class="token keyword">@return</span> 处理后字符串
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">hideInfo</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">String</span> replaceSymbol<span class="token punctuation">,</span> <span class="token keyword">int</span> beforeLength<span class="token punctuation">,</span> <span class="token keyword">int</span> afterLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> str<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>replaceSymbol<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            replaceSymbol <span class="token operator">=</span> <span class="token string">"*"</span><span class="token punctuation">;</span>        <span class="token comment">// 替换字符串，默认使用“*”</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> maxIndex <span class="token operator">=</span> length <span class="token operator">-</span> afterLength<span class="token punctuation">;</span>
        <span class="token class-name">StringBuffer</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> beforeLength <span class="token operator">||</span> <span class="token punctuation">(</span>i <span class="token operator">>=</span> maxIndex <span class="token operator">&amp;&amp;</span> maxIndex<span class="token operator">></span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>replaceSymbol<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *
     * 方法描述 隐藏银行卡号中间的字符串（使用*号），显示前四后四
     *
     * <span class="token keyword">@param</span> <span class="token parameter">cardNo</span> 卡号
     * <span class="token keyword">@return</span> 处理后字符串
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">hideCardNo</span><span class="token punctuation">(</span><span class="token class-name">String</span> cardNo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">hideInfo</span><span class="token punctuation">(</span>cardNo<span class="token punctuation">,</span> <span class="token string">"*"</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *
     * 方法描述 隐藏手机号中间位置字符，显示前三后三个字符
     *
     * <span class="token keyword">@param</span> <span class="token parameter">phoneNo</span> 手机号码
     * <span class="token keyword">@return</span> 处理后字符串
     *
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">hidePhoneNo</span><span class="token punctuation">(</span><span class="token class-name">String</span> phoneNo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">hideInfo</span><span class="token punctuation">(</span>phoneNo<span class="token punctuation">,</span> <span class="token string">"*"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 隐藏名字
     * <span class="token keyword">@param</span> <span class="token parameter">name</span> 姓名
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">hideName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">hideInfo</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">"*"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">unescapeXml</span><span class="token punctuation">(</span><span class="token class-name">String</span> raw<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">StringEscapeUtils</span><span class="token punctuation">.</span><span class="token function">unescapeXml</span><span class="token punctuation">(</span>raw<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">escapeXml</span><span class="token punctuation">(</span><span class="token class-name">String</span> raw<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">StringEscapeUtils</span><span class="token punctuation">.</span><span class="token function">escapeXml</span><span class="token punctuation">(</span>raw<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


