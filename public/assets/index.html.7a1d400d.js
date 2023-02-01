import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,b as s}from"./app.e0b07838.js";const d={},o=s(`<div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u5F02\u6B65\u7EC4\u4EF6\u53EF\u4EE5\u8BA9\u6211\u4EEC\u5728\u9700\u8981\u4E00\u4E9B\u7EC4\u4EF6\u65F6\u624D\u5C06\u5B83\u52A0\u8F7D\u8FDB\u6765\uFF0C\u800C\u4E0D\u662F\u4E00\u521D\u59CB\u5316\u5C31\u52A0\u8F7D\u8FDB\u6765\uFF0C\u8FD9\u8DDF\u8DEF\u7531\u61D2\u52A0\u8F7D\u662F\u4E00\u4E2A\u6982\u5FF5\u3002</p></div><p>\u4EE5\u524D\u662F\u8FD9\u4E48\u5F15\u5165\u7EC4\u4EF6\u7684</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>import BureauDetail from &#39;./components/ChildFirst&#39;
import addBureau from &#39;./components/ChildSecond&#39;

//\u5728vue\u7684comoinents\u4E2D
components: {
  ChildFirst,
  ChildSecond 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4E0D\u662F\u4E00\u5F00\u59CB\u5C31\u8981\u52A0\u8F7D\u7684\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u7EC4\u4EF6\u61D2\u52A0\u8F7D</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>//\u5728vue\u7684comoinents\u4E2D
components: {
  BureauDetail: () =&gt; import(&#39;./components/ChildFirst&#39;),
  addBureau: () =&gt; import(&#39;./components/ChildSecond&#39;)
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F02\u6B65\u7EC4\u4EF6\u8FD8\u6709\u4E00\u79CD\u6BD4\u8F83\u5B8C\u5584\u7684\u5199\u6CD5</p><p>export default { components:{ ChildFirst:()=&gt;({ component:import(/* webpackChunkName: &quot;ChildFirst&quot; */ &#39;./Async&#39;), delay:200, // \u5EF6\u8FDF\u51E0\u6BEB\u79D2\uFF0C\u9ED8\u8BA4200 timeout:3000, // \u52A0\u8F7D\u51E0\u6BEB\u7C73\u4E4B\u540E\u5C31\u8D85\u65F6\uFF0C\u89E6\u53D1error\u7EC4\u4EF6 loading:LoadingComponent, // \u7EC4\u4EF6\u672A\u52A0\u8F7D\u56DE\u6765\u524D\u663E\u793A error:ErrorComponent // \u7EC4\u4EF6\u8D85\u65F6\u65F6\u663E\u793A }) } }</p>`,7),r=[o];function l(t,a){return n(),i("div",null,r)}const m=e(d,[["render",l],["__file","index.html.vue"]]);export{m as default};
