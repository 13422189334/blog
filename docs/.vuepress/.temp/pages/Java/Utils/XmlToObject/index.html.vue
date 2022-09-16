<template><div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">io<span class="token punctuation">.</span>easy<span class="token punctuation">.</span>common<span class="token punctuation">.</span>utils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>thoughtworks<span class="token punctuation">.</span>xstream<span class="token punctuation">.</span></span><span class="token class-name">XStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>thoughtworks<span class="token punctuation">.</span>xstream<span class="token punctuation">.</span>io<span class="token punctuation">.</span>xml<span class="token punctuation">.</span></span><span class="token class-name">DomDriver</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>thoughtworks<span class="token punctuation">.</span>xstream<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">MapperWrapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>thoughtworks<span class="token punctuation">.</span>xstream<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span><span class="token class-name">AnyTypePermission</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Description XStream实现xml和对象互相转换的工具
 * @ClassName XmlUtils
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XStreamXmlUtils</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">XML_TAG</span> <span class="token operator">=</span> <span class="token string">"&lt;?xml version='1.0' encoding='UTF-8'?>"</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Description: 私有化构造
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">XStreamXmlUtils</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * @Description 为每次调用生成一个XStream
     * @Title getInstance
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">XStream</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">XStream</span> xStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DomDriver</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token doc-comment comment">/**
             * 忽略xml中多余字段
             */</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">protected</span> <span class="token class-name">MapperWrapper</span> <span class="token function">wrapMapper</span><span class="token punctuation">(</span><span class="token class-name">MapperWrapper</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MapperWrapper</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"rawtypes"</span><span class="token punctuation">)</span>
                    <span class="token annotation punctuation">@Override</span>
                    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">shouldSerializeMember</span><span class="token punctuation">(</span><span class="token class-name">Class</span> definedIn<span class="token punctuation">,</span> <span class="token class-name">String</span> fieldName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>definedIn <span class="token operator">==</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">shouldSerializeMember</span><span class="token punctuation">(</span>definedIn<span class="token punctuation">,</span> fieldName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">// 设置默认的安全校验</span>
        <span class="token class-name">XStream</span><span class="token punctuation">.</span><span class="token function">setupDefaultSecurity</span><span class="token punctuation">(</span>xStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 使用本地的类加载器</span>
        xStream<span class="token punctuation">.</span><span class="token function">setClassLoader</span><span class="token punctuation">(</span><span class="token class-name">XStreamXmlUtils</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 允许所有的类进行转换</span>
        xStream<span class="token punctuation">.</span><span class="token function">addPermission</span><span class="token punctuation">(</span><span class="token class-name">AnyTypePermission</span><span class="token punctuation">.</span><span class="token constant">ANY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> xStream<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * @Description 将xml字符串转化为java对象
     * @Title xmlToBean
     * <span class="token keyword">@param</span> <span class="token parameter">xml</span>
     * <span class="token keyword">@param</span> <span class="token parameter">clazz</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">T</span> <span class="token function">xmlToBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> xml<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">XStream</span> xStream <span class="token operator">=</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xStream<span class="token punctuation">.</span><span class="token function">processAnnotations</span><span class="token punctuation">(</span>clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> object <span class="token operator">=</span> xStream<span class="token punctuation">.</span><span class="token function">fromXML</span><span class="token punctuation">(</span>xml<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">T</span> cast <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">cast</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> cast<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * @Description 将java对象转化为xml字符串
     * @Title beanToXml
     * <span class="token keyword">@param</span> <span class="token parameter">object</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">beanToXml</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">XStream</span> xStream <span class="token operator">=</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xStream<span class="token punctuation">.</span><span class="token function">processAnnotations</span><span class="token punctuation">(</span>object<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 剔除所有tab、制表符、换行符</span>
        <span class="token class-name">String</span> xml <span class="token operator">=</span> xStream<span class="token punctuation">.</span><span class="token function">toXML</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">"\\s+"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> xml<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * @Description 将java对象转化为xml字符串（包含xml头部信息）
     * @Title beanToXml
     * <span class="token keyword">@param</span> <span class="token parameter">object</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">beanToXmlWithTag</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> xml <span class="token operator">=</span> <span class="token constant">XML_TAG</span> <span class="token operator">+</span> <span class="token function">beanToXml</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> xml<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


