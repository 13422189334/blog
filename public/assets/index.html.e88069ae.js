import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,b as i}from"./app.a9ce305a.js";const a={},l=i(`<div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>vue 2.0\u7248\u672C\u4F1A\u901A\u8FC7 <code>Object.defineProperty</code> \u5BF9\u6570\u636E\u8FDB\u884C\u52AB\u6301\uFF0C\u9047\u5230\u6570\u7EC4\u548C\u5BF9\u8C61\u5FC5\u987B\u5FAA\u73AF\u904D\u5386\u6240\u6709\u7684\u57DF\u503C\u624D\u80FD\u52AB\u6301\u6BCF\u4E00\u4E2A\u5C5E\u6027\u3002</p><p>vue 3.0\u7248\u672C\u4F1A\u901A\u8FC7 <code>Proxy</code> \u6784\u9020\u51FD\u6570\u6765\u8FDB\u884C\u6570\u636E\u52AB\u6301\uFF0C\u6765\u5B9E\u73B0\u89C6\u56FE\u54CD\u5E94\u6570\u636E\u7684\u53D8\u5316</p></div><p>\u7136\u800C\u6709\u4E9B\u65F6\u5019\u6211\u4EEC\u7684\u7EC4\u4EF6\u5C31\u662F\u7EAF\u7CB9\u7684\u6570\u636E\u5C55\u793A\uFF0C\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6539\u53D8\uFF0C\u6211\u4EEC\u5C31\u4E0D\u9700\u8981 vue \u6765\u52AB\u6301\u6211\u4EEC\u7684\u6570\u636E\uFF0C\u5728\u5927\u91CF\u6570\u636E\u5C55\u793A\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u80FD\u591F\u5F88\u660E\u663E\u7684\u51CF\u5C11\u7EC4\u4EF6\u521D\u59CB\u5316\u7684\u65F6\u95F4\u3002</p><p>\u6240\u4EE5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <code>Object.freeze</code> \u65B9\u6CD5\u6765\u51BB\u7ED3\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u4E00\u65E6\u88AB\u51BB\u7ED3\uFF0Cvue\u5C31\u4E0D\u4F1A\u5BF9\u6570\u636E\u8FDB\u884C\u52AB\u6301\u4E86\u3002</p><p><code>Object.freeze()</code> \u53EF\u4EE5\u51BB\u7ED3\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u51BB\u7ED3\u4E4B\u540E\u4E0D\u80FD\u5411\u8FD9\u4E2A\u5BF9\u8C61\u6DFB\u52A0\u65B0\u7684\u5C5E\u6027\uFF0C\u4E0D\u80FD\u4FEE\u6539\u5176\u5DF2\u6709\u5C5E\u6027\u7684\u503C\uFF0C\u4E0D\u80FD\u5220\u9664\u5DF2\u6709\u5C5E\u6027\uFF0C\u4EE5\u53CA\u4E0D\u80FD\u4FEE\u6539\u8BE5\u5BF9\u8C61\u5DF2\u6709\u5C5E\u6027\u7684\u53EF\u679A\u4E3E\u6027\u3001\u53EF\u914D\u7F6E\u6027\u3001\u53EF\u5199\u6027\u3002\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u88AB\u51BB\u7ED3\u7684\u5BF9\u8C61\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item.value }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

export default {
  data: {
    // vue\u4E0D\u4F1A\u5BF9list\u91CC\u7684object\u505Agetter\u3001setter\u7ED1\u5B9A
    list: Object.freeze([
        { value: 1 },
        { value: 2 }
    ])
  },
  created () {
    // \u754C\u9762\u4E0D\u4F1A\u6709\u54CD\u5E94
    this.list[0].value = 100;

    // \u4E0B\u9762\u4E24\u79CD\u505A\u6CD5\uFF0C\u754C\u9762\u90FD\u4F1A\u54CD\u5E94
    this.list = [
        { value: 100 },
        { value: 200 }
    ];
    this.list = Object.freeze([
        { value: 100 },
        { value: 200 }
    ]);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[l];function c(d,v){return n(),s("div",null,t)}const o=e(a,[["render",c],["__file","index.html.vue"]]);export{o as default};
