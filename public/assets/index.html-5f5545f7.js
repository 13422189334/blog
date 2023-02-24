import{_ as n,W as s,X as a,Y as t}from"./framework-9dd6340e.js";const e={},p=t(`<h2 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button
  @click=&quot;add&quot;
  v-click-outside:[capture]=&quot;reset&quot;
  v-click-outside:[capture].mousedown=&quot;reset&quot;
  v-click-outside:[capture].touchstart=&quot;reset&quot;
&gt;测试按钮&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指令源代码" tabindex="-1"><a class="header-anchor" href="#指令源代码" aria-hidden="true">#</a> 指令源代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">CLICK</span> <span class="token operator">=</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> captureInstances <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> nonCaptureInstances <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> instancesList <span class="token operator">=</span> <span class="token punctuation">[</span>captureInstances<span class="token punctuation">,</span> nonCaptureInstances<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * The common event handler for bot capture and non-capture events.
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>!Object<span class="token punctuation">}</span></span> <span class="token parameter">context</span> - The event context.
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>!Object<span class="token punctuation">}</span></span> <span class="token parameter">instances</span> - The capture or non-capture registered instances.
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Event<span class="token punctuation">}</span></span> <span class="token parameter">event</span> - The event object.
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">undefined</span><span class="token punctuation">}</span></span> Default.
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">commonHandler</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">_onCommonEvent</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> instances<span class="token punctuation">,</span> event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> target <span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">itemIteratee</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">_itemIteratee</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> el <span class="token punctuation">}</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>el <span class="token operator">!==</span> target <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>el<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> binding <span class="token punctuation">}</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>binding<span class="token punctuation">.</span>modifiers<span class="token punctuation">.</span>stop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>binding<span class="token punctuation">.</span>modifiers<span class="token punctuation">.</span>prevent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      binding<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">keysIteratee</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">_keysIteratee</span><span class="token punctuation">(</span><span class="token parameter">eventName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> instances<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>itemIteratee<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>instances<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>keysIteratee<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Event handler for capture events.
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Event<span class="token punctuation">}</span></span> <span class="token parameter">event</span> - The event object.
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">captureEventHandler</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">onCaptureEvent</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* eslint-disable-next-line babel/no-invalid-this */</span>
  <span class="token function">commonHandler</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> captureInstances<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Event handler for non-capture events.
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Event<span class="token punctuation">}</span></span> <span class="token parameter">event</span> - The event object.
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">nonCaptureEventHandler</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">onNonCaptureEvent</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* eslint-disable-next-line babel/no-invalid-this */</span>
  <span class="token function">commonHandler</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> nonCaptureInstances<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Get the correct event handler: Capture or non-capture.
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> <span class="token parameter">useCapture</span> - Indicate which handler to use; &#39;true&#39; to use
 *  capture handler or &#39;false&#39; for non-capture.
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> - The event handler.
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">getEventHandler</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">_getEventHandler</span><span class="token punctuation">(</span><span class="token parameter">useCapture</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> useCapture <span class="token operator">?</span> captureEventHandler <span class="token operator">:</span> nonCaptureEventHandler<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * The directive definition.
 * <span class="token punctuation">{</span><span class="token keyword">@link</span> https://vuejs.org/v2/guide/custom-directive.html|Custom directive<span class="token punctuation">}</span>
 *
 * <span class="token keyword">@namespace</span>
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>!Object<span class="token punctuation">}</span></span> <span class="token parameter">$_captureInstances</span> - Registered capture instances.
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>!Object<span class="token punctuation">}</span></span> <span class="token parameter">$_nonCaptureInstances</span> - Registered non-capture instances.
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">$_onCaptureEvent</span> - Event handler for capture events.
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">$_onNonCaptureEvent</span> - Event handler for non-capture events.
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">bind</span> - Called only once, when the directive is first
 *  bound to the element.
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">unbind</span> - Called only once, when the directive is unbound
 *  from the element.
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">version</span> - The version number of this release.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> directive <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">$_captureInstances</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> captureInstances<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">$_nonCaptureInstances</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> nonCaptureInstances<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">$_onCaptureEvent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> captureEventHandler<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">$_onNonCaptureEvent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> nonCaptureEventHandler<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 注意，这里的 arg 修改为 capture，这样可以动态设置，原先的事件作为 modifiers
     * */</span>
    <span class="token literal-property property">bind</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> binding<span class="token punctuation">.</span>value <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Binding value must be a function.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> eventType<span class="token punctuation">;</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> modifiers <span class="token punctuation">}</span> <span class="token operator">=</span> binding<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>modifiers<span class="token punctuation">.</span>click<span class="token punctuation">)</span> eventType <span class="token operator">=</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>modifiers<span class="token punctuation">.</span>mousedown<span class="token punctuation">)</span> eventType <span class="token operator">=</span> <span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>modifiers<span class="token punctuation">.</span>touchstart<span class="token punctuation">)</span> eventType <span class="token operator">=</span> <span class="token string">&#39;touchstart&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> eventType <span class="token operator">=</span> <span class="token constant">CLICK</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> useCapture <span class="token operator">=</span> binding<span class="token punctuation">.</span>arg<span class="token punctuation">;</span>

        <span class="token keyword">const</span> normalisedBinding <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span>binding<span class="token punctuation">,</span>
          <span class="token operator">...</span><span class="token punctuation">{</span>
            <span class="token literal-property property">modifiers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token operator">...</span><span class="token punctuation">{</span>
                <span class="token literal-property property">capture</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">prevent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">stop</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token operator">...</span>binding<span class="token punctuation">.</span>modifiers<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> instances <span class="token operator">=</span> useCapture <span class="token operator">?</span> captureInstances <span class="token operator">:</span> nonCaptureInstances<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>instances<span class="token punctuation">[</span>eventType<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          instances<span class="token punctuation">[</span>eventType<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>instances<span class="token punctuation">[</span>eventType<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> el<span class="token punctuation">,</span> <span class="token literal-property property">binding</span><span class="token operator">:</span> normalisedBinding <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> document <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> document<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
              eventType<span class="token punctuation">,</span>
              <span class="token function">getEventHandler</span><span class="token punctuation">(</span>useCapture<span class="token punctuation">)</span><span class="token punctuation">,</span>
              useCapture<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">unbind</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">unbind</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token function-variable function">compareElements</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">_compareElements</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> item<span class="token punctuation">.</span>el <span class="token operator">!==</span> el<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> <span class="token function-variable function">instancesIteratee</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">_instancesIteratee</span><span class="token punctuation">(</span><span class="token parameter">instances</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> instanceKeys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>instances<span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token keyword">if</span> <span class="token punctuation">(</span>instanceKeys<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> useCapture <span class="token operator">=</span> instances <span class="token operator">===</span> captureInstances<span class="token punctuation">;</span>

            <span class="token keyword">const</span> <span class="token function-variable function">keysIteratee</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">_keysIteratee</span><span class="token punctuation">(</span><span class="token parameter">eventName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">const</span> newInstance <span class="token operator">=</span> instances<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>compareElements<span class="token punctuation">)</span><span class="token punctuation">;</span>

              <span class="token keyword">if</span> <span class="token punctuation">(</span>newInstance<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                instances<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span> <span class="token operator">=</span> newInstance<span class="token punctuation">;</span>
              <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> document <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> document<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>
                    eventName<span class="token punctuation">,</span>
                    <span class="token function">getEventHandler</span><span class="token punctuation">(</span>useCapture<span class="token punctuation">)</span><span class="token punctuation">,</span>
                    useCapture<span class="token punctuation">,</span>
                  <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">delete</span> instances<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>

            instanceKeys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>keysIteratee<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        instancesList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>instancesIteratee<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">/* Note: This needs to be manually updated to match package.json. */</span>
    <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;3.7.1&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@typedef</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token class-name">Vue</span> - The constructor.
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">directive</span> - You can register a global custom directive
 *  with the Vue.directive() method, passing in a directiveID followed by a
 *  definition object.
 */</span>

<span class="token doc-comment comment">/**
 * A Vue.js plugin should expose an install method. The method will be called
 * with the Vue constructor as the first argument, along with possible options.
 * <span class="token punctuation">{</span><span class="token keyword">@link</span> https://vuejs.org/v2/guide/plugins.html#Writing-a-Plugin|Writing a plugin<span class="token punctuation">}</span>.
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Vue<span class="token punctuation">}</span></span> <span class="token parameter">Vue</span> - The Vue function.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;click-outside&#39;</span><span class="token punctuation">,</span> directive<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","index.html.vue"]]);export{r as default};
