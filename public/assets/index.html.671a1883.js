const e=JSON.parse('{"key":"v-eeb01270","path":"/React/Hooks/","title":"\u6D45\u8C0812\u4E2AHooks","lang":"zh-CN","frontmatter":{"title":"\u6D45\u8C0812\u4E2AHooks","date":"2022-06-27T10:14:21.000Z","permalink":"/React/Hooks/","author":"\u5C0F\u675C\u675C - \u6398\u91D1","category":["React"],"tag":["React"],"summary":"# \u524D\u8A00\\nReact Hooks\u7684\u53D1\u5E03\u5DF2\u7ECF\u6709\u4E09\u5E74\u591A\u4E86\uFF0C\u5B83\u7ED9\u51FD\u6570\u5F0F\u7EC4\u4EF6\u5E26\u6765\u4E86\u751F\u547D\u5468\u671F\uFF0C\u73B0\u5982\u4ECA\uFF0CHooks\u9010\u6E10\u53D6\u4EE3class\u7EC4\u4EF6\uFF0C\u76F8\u4FE1\u5404\u4F4D React \u5F00\u53D1\u7684\u5C0F\u4F19\u4F34\u5DF2\u7ECF\u6DF1\u6709\u4F53\u4F1A\uFF0C\u7136\u800C\u4F60\u771F\u7684\u5B8C\u5168\u638C\u63E1hooks\u4E86\u5417\uFF1F\u77E5\u9053\u5982\u4F55\u53BB\u505A\u4E00\u4E2A\u597D\u7684\u81EA\u5B9A\u4E49hooks\u5417\uFF1F\\n\u6211\u4EEC\u77E5\u9053React Hooks\u6709useState\u8BBE\u7F6E\u53D8\u91CF\uFF0CuseEffect\u526F\u4F5C\u7528\uFF0CuseRef\u6765\u83B7\u53D6\u5143\u7D20\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u8FD8\u6709useMemo\u3001useCallback\u6765\u505A\u6027\u80FD\u4F18\u5316\uFF0C\u5F53\u7136\u8FD8\u6709\u4E00\u4E2A\u81EA\u5B9A\u4E49Hooks\uFF0C\u6765\u521B\u9020\u51FA\u4F60\u6240\u60F3\u8981\u7684Hooks\\n\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u770B\u770B\u4EE5\u4E0B\u51E0\u4E2A\u95EE\u9898\uFF0C\u95EE\u95EE\u81EA\u5DF1\uFF0C\u662F\u5426\u5168\u90FD\u77E5\u9053\uFF1A\\n\\nHooks\u7684\u7531\u6765\u662F\u4EC0\u4E48\uFF1F\\nuseRef\u7684\u9AD8\u7EA7\u7528\u6CD5\u662F\u4EC0\u4E48\uFF1F\\nuseMemo \u548C useCallback \u662F\u600E\u4E48\u505A\u4F18\u5316\u7684\uFF1F\\n\u4E00\u4E2A\u597D\u7684\u81EA\u5B9A\u4E49Hooks\u8BE5\u5982\u4F55\u8BBE\u8BA1\uFF1F\\n\u5982\u4F55\u505A\u4E00\u4E2A\u4E0D\u9700\u8981useState\u5C31\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u5C5E\u6027\u5E76\u5237\u65B0\u89C6\u56FE\u7684\u81EA\u5B9A\u4E49Hooks\uFF1F\\n\u5982\u4F55\u505A\u4E00\u4E2A\u53EF\u4EE5\u76D1\u542C\u4EFB\u4F55\u4E8B\u4EF6\u7684\u81EA\u5B9A\u4E49Hooks\uFF1F\\n\\n\u5982\u679C\u4F60\u5BF9\u4EE5\u4E0A\u95EE\u9898\u6709\u7591\u95EE\uFF0C\u6709\u597D\u5947\uFF0C\u90A3\u4E48\u8FD9\u7BC7\u6587\u7AE0\u5E94\u8BE5\u80FD\u591F\u5E2E\u52A9\u5230\u4F60\uFF5E\\n\u672C\u6587\u5C06\u4F1A\u4EE5\u4ECB\u7ECD\u81EA\u5B9A\u4E49Hooks\u6765\u89E3\u7B54\u4E0A\u8FF0\u95EE\u9898\uFF0C\u5E76\u7ED3\u5408 TS\uFF0Cahooks\u4E2D\u7684\u94A9\u5B50\uFF0C\u4EE5\u6848\u5217\u7684\u5F62\u5F0F\u53BB\u6F14\u793A\\n\u6CE8\uFF1A\u8FD9\u91CC\u8BB2\u89E3\u7684\u81EA\u5B9A\u4E49\u94A9\u5B50\u53EF\u80FD\u4F1A\u548C ahooks\u4E0A\u7684\u7565\u6709\u4E0D\u540C\uFF0C\u4E0D\u4F1A\u8003\u8651\u8FC7\u591A\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u7528\u4E8E\u9879\u76EE\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528ahooks\u4E0A\u7684\u94A9\u5B50\uFF5E\\n\\n","head":[["meta",{"property":"og:url","content":"https://jin-shaohui.gitee.io/React/Hooks/"}],["meta",{"property":"og:site_name","content":"\u7E41\u534E\u4E2D\u81EA\u5F8B\uFF0C\u843D\u9B44\u4E2D\u81EA\u6108"}],["meta",{"property":"og:title","content":"\u6D45\u8C0812\u4E2AHooks"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-16T15:10:28.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"\u5C0F\u675C\u675C - \u6398\u91D1"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:published_time","content":"2022-06-27T10:14:21.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-16T15:10:28.000Z"}]]},"excerpt":"<h2 id=\\"\u524D\u8A00\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#\u524D\u8A00\\" aria-hidden=\\"true\\">#</a> \u524D\u8A00</h2>\\n<p><code v-pre>React Hooks</code>\u7684\u53D1\u5E03\u5DF2\u7ECF\u6709\u4E09\u5E74\u591A\u4E86\uFF0C\u5B83\u7ED9\u51FD\u6570\u5F0F\u7EC4\u4EF6\u5E26\u6765\u4E86<strong>\u751F\u547D\u5468\u671F</strong>\uFF0C\u73B0\u5982\u4ECA\uFF0C<code v-pre>Hooks</code>\u9010\u6E10\u53D6\u4EE3<code v-pre>class</code>\u7EC4\u4EF6\uFF0C\u76F8\u4FE1\u5404\u4F4D <code v-pre>React</code> \u5F00\u53D1\u7684\u5C0F\u4F19\u4F34\u5DF2\u7ECF\u6DF1\u6709\u4F53\u4F1A\uFF0C\u7136\u800C\u4F60\u771F\u7684\u5B8C\u5168\u638C\u63E1hooks\u4E86\u5417\uFF1F\u77E5\u9053\u5982\u4F55\u53BB\u505A\u4E00\u4E2A\u597D\u7684\u81EA\u5B9A\u4E49hooks\u5417\uFF1F</p>\\n<p>\u6211\u4EEC\u77E5\u9053<code v-pre>React Hooks</code>\u6709<code v-pre>useState</code>\u8BBE\u7F6E\u53D8\u91CF\uFF0C<code v-pre>useEffect</code>\u526F\u4F5C\u7528\uFF0C<code v-pre>useRef</code>\u6765\u83B7\u53D6\u5143\u7D20\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u8FD8\u6709<code v-pre>useMemo</code>\u3001<code v-pre>useCallback</code>\u6765\u505A\u6027\u80FD\u4F18\u5316\uFF0C\u5F53\u7136\u8FD8\u6709\u4E00\u4E2A<code v-pre>\u81EA\u5B9A\u4E49Hooks</code>\uFF0C\u6765\u521B\u9020\u51FA\u4F60\u6240\u60F3\u8981\u7684<code v-pre>Hooks</code></p>\\n<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u770B\u770B\u4EE5\u4E0B\u51E0\u4E2A\u95EE\u9898\uFF0C\u95EE\u95EE\u81EA\u5DF1\uFF0C\u662F\u5426\u5168\u90FD\u77E5\u9053\uFF1A</p>\\n<ul>\\n<li>Hooks\u7684\u7531\u6765\u662F\u4EC0\u4E48\uFF1F</li>\\n<li><code v-pre>useRef</code>\u7684\u9AD8\u7EA7\u7528\u6CD5\u662F\u4EC0\u4E48\uFF1F</li>\\n<li><code v-pre>useMemo</code> \u548C <code v-pre>useCallback</code> \u662F\u600E\u4E48\u505A\u4F18\u5316\u7684\uFF1F</li>\\n<li>\u4E00\u4E2A\u597D\u7684\u81EA\u5B9A\u4E49Hooks\u8BE5\u5982\u4F55\u8BBE\u8BA1\uFF1F</li>\\n<li>\u5982\u4F55\u505A\u4E00\u4E2A\u4E0D\u9700\u8981<code v-pre>useState</code>\u5C31\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u5C5E\u6027\u5E76\u5237\u65B0\u89C6\u56FE\u7684\u81EA\u5B9A\u4E49Hooks\uFF1F</li>\\n<li>\u5982\u4F55\u505A\u4E00\u4E2A\u53EF\u4EE5\u76D1\u542C\u4EFB\u4F55\u4E8B\u4EF6\u7684\u81EA\u5B9A\u4E49Hooks\uFF1F</li>\\n</ul>\\n<p>\u5982\u679C\u4F60\u5BF9\u4EE5\u4E0A\u95EE\u9898\u6709\u7591\u95EE\uFF0C\u6709\u597D\u5947\uFF0C\u90A3\u4E48\u8FD9\u7BC7\u6587\u7AE0\u5E94\u8BE5\u80FD\u591F\u5E2E\u52A9\u5230\u4F60\uFF5E</p>\\n<p>\u672C\u6587\u5C06\u4F1A\u4EE5\u4ECB\u7ECD<strong>\u81EA\u5B9A\u4E49Hooks</strong>\u6765\u89E3\u7B54\u4E0A\u8FF0\u95EE\u9898\uFF0C\u5E76\u7ED3\u5408 <strong>TS</strong>\uFF0C<strong>ahooks</strong>\u4E2D\u7684\u94A9\u5B50\uFF0C\u4EE5\u6848\u5217\u7684\u5F62\u5F0F\u53BB\u6F14\u793A</p>\\n<p>\u6CE8\uFF1A\u8FD9\u91CC\u8BB2\u89E3\u7684\u81EA\u5B9A\u4E49\u94A9\u5B50\u53EF\u80FD\u4F1A\u548C <code v-pre>ahooks</code>\u4E0A\u7684\u7565\u6709\u4E0D\u540C\uFF0C\u4E0D\u4F1A\u8003\u8651\u8FC7\u591A\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u7528\u4E8E\u9879\u76EE\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528<code v-pre>ahooks</code>\u4E0A\u7684\u94A9\u5B50\uFF5E</p>\\n<p><img src=\\"/assets/knowledge/frontEnd/react/hooks/reactHooks.jpg\\" alt=\\"reactHooks\\"></p>\\n","headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00","link":"#\u524D\u8A00","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49Hooks\u662F\u4EC0\u4E48\uFF1F","slug":"\u81EA\u5B9A\u4E49hooks\u662F\u4EC0\u4E48","link":"#\u81EA\u5B9A\u4E49hooks\u662F\u4EC0\u4E48","children":[{"level":3,"title":"\u5982\u4F55\u8BBE\u8BA1\u4E00\u4E2A\u81EA\u5B9A\u4E49Hooks","slug":"\u5982\u4F55\u8BBE\u8BA1\u4E00\u4E2A\u81EA\u5B9A\u4E49hooks","link":"#\u5982\u4F55\u8BBE\u8BA1\u4E00\u4E2A\u81EA\u5B9A\u4E49hooks","children":[]},{"level":3,"title":"\u901A\u7528\u6A21\u5F0F","slug":"\u901A\u7528\u6A21\u5F0F","link":"#\u901A\u7528\u6A21\u5F0F","children":[]},{"level":3,"title":"\u7B80\u5355\u7684\u5C0F\u4F8B\u5B50\uFF1AusePow","slug":"\u7B80\u5355\u7684\u5C0F\u4F8B\u5B50-usepow","link":"#\u7B80\u5355\u7684\u5C0F\u4F8B\u5B50-usepow","children":[]}]},{"level":2,"title":"\u73A9\u8F6CReact Hooks","slug":"\u73A9\u8F6Creact-hooks","link":"#\u73A9\u8F6Creact-hooks","children":[{"level":3,"title":"useMemo","slug":"usememo","link":"#usememo","children":[]},{"level":3,"title":"useCallback","slug":"usecallback","link":"#usecallback","children":[]},{"level":3,"title":"useRef","slug":"useref","link":"#useref","children":[]},{"level":3,"title":"useEffect","slug":"useeffect","link":"#useeffect","children":[]}]},{"level":2,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B","link":"#\u6848\u4F8B","children":[{"level":3,"title":"\u6848\u4F8B1: useReactive","slug":"\u6848\u4F8B1-usereactive","link":"#\u6848\u4F8B1-usereactive","children":[]},{"level":3,"title":"\u6848\u4F8B2: useEventListener","slug":"\u6848\u4F8B2-useeventlistener","link":"#\u6848\u4F8B2-useeventlistener","children":[]},{"level":3,"title":"\u6848\u4F8B3: \u6709\u5173\u65F6\u95F4\u7684Hooks","slug":"\u6848\u4F8B3-\u6709\u5173\u65F6\u95F4\u7684hooks","link":"#\u6848\u4F8B3-\u6709\u5173\u65F6\u95F4\u7684hooks","children":[]}]}],"git":{"createdTime":1658475691000,"updatedTime":1663341028000,"contributors":[{"name":"\u9773\u5C11\u8F89","email":"1051131737@qq.com","commits":3}]},"readingTime":{"minutes":22.04,"words":6612},"copyright":"\u8457\u4F5C\u6743\u5F52JSH\u6240\u6709\\n\u57FA\u4E8EMIT\u534F\u8BAE\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://jin-shaohui.gitee.io/React/Hooks/","filePathRelative":"Knowledge/FrontEnd/React/Hooks/index.md","localizedDate":"2022\u5E746\u670827\u65E5"}');export{e as data};
