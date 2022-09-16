<template><div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>bind<span class="token punctuation">.</span></span><span class="token class-name">JAXBContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>bind<span class="token punctuation">.</span></span><span class="token class-name">JAXBException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>bind<span class="token punctuation">.</span></span><span class="token class-name">Marshaller</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>xml<span class="token punctuation">.</span>bind<span class="token punctuation">.</span></span><span class="token class-name">Unmarshaller</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">StringReader</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">StringWriter</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JaxbXmlUtils</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">DEFAULT_ENCODING</span> <span class="token operator">=</span> <span class="token string">"UTF-8"</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * pojo转换成xml 默认编码UTF-8
     *
     * <span class="token keyword">@param</span> <span class="token parameter">obj</span> 待转化的对象
     * <span class="token keyword">@return</span> xml格式字符串
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span> JAXBException
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">convertToXml</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">convertToXml</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token constant">DEFAULT_ENCODING</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * pojo转换成xml
     *
     * <span class="token keyword">@param</span> <span class="token parameter">obj</span> 待转化的对象
     * <span class="token keyword">@param</span> <span class="token parameter">encoding</span> 编码
     * <span class="token keyword">@return</span> xml格式字符串
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span> JAXBException
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">convertToXml</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">,</span> <span class="token class-name">String</span> encoding<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token class-name">JAXBContext</span> context <span class="token operator">=</span> <span class="token class-name">JAXBContext</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Marshaller</span> marshaller <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">createMarshaller</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 指定是否使用换行和缩排对已编组 XML 数据进行格式化的属性名称。</span>
        marshaller<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token class-name">Marshaller</span><span class="token punctuation">.</span><span class="token constant">JAXB_FORMATTED_OUTPUT</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        marshaller<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token class-name">Marshaller</span><span class="token punctuation">.</span><span class="token constant">JAXB_ENCODING</span><span class="token punctuation">,</span> encoding<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">StringWriter</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        marshaller<span class="token punctuation">.</span><span class="token function">marshal</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> writer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        result <span class="token operator">=</span> writer<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * xml转换成JavaBean
     *
     * <span class="token keyword">@param</span> <span class="token parameter">xml</span> xml格式字符串
     * <span class="token keyword">@param</span> <span class="token parameter">t</span> 待转化的对象
     * <span class="token keyword">@return</span> 转化后的对象
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span> JAXBException
     */</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">T</span> <span class="token function">convertToJavaBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> xml<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> t<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">T</span> obj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">JAXBContext</span> context <span class="token operator">=</span> <span class="token class-name">JAXBContext</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Unmarshaller</span> unmarshaller <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">createUnmarshaller</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        obj <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> unmarshaller<span class="token punctuation">.</span><span class="token function">unmarshal</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringReader</span><span class="token punctuation">(</span>xml<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


