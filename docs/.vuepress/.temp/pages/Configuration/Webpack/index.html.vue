<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p><code v-pre>Webpack</code>在前端构建工具中可以堪称中流砥柱般的存在，日常业务开发、前端基建工具、高级前端面试...任何场景都会出现它的身影。</p>
<p>也许对于它的内部实现机制，我们也许会感到疑惑，日常工作中基于<code v-pre>Webpack Plugin/Loader</code>之类查阅<code v-pre>API</code>仍然不明白各个参数的含义和应用方式。其实这一切原因本质上都是基于<code v-pre>Webpack</code>工作流没有一个清晰的认知导致了所谓的“面对<code v-pre>API</code>无从下手”开发。</p>
<p>下面，我们会从如何实现 <strong>模块分析项目打包</strong> 的角度出发，使用 <strong>最通俗，最简洁，最明了</strong> 的代码带你揭开<code v-pre>Webpack</code>背后的神秘面纱，带你实现一个简易版<code v-pre>Webpack</code>，从此对于任何<code v-pre>webpack</code>相关底层开发了然于胸。用最通俗易懂的代码带你走进<code v-pre>webpack</code>的工作流。</p>
<blockquote>
<p>可以根据 <a href="https://gitee.com/jin-shaohui/webpack-demo" target="_blank" rel="noopener noreferrer">代码<ExternalLinkIcon/></a> 一边看一边尝试</p>
</blockquote>
<!-- more -->
<h2 id="前置知识" tabindex="-1"><a class="header-anchor" href="#前置知识" aria-hidden="true">#</a> 前置知识</h2>
<ul>
<li>
<p><strong>Tapable</strong></p>
<p>Tapable包本质上是为我们更方面创建自定义事件和触发自定义事件的库，类似于<code v-pre>Nodejs</code>中的<code v-pre>EventEmitter Api</code>。<code v-pre>Webpack</code>中的插件机制就是基于Tapable实现与打包流程解耦，插件的所有形式都是基于<code v-pre>Tapable</code>实现。</p>
</li>
<li>
<p><strong>Webpack Node Api</strong></p>
<p>基于学习目的，会着重于<code v-pre>Webpack Node Api</code>流程去讲解，实际上前端日常使用的<code v-pre>npm run build</code>命令也是通过环境变量调用<code v-pre>bin</code>脚本去调用<code v-pre>Node Api</code>去执行编译打包。</p>
</li>
<li>
<p><strong>Babel</strong></p>
<p><code v-pre>Webpack</code>内部的<code v-pre>AST</code>分析同样依赖于<code v-pre>Babel</code>进行处理，如果你对<code v-pre>Babel</code>不是很熟悉。建议可以先去阅读下这两篇文章 <strong>「前端基建」带你在Babel的世界中畅游</strong>、<strong>从Tree Shaking来走进Babel插件开发者的世界</strong>。</p>
</li>
</ul>
<blockquote>
<p>当然后续也会去详解这些内容在<code v-pre>Webpack</code>中的应用，但是我更加希望在阅读文章之前你可以去点一点上方的文档稍微了解一下前置知识。</p>
</blockquote>
<h2 id="流程梳理" tabindex="-1"><a class="header-anchor" href="#流程梳理" aria-hidden="true">#</a> 流程梳理</h2>
<p>在开始之前我们先对于整个打包流程进行一次梳理。这里仅仅是一个全流程的梳理，现在没有必要非常详细的去思考每一个步骤发生了什么，我们会在接下来的步骤中去一步一步带你串联它们。</p>
<Mermaid id="mermaid-58" code="eJxTUFBIL0osyFDwCeICsh2jn3bMfbq8+2nPtKf9Tc+mbohV0NW1c4p+vmfai/UTY0FKFJxAQgrO0c9WLHw6dzqyjDNYxiX66bqeZx0TkGVcwDKu0S/2TX7avuvZtPYnu7fFcgEA9Us2uw=="></Mermaid><p>整体将会从上边5个方面来分析<code v-pre>Webpack</code>打包流程:</p>
<ol>
<li>
<p>初始化参数阶段</p>
<p>这一步会从配置的<code v-pre>webpack.config.js</code>中读取到对应的配置参数和<code v-pre>shell</code>命令中传入的参数进行合并得到最终打包配置参数。</p>
</li>
<li>
<p>开始编译准备阶段</p>
<p>这一步我们会通过调用<code v-pre>webpack()</code>方法返回一个<code v-pre>compiler</code>方法，创建我们的<code v-pre>compiler</code>对象，并且注册各个<code v-pre>Webpack Plugin</code>。找到配置入口中的<code v-pre>entry</code>代码，调用<code v-pre>compiler.run()</code>方法进行编译。</p>
</li>
<li>
<p>模块编译阶段</p>
<p>从入口模块进行分析，调用匹配文件的<code v-pre>loaders</code>对文件进行处理。同时分析模块依赖的模块，递归进行模块编译工作。</p>
</li>
<li>
<p>完成编译阶段</p>
<p>在递归完成后，每个引用模块通过<code v-pre>loaders</code>处理完成同时得到模块之间的相互依赖关系。</p>
</li>
<li>
<p>输出文件阶段</p>
<p>整理模块依赖关系，同时将处理后的文件输出到<code v-pre>ouput</code>的磁盘目录中。
d</p>
</li>
</ol>
<h2 id="创建目录" tabindex="-1"><a class="header-anchor" href="#创建目录" aria-hidden="true">#</a> 创建目录</h2>
<p>工欲善其事，必先利其器。首先让我们创建一个良好的目录来管理我们需要实现的<code v-pre>Packing tool</code>吧！</p>
<p>让我们来创建这样一个目录:</p>
<img :src="$withBase('/assets/knowledge/frontEnd/configuration/webpack/fileDirectory.jpg')" />
<h2 id="初始化参数阶段" tabindex="-1"><a class="header-anchor" href="#初始化参数阶段" aria-hidden="true">#</a> 初始化参数阶段</h2>
<p>往往，我们在日常使用阶段有两种方式去给<code v-pre>webpack</code>传递打包参数，让我们先来看看如何传递参数:</p>
<h3 id="cli命令行传递参数" tabindex="-1"><a class="header-anchor" href="#cli命令行传递参数" aria-hidden="true">#</a> <code v-pre>Cli</code>命令行传递参数</h3>
<p>通常，我们在使用调用<code v-pre>webpack</code>命令时，有时会传入一定命令行参数，比如:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>webpack <span class="token parameter variable">--mode</span><span class="token operator">=</span>production
<span class="token comment"># 调用webpack命令执行打包 同时传入mode为production</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpack-config-js传递参数" tabindex="-1"><a class="header-anchor" href="#webpack-config-js传递参数" aria-hidden="true">#</a> <code v-pre>webpack.config.js</code>传递参数</h3>
<p>另一种方式，我相信就更加老生常谈了。</p>
<p>我们在项目根目录下使用<code v-pre>webpack.config.js</code>导出一个对象进行<code v-pre>webpack</code>配置:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Plugin1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./plugins/plugin1'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Plugin2 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./plugins/plugin2'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src/entry1.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">second</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src/entry2.js'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 基础目录，绝对路径，用于从配置中解析入口点(entry point)和 加载器(loader)。换而言之entry和loader的所有相对路径都是相对于这个路径而言的</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./build'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].js'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Plugin1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Plugin2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.js'</span><span class="token punctuation">,</span> <span class="token string">'.ts'</span><span class="token punctuation">,</span> <span class="token string">'.vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./loaders/loader1.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./loaders/loader2.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>当然这里的<code v-pre>loader</code>和<code v-pre>plugin</code>目前你可以不用理解，接下来我们会逐步实现这些东西并且添加到我们的打包流程中去。</p>
</blockquote>
<h3 id="实现合并参数阶段" tabindex="-1"><a class="header-anchor" href="#实现合并参数阶段" aria-hidden="true">#</a> 实现合并参数阶段</h3>
<p>这一步，让我们真正开始动手实现我们的<code v-pre>webpack</code>吧！</p>
<p>首先让我们在<code v-pre>webpack/core</code>下新建一个<code v-pre>index.js</code>文件作为核心入口文件。</p>
<p>同时建立一个<code v-pre>webpack/core</code>下新建一个<code v-pre>webpack.js</code>文件作为<code v-pre>webpack()</code>方法的实现文件。</p>
<p>首先，我们清楚在<code v-pre>NodeJs Api</code>中是通过<code v-pre>webpack()</code>方法去得到<code v-pre>compiler</code>对象的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> compiler <span class="token operator">=</span>  <span class="token function">webpack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

compiler<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> status</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  compiler<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">closeErr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时让我们按照原本的<code v-pre>webpack</code>接口格式来补充一下<code v-pre>index.js</code>中的逻辑:</p>
<ul>
<li>我们需要一个<code v-pre>webpack</code>方法去执行调用命令。</li>
<li>同时我们引入<code v-pre>webpack.config.js</code>配置文件传入<code v-pre>webpack</code>方法。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../example/webpack.config'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 步骤1: 初始化参数 根据配置文件和shell参数合成参数</span>
<span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token function">webpack</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嗯，看起来还不错。接下来让我们去实现一下<code v-pre>webpack.js</code>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">webpack</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 合并参数 得到合并后的参数 mergeOptions</span>
  <span class="token keyword">const</span> mergeOption <span class="token operator">=</span> <span class="token function">_mergeOptions</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 合并配置参数</span>
<span class="token keyword">function</span> <span class="token function">_mergeOptions</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> shellOption <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">option<span class="token punctuation">,</span> argv</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> argv<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'='</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> parseKey <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
      option<span class="token punctuation">[</span>parseKey<span class="token punctuation">]</span> <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> option
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span>options<span class="token punctuation">,</span> <span class="token operator">...</span>shellOption<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> webpack<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们需要额外说明的是</p>
<p><code v-pre>webpack</code>文件中需要导出一个名为<code v-pre>webpack</code>的方法，同时接受外部传入的配置对象。这个是我们在上述讲述过的。</p>
<p>当然关于我们合并参数的逻辑，是将<strong>外部传入的对象和执行<code v-pre>shell</code>时的传入参数进行最终合并</strong>。</p>
<p>在<code v-pre>Node Js</code>中我们可以通过<code v-pre>process.argv.slice(2)</code>来获得<code v-pre>shell</code>命令中传入的参数，比如:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// core/index.js</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// Terminal</span>
<span class="token constant">C</span><span class="token operator">:</span>\Users\Administrator\Desktop\webpack<span class="token operator">-</span>demo<span class="token operator">></span>node core<span class="token operator">/</span>index<span class="token punctuation">.</span>js <span class="token operator">--</span>mode<span class="token operator">=</span>production <span class="token operator">--</span>devtool<span class="token operator">=</span><span class="token boolean">false</span>
<span class="token punctuation">[</span> <span class="token string">'--mode=production'</span><span class="token punctuation">,</span> <span class="token string">'--devtool=false'</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然<code v-pre>_mergeOptions</code>方法就是一个简单的合并配置参数的方法，相信对于大家来说就是小菜一碟。</p>
<p>恭喜大家🎉，千里之行始于足下。<strong>这一步我们已经完成了打包流程中的第一步：合并配置参数</strong>。</p>
<h2 id="编译阶段" tabindex="-1"><a class="header-anchor" href="#编译阶段" aria-hidden="true">#</a> 编译阶段</h2>
<p>在得到最终的配置参数之后，我们需要在<code v-pre>webpack()</code>函数中做以下几件事情:</p>
<ul>
<li>通过参数创建<code v-pre>compiler</code>对象。我们看到官方案例中通过调用<code v-pre>webpack(options)</code>方法返回的是一个<code v-pre>compiler</code>对象。并且同时调用<code v-pre>compiler.run()</code>方法启动的代码进行打包。</li>
<li>注册我们定义的<code v-pre>webpack plugin</code>插件。</li>
<li>根据传入的配置对象寻找对应的打包入口文件。</li>
</ul>
<h3 id="创建compiler对象" tabindex="-1"><a class="header-anchor" href="#创建compiler对象" aria-hidden="true">#</a> 创建<code v-pre>compiler</code>对象</h3>
<p>让我们先来完成<code v-pre>index.js</code>中的逻辑代码补全:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>const webpack = require('./webpack');

const config = require('../example/webpack.config');

/**
 * 初始化参数 根据配置文件和shell参数合成参数
 * 调用 Webpack(options) 初始化compiler对象
 * webpack()方法会返回一个compiler对象
 * */
const compiler = webpack(config);

/**
 * 调用run方法进行打包
 * */
compiler.run((err, status) => {
  if(err) {
    console.log(err)
  }
  // ...
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，核心编译实现在于<code v-pre>webpack()</code>方法返回的<code v-pre>compiler.run()</code>方法上。</p>
<p>一步一步让我们来完善这个<code v-pre>webpack()</code>方法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">webpack</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 合并参数 得到合并后的参数 mergeOptions</span>
  <span class="token keyword">const</span> mergeOption <span class="token operator">=</span> <span class="token function">_mergeOptions</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
  <span class="token comment">// 创建 compiler 对象 </span>
  <span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Compiler</span><span class="token punctuation">(</span>mergeOption<span class="token punctuation">)</span>
  <span class="token keyword">return</span> compiler
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们在<code v-pre>webpack/core</code>目录下同样新建一个<code v-pre>compiler.js</code>文件，作为<code v-pre>compiler</code>的核心实现文件:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Compiler 类进行核心编译实现
 */</span>

<span class="token keyword">class</span> <span class="token class-name">Compiler</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
  <span class="token punctuation">}</span>

  <span class="token comment">// run方法启动编译, 同时run方法接受外部传递的callback</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Compiler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时我们的<code v-pre>Compiler</code>类就先搭建一个基础的骨架代码。</p>
<p>目前，我们拥有了:</p>
<ul>
<li><code v-pre>webpack/core/index.js</code>作为打包命令的入口文件，这个文件引用了我们自己实现的<code v-pre>webpack</code>，同时引用了外部的<code v-pre>webpack.config.js(options)</code>。调用<code v-pre>webpack(options).run()</code>开始编译。</li>
<li><code v-pre>webpack/core/webpack.js</code>这个文件目前处理了参数的合并以及传入合并后的参数<code v-pre>new Compiler(mergeOptions)</code>，同时返回创建的<code v-pre>Compiler</code>实力对象。</li>
<li><code v-pre>webpack/core/compiler</code>，此时我们的<code v-pre>compiler</code>仅仅是作为一个基础的骨架，存在一个<code v-pre>run()</code>启动方法。</li>
</ul>
<h3 id="编写plugin" tabindex="-1"><a class="header-anchor" href="#编写plugin" aria-hidden="true">#</a> 编写<code v-pre>Plugin</code></h3>
<p>还记得我们在<code v-pre>webpack.config.js</code>中使用了两个<code v-pre>plugin</code>---<code v-pre>pluginA</code>、<code v-pre>pluginB</code>插件吗。接下来让我们来依次实现它们:</p>
<p>在实现<code v-pre>Plugin</code>前，我们需要先来完善一下<code v-pre>compiler</code>方法:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Compiler 类进行核心编译实现
 */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> SyncHook <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'tapable'</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Compiler</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
    <span class="token comment">// 创建plugin的hooks</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token comment">// 开始编译的hook</span>
      <span class="token literal-property property">run</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 输出 asset 到 output 目录之前的hook， 即写入文件之前</span>
      <span class="token literal-property property">emit</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 在 compilation 完成时执行 全部完成编译执行</span>
      <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// run方法启动编译, 同时run方法接受外部传递的callback</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Compiler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，我们在<code v-pre>Compiler</code>这个类的构造函数中创建了一个属性<code v-pre>hooks</code>，它的值是三个属性<code v-pre>run</code>、<code v-pre>emit</code>、<code v-pre>done</code>。</p>
<p>关于这三个属性的值就是我们上文提到前置知识的<code v-pre>tapable</code>的<code v-pre>SyncHook</code>方法，本质上你可以简单将<code v-pre>SyncHook()</code>方法理解称为一个<code v-pre>Emitter Event</code>类。</p>
<p>当我们通过<code v-pre>new SyncHook()</code>返回一个对象实例后，我们可以通过<code v-pre>this.hook.run.tap('name',callback)</code>方法为这个对象上添加事件监听，然后在通过<code v-pre>this.hook.run.call()</code>执行所有<code v-pre>tap</code>注册的事件。</p>
<blockquote>
<p>当然<code v-pre>webpack</code>真实源码中，这里有非常多的<code v-pre>hook</code>。以及分别存在同步/异步钩子，这里更多的是为大家讲解清楚流程，所以仅列举了三个常见且简单的同步钩子。</p>
</blockquote>
<p>此时，我们需要明白，我们可以通过<code v-pre>Compiler</code>类返回的实例对象上<code v-pre>compiler.hooks.run.tap</code>注册钩子。</p>
<p>接下来让我们切回到<code v-pre>webpack.js</code>中，让我们来填充关于插件注册的逻辑:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Compiler <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./compiler'</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">webpack</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 合并参数 得到合并后的参数 mergeOptions</span>
  <span class="token keyword">const</span> mergeOption <span class="token operator">=</span> <span class="token function">_mergeOptions</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
  <span class="token comment">// 创建 compiler 对象</span>
  <span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Compiler</span><span class="token punctuation">(</span>mergeOption<span class="token punctuation">)</span>
  <span class="token comment">// 加载插件</span>
  <span class="token function">_loadPlugin</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>plugins<span class="token punctuation">,</span> compiler<span class="token punctuation">)</span>

  <span class="token keyword">return</span> compiler
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 合并配置参数
 * */</span>
<span class="token keyword">function</span> <span class="token function">_mergeOptions</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> shellOption <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">option<span class="token punctuation">,</span> argv</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token operator">=</span> argv<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'='</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> parseKey <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
      option<span class="token punctuation">[</span>parseKey<span class="token punctuation">]</span> <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> option
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span>options<span class="token punctuation">,</span> <span class="token operator">...</span>shellOption<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 加载插件函数
 * */</span>
<span class="token keyword">function</span> <span class="token function">_loadPlugin</span><span class="token punctuation">(</span><span class="token parameter">plugins<span class="token punctuation">,</span> compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>plugins <span class="token operator">&amp;&amp;</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>plugins<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    plugins<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">plugin</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">plugin</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>compiler<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> webpack<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们在创建完成<code v-pre>compiler</code>对象后，调用了<code v-pre>_loadPlugin</code>方法进行<strong>注册插件</strong>。</p>
<p>有接触过<code v-pre>webpack</code>插件开发的同学，或多或少可能都有了解过。<strong>任何一个<code v-pre>webpack</code>插件都是一个类(当然类本质上都是funciton的语法糖)，每个插件都必须存在一个<code v-pre>apply</code>方法</strong>。</p>
<p>这个<code v-pre>apply</code>方法会接受一个<code v-pre>compiler</code>对象。我们上边做的就是依次调用传入的<code v-pre>plugin</code>的<code v-pre>apply</code>方法并且传入我们的<code v-pre>compiler</code>对象。</p>
<blockquote>
<p><strong>这里请记住上边的流程，日常我们编写<code v-pre>webpack plugin</code>时本质上就是操作<code v-pre>compiler</code>对象从而影响打包结果进行。</strong></p>
</blockquote>
<p>接下来让我们去编写这些个插件:</p>
<p>不了解插件开发的同学可以去稍微看一下<strong>官方的介绍</strong>，其实不是很难，强烈建议如果不了解可以先去看看再回来结合上变讲的内容你一定会有所收获的。</p>
<p>首先让我们先创建文件（plugin1.js、plugin2.js）:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Plugin1</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注册同步的钩子</span>
    <span class="token comment">// 这里的 compiler 对象就是我们 new Compiler() 创建的实例</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>run<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">'Plugin 1'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 调用</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'注册插件 Plugin 1'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Plugin1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Plugin2</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">'Plugin 2'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 调用</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'注册插件 Plugin 2'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Plugin2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到这里我相信大部分同学都已经反应过来了，<code v-pre>compiler.hooks.run.tap</code>和<code v-pre>compiler.hooks.done.tap</code>不就是上边讲到的通过<code v-pre>tapable</code>创建一个<code v-pre>SyncHook</code>实例然后通过<code v-pre>tap</code>方法注册事件吗？</p>
<p>没错！的确是这样，关于<code v-pre>webpack</code>插件<strong>本质上就是通过发布订阅的模式，通过<code v-pre>compiler</code>上监听事件。然后再打包编译过程中触发监听的事件从而添加一定的逻辑影响打包结果</strong>。</p>
<p>我们在每个插件的<code v-pre>apply</code>方法上通过<code v-pre>tap</code>在编译准备阶段(也就是调用<code v-pre>webpack()</code>函数时)进行订阅对应的事件，当我们的编译执行到一定阶段时发布对应的事件告诉订阅者去执行监听的事件，从而达到在编译阶段的不同生命周期内去触发对应的<code v-pre>plugin</code>。</p>
<blockquote>
<p>所以这里应该清楚，在进行<code v-pre>webpack</code>插件开发时，<code v-pre>compiler</code>对象上存放着本次打包的所有相关属性，比如<code v-pre>options</code>打包的配置，以及之后讲到的各种属性。</p>
</blockquote>
<h3 id="寻找entry入口" tabindex="-1"><a class="header-anchor" href="#寻找entry入口" aria-hidden="true">#</a> 寻找<code v-pre>entry</code>入口</h3>
<p>这之后，绝大多数内容都会放在<code v-pre>compiler.js</code>中去实现<code v-pre>Compiler</code>这个类实现打包的核心流程。</p>
<p><strong>任何一次打包都需要入口文件，接下来让我们就从真正进入打包编译阶段。首当其冲的事情就是，我们需要根据入口配置文件路径寻找到对应入口文件。</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Compiler 类进行核心编译实现
 */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> SyncHook <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'tapable'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> toUnixPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./utils'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Compiler</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options

    <span class="token comment">// 相对路径根路径 Context 参数</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>rootPath <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>context <span class="token operator">||</span> <span class="token function">toUnixPath</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// 创建plugin的hooks</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token comment">// 开始编译的hook</span>
      <span class="token literal-property property">run</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 输出 asset 到 output 目录之前的hook， 即写入文件之前</span>
      <span class="token literal-property property">emit</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 在 compilation 完成时执行 全部完成编译执行</span>
      <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// run方法启动编译, 同时run方法接受外部传递的callback</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当调用run方法时，触发开始编译的plugin</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 获取入口配置对象</span>
    <span class="token keyword">const</span> entry <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getEntry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">getEntry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> entry <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">entry</span><span class="token operator">:</span> optionEntry <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> optionEntry <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      entry<span class="token punctuation">[</span><span class="token string">'main'</span><span class="token punctuation">]</span> <span class="token operator">=</span> optionEntry
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      entry <span class="token operator">=</span> optionEntry
    <span class="token punctuation">}</span>

    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entryKey</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> entryValue <span class="token operator">=</span> entry<span class="token punctuation">[</span>entryKey<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>path<span class="token punctuation">.</span><span class="token function">isAbsolute</span><span class="token punctuation">(</span>entryValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 转化为绝对路径的同时同意路径分隔符诶 /</span>
        entry<span class="token punctuation">[</span>entryKey<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">toUnixPath</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rootPath<span class="token punctuation">,</span> entryValue<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> entry
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Compiler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 统一路径分隔符 主要是为了后续生成模块ID方便
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">path</span>
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">toUnixPath</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">'/'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这一步我们通过<code v-pre>options.entry</code>处理获得入口文件的绝对路径。</p>
<p>这里有几个需要注意的小点:</p>
<ul>
<li><code v-pre>this.hooks.run.call()</code></li>
</ul>
<p>在我们<code v-pre>_loadePlugins</code>函数中对于每一个传入的插件在<code v-pre>compiler</code>实例对象中进行了订阅，那么当我们调用<code v-pre>run</code>方法时，等于真正开始执行编译。这个阶段<strong>相当于我们需要告诉订阅者，发布开始执行的订阅</strong>。此时我们通过<code v-pre>this.hooks.run.call()</code>执行关于<code v-pre>run</code>的所有<code v-pre>tap</code>监听方法，从而触发对应的<code v-pre>plugin</code>逻辑。</p>
<ul>
<li><code v-pre>this.rootPath</code>:</li>
</ul>
<p>在上述的外部<code v-pre>webpack.config.js</code>中我们配置了一个 <code v-pre>context: process.cwd()</code>，其实真实<code v-pre>webpack</code>中这个<code v-pre>context</code>值默认也是<code v-pre>process.cwd()</code>。</p>
<p>简而言之，这个路径就是我们项目启动的目录路径，任何<code v-pre>entry</code>和<code v-pre>loader</code>中的相对路径都是针对于<code v-pre>context</code>这个参数的相对路径。</p>
<p>这里我们使用<code v-pre>this.rootPath</code>在构造函数中来保存这个变量。</p>
<ul>
<li><code v-pre>toUnixPath</code>工具方法:</li>
</ul>
<p>因为不同操作系统下，文件分隔路径是不同的。这里我们统一使用<code v-pre>\</code>来替换路径中的<code v-pre>//</code>来替换模块路径。后续我们会<strong>使用模块相对于<code v-pre>rootPath</code>的路径作为每一个文件的唯一ID</strong>，所以这里统一处理下路径分隔符。</p>
<ul>
<li><code v-pre>entry</code>的处理方法:</li>
</ul>
<p>关于<code v-pre>entry</code>配置，<code v-pre>webpack</code>中其实有很多种。我们这里考虑了比较常见的两种配置方式:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token string">'entry1.js'</span>

<span class="token comment">// 本质上这段代码在webpack中会被转化为</span>
<span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">main</span><span class="token operator">:</span>'entry1<span class="token punctuation">.</span>js
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'entry1'</span><span class="token operator">:</span><span class="token string">'./entry1.js'</span><span class="token punctuation">,</span>
  <span class="token string-property property">'entry2'</span><span class="token operator">:</span><span class="token string">'/user/wepback/example/src/entry2.js'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两种方式任何方式都会经过<code v-pre>getEntry</code>方法最终转化称为<code v-pre>{ [模块名]:[模块绝对路径]... }</code>的形式，关于<code v-pre>getEntry()</code>方法其实非常简单，这里就不过于累赘这个方法的实现过程了。</p>
<p>这一步，我们就通过<code v-pre>getEntry</code>方法获得了一个<code v-pre>key</code>为<code v-pre>entryName</code>,<code v-pre>value</code>为<code v-pre>entryAbsolutePath</code>的对象了，接来下就让我们从入口文件出发进行编译流程吧。</p>
<h2 id="模块编译阶段" tabindex="-1"><a class="header-anchor" href="#模块编译阶段" aria-hidden="true">#</a> 模块编译阶段</h2>
<p>上边我们讲述了关于编译阶段的准备工作:</p>
<ul>
<li>目录/文件基础逻辑补充。</li>
<li>通过<code v-pre>hooks.tap</code>注册<code v-pre>webpack</code>插件。</li>
<li><code v-pre>getEntry</code>方法获得各个入口的对象。</li>
</ul>
<p>接下来让我们继续完善<code v-pre>compiler.js</code>。</p>
<p>在模块编译阶段，我们需要做的事件:</p>
<ul>
<li>根据入口文件路径，分析入口文件，对于入口文件进行匹配对应的<code v-pre>loader</code>进行处理入口文件。</li>
<li>将<code v-pre>loader</code>处理完成的入口文件使用<code v-pre>webpack</code>进行编译。</li>
<li>分析入口文件依赖，重复上边两个步骤编译对应依赖。</li>
<li>如果嵌套文件存在依赖文件，递归调用依赖模块进行编译。</li>
<li>递归编译完成后，组装一个个包含多个模块的<code v-pre>chunk</code></li>
</ul>
<p>首先，我们先来给<code v-pre>compiler.js</code>的构造函数中补充一下对应的逻辑:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Compiler</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
    <span class="token keyword">this</span><span class="token punctuation">.</span>entries <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 保存所有入口模块对象</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>modules <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 保存所有依赖模块对象</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>chunks <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 所有的代码块对象</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>assets <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 存放本次产出的文件对象</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>files <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 存放本次编译所有产出的文件名</span>

    <span class="token comment">// 创建plugin的hooks</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token comment">// 开始编译的hook</span>
      <span class="token literal-property property">run</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 输出 asset 到 output 目录之前的hook， 即写入文件之前</span>
      <span class="token literal-property property">emit</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 在 compilation 完成时执行 全部完成编译执行</span>
      <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们通过给<code v-pre>compiler</code>构造函数中添加一些列属性来保存关于编译阶段生成的对应资源/模块对象。</p>
<blockquote>
<p>关于<code v-pre>entries\modules\chunks\assets\files</code>这几个<code v-pre>Set</code>对象是贯穿我们核心打包流程的属性，它们各自用来储存编译阶段不同的资源，从而最终通过对应的属性进行生成编译后的文件。</p>
</blockquote>
<h3 id="根据入口文件路径分析入口文件" tabindex="-1"><a class="header-anchor" href="#根据入口文件路径分析入口文件" aria-hidden="true">#</a> 根据入口文件路径分析入口文件</h3>
<p>上边说到我们在<code v-pre>run</code>方法中已经可以通过<code v-pre>this.getEntry();</code>获得对应的入口对象了～</p>
<p>接下来就让我们从入口文件开始去分析入口文件吧！</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Compiler 类进行核心编译实现
 */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>SyncHook<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'tapable'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>toUnixPath<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./utils'</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Compiler</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token comment">// run方法启动编译, 同时run方法接受外部传递的callback</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当调用run方法时，触发开始编译的plugin</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 获取入口配置对象</span>
    <span class="token keyword">const</span> entry <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getEntry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 编译入口文件</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildEntryModule</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// ...</span>
  
  <span class="token function">buildEntryModule</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entryName</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> entryPath <span class="token operator">=</span> entry<span class="token punctuation">[</span>entryName<span class="token punctuation">]</span>
      <span class="token keyword">const</span> entityObj <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildModule</span><span class="token punctuation">(</span>entryName<span class="token punctuation">,</span> entryPath<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>entries<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>entityObj<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">buildModule</span><span class="token punctuation">(</span><span class="token parameter">moduleName<span class="token punctuation">,</span> modulePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Compiler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们添加了一个名为<code v-pre>buildEntryModule</code>方法作为入口模块编译方法。循环入口对象，得到每一个入口对象的名称和路径。</p>
<blockquote>
<p>假使我们在开头传入<code v-pre>entry:{ main:'./src/main.js' }</code>的话，<code v-pre>buildEntryModule</code>获得的形参<code v-pre>entry</code>为<code v-pre>{ main: &quot;/src...[你的绝对路径]&quot; }</code>，此时我们<code v-pre>buildModule</code>方法接受的<code v-pre>entryName</code>为<code v-pre>main</code>，<code v-pre>entryPath</code>为入口文件<code v-pre>main</code>对应的的绝对路径。单个入口编译完成后，我们会在<code v-pre>buildModule</code>方法中返回一个对象。这个对象就是我们编译入口文件后的对象。</p>
</blockquote>
<h3 id="buildmodule模块编译方法" tabindex="-1"><a class="header-anchor" href="#buildmodule模块编译方法" aria-hidden="true">#</a> buildModule模块编译方法</h3>
<p>在进行代码编写之前，我们先来梳理一下<code v-pre>buildModule</code>方法它需要做哪些事情:</p>
<ul>
<li><code v-pre>buildModule</code>接受两个参数进行模块编译，<strong>第一个为模块所属的入口文件名称</strong>，第二个为需要编译的模块路径。</li>
<li><code v-pre>buildModule</code>方法要进行代码编译的前提就是，通过<code v-pre>fs</code>模块根据入口文件路径读取文件源代码。</li>
<li>读取文件内容之后，调用所有匹配的loader对模块进行处理得到返回后的结果。</li>
<li>得到<code v-pre>loader</code>处理后的结果，通过<code v-pre>babel</code>分析<code v-pre>loader</code>处理后的代码，进行代码编译。(这一步编译主要是针对<code v-pre>require</code>语句，修改源代码中<code v-pre>require</code>语句的路径)。</li>
<li>如果该入口文件没有依赖与任何模块(<code v-pre>require</code>语句)，那么返回编译后的模块对象。</li>
<li>如果该入口文件存在依赖的模块，递归<code v-pre>buildModule</code>方法进行模块编译。</li>
</ul>
<h4 id="读取文件内容" tabindex="-1"><a class="header-anchor" href="#读取文件内容" aria-hidden="true">#</a> 读取文件内容</h4>
<p>我们先调用<code v-pre>fs</code>模块读取文件内容。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
<span class="token function">buildModule</span><span class="token punctuation">(</span><span class="token parameter">moduleName<span class="token punctuation">,</span> modulePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.读取文件原始代码</span>
  <span class="token keyword">const</span> originalSourceCode <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">)</span>
  <span class="token comment">// moduleCode 为修改后代码</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>moduleCode <span class="token operator">=</span> originalSourceCode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="调用loader处理匹配后缀文件" tabindex="-1"><a class="header-anchor" href="#调用loader处理匹配后缀文件" aria-hidden="true">#</a> 调用<code v-pre>loader</code>处理匹配后缀文件</h4>
<p>​	接下来我们获得了文件的具体内容之后，就需要匹配对应<code v-pre>loader</code>对我们的源代码进行编译了。</p>
<h5 id="实现简单自定义loader" tabindex="-1"><a class="header-anchor" href="#实现简单自定义loader" aria-hidden="true">#</a> 实现简单自定义loader</h5>
<p>在进行<code v-pre>loader</code>编译前，先来实现一下上方传入的自定义<code v-pre>loader</code>吧。<code v-pre>webpack-demo/loader</code>目录下新建<code v-pre>loader1.js</code>,<code v-pre>loader2.js</code>:</p>
<p>首先我们需要清楚<strong>简单来说<code v-pre>loader</code>本质上就是一个函数，接受我们的源代码作为入参同时返回处理后的结果。</strong></p>
<blockquote>
<p>因为文章主要讲述打包流程所以<code v-pre>loader</code>简单的作为倒序处理。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// loader本质上就是一个函数，接受原始内容，返回转换后的内容</span>
<span class="token keyword">function</span> <span class="token function">loader1</span><span class="token punctuation">(</span><span class="token parameter">sourceCode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'use loader1'</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> sourceCode <span class="token operator">+</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n const loader1 = "I'm loader1";</span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> loader1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// loader本质上就是一个函数，接受原始内容，返回转换后的内容</span>
<span class="token keyword">function</span> <span class="token function">loader2</span><span class="token punctuation">(</span><span class="token parameter">sourceCode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'use loader2'</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> sourceCode <span class="token operator">+</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n const loader2 = "I'm loader2";</span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> loader2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用loader处理文件" tabindex="-1"><a class="header-anchor" href="#使用loader处理文件" aria-hidden="true">#</a> 使用loader处理文件</h5>
<p>搞清楚了<code v-pre>loader</code>就是一个单纯的函数之后，让我们在进行模块分析之前将内容先交给匹配的loader去处理下吧。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">buildModule</span><span class="token punctuation">(</span><span class="token parameter">moduleName<span class="token punctuation">,</span> modulePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.读取文件原始代码</span>
  <span class="token keyword">const</span> originalSourceCode <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>originalSourceCode <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// moduleCode 为修改后代码</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>moduleCode <span class="token operator">=</span> originalSourceCode
  <span class="token comment">// 2.调用 loader 进行处理</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleLoader</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">handleLoader</span><span class="token punctuation">(</span><span class="token parameter">modulePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> matchLoaders <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// 1.获取所有传入的loader规则</span>
  <span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>module<span class="token punctuation">.</span>rules
  rules<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">loader</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> testRule <span class="token operator">=</span> loader<span class="token punctuation">.</span>test
    <span class="token keyword">if</span> <span class="token punctuation">(</span>testRule<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 仅考虑loader { test:/\.js$/g, use:['babel-loader'] } }</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>loader<span class="token punctuation">.</span>loader<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        matchLoaders<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>loader<span class="token punctuation">.</span>loader<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        matchLoaders<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>loader<span class="token punctuation">.</span>use<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2.倒序执行loader传入的源代码</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> matchLoaders<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 目前我们外部仅支持传入绝对路径的loader模式</span>
      <span class="token comment">// require 引入对应的loader</span>
      <span class="token keyword">const</span> loaderFn <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>matchLoaders<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token comment">// 通过 loader 同步处理每一次编译的moduleCode</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>moduleCode <span class="token operator">=</span> <span class="token function">loaderFn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>moduleCode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里通过<code v-pre>handleLoader</code>函数，对于传入的文件路径匹配到对应后缀的<code v-pre>loader</code>后，依次倒序执行loader处理代码<code v-pre>this.moduleCode</code>并且同步更新每次<code v-pre>moduleCode</code>。</p>
<p>最终，在每一个模块编译中<code v-pre>this.moduleCode</code>都会经过对应的<code v-pre>loader</code>处理。</p>
<h4 id="webpack模块编译阶段" tabindex="-1"><a class="header-anchor" href="#webpack模块编译阶段" aria-hidden="true">#</a> webpack模块编译阶段</h4>
<p>上一步经历过<code v-pre>loader</code>处理了入口文件代码，并且得到了处理后的代码保存在了<code v-pre>this.moduleCode</code>中。</p>
<p>此时，经过<code v-pre>loader</code>处理后就要进入<code v-pre>webpack</code>内部的编译阶段了。</p>
<p>这里我们需要做的是：<strong>针对当前模块进行编译，将当前模块所有依赖的模块(<code v-pre>require()</code>)语句引入的路径变为相对于跟路径(<code v-pre>this.rootPath</code>)的相对路径</strong>。</p>
<blockquote>
<p>总之需要搞明白的是，这里编译的结果是期望将源代码中的依赖模块路径变为相对跟路径的路径，同时建立基础的模块依赖关系。后续会说明为什么针对路径进行编译。</p>
</blockquote>
<p>继续来完善<code v-pre>buildModule</code>方法:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>toUnixPath<span class="token punctuation">,</span> tryExtensions<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./utils/index'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@babel/parser'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> traverse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@babel/traverse'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
<span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@babel/generator'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
<span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@babel/types'</span><span class="token punctuation">)</span>
<span class="token comment">// ...</span>
<span class="token keyword">class</span> <span class="token class-name">Compiler</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function">buildModule</span><span class="token punctuation">(</span><span class="token parameter">moduleName<span class="token punctuation">,</span> modulePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.读取文件原始代码</span>
    <span class="token comment">// const originalSourceCode = (this.originalSourceCode = fs.readFileSync(modulePath, 'utf-8'))</span>
    <span class="token keyword">const</span> originalSourceCode <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">)</span>
    <span class="token comment">// moduleCode 为修改后代码</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>moduleCode <span class="token operator">=</span> originalSourceCode
    <span class="token comment">// 2.调用 loader 进行处理</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleLoader</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">)</span>
    <span class="token comment">// 3.调用 webpack 进行模块编译 获得最终的 module 对象</span>
    <span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleWebpackCompiler</span><span class="token punctuation">(</span>moduleName<span class="token punctuation">,</span> modulePath<span class="token punctuation">)</span>
    <span class="token keyword">return</span> module
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
    
  <span class="token comment">// 使用 webpack 进行模块编译</span>
  <span class="token function">handleWebpackCompiler</span><span class="token punctuation">(</span><span class="token parameter">moduleName<span class="token punctuation">,</span> modulePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将当前模块相对于启动根目录计算出相对路径 作为模块ID</span>
    <span class="token keyword">const</span> moduleId <span class="token operator">=</span> <span class="token string">'./'</span> <span class="token operator">+</span> <span class="token function">toUnixPath</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rootPath<span class="token punctuation">,</span> modulePath<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 创建模块对象</span>
    <span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> moduleId<span class="token punctuation">,</span>
      <span class="token literal-property property">dependencies</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 该模块所依赖模块绝对路径地址</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span>moduleName<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 该模快所属的入口文件</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 调用 babel 分析代码</span>
    <span class="token keyword">const</span> ast <span class="token operator">=</span> parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>moduleCode<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">'module'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 深度优化 遍历语法tree</span>
    <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">CallExpression</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">nodePath</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> node <span class="token operator">=</span> nodePath<span class="token punctuation">.</span>node
        <span class="token comment">// 当遇到 require 语句时</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>callee<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'require'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 获得源代码中引入模块相对路径</span>
          <span class="token keyword">const</span> moduleName <span class="token operator">=</span> node<span class="token punctuation">.</span>arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value
          <span class="token comment">// 寻找模块相对路径 当前模块路径 + require() 对应的相对路径</span>
          <span class="token keyword">const</span> moduleDirName <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">)</span>
          <span class="token keyword">const</span> absolutePath <span class="token operator">=</span> <span class="token function">tryExtensions</span><span class="token punctuation">(</span>
            <span class="token function">toUnixPath</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>moduleDirName<span class="token punctuation">,</span> moduleName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>extensions<span class="token punctuation">,</span>
            moduleName<span class="token punctuation">,</span>
            <span class="token function">toUnixPath</span><span class="token punctuation">(</span>moduleDirName<span class="token punctuation">)</span>
          <span class="token punctuation">)</span>
          <span class="token comment">// 生成 moduleId - 针对于根路径的模块ID 添加进入新的依赖模块路径</span>
          <span class="token keyword">const</span> moduleId <span class="token operator">=</span> <span class="token string">'./'</span> <span class="token operator">+</span> path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rootPath<span class="token punctuation">,</span> absolutePath<span class="token punctuation">)</span>
          <span class="token comment">// 通过 babel 修改源代码中的 require 变成 __webpack_require__ 语句</span>
          node<span class="token punctuation">.</span>callee <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">identifier</span><span class="token punctuation">(</span><span class="token string">'__webpack_require__'</span><span class="token punctuation">)</span>
          <span class="token comment">// 修改源代码中 require 语句引入的模块 全部修改问相对于根路径来处理</span>
          node<span class="token punctuation">.</span>arguments <span class="token operator">=</span> <span class="token punctuation">[</span>t<span class="token punctuation">.</span><span class="token function">stringLiteral</span><span class="token punctuation">(</span>moduleId<span class="token punctuation">)</span><span class="token punctuation">]</span>
          <span class="token comment">// 为当前模块添加 require 语句造成的依赖(内容为相对于根路径的模块ID)</span>
          module<span class="token punctuation">.</span>dependencies<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>moduleId<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 遍历结束根据 AST 生成新的代码</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>code<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">generator</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span>
    <span class="token comment">// 为当前模块挂载新的生成的代码</span>
    module<span class="token punctuation">.</span>_source <span class="token operator">=</span> code
    <span class="token comment">// 返回当前模块对象</span>
    <span class="token keyword">return</span> module
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这一步关于<code v-pre>webpack</code>编译的阶段就完成了。</p>
<p>需要注意的是:</p>
<ul>
<li>
<p>这里使用<code v-pre>babel</code>相关的<code v-pre>API</code>针对于<code v-pre>require</code>语句进行了编译。</p>
</li>
<li>
<p>同时代码中引用了一个<code v-pre>tryExtensions()</code>工具方法，这个方法是针对于后缀名不全的工具方法，稍后你就可以看到这个方法的具体内容。</p>
</li>
<li>
<p>针对于每一次文件编译，我们都会返回一个<strong>module</strong>对象，这个对象是重中之重。</p>
</li>
<li>
<ul>
<li><code v-pre>id</code>属性，表示当前模块针对于<code v-pre>this.rootPath</code>的相对目录。</li>
<li><code v-pre>dependencies</code>属性，它是一个<code v-pre>Set</code>内部保存了该模块依赖的所有模块的模块ID。</li>
<li><code v-pre>name</code>属性,它表示该模块属于哪个入口文件。</li>
<li><code v-pre>_source</code>属性，它存放模块自身经过<code v-pre>babel</code>编译后的字符串代码。</li>
</ul>
</li>
</ul>
<h5 id="tryextensions方法实现" tabindex="-1"><a class="header-anchor" href="#tryextensions方法实现" aria-hidden="true">#</a> tryExtensions方法实现</h5>
<p>在上文的<code v-pre>webpack.config.js</code>有这么一个配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.js'</span><span class="token punctuation">,</span> <span class="token string">'.ts'</span><span class="token punctuation">,</span> <span class="token string">'.vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>熟悉<code v-pre>webpack</code>配置可能清楚，<strong>resolve.extensions</strong>是针对于引入依赖时，在没有书写文件后缀的情况下，<code v-pre>webpack</code>会自动帮我们按照传入的规则为文件添加后缀。</p>
<p>在清楚了原理后我们来一起看看<code v-pre>utils/tryExtensions</code>方法的实现:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">modulePath</span> path.posix.join拿到的模块绝对路径
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">extensions</span> 扩展名数组
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">originModulePath</span> 原始引入模块路径
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">moduleContext</span> path.posix.dirname拿到的当前模块所在目录，模块上下文
 * */</span>
<span class="token keyword">function</span> <span class="token function">tryExtensions</span><span class="token punctuation">(</span><span class="token parameter">modulePath<span class="token punctuation">,</span> extensions<span class="token punctuation">,</span> originModulePath<span class="token punctuation">,</span> moduleContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 优先尝试不需要拓展名的选项</span>
  extensions<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> extension <span class="token keyword">of</span> extensions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断路径是否存在</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>modulePath <span class="token operator">+</span> extension<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> modulePath <span class="token operator">+</span> extension
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 未匹配到对应文件</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">No module, Error: Can't resolve </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>originModulePath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> in  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>moduleContext<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个方法很简单，我们通过<code v-pre>fs.existsSync</code>检查传入文件结合<code v-pre>extensions</code>依次遍历寻找对应匹配的路径是否存在，如果找到则直接返回。如果未找到则给予用于一个友好的提示错误。</p>
<blockquote>
<p>需要注意 <code v-pre>extensions.unshift('');</code>是防止用户如果已经传入了后缀时，我们优先尝试直接寻找，如果可以找到文件那么就直接返回。找不到的情况下才会依次尝试。</p>
</blockquote>
<h4 id="递归处理" tabindex="-1"><a class="header-anchor" href="#递归处理" aria-hidden="true">#</a> 递归处理</h4>
<p>经过上一步处理，针对入口文件我们调用<code v-pre>buildModule</code>可以得到这样的返回对象。</p>
<p>我们先来看看运行<code v-pre>webpack/core/index.js</code>得到的返回结果吧。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>entries Set <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'./example/src/entry1.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dependencies</span><span class="token operator">:</span> Set <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">'main'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader2 = "I'm loader2";\nconst loader1 = "I'm loader1";</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'./example/src/entry2.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dependencies</span><span class="token operator">:</span> Set <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">'second'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader2 = "I'm loader2";\nconst loader1 = "I'm loader1";</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我在<code v-pre>buildEntryModule</code>中打印了处理完成后的<code v-pre>entries</code>对象。可以看到正如我们之前所期待的:</p>
<ul>
<li><code v-pre>id</code>为每个模块相对于跟路径的模块.(这里我们配置的<code v-pre>context:process.cwd()</code>)为<code v-pre>webpack</code>目录。</li>
<li><code v-pre>dependencies</code>为该模块内部依赖的模块，这里目前还没有添加。</li>
<li><code v-pre>name</code>为该模块所属的入口文件名称。</li>
<li><code v-pre>_source</code>为该模块编译后的源代码。</li>
</ul>
<p>此时打开<code v-pre>src</code>目录为入口文件添加一些依赖和内容吧:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// webpack/example/entry1.js</span>
<span class="token keyword">const</span> demo <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./demo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'demo'</span><span class="token punctuation">,</span> demo<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This is entry 1 !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// webpack/example/entry2.js</span>
<span class="token keyword">const</span> demo <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./demo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'demo'</span><span class="token punctuation">,</span> demo<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This is entry 2 !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// webpack/example/demo.js</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'JSH'</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时让我们重新运行<code v-pre>webpack-demo/core/index.js</code>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>entries Set <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'./example/src/entry1.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dependencies</span><span class="token operator">:</span> Set <span class="token punctuation">{</span> <span class="token string">'./example/src/demo.js'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">'main'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token string">'const demo = __webpack_require__("./example/src/demo.js");\n'</span> <span class="token operator">+</span>
      <span class="token string">'\n'</span> <span class="token operator">+</span>
      <span class="token string">"console.log('demo', demo);\n"</span> <span class="token operator">+</span>
      <span class="token string">"console.log('This is entry 1 !');\n"</span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader2 = "I'm loader2";\n</span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader1 = "I'm loader1";</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'./example/src/entry2.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dependencies</span><span class="token operator">:</span> Set <span class="token punctuation">{</span> <span class="token string">'./example/src/demo.js'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">'second'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token string">'const demo = __webpack_require__("./example/src/demo.js");\n'</span> <span class="token operator">+</span>
      <span class="token string">'\n'</span> <span class="token operator">+</span>
      <span class="token string">"console.log('demo', demo);\n"</span> <span class="token operator">+</span>
      <span class="token string">"console.log('This is entry 2 !');\n"</span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader2 = "I'm loader2";\n</span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader1 = "I'm loader1";</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OK，目前为止针对于<code v-pre>entry</code>的编译可以暂时告一段落了。</p>
<p><strong>总之也就是，这一步通过方法将<code v-pre>entry</code>进行分析编译后得到一个对象。将这个对象添加到<code v-pre>this.entries</code>中去。</strong></p>
<p>接下来去处理依赖的模块。</p>
<p>其实对于依赖的模块无非也是相同的步骤：</p>
<ul>
<li>检查入口文件中是否存在依赖。</li>
<li>存在依赖的话，递归调用<code v-pre>buildModule</code>方法编译模块。传入<code v-pre>moduleName</code>为当前模块所属的入口文件。<code v-pre>modulePath</code>为当前被依赖模块的绝对路径。</li>
<li>同理检查递归检查被依赖的模块内部是否仍然存在依赖，存在的话递归依赖进行模块编译。这是一个<strong>深度优先</strong>的过程。</li>
<li>将每一个编译后的模块保存进入<code v-pre>this.modules</code>中去。</li>
</ul>
<p>接下来只要稍稍在<code v-pre>handleWebpackCompiler</code>方法中稍稍改动就可以了:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 递归依赖深度遍历 存在依赖模块则加入</span>
module<span class="token punctuation">.</span>dependencies<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">dependency</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> depModule <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildModule</span><span class="token punctuation">(</span>moduleName<span class="token punctuation">,</span> dependency<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 将编译后的任何依赖模块对象加入到modules对象中去</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>modules<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>depModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里对于依赖的模块进行了递归调用<code v-pre>buildModule</code>,将输出的模块对象添加进入了<code v-pre>this.modules</code>中去。</p>
<p>此时让重新运行<code v-pre>webpack/core/index.js</code>进行编译，这里在<code v-pre>buildEntryModule</code>编译结束后打印了<code v-pre>assets</code>和<code v-pre>modules</code>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">buildEntryModule</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entryName</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> entryPath <span class="token operator">=</span> entry<span class="token punctuation">[</span>entryName<span class="token punctuation">]</span>
    <span class="token keyword">const</span> entityObj <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildModule</span><span class="token punctuation">(</span>entryName<span class="token punctuation">,</span> entryPath<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>entries<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>entityObj<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'entries'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>entries<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'modules'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>modules<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>entries Set <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'./example/src/entry1.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dependencies</span><span class="token operator">:</span> Set <span class="token punctuation">{</span> <span class="token string">'./example/src/demo.js'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">'main'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token string">'const demo = __webpack_require__("./example/src/demo.js");\n'</span> <span class="token operator">+</span>
      <span class="token string">'\n'</span> <span class="token operator">+</span>
      <span class="token string">"console.log('demo', demo);\n"</span> <span class="token operator">+</span>
      <span class="token string">"console.log('This is entry 1 !');\n"</span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader2 = "I'm loader2";\n</span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader1 = "I'm loader1";</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'./example/src/entry2.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dependencies</span><span class="token operator">:</span> Set <span class="token punctuation">{</span> <span class="token string">'./example/src/demo.js'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">'second'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token string">'const demo = __webpack_require__("./example/src/demo.js");\n'</span> <span class="token operator">+</span>
      <span class="token string">'\n'</span> <span class="token operator">+</span>
      <span class="token string">"console.log('demo', demo);\n"</span> <span class="token operator">+</span>
      <span class="token string">"console.log('This is entry 2 !');\n"</span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader2 = "I'm loader2";\n</span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader1 = "I'm loader1";</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
modules Set <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'./example/src/demo.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dependencies</span><span class="token operator">:</span> Set <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">'main'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token string">"const name = 'JSH';\n"</span> <span class="token operator">+</span>
      <span class="token string">'module.exports = {\n'</span> <span class="token operator">+</span>
      <span class="token string">'  name\n'</span> <span class="token operator">+</span>
      <span class="token string">'};\n'</span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader2 = "I'm loader2";\n</span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader1 = "I'm loader1";</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'./example/src/demo.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dependencies</span><span class="token operator">:</span> Set <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">'second'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token string">"const name = 'JSH';\n"</span> <span class="token operator">+</span>
      <span class="token string">'module.exports = {\n'</span> <span class="token operator">+</span>
      <span class="token string">'  name\n'</span> <span class="token operator">+</span>
      <span class="token string">'};\n'</span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader2 = "I'm loader2";\n</span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader1 = "I'm loader1";</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到已经将<code v-pre>demo.js</code>这个依赖如愿以偿加入到<code v-pre>modules</code>中了，同时它也经过<code v-pre>loader</code>的处理。但是我们发现它被重复加入了两次。</p>
<p>这是因为<strong>demo.js</strong>这个模块被引用了两次，它被<code v-pre>entry1</code>和<code v-pre>entry2</code>都已进行了依赖，在进行递归编译时进行了两次<code v-pre>buildModule</code>相同模块。</p>
<p>那么来处理下这个问题：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 生成 moduleId - 针对于根路径的模块ID 添加进入新的依赖模块路径</span>
<span class="token keyword">const</span> moduleId <span class="token operator">=</span> <span class="token string">'./'</span> <span class="token operator">+</span> <span class="token function">toUnixPath</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rootPath<span class="token punctuation">,</span> absolutePath<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 通过 babel 修改源代码中的 require 变成 __webpack_require__ 语句</span>
node<span class="token punctuation">.</span>callee <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">identifier</span><span class="token punctuation">(</span><span class="token string">'__webpack_require__'</span><span class="token punctuation">)</span>
<span class="token comment">// 修改源代码中 require 语句引入的模块 全部修改问相对于根路径来处理</span>
node<span class="token punctuation">.</span>arguments <span class="token operator">=</span> <span class="token punctuation">[</span>t<span class="token punctuation">.</span><span class="token function">stringLiteral</span><span class="token punctuation">(</span>moduleId<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token comment">// 转化当前 this.modules 为 ids</span>
<span class="token keyword">const</span> alreadyModules <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>modules<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> e<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>alreadyModules<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>moduleId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 为当前模块添加 require 语句造成的依赖(内容为相对于根路径的模块ID)</span>
  module<span class="token punctuation">.</span>dependencies<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>moduleId<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>modules<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>id <span class="token operator">===</span> moduleId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      value<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>moduleName<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里在每一次代码分析的依赖转化中，首先判断<code v-pre>this.module</code>对象是否已经存在当前模块了（通过唯一的模块id路径判断）。</p>
<p>如果不存在则添加进入依赖中进行编译，如果该模块已经存在过了就证明这个模块已经被编译过了。所以此时不需要将它再次进行编译，仅仅需要更新这个模块所属的chunk，为它的<code v-pre>name</code>属性添加当前所属的<code v-pre>chunk</code>名称。</p>
<p>重新运行，再来看看打印结果:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>entries Set <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'./example/src/entry1.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dependencies</span><span class="token operator">:</span> Set <span class="token punctuation">{</span> <span class="token string">'./example/src/demo.js'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">'main'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token string">'const demo = __webpack_require__("./example/src/demo.js");\n'</span> <span class="token operator">+</span>
      <span class="token string">'\n'</span> <span class="token operator">+</span>
      <span class="token string">"console.log('demo', demo);\n"</span> <span class="token operator">+</span>
      <span class="token string">"console.log('This is entry 1 !');\n"</span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader2 = "I'm loader2";\n</span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader1 = "I'm loader1";</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'./example/src/entry2.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dependencies</span><span class="token operator">:</span> Set <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">'second'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token string">'const demo = __webpack_require__("./example/src/demo.js");\n'</span> <span class="token operator">+</span>
      <span class="token string">'\n'</span> <span class="token operator">+</span>
      <span class="token string">"console.log('demo', demo);\n"</span> <span class="token operator">+</span>
      <span class="token string">"console.log('This is entry 2 !');\n"</span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader2 = "I'm loader2";\n</span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader1 = "I'm loader1";</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
modules Set <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'./example/src/demo.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dependencies</span><span class="token operator">:</span> Set <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">'main'</span><span class="token punctuation">,</span> <span class="token string">'./demo'</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token string">"const name = 'JSH';\n"</span> <span class="token operator">+</span>
      <span class="token string">'module.exports = {\n'</span> <span class="token operator">+</span>
      <span class="token string">'  name\n'</span> <span class="token operator">+</span>
      <span class="token string">'};\n'</span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader2 = "I'm loader2";\n</span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader1 = "I'm loader1";</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时针对“模块编译阶段”基本已经结束了，这一步对于所有模块从入口文件开始进行分析。</p>
<ul>
<li>从入口出发，读取入口文件内容调用匹配<code v-pre>loader</code>处理入口文件。</li>
<li>通过<code v-pre>babel</code>分析依赖，并且同时将所有依赖的路径更换为相对于项目启动目录<code v-pre>options.context</code>的路径。</li>
<li>入口文件中如果存在依赖的话，递归上述步骤编译依赖模块。</li>
<li>将每个依赖的模块编译后的对象加入<code v-pre>this.modules</code>。</li>
<li>将每个入口文件编译后的对象加入<code v-pre>this.entries</code>。</li>
</ul>
<h2 id="编译完成阶段" tabindex="-1"><a class="header-anchor" href="#编译完成阶段" aria-hidden="true">#</a> 编译完成阶段</h2>
<p>在上一步完成了模块之间的编译，并且为<code v-pre>module</code>和<code v-pre>entry</code>分别填充了内容。</p>
<p>在将所有模块递归编译完成后，需要<strong>根据上述的依赖关系，组合最终输出的<code v-pre>chunk</code>模块</strong>。</p>
<p>继续改造我们的<code v-pre>Compiler</code>吧:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">buildEntryModule</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entryName</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> entryPath <span class="token operator">=</span> entry<span class="token punctuation">[</span>entryName<span class="token punctuation">]</span>
    <span class="token comment">// 调用 buildModule 实现真正的模块编译逻辑</span>
    <span class="token keyword">const</span> entityObj <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildModule</span><span class="token punctuation">(</span>entryName<span class="token punctuation">,</span> entryPath<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>entries<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>entityObj<span class="token punctuation">)</span>
    <span class="token comment">// 根据当前入口文件和模块的相互依赖关系，组装成为一个个包含当前入口所有依赖模块的chunk</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildUpChunk</span><span class="token punctuation">(</span>entryName<span class="token punctuation">,</span> entityObj<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'entries'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>entries<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'modules'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>modules<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'chunks'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>chunks<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

  <span class="token function">buildUpChunk</span><span class="token punctuation">(</span><span class="token parameter">entryName<span class="token punctuation">,</span> entityObj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> chunk <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> entryName<span class="token punctuation">,</span> <span class="token comment">// 每一个入口文件作为一个chunk</span>
      <span class="token literal-property property">entryModule</span><span class="token operator">:</span> entityObj<span class="token punctuation">,</span>  <span class="token comment">// entry编译后的对象</span>
      <span class="token literal-property property">modules</span><span class="token operator">:</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>modules<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> e<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>entryName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 寻找与当前entry有关的所有module</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 将chunk添加到this.chunks中去</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>chunks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，根据对应的入口文件通过每一个模块(<code v-pre>module</code>)的<code v-pre>name</code>属性查找对应入口的所有依赖文件。</p>
<p>先来看看<code v-pre>this.chunks</code>最终会输出什么:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>chunks Set <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'main'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">entryModule</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'./example/src/entry1.js'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dependencies</span><span class="token operator">:</span> <span class="token punctuation">[</span>Set<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span>Array<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token string">'const demo = __webpack_require__("./example/src/demo.js");\n'</span> <span class="token operator">+</span>
        <span class="token string">'\n'</span> <span class="token operator">+</span>
        <span class="token string">"console.log('demo', demo);\n"</span> <span class="token operator">+</span>
        <span class="token string">"console.log('This is entry 1 !');\n"</span> <span class="token operator">+</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader2 = "I'm loader2";\n</span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader1 = "I'm loader1";</span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">[</span>Object<span class="token punctuation">]</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'second'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">entryModule</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'./example/src/entry2.js'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dependencies</span><span class="token operator">:</span> Set <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span>Array<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">_source</span><span class="token operator">:</span> <span class="token string">'const demo = __webpack_require__("./example/src/demo.js");\n'</span> <span class="token operator">+</span>
        <span class="token string">'\n'</span> <span class="token operator">+</span>
        <span class="token string">"console.log('demo', demo);\n"</span> <span class="token operator">+</span>
        <span class="token string">"console.log('This is entry 2 !');\n"</span> <span class="token operator">+</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader2 = "I'm loader2";\n</span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const loader1 = "I'm loader1";</span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这一步，<strong>得到了<code v-pre>Webpack</code>中最终输出的两个<code v-pre>chunk</code></strong>。</p>
<p>它们分别拥有:</p>
<ul>
<li><code v-pre>name</code>:当前入口文件的名称</li>
<li><code v-pre>entryModule</code>: 入口文件编译后的对象。</li>
<li><code v-pre>modules</code>: 该入口文件依赖的所有模块对象组成的数组，其中每一个元素的格式和<code v-pre>entryModule</code>是一致的。</li>
</ul>
<p>此时编译完成，拼装<code v-pre>chunk</code>的环节就圆满完成。</p>
<h2 id="输出文件阶段" tabindex="-1"><a class="header-anchor" href="#输出文件阶段" aria-hidden="true">#</a> 输出文件阶段</h2>
<h3 id="分析原始打包输出结果" tabindex="-1"><a class="header-anchor" href="#分析原始打包输出结果" aria-hidden="true">#</a> 分析原始打包输出结果</h3>
<p>这里，我把<code v-pre>webpack-demo/core/index.js</code>中做了如下修改:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">-</span> <span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">+</span> <span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>运用原本的<code v-pre>webpack</code>代替自己实现的<code v-pre>webpack</code>先进行一次打包。</p>
<p>运行<code v-pre>webpack-demo/core/index.js</code>后，我们会在<code v-pre>webpack-demo/src/build</code>中得到两个文件:<code v-pre>main.js</code>和<code v-pre>second.js</code>，以其中一个<code v-pre>main.js</code>来看看它的内容:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/******/</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// webpackBootstrap</span>
<span class="token doc-comment comment">/******/</span>   <span class="token keyword">var</span> __webpack_modules__ <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>

<span class="token doc-comment comment">/***/ "./example/src/demo.js":
/*!*****************************!*\
  !*** ./example/src/demo.js ***!
  \*****************************/</span>
<span class="token doc-comment comment">/***/ ((module) => <span class="token punctuation">{</span>

const name = 'JSH';

module.exports = <span class="token punctuation">{</span>
  name,
<span class="token punctuation">}</span>;
 const loader2 = "I'm loader2";
 const loader1 = "I'm loader1";

/***/</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/******/</span>   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/************************************************************************/</span>
<span class="token doc-comment comment">/******/</span>   <span class="token comment">// The module cache</span>
<span class="token doc-comment comment">/******/</span>   <span class="token keyword">var</span> __webpack_module_cache__ <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/******/</span>   
<span class="token doc-comment comment">/******/</span>   <span class="token comment">// The require function</span>
<span class="token doc-comment comment">/******/</span>   <span class="token keyword">function</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token parameter">moduleId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token doc-comment comment">/******/</span>    <span class="token comment">// Check if module is in cache</span>
<span class="token doc-comment comment">/******/</span>    <span class="token keyword">var</span> cachedModule <span class="token operator">=</span> __webpack_module_cache__<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/******/</span>    <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedModule <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token doc-comment comment">/******/</span>     <span class="token keyword">return</span> cachedModule<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
<span class="token doc-comment comment">/******/</span>    <span class="token punctuation">}</span>
<span class="token doc-comment comment">/******/</span>    <span class="token comment">// Create a new module (and put it into the cache)</span>
<span class="token doc-comment comment">/******/</span>    <span class="token keyword">var</span> module <span class="token operator">=</span> __webpack_module_cache__<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token doc-comment comment">/******/</span>     <span class="token comment">// no module.id needed</span>
<span class="token doc-comment comment">/******/</span>     <span class="token comment">// no module.loaded needed</span>
<span class="token doc-comment comment">/******/</span>     <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token doc-comment comment">/******/</span>    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/******/</span>   
<span class="token doc-comment comment">/******/</span>    <span class="token comment">// Execute the module function</span>
<span class="token doc-comment comment">/******/</span>    __webpack_modules__<span class="token punctuation">[</span>moduleId<span class="token punctuation">]</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> __webpack_require__<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/******/</span>   
<span class="token doc-comment comment">/******/</span>    <span class="token comment">// Return the exports of the module</span>
<span class="token doc-comment comment">/******/</span>    <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
<span class="token doc-comment comment">/******/</span>   <span class="token punctuation">}</span>
<span class="token doc-comment comment">/******/</span>   
<span class="token doc-comment comment">/************************************************************************/</span>
<span class="token keyword">var</span> __webpack_exports__ <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.</span>
<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token comment">/*!*******************************!*\
  !*** ./example/src/entry1.js ***!
  \*******************************/</span>
<span class="token keyword">const</span> demo <span class="token operator">=</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token comment">/*! ./demo */</span> <span class="token string">"./example/src/demo.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'demo'</span><span class="token punctuation">,</span> demo<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This is entry 1 !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token keyword">const</span> loader2 <span class="token operator">=</span> <span class="token string">"I'm loader2"</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> loader1 <span class="token operator">=</span> <span class="token string">"I'm loader1"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/******/</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来稍微分析一下原始打包生成的代码：</p>
<p><code v-pre>webpack</code>打包后的代码内部定义了一个<code v-pre>__webpack_require__</code>的函数代替了<code v-pre>NodeJs</code>内部的<code v-pre>require</code>方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.</span>
<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token comment">/*!*******************************!*\
  !*** ./example/src/entry1.js ***!
  \*******************************/</span>
<span class="token keyword">const</span> demo <span class="token operator">=</span> <span class="token function">__webpack_require__</span><span class="token punctuation">(</span><span class="token comment">/*! ./demo */</span> <span class="token string">"./example/src/demo.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'demo'</span><span class="token punctuation">,</span> demo<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'This is entry 1 !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token keyword">const</span> loader2 <span class="token operator">=</span> <span class="token string">"I'm loader2"</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> loader1 <span class="token operator">=</span> <span class="token string">"I'm loader1"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/******/</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这块代码相比大家都很熟悉吧，这就是自己编译后的入口文件代码。同时顶部的代码是该入口文件依赖的所有模块定义的一个对象:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/******/</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// webpackBootstrap</span>
<span class="token doc-comment comment">/******/</span>   <span class="token keyword">var</span> __webpack_modules__ <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>

<span class="token doc-comment comment">/***/ "./example/src/demo.js":
/*!*****************************!*\
  !*** ./example/src/demo.js ***!
  \*****************************/</span>
<span class="token doc-comment comment">/***/ ((module) => <span class="token punctuation">{</span>

const name = 'JSH';

module.exports = <span class="token punctuation">{</span>
  name,
<span class="token punctuation">}</span>;
 const loader2 = "I'm loader2";
 const loader1 = "I'm loader1";

/***/</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里定义了一个<code v-pre>__webpack__modules</code>的对象，对象的<code v-pre>key</code>为该依赖模块相对于跟路径的相对路径，对象的<code v-pre>value</code>该依赖模块编译后的代码。</p>
<h3 id="输出文件阶段-1" tabindex="-1"><a class="header-anchor" href="#输出文件阶段-1" aria-hidden="true">#</a> 输出文件阶段</h3>
<p>接下里在分析完<code v-pre>webpack</code>原始打包后的代码之后，来继续上一步。通过<code v-pre>this.chunks</code>来尝试输出最终的效果吧。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// run方法启动编译, 同时run方法接受外部传递的callback</span>
<span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 当调用run方法时，触发开始编译的plugin</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 获取入口配置对象</span>
  <span class="token keyword">const</span> entry <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getEntry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 编译入口文件</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildEntryModule</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span>
  <span class="token comment">// 导出列表 之后将每个chunk转化为单独的文件 加入到输出列表 this.assets 中</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">exportFile</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>buildEntryModule</code>模块编译完成之后，通过<code v-pre>this.exportFile</code>方法实现导出文件的逻辑。</p>
<p>来一起看看<code v-pre>this.exportFile</code>方法:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 将chunk加入输出列表中去</span>
  <span class="token function">exportFile</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> output <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>output
    <span class="token comment">// 根据 chunks 生成的 assets 内容</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>chunks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">chunk</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> parseFileName <span class="token operator">=</span> output<span class="token punctuation">.</span>filename<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'[name]'</span><span class="token punctuation">,</span> chunk<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
      <span class="token comment">// assets 中 { 'main.js': '代码字符串' }</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>assets<span class="token punctuation">[</span>parseFileName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getSourceCode</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span>
      <span class="token comment">// files 中保存所有的生成文件名</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>files<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>parseFileName<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 调用 plugin emit 钩子</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 判断目录是否存在 存在就直接 fs.write 不存在就需要新建目录</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>output<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span>output<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 将 assets 中的内容生成打包文件 写入文件系统中</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>assets<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fileName</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>output<span class="token punctuation">.</span>path<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span>
      fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>assets<span class="token punctuation">[</span>fileName<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 结束之后 调用 plugin done 钩子</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">toJSON</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">entries</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>entries<span class="token punctuation">,</span>
          <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>modules<span class="token punctuation">,</span>
          <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>chunks<span class="token punctuation">,</span>
          <span class="token literal-property property">assets</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>assets<span class="token punctuation">,</span>
          <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>files<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>exportFile</code>做了如下几件事:</p>
<ul>
<li>首先获取配置参数的输出配置，迭代我们的<code v-pre>this.chunks</code>，将<code v-pre>output.filename</code>中的<code v-pre>[name]</code>替换称为对应的入口文件名称。同时根据<code v-pre>chunks</code>的内容为<code v-pre>this.assets</code>中添加需要打包生成的文件名和文件内容。</li>
<li>将文件写入磁盘前调用<code v-pre>plugin</code>的<code v-pre>emit</code>钩子函数。</li>
<li>判断<code v-pre>output.path</code>文件夹是否存在，如果不存在，则通过<code v-pre>fs</code>新建这个文件夹。</li>
<li>将本次打包生成的所有文件名(<code v-pre>this.assets</code>的<code v-pre>key</code>值组成的数组)存放进入<code v-pre>files</code>中去。</li>
<li>循环<code v-pre>this.assets</code>，将文件依次写入对应的磁盘中去。</li>
<li>所有打包流程结束，触发<code v-pre>webpack</code>插件的<code v-pre>done</code>钩子。</li>
<li>同时为<code v-pre>NodeJs Webpack APi</code>呼应，调用<code v-pre>run</code>方法中外部传入的<code v-pre>callback</code>传入两个参数。</li>
</ul>
<p>总的来说，<code v-pre>this.assets</code>做的事情也比较简单，就是通过分析<code v-pre>chunks</code>得到<code v-pre>assets</code>然后输出对应的代码到磁盘中。</p>
<p>仔细看过上边代码，会发现<code v-pre>this.assets</code>这个<code v-pre>Map</code>中每一个元素的<code v-pre>value</code>是通过调用<code v-pre>getSourceCode(chunk)</code>方法来生成模块对应的代码的。</p>
<p>那么<code v-pre>getSourceCode</code>这个方法是如何根据<code v-pre>chunk</code>来生成最终编译后的代码呢？一起来看看吧！</p>
<h3 id="getsourcecode方法" tabindex="-1"><a class="header-anchor" href="#getsourcecode方法" aria-hidden="true">#</a> <code v-pre>getSourceCode</code>方法</h3>
<p>首先简单明确一下这个方法的职责，需要<code v-pre>getSourceCode</code>方法接受传入的<code v-pre>chunk</code>对象。从而返回该<code v-pre>chunk</code>的源代码。</p>
<p>废话不多说，其实这里用了一个比较偷懒的办法，但是完全不妨碍理解<code v-pre>Webpack</code>流程，上边分析过原本<code v-pre>webpack</code>打包后的代码<strong>仅仅只有入口文件和模块依赖是每次打包不同的地方，关于<code v-pre>require</code>方法之类都是相通的</strong>。</p>
<p>把握每次的不同点，直接先来看看它的实现方式:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">chunk</span>
 * name属性入口文件名称
 * entryModule入口文件module对象
 * modules 依赖模块路径
 */</span>
<span class="token keyword">function</span> <span class="token function">getSourceCode</span><span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> entryModule<span class="token punctuation">,</span> modules <span class="token punctuation">}</span> <span class="token operator">=</span> chunk<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
(() => {
var __webpack_modules__ = ({
  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> modules<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">'</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>module<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">': ((module) => {</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>module<span class="token punctuation">.</span>_source<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">})</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">).join(',') }
 \t});

 \tvar __webpack_module_cache__ = {};

 \tfunction __webpack_require__(moduleId) {
 \t\tvar cachedModule = __webpack_module_cache__[moduleId];
 \t\tif (cachedModule !== undefined) {
 \t\t\treturn cachedModule.exports;
 \t\t}
 \t\tvar module = __webpack_module_cache__[moduleId] = {
 \t\t\texports: {}
 \t\t};

 \t\t__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

 \t\treturn module.exports;
\t}

  var __webpack_exports__ = {};
  (() => {
    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> entryModule<span class="token punctuation">.</span>_source <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
  })();

 })()
;
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码其实非常简单，远远没有想象难！有点返璞归真的感觉是吗哈哈。</p>
<p>在<code v-pre>getSourceCode</code>方法中，通过组合而来的<code v-pre>chunk</code>获得对应的:</p>
<ul>
<li><code v-pre>name</code>: 该入口文件对应输出文件的名称。</li>
<li><code v-pre>entryModule</code>: 存放该入口文件编译后的对象。</li>
<li><code v-pre>modules</code>:存放该入口文件依赖的所有模块的对象。</li>
</ul>
<p><strong>通过字符串拼接的方式去实现了<code v-pre>__webpack__modules</code>对象上的属性，同时也在底部通过<code v-pre>${entryModule._source}</code>拼接出入口文件的代码。</strong></p>
<blockquote>
<p>上文提到过为什么要将模块的<code v-pre>require</code>方法的路径转化为相对于跟路径(<code v-pre>context</code>)的路径，看到这里相信大家都已经了然于胸了。因为最终实现的<code v-pre>__webpack_require__</code>方法全都是针对于模块相对于跟路径的相对路径实现的<code v-pre>require</code>方法。同时如果不太清楚<code v-pre>require</code>方法是如何转成为<code v-pre>__webpack_require__</code>方法，可以重新回到编译环节重新阅读～通过<code v-pre>babel</code>在<code v-pre>AST</code>转化阶段将<code v-pre>require</code>方法调用变成了<code v-pre>__webpack_require__</code>。</p>
</blockquote>
<h1 id="大功告成" tabindex="-1"><a class="header-anchor" href="#大功告成" aria-hidden="true">#</a> 大功告成</h1>
<p>至此，让我们回到<code v-pre>webpack-demo/core/index.js</code>中去。重新运行这个文件，你会发现<code v-pre>webpack-demo/example</code>目录下会多出一个<code v-pre>build</code>目录。</p>
<p>到这实现属于我们自己的<code v-pre>webpack</code>。</p>
<p>实质上，对于实现一个简单版的<code v-pre>webpack</code>核心，还是希望大家可以在理解它的工作流的同时彻底理解<code v-pre>compiler</code>这个对象。</p>
<p>在之后的关于<code v-pre>webpack</code>相关底层开发中，真正做到对于<code v-pre>compiler</code>的用法了然于胸。了解<code v-pre>compiler</code>上的各种属性是如何影响到编译打包结果的。</p>
</div></template>


