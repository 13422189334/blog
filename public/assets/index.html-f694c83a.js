const e=JSON.parse('{"key":"v-622fa8d3","path":"/FrontEnd/React/Hooks/","title":"浅谈12个Hooks","lang":"zh-CN","frontmatter":{"title":"浅谈12个Hooks","date":"2022-06-27T10:14:21.000Z","permalink":"/FrontEnd/React/Hooks/","author":"小杜杜 - 掘金","category":["React"],"tag":["React"],"description":"前言 React Hooks的发布已经有三年多了，它给函数式组件带来了生命周期，现如今，Hooks逐渐取代class组件，相信各位 React 开发的小伙伴已经深有体会，然而你真的完全掌握hooks了吗？知道如何去做一个好的自定义hooks吗？ 我们知道React Hooks有useState设置变量，useEffect副作用，useRef来获取元素的所有属性，还有useMemo、useCallback来做性能优化，当然还有一个自定义Hooks，来创造出你所想要的Hooks 接下来我们来看看以下几个问题，问问自己，是否全都知道： Hooks的由来是什么？ useRef的高级用法是什么？ useMemo 和 useCallback 是怎么做优化的？ 一个好的自定义Hooks该如何设计？ 如何做一个不需要useState就可以直接修改属性并刷新视图的自定义Hooks？ 如何做一个可以监听任何事件的自定义Hooks？ 如果你对以上问题有疑问，有好奇，那么这篇文章应该能够帮助到你～ 本文将会以介绍自定义Hooks来解答上述问题，并结合 TS，ahooks中的钩子，以案列的形式去演示 注：这里讲解的自定义钩子可能会和 ahooks上的略有不同，不会考虑过多的情况，如果用于项目，建议直接使用ahooks上的钩子～","head":[["meta",{"property":"og:url","content":"https://jin-shaohui.gitee.io/FrontEnd/React/Hooks/"}],["meta",{"property":"og:site_name","content":"繁华中自律，落魄中自愈"}],["meta",{"property":"og:title","content":"浅谈12个Hooks"}],["meta",{"property":"og:description","content":"前言 React Hooks的发布已经有三年多了，它给函数式组件带来了生命周期，现如今，Hooks逐渐取代class组件，相信各位 React 开发的小伙伴已经深有体会，然而你真的完全掌握hooks了吗？知道如何去做一个好的自定义hooks吗？ 我们知道React Hooks有useState设置变量，useEffect副作用，useRef来获取元素的所有属性，还有useMemo、useCallback来做性能优化，当然还有一个自定义Hooks，来创造出你所想要的Hooks 接下来我们来看看以下几个问题，问问自己，是否全都知道： Hooks的由来是什么？ useRef的高级用法是什么？ useMemo 和 useCallback 是怎么做优化的？ 一个好的自定义Hooks该如何设计？ 如何做一个不需要useState就可以直接修改属性并刷新视图的自定义Hooks？ 如何做一个可以监听任何事件的自定义Hooks？ 如果你对以上问题有疑问，有好奇，那么这篇文章应该能够帮助到你～ 本文将会以介绍自定义Hooks来解答上述问题，并结合 TS，ahooks中的钩子，以案列的形式去演示 注：这里讲解的自定义钩子可能会和 ahooks上的略有不同，不会考虑过多的情况，如果用于项目，建议直接使用ahooks上的钩子～"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-27T09:55:31.000Z"}],["meta",{"property":"article:author","content":"小杜杜 - 掘金"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:published_time","content":"2022-06-27T10:14:21.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-27T09:55:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"浅谈12个Hooks\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-27T10:14:21.000Z\\",\\"dateModified\\":\\"2023-02-27T09:55:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小杜杜 - 掘金\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"自定义Hooks是什么？","slug":"自定义hooks是什么","link":"#自定义hooks是什么","children":[{"level":3,"title":"如何设计一个自定义Hooks","slug":"如何设计一个自定义hooks","link":"#如何设计一个自定义hooks","children":[]},{"level":3,"title":"通用模式","slug":"通用模式","link":"#通用模式","children":[]},{"level":3,"title":"简单的小例子：usePow","slug":"简单的小例子-usepow","link":"#简单的小例子-usepow","children":[]}]},{"level":2,"title":"玩转React Hooks","slug":"玩转react-hooks","link":"#玩转react-hooks","children":[{"level":3,"title":"useMemo","slug":"usememo","link":"#usememo","children":[]},{"level":3,"title":"useCallback","slug":"usecallback","link":"#usecallback","children":[]},{"level":3,"title":"useRef","slug":"useref","link":"#useref","children":[{"level":4,"title":"通过useRef获取对应的属性值","slug":"通过useref获取对应的属性值","link":"#通过useref获取对应的属性值","children":[]},{"level":4,"title":"缓存数据","slug":"缓存数据","link":"#缓存数据","children":[]},{"level":4,"title":"useLatest","slug":"uselatest","link":"#uselatest","children":[]},{"level":4,"title":"结合useMemo和useRef封装useCreation","slug":"结合usememo和useref封装usecreation","link":"#结合usememo和useref封装usecreation","children":[]},{"level":4,"title":"验证 useCreation","slug":"验证-usecreation","link":"#验证-usecreation","children":[]}]},{"level":3,"title":"useEffect","slug":"useeffect","link":"#useeffect","children":[{"level":4,"title":"useMount","slug":"usemount","link":"#usemount","children":[]},{"level":4,"title":"useUnmount","slug":"useunmount","link":"#useunmount","children":[]},{"level":4,"title":"结合useMount和useUnmount做个小例子","slug":"结合usemount和useunmount做个小例子","link":"#结合usemount和useunmount做个小例子","children":[]},{"level":4,"title":"useUpdate","slug":"useupdate","link":"#useupdate","children":[]}]}]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[{"level":3,"title":"案例1: useReactive","slug":"案例1-usereactive","link":"#案例1-usereactive","children":[{"level":4,"title":"分析","slug":"分析","link":"#分析","children":[]},{"level":4,"title":"代码","slug":"代码","link":"#代码","children":[]},{"level":4,"title":"验证","slug":"验证","link":"#验证","children":[]}]},{"level":3,"title":"案例2: useEventListener","slug":"案例2-useeventlistener","link":"#案例2-useeventlistener","children":[{"level":4,"title":"代码","slug":"代码-1","link":"#代码-1","children":[]},{"level":4,"title":"优化","slug":"优化","link":"#优化","children":[]},{"level":4,"title":"详细代码","slug":"详细代码","link":"#详细代码","children":[]},{"level":4,"title":"验证","slug":"验证-1","link":"#验证-1","children":[]},{"level":4,"title":"小例子 useHover","slug":"小例子-usehover","link":"#小例子-usehover","children":[]}]},{"level":3,"title":"案例3: 有关时间的Hooks","slug":"案例3-有关时间的hooks","link":"#案例3-有关时间的hooks","children":[{"level":4,"title":"useTimeout","slug":"usetimeout","link":"#usetimeout","children":[]},{"level":4,"title":"useInterval","slug":"useinterval","link":"#useinterval","children":[]},{"level":4,"title":"useCountDown","slug":"usecountdown","link":"#usecountdown","children":[]}]}]}],"git":{"createdTime":1677491731000,"updatedTime":1677491731000,"contributors":[{"name":"shaohui_jin","email":"1051131737@qq.com","commits":1}]},"readingTime":{"minutes":22.04,"words":6613},"filePathRelative":"Knowledge/FrontEnd/React/Hooks.md","localizedDate":"2022年6月27日","excerpt":"<h2> 前言</h2>\\n<p><code>React Hooks</code>的发布已经有三年多了，它给函数式组件带来了<strong>生命周期</strong>，现如今，<code>Hooks</code>逐渐取代<code>class</code>组件，相信各位 <code>React</code> 开发的小伙伴已经深有体会，然而你真的完全掌握hooks了吗？知道如何去做一个好的自定义hooks吗？</p>\\n<p>我们知道<code>React Hooks</code>有<code>useState</code>设置变量，<code>useEffect</code>副作用，<code>useRef</code>来获取元素的所有属性，还有<code>useMemo</code>、<code>useCallback</code>来做性能优化，当然还有一个<code>自定义Hooks</code>，来创造出你所想要的<code>Hooks</code></p>\\n<p>接下来我们来看看以下几个问题，问问自己，是否全都知道：</p>\\n<ul>\\n<li>Hooks的由来是什么？</li>\\n<li><code>useRef</code>的高级用法是什么？</li>\\n<li><code>useMemo</code> 和 <code>useCallback</code> 是怎么做优化的？</li>\\n<li>一个好的自定义Hooks该如何设计？</li>\\n<li>如何做一个不需要<code>useState</code>就可以直接修改属性并刷新视图的自定义Hooks？</li>\\n<li>如何做一个可以监听任何事件的自定义Hooks？</li>\\n</ul>\\n<p>如果你对以上问题有疑问，有好奇，那么这篇文章应该能够帮助到你～</p>\\n<p>本文将会以介绍<strong>自定义Hooks</strong>来解答上述问题，并结合 <strong>TS</strong>，<strong>ahooks</strong>中的钩子，以案列的形式去演示</p>\\n<p>注：这里讲解的自定义钩子可能会和 <code>ahooks</code>上的略有不同，不会考虑过多的情况，如果用于项目，建议直接使用<code>ahooks</code>上的钩子～</p>\\n<p><img src=\\"/assets/knowledge/frontEnd/react/hooks/reactHooks.jpg\\" alt=\\"reactHooks\\"></p>\\n","copyright":{"author":"JSH","license":"MIT"},"autoDesc":true}');export{e as data};
