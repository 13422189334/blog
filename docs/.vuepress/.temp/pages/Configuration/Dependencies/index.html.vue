<template><div><h2 id="浑水摸鱼的说法" tabindex="-1"><a class="header-anchor" href="#浑水摸鱼的说法" aria-hidden="true">#</a> 浑水摸鱼的说法？</h2>
<p>以前说到 <code v-pre>dependencies</code> 和 <code v-pre>devDependencies</code> 的时候，大家会想到啥？</p>
<ul>
<li><code v-pre>dependencies</code>：生产环境需要的依赖</li>
<li><code v-pre>devDependencies</code>：开发环境需要的依赖</li>
</ul>
<p>但是我们装依赖的时候真的会去考虑 <code v-pre>npm install -D</code> 还是 <code v-pre>npm install -S</code> 吗？</p>
<p>其实<code v-pre>并不会</code>去关心哪些是<code v-pre>生产环境</code>所需依赖，哪些是<code v-pre>开发环境</code>所需依赖，但是这也正常，因为其实在<code v-pre>SPA</code>项目中，这两个东西并<code v-pre>不需要区分</code>！所以平时没有过多了解也正常！！！</p>
<h2 id="spa项目" tabindex="-1"><a class="header-anchor" href="#spa项目" aria-hidden="true">#</a> SPA项目</h2>
<p>所谓SPA项目，其实指的就是<code v-pre>单页面应用</code>，比如说<code v-pre>Vue</code>、<code v-pre>React</code>项目这些</p>
<h3 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h3>
<p>开发项目时，肯定是两种包都需要安装的</p>
<h3 id="生产环境" tabindex="-1"><a class="header-anchor" href="#生产环境" aria-hidden="true">#</a> 生产环境</h3>
<p>生产环境中，是将开发环境的代码，使用某些打包工具，例如<code v-pre>Webpack</code>，将整个项目代码<code v-pre>打包</code>成一些<code v-pre>静态的文件</code>，然后将这些<code v-pre>静态文件</code>部署到<code v-pre>服务器</code>上，也就是到达生产环境。</p>
<p>所以大家也看到了，只有<code v-pre>开发环境</code>时需要<code v-pre>装包</code>，<code v-pre>生产环境</code>是<code v-pre>不需要装包</code>的，所以把包放在<code v-pre>dependencies</code>和<code v-pre>devDependencies</code>中是<code v-pre>没有区别</code>的。</p>
<p>为什么这么说呢？因为其实无论把包放在哪里都好，只要你代码中<code v-pre>引用</code>到了这个包，那么<code v-pre>Webpack</code>打包时就会把这个包<code v-pre>打包</code>进静态文件中。</p>
<p>所以，在开发SPA项目时，<code v-pre>dependencies和devDependencies并没啥区分意义</code>。</p>
<h2 id="nodejs项目" tabindex="-1"><a class="header-anchor" href="#nodejs项目" aria-hidden="true">#</a> Nodejs项目</h2>
<p><code v-pre>Nodejs</code>项目<code v-pre>上线</code>的话，是<code v-pre>不用打包</code>的，是将整个<code v-pre>完整项目代码</code>扔到<code v-pre>服务器</code>上，然后运行，所以它是<code v-pre>需要</code>区分<code v-pre>dependencies</code>和<code v-pre>devDependencies</code>的。</p>
<p>因为当它部署到服务器上之后，也就是生产环境之后，它是需要再 <code v-pre>npm install</code> 一次的。</p>
<div class="custom-container danger">
<p class="custom-container-title">警告</p>
<Badge text="举个例子" type="warning"/> <p>在开发环境的时候，需要做<code v-pre>单元测试</code>，装了单元测试所需要的<code v-pre>依赖包</code>，那么这个包是放在 <code v-pre>dependencies</code> 还是放在 <code v-pre>devDependencies</code> 呢？</p>
<p>如果放在<code v-pre>devDependencies</code>，那么<code v-pre>开发环境</code>下进行<code v-pre>npm install</code>时是会安装的，而<code v-pre>生产环境</code>下<code v-pre>npm install</code>是不会安装的，这很合理，因为肯定是生产环境测试无误后再上生产环境，所以单元测试所需依赖包<code v-pre>只需要</code>在开发环境安装即可，到了生产环境我并不需要这个包</p>
<p>如果放在<code v-pre>dependencies</code>，那么<code v-pre>开发环境</code>、<code v-pre>生产环境</code>下进行<code v-pre>npm install</code>时<code v-pre>都</code>是会安装的，这并不合理啊，我生产环境时并不需要用到这些单元测试的包啊！</p>
<p>所以在<code v-pre>Nodejs</code>项目中，<code v-pre>dependencies</code> 和 <code v-pre>devDependencies</code>是有区分意义的。</p>
</div>
<h2 id="npm包" tabindex="-1"><a class="header-anchor" href="#npm包" aria-hidden="true">#</a> NPM包</h2>
<p>开发了一个NPM包，叫做<code v-pre>npm-lsx</code>，在开发的过程中，需要对所开发的这个包进行<code v-pre>单元测试</code>，所以安装了所需的依赖包<code v-pre>npm-test</code>，也就是依赖关系是<code v-pre>npm-lsx -&gt; npm-test</code></p>
<p>小明在做一个<code v-pre>项目A</code>，他项目中装了<code v-pre>npm-lsx</code>这个包，而大家都知道，装一个包时，会连同这个包所依赖的包都一起装，所以按理说<code v-pre>npm-lsx</code>、<code v-pre>npm-test</code>都会装，但是大家想想，<code v-pre>项目A</code>需要<code v-pre>npm-test</code>这个包吗？</p>
<p>并不需要，这个包对于项目A来说<code v-pre>没意义</code>。</p>
<p>你可以理解为，项目A的 <code v-pre>开发环境</code>，其实就是 <code v-pre>npm-lsx</code> 的 <code v-pre>生产环境</code>。</p>
<p>所以在开发<code v-pre>npm-lsx</code>的时候会把<code v-pre>npm-test</code>装在<code v-pre>devDependencies</code>中，这样，项目A就可以少装一些<code v-pre>没意义的包</code>，加快整体装包速度！</p>
<p>所以在<code v-pre>NPM</code>项目中，<code v-pre>dependencies</code> 和 <code v-pre>devDependencies</code>是有区分意义的。</p>
</div></template>


