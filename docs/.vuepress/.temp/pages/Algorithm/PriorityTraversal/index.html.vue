<template><div><h2 id="深度优先遍历" tabindex="-1"><a class="header-anchor" href="#深度优先遍历" aria-hidden="true">#</a> 深度优先遍历</h2>
<p>深度优先遍历（Depth First Search，简称 DFS）就是找准一条路不停深入的搜索方法，
当发现这条路走不通的时候就会回退到上一个探索的节点，如果上一个节点存在没有探索的分支，便继续探索若没有则继续回退。
深度优先遍历就有点像二叉树中的前序遍历、中序遍历和后序遍历。</p>
<p>它的特点是不撞南墙不回头，先走完一条路，再换一条路继续走。</p>
<p>深度优先遍历的关键就在于如何找到已经探索过节点的上一个节点，也就是如何回溯。</p>
<p><img src="/assets/algorithm/priorityTraversal/pt_000.jpg" alt="pt_000"></p>
<!-- more -->
<ul>
<li>从根节点 1 开始遍历，它相邻的节点有 2，3，4，先遍历节点 2，再遍历 2 的子节点 5，然后再遍历 5 的子节点 9</li>
<li>此时 2 以及下面的节点遍历完后，回到根节点 1，继续遍历 3，6，10，7</li>
<li>此时 3 以及下面的节点遍历完后，回到根节点 1，继续遍历 4，8</li>
<li>完整的遍历顺序图如下：</li>
</ul>
<img :src="$withBase('/assets/algorithm/priorityTraversal/pt_001.jpg')" />
<p>另一个利用栈的动图描述：</p>
<img :src="$withBase('/assets/algorithm/priorityTraversal/pt_002.gif')" />
<h3 id="递归实现" tabindex="-1"><a class="header-anchor" href="#递归实现" aria-hidden="true">#</a> 递归实现</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"DFS 遍历，这里应该存节点，如：list.add(root)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 遍历左节点 </span>
  <span class="token function">preOrderRecur</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 遍历右节点 </span>
  <span class="token function">preOrderRecur</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代实现" tabindex="-1"><a class="header-anchor" href="#迭代实现" aria-hidden="true">#</a> 迭代实现</h3>
<p>根据深度优先算法的特性，可以使用栈先入后出的特性实现。</p>
<p>将探索过的点存入栈内，遇到走不通的时候将栈顶元素出栈回到上一个元素，实现回溯</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	<span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">></span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	<span class="token class-name">TreeNode</span> node <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"DFS 遍历，这里应该存节点，如：list.add(node)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  	<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	  stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  	<span class="token punctuation">}</span>
  	<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	  stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  	<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不难发现，上面的图这就是树的前序遍历，实际上不管是前序遍历，还是中序遍历，亦或是后序遍历，都属于深度优先遍历。</p>
<p>详细关于 DFS 的前序遍历、中序遍历、后序遍历的讲解，请看 二叉树遍历。</p>
<h2 id="广度优先遍历" tabindex="-1"><a class="header-anchor" href="#广度优先遍历" aria-hidden="true">#</a> 广度优先遍历</h2>
<p>广度优先遍历（Breath First Search，简称 BFS）一层一层遍历，每一层得到的所有新节点，要用队列存储起来以备下一层遍历的时候再遍历。</p>
<img :src="$withBase('/assets/algorithm/priorityTraversal/pt_003.gif')" />
<p>可以看出，遍历的顺序先是 2，3，4，接着是 5，6，7，8，最后是 9，10。属于一层一层遍历。</p>
<p>另一个利用队列的动图描述：</p>
<img :src="$withBase('/assets/algorithm/priorityTraversal/pt_004.gif')" />
<p>深度优先遍历用的是栈，而广度优先遍历要用队列来实现。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bfs</span><span class="token punctuation">(</span><span class="token class-name">Node</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span> 
  <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">></span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  stack<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span> 
 
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token class-name">Node</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"BFS 遍历，这里可以存节点，如 list.add(node)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token class-name">Node</span> left <span class="token operator">=</span> node<span class="token punctuation">.</span>left<span class="token punctuation">;</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> 
    <span class="token class-name">Node</span> right <span class="token operator">=</span> node<span class="token punctuation">.</span>right<span class="token punctuation">;</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        queue<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> 
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


