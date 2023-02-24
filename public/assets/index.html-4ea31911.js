import{_ as e,W as n,X as s,Y as a}from"./framework-9dd6340e.js";const i={},l=a(`<div class="hint-container danger"><p class="hint-container-title">警告</p><p>vue 2.0版本会通过 <code>Object.defineProperty</code> 对数据进行劫持，遇到数组和对象必须循环遍历所有的域值才能劫持每一个属性。</p><p>vue 3.0版本会通过 <code>Proxy</code> 构造函数来进行数据劫持，来实现视图响应数据的变化</p></div><p>然而有些时候我们的组件就是纯粹的数据展示，不会有任何改变，我们就不需要 vue 来劫持我们的数据，在大量数据展示的情况下，这能够很明显的减少组件初始化的时间。</p><p>所以，我们可以通过 <code>Object.freeze</code> 方法来冻结一个对象，这个对象一旦被冻结，vue就不会对数据进行劫持了。</p><p><code>Object.freeze()</code> 可以冻结一个对象，冻结之后不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。该方法返回被冻结的对象。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item.value }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

export default {
  data: {
    // vue不会对list里的object做getter、setter绑定
    list: Object.freeze([
        { value: 1 },
        { value: 2 }
    ])
  },
  created () {
    // 界面不会有响应
    this.list[0].value = 100;

    // 下面两种做法，界面都会响应
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[l];function c(d,v){return n(),s("div",null,t)}const r=e(i,[["render",c],["__file","index.html.vue"]]);export{r as default};
