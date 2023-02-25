const t=JSON.parse('{"key":"v-6f973d31","path":"/Vue/Skill/Slot/","title":"插槽","lang":"zh-CN","frontmatter":{"title":"插槽","date":"2023-02-23T09:59:47.000Z","permalink":"/Vue/Skill/Slot/","category":["VUE"],"tag":["SKILL"],"description":"默认内容和扩展点 Vue中的槽可以有默认的内容，这使我们可以制作出更容易使用的组件。 &lt;template&gt; &lt;button class=\\"button\\" @click=\\"$emit(\'click\')\\"&gt; &lt;slot&gt; &lt;!-- Used if no slot is provided --&gt; Click me &lt;/slot&gt; &lt;/button&gt; &lt;/template&gt;","head":[["meta",{"property":"og:url","content":"https://jin-shaohui.gitee.io/Vue/Skill/Slot/"}],["meta",{"property":"og:site_name","content":"繁华中自律，落魄中自愈"}],["meta",{"property":"og:title","content":"插槽"}],["meta",{"property":"og:description","content":"默认内容和扩展点 Vue中的槽可以有默认的内容，这使我们可以制作出更容易使用的组件。 &lt;template&gt; &lt;button class=\\"button\\" @click=\\"$emit(\'click\')\\"&gt; &lt;slot&gt; &lt;!-- Used if no slot is provided --&gt; Click me &lt;/slot&gt; &lt;/button&gt; &lt;/template&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-23T09:45:52.000Z"}],["meta",{"property":"article:tag","content":"SKILL"}],["meta",{"property":"article:published_time","content":"2023-02-23T09:59:47.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-23T09:45:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"插槽\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-23T09:59:47.000Z\\",\\"dateModified\\":\\"2023-02-23T09:45:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"默认内容和扩展点","slug":"默认内容和扩展点","link":"#默认内容和扩展点","children":[]},{"level":3,"title":"单个作用域插槽的简写(不需要 template 标签)","slug":"单个作用域插槽的简写-不需要-template-标签","link":"#单个作用域插槽的简写-不需要-template-标签","children":[]},{"level":3,"title":"有条件地渲染插槽","slug":"有条件地渲染插槽","link":"#有条件地渲染插槽","children":[]},{"level":3,"title":"如何监听一个插槽的变化","slug":"如何监听一个插槽的变化","link":"#如何监听一个插槽的变化","children":[]}],"git":{"createdTime":1677145552000,"updatedTime":1677145552000,"contributors":[{"name":"shaohui_jin","email":"1051131737@qq.com","commits":1}]},"readingTime":{"minutes":3.56,"words":1069},"filePathRelative":"Knowledge/FrontEnd/Vue/Skill-Slot.md","localizedDate":"2023年2月23日","excerpt":"<h3> 默认内容和扩展点</h3>\\n<p>Vue中的<code>槽</code>可以有默认的内容，这使我们可以制作出更容易使用的组件。</p>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>button<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">@click</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>$emit(\'click\')<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>slot</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token comment\\">&lt;!-- Used if no slot is provided --&gt;</span>\\n      Click me\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>slot</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"JSH","license":"MIT"},"autoDesc":true}');export{t as data};
