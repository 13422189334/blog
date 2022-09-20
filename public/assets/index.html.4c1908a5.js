import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,b as t}from"./app.d2d9f17b.js";const p={},e=t(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">io<span class="token punctuation">.</span>easy<span class="token punctuation">.</span>common<span class="token punctuation">.</span>utils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>thoughtworks<span class="token punctuation">.</span>xstream<span class="token punctuation">.</span></span><span class="token class-name">XStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>thoughtworks<span class="token punctuation">.</span>xstream<span class="token punctuation">.</span>io<span class="token punctuation">.</span>xml<span class="token punctuation">.</span></span><span class="token class-name">DomDriver</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>thoughtworks<span class="token punctuation">.</span>xstream<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">MapperWrapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>thoughtworks<span class="token punctuation">.</span>xstream<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span><span class="token class-name">AnyTypePermission</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Description XStream\u5B9E\u73B0xml\u548C\u5BF9\u8C61\u4E92\u76F8\u8F6C\u6362\u7684\u5DE5\u5177
 * @ClassName XmlUtils
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XStreamXmlUtils</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">XML_TAG</span> <span class="token operator">=</span> <span class="token string">&quot;&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Description: \u79C1\u6709\u5316\u6784\u9020
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">XStreamXmlUtils</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * @Description \u4E3A\u6BCF\u6B21\u8C03\u7528\u751F\u6210\u4E00\u4E2AXStream
     * @Title getInstance
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">XStream</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">XStream</span> xStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DomDriver</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token doc-comment comment">/**
             * \u5FFD\u7565xml\u4E2D\u591A\u4F59\u5B57\u6BB5
             */</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">protected</span> <span class="token class-name">MapperWrapper</span> <span class="token function">wrapMapper</span><span class="token punctuation">(</span><span class="token class-name">MapperWrapper</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MapperWrapper</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;rawtypes&quot;</span><span class="token punctuation">)</span>
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

        <span class="token comment">// \u8BBE\u7F6E\u9ED8\u8BA4\u7684\u5B89\u5168\u6821\u9A8C</span>
        <span class="token class-name">XStream</span><span class="token punctuation">.</span><span class="token function">setupDefaultSecurity</span><span class="token punctuation">(</span>xStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u4F7F\u7528\u672C\u5730\u7684\u7C7B\u52A0\u8F7D\u5668</span>
        xStream<span class="token punctuation">.</span><span class="token function">setClassLoader</span><span class="token punctuation">(</span><span class="token class-name">XStreamXmlUtils</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5141\u8BB8\u6240\u6709\u7684\u7C7B\u8FDB\u884C\u8F6C\u6362</span>
        xStream<span class="token punctuation">.</span><span class="token function">addPermission</span><span class="token punctuation">(</span><span class="token class-name">AnyTypePermission</span><span class="token punctuation">.</span><span class="token constant">ANY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> xStream<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * @Description \u5C06xml\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3Ajava\u5BF9\u8C61
     * @Title xmlToBean
     * <span class="token keyword">@param</span> <span class="token parameter">xml</span>
     * <span class="token keyword">@param</span> <span class="token parameter">clazz</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">xmlToBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> xml<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">XStream</span> xStream <span class="token operator">=</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xStream<span class="token punctuation">.</span><span class="token function">processAnnotations</span><span class="token punctuation">(</span>clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> object <span class="token operator">=</span> xStream<span class="token punctuation">.</span><span class="token function">fromXML</span><span class="token punctuation">(</span>xml<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">T</span> cast <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">cast</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> cast<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * @Description \u5C06java\u5BF9\u8C61\u8F6C\u5316\u4E3Axml\u5B57\u7B26\u4E32
     * @Title beanToXml
     * <span class="token keyword">@param</span> <span class="token parameter">object</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">beanToXml</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">XStream</span> xStream <span class="token operator">=</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xStream<span class="token punctuation">.</span><span class="token function">processAnnotations</span><span class="token punctuation">(</span>object<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5254\u9664\u6240\u6709tab\u3001\u5236\u8868\u7B26\u3001\u6362\u884C\u7B26</span>
        <span class="token class-name">String</span> xml <span class="token operator">=</span> xStream<span class="token punctuation">.</span><span class="token function">toXML</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\s+&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> xml<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * @Description \u5C06java\u5BF9\u8C61\u8F6C\u5316\u4E3Axml\u5B57\u7B26\u4E32\uFF08\u5305\u542Bxml\u5934\u90E8\u4FE1\u606F\uFF09
     * @Title beanToXml
     * <span class="token keyword">@param</span> <span class="token parameter">object</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">beanToXmlWithTag</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> xml <span class="token operator">=</span> <span class="token constant">XML_TAG</span> <span class="token operator">+</span> <span class="token function">beanToXml</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> xml<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","index.html.vue"]]);export{r as default};
