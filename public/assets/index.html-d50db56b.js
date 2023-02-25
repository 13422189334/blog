import{_ as n,W as s,X as a,Y as p}from"./framework-6cf4f5ec.js";const t={},e=[p('<h2 id="二分查找理论" tabindex="-1"><a class="header-anchor" href="#二分查找理论" aria-hidden="true">#</a> 二分查找理论</h2><p>二分查找也称折半查找（Binary Search），它是一种效率较高的查找方法。但是，折半查找要求线性表必须采用 顺序存储结构 ，而且表中元素按关键字有序排列。</p><p>首先，假设表中元素是按升序排列，将表中间位置记录的 关键字 与查找关键字比较，如果两者相等，则查找成功；否则利用中间位置 记录 将表分成前、后两个子表，如果中间位置记录的关键字大于查找关键字，则进一步查找前一子表，否则进一步查找后一子表。重复以上过程，直到找到满足条件的 记录 ，使查找成功，或直到子表不存在为止，此时查找不成功。</p><p>二分查找是我们降低算法复杂度的主要手段之一，只要我们可以题目中存在：</p><ul><li>有序</li><li>查找</li></ul><p>两个因素，就可以用二分查找降低时间复杂度。</p><p>在最开始的阶段，二分查找的难点在于识别有序和查找。后面的难点在于如果通过建模手段把题目的数据变得存在有序和查找。</p><h2 id="方式" tabindex="-1"><a class="header-anchor" href="#方式" aria-hidden="true">#</a> 方式</h2><p>二分查找的精髓就是 3 点：</p><ol><li>目标值小于查找值时怎么办</li><li>目标值等于查找值时怎么办</li><li>目标值大于查找值时怎么办</li></ol><p>二分查找这么看就成为了填空题。</p><p>二分查找的作用就是在 Logn 的时间复杂度内找到想要的数据。共有 5 种类型的二分查找方式：</p><ul><li>数据无重复查找数据</li><li>数据有重复查找小于该数的最后一个数字的位置</li><li>数据有重复查找该数字第一次出现的位置</li><li>数据有重复查找该数字最后一次出现的位置</li><li>数据有重复查找第一个大于该数的数字的位置</li></ul><p>下面针对这五类进行代码介绍。</p><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2><h3 id="第一类-数据无重复查找数据" tabindex="-1"><a class="header-anchor" href="#第一类-数据无重复查找数据" aria-hidden="true">#</a> 第一类 - 数据无重复查找数据</h3><p>位置：0 1 2 3 4 5 6 7 8 9</p><p>数据：1 2 3 4 5 6 7 8 9 10</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> numbers<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> right <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> middle <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> middle<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            right <span class="token operator">=</span> middle <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>\n            left <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二类-数据有重复查找小于该数的最后一个数字的位置" tabindex="-1"><a class="header-anchor" href="#第二类-数据有重复查找小于该数的最后一个数字的位置" aria-hidden="true">#</a> 第二类 - 数据有重复查找小于该数的最后一个数字的位置</h3><p>位置：0 1 2 3 4 5 6 7 8 9</p><p>数据：1 1 2 2 3 3 3 3 4 4</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> numbers<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> right <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> middle <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            right <span class="token operator">=</span> middle <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            right <span class="token operator">=</span> middle <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>\n            left <span class="token operator">=</span> middle<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> left<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三类-数据有重复查找该数字第一次出现的位置" tabindex="-1"><a class="header-anchor" href="#第三类-数据有重复查找该数字第一次出现的位置" aria-hidden="true">#</a> 第三类 - 数据有重复查找该数字第一次出现的位置</h3><p>位置：0 1 2 3 4 5 6 7 8 9</p><p>数据：1 1 2 2 3 3 3 3 4 4</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> numbers<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> right <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> middle <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            right <span class="token operator">=</span> middle<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            right <span class="token operator">=</span> middle<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>\n            left <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> left<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第四类-数据有重复查找该数字最后一次出现的位置" tabindex="-1"><a class="header-anchor" href="#第四类-数据有重复查找该数字最后一次出现的位置" aria-hidden="true">#</a> 第四类 - 数据有重复查找该数字最后一次出现的位置</h3><p>位置：0 1 2 3 4 5 6 7 8 9</p><p>数据：1 1 2 2 3 3 3 3 4 4</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> numbers<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> right <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> middle <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            left <span class="token operator">=</span> middle<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            right <span class="token operator">=</span> middle <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>\n            left <span class="token operator">=</span> middle<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> left<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第五类-数据有重复查找第一个大于该数的数字的位置" tabindex="-1"><a class="header-anchor" href="#第五类-数据有重复查找第一个大于该数的数字的位置" aria-hidden="true">#</a> 第五类 - 数据有重复查找第一个大于该数的数字的位置</h3><p>位置：0 1 2 3 4 5 6 7 8 9</p><p>数据：1 1 2 2 3 3 3 3 4 4</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> numbers<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> right <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> middle <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            left <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            right <span class="token operator">=</span> middle<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>\n            left <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> left<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实战" tabindex="-1"><a class="header-anchor" href="#实战" aria-hidden="true">#</a> 实战</h2><p>题目来自力扣。</p><h3 id="搜索插入位置" tabindex="-1"><a class="header-anchor" href="#搜索插入位置" aria-hidden="true">#</a> 搜索插入位置</h3><p>搜索插入位置</p><div class="hint-container info"><p class="hint-container-title">Tips</p><p>给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。</p><p>请必须使用时间复杂度为 O(log n) 的算法。</p></div><p><code>示例 1</code></p><p>输入: nums = [1,3,5,6], target = 5</p><p>输出: 2</p><p><code>示例 2</code></p><p>输入: nums = [1,3,5,6], target = 2</p><p>输出: 1</p><p><code>示例 3</code></p><p>输入: nums = [1,3,5,6], target = 7</p><p>输出: 4</p><h4 id="思路与算法" tabindex="-1"><a class="header-anchor" href="#思路与算法" aria-hidden="true">#</a> 思路与算法</h4><p>假设题意是叫你在排序数组中寻找是否存在一个目标值，那么训练有素的读者肯定立马就能想到利用二分法在 O(\\log n)O(logn) 的时间内找到是否存在目标值。但这题还多了个额外的条件，即如果不存在数组中的时候需要返回按顺序插入的位置，那我们还能用二分法么？答案是可以的，我们只需要稍作修改即可。</p><p>考虑这个插入的位置 pos，它成立的条件为：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>nums<span class="token punctuation">[</span>pos−<span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> target ≤ nums<span class="token punctuation">[</span>pos<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 nums 代表排序数组。由于如果存在这个目标值，我们返回的索引也是 pos，因此我们可以将两个条件合并得出最后的目标：「在一个有序数组中找第一个大于等于 target 的下标」。</p><p>问题转化到这里，直接套用二分法即可，即不断用二分法逼近查找第一个大于等于 target 的下标 。下文给出的代码是笔者习惯的二分写法，ans 初值设置为数组长度可以省略边界条件的判断，因为存在一种情况是 target 大于数组中的所有数，此时需要插入到数组长度的位置。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">searchInsert</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> mid<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> left<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有序数组中的单一元素" tabindex="-1"><a class="header-anchor" href="#有序数组中的单一元素" aria-hidden="true">#</a> 有序数组中的单一元素</h3><div class="hint-container info"><p class="hint-container-title">Tips</p><p>给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。</p><p>请你找出并返回只出现一次的那个数。</p><p>你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。</p></div><p><code>示例 1</code></p><p>输入: nums = [1,1,2,3,3,4,4,8,8]</p><p>输出: 2</p><p><code>示例 2</code></p><p>输入: nums = [3,3,7,7,10,11,11]</p><p>输出: 10</p><h4 id="思路与算法-1" tabindex="-1"><a class="header-anchor" href="#思路与算法-1" aria-hidden="true">#</a> 思路与算法</h4><p>因为找出唯一一个没有重复的数，且其他相同的数只有两个，所以利用二分查找时，根据 mid 和它的前后来进行判断。</p><p>那么怎么知道不重复的在 mid 的左边还是右边呢？</p><p>根据 mid 的左侧和右侧个数来判断，因为 mid 指的是下标。</p><ul><li><p>假设 mid 是偶数，则前面有 <code>2 * n</code> 的数，如果 <code>nums[mid] == nums[mid - 1]</code>，则代表左侧必有不重复的数，因为前面原本有 <code>2 * n</code> 的数，则假设正好存在 <code>n / 2</code> 个重复的数，但是显然 <code>nums[mid] == nums[mid - 1]</code>，所以左侧必有唯一的数。（0 - mid 之间不取 mid 是偶数，取了 mid 则是奇数，奇数之间肯定有一个唯一的数）</p></li><li><p>假设 mid 是奇数，则前面有 <code>2 * n - 1</code> 个数，如果 <code>nums[mid] == nums[mid - 1]</code>，则代表右侧的必有不重复的数，因为前面原本有 <code>2 * n - 1</code> 的数，则假设正好存在 2 个重复的数 + 一个不重复的数，但是显然 <code>nums[mid] == nums[mid - 1]</code>，所以右侧必有唯一的数。（0 - mid 之间不取 mid 是奇数，取了 mid 则是偶数，偶数之间不存在唯一的数，所以只有右侧有）</p></li><li><p><code>nums[mid] == nums[mid + 1]</code> 同理 ......</p></li></ul><p>如果最终 <code>mid</code> 是 <code>0</code> 或者 <code>nums.length - 1</code>，则 <code>0</code> 或者 <code>nums.length - 1</code> 就是唯一数的下标。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">singleNonDuplicate</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">int</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>mid <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>mid <span class="token operator">==</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span> nums<span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token comment">// mid 指的是下标，如果 mid 是偶数（则 mid 前面一定有 2 * n 个数），则 mid 左边的数字一定是唯一的，如 nums = [1, 1, 2, 3, 3, 5, 5, 8, 8]</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span> \n                <span class="token comment">// 如果 mid 是奇数（则 mid 前面一定有 2 * n - 1 个数），则 mid 右边的数字一定是唯一的</span>\n                <span class="token keyword">else</span> <span class="token punctuation">{</span> \n                    left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token comment">// 如果 mid 是偶数（则 mid 前面一定有 2 * n 个数），则 mid 右边的数字一定是唯一的，因为满足了 nums[mid] == nums[mid + 1]</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                <span class="token comment">// 如果 mid 是奇数（则 mid 前面一定有 2 * n - 1 个数），则 mid 左边的数字一定是唯一的</span>\n                <span class="token keyword">else</span> <span class="token punctuation">{</span> \n                    right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',71)];const o=n(t,[["render",function(n,p){return s(),a("div",null,e)}],["__file","index.html.vue"]]);export{o as default};
