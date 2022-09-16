import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as r,a as e,d as s,b as n,e as i,r as c}from"./app.289de5ca.js";const t={},o=n(`<div class="custom-container info"><p class="custom-container-title">Tips</p><p>\u5177\u4F53\u6587\u4EF6\u662F <code>shared.cjs.prod.js</code> \u548C <code>shared.cjs.js</code> \u6587\u4EF6\u4E0B\u9488\u5BF9\u6E90\u7801\u4E2D\u7684\u5DE5\u5177\u51FD\u6570\u548C\u8F83\u51B7\u95E8\u77E5\u8BC6\u70B9\u7684\u63D0\u53D6\u5206\u6790\u3002</p><p>vue \u7248\u672C\u4E3A 3.2.31</p></div><h2 id="\u5E38\u91CF\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5E38\u91CF\u5B9A\u4E49" aria-hidden="true">#</a> \u5E38\u91CF\u5B9A\u4E49</h2><h3 id="empty-obj\u3001empty-arr-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#empty-obj\u3001empty-arr-\u5BF9\u8C61" aria-hidden="true">#</a> EMPTY_OBJ\u3001EMPTY_ARR \u5BF9\u8C61</h3><p>typescript\u662F\u901A\u8FC7 <code>readonly</code> \u7684\u65B9\u5F0F\u6765\u5B9A\u4E49\u4E00\u4E2A\u51BB\u7ED3\u5BF9\u8C61\u7684\u7C7B\u578B\u7684\uFF0C <code>readonly</code> \u662F\u53EA\u8BFB\u4FEE\u9970\u7B26\u3002 <code>Object.freeze</code> \u51BB\u7ED3\u5BF9\u8C61\u5C5E\u6027\u529F\u80FD\u3002</p><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export declare const EMPTY_OBJ: {
    readonly [key: string]: any;
} = __DEV__ ? Object.freeze({}) : {}


export declare const EMPTY_ARR: {
    readonly [key: string]: any;
} = __DEV__ ? Object.freeze([]) : []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u6848\u4F8B</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>let emptyObj = Object.freeze({
  props: {
    name: &#39;jack&#39;,
    age: 12
  },
  total: 1000
})
// \u65E0\u6CD5\u4FEE\u6539\u7B2C\u4E00\u5C42\u5C5E\u6027
emptyObj.total = 0
console.log(&#39;emptyObj.total&#39;, emptyObj.total)
// \u53EF\u4EE5\u4FEE\u6539\u7B2C\u4E8C\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027
emptyObj.props.age = 13
console.log(&#39;emptyObj.props.age&#39;, emptyObj.props.age)
// \u65E0\u6CD5\u65B0\u5EFA\u672C\u4E0D\u5B58\u5728\u7684\u5C5E\u6027
emptyObj.props2 = {}
console.log(&#39;emptyObj.props2&#39;, emptyObj.props2)


let arr = Object.freeze([])
let arr1 = Object.freeze([{ name: &#39;jack&#39; }])
// arr.push(1) // \u65E0\u6CD5\u6DFB\u52A0\u5143\u7D20, \u4F1A\u76F4\u63A5\u62A5\u9519
arr.length = 3
console.log(&#39;arr&#39;, arr)
// \u5BF9\u8C61\u5185\u7684\u5C5E\u6027\u53EF\u4EE5\u4FEE\u6539
arr1[0].name = &#39;rose&#39;
console.log(&#39;arr1[0].name&#39;, arr1[0].name) // rose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="noop-\u7A7A\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#noop-\u7A7A\u51FD\u6570" aria-hidden="true">#</a> NOOP \u7A7A\u51FD\u6570</h3><p>\u5B9A\u4E49\u4E00\u4E2A\u7A7A\u51FD\u6570\uFF0C\u800C\u4E0D\u662F <code>function () {}</code> \u8FD9\u6837\u5B9A\u4E49\uFF0C\u662F\u4E3A\u4E86\u65B9\u4FBF\u538B\u7F29\u3002</p><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export const NOOP = () =&gt; {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u6848\u4F8B</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>let obj = function getName (cb =&gt; NOOP) {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="no-\u8FD4\u56DEfalse\u5E38\u91CF\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#no-\u8FD4\u56DEfalse\u5E38\u91CF\u51FD\u6570" aria-hidden="true">#</a> NO \u8FD4\u56DEfalse\u5E38\u91CF\u51FD\u6570</h3><p>\u6C38\u8FDC\u8FD4\u56DE <code>false</code> \u7684\u51FD\u6570, \u5C31\u662F\u4E00\u4E2A\u8FD4\u56DE <code>boolean</code> \u503C\u7684\u51FD\u6570\u7684\u5907\u9009\u9879</p><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export const NO = () =&gt; false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u5B9A\u4E49" aria-hidden="true">#</a> \u51FD\u6570\u5B9A\u4E49</h2><h3 id="totypestring-\u590D\u6742\u6570\u636E\u7C7B\u578B\u533A\u5206" tabindex="-1"><a class="header-anchor" href="#totypestring-\u590D\u6742\u6570\u636E\u7C7B\u578B\u533A\u5206" aria-hidden="true">#</a> toTypeString \u590D\u6742\u6570\u636E\u7C7B\u578B\u533A\u5206</h3><p><code>toTypeString</code> \u4E3B\u8981\u662F\u8FD4\u56DE\u6570\u636E\u7684\u7C7B\u578B\uFF0C\u4F7F\u7528\u4E86 <code>Object.prototype.toString.call</code> \u7684\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u4E86\u5BF9\u590D\u6742\u6570\u636E\u7C7B\u578B\u7684\u533A\u5206</p><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>const objectToString = Object.prototype.toString;
const toTypeString = (value) =&gt; objectToString.call(value);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u6848\u4F8B</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>let arr = []
let obj = {}
let map = new Map()
let set = new Set()
console.log(toTypeString(obj)) // [object Object]
console.log(toTypeString(arr)) // [object Array]
console.log(toTypeString(map)) // [object Map]
console.log(toTypeString(set)) // [object Set]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="torawtype-\u53D6\u51FA\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#torawtype-\u53D6\u51FA\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> toRawType \u53D6\u51FA\u6570\u636E\u7C7B\u578B</h3><p>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\u524D\u9762\u7684 <code>toTypeString</code> \u8FD4\u56DE\u4E86 <code>[object xxType]</code>\uFF0C\u73B0\u5728\u5219\u662F\u4F7F\u7528 <code>slice</code> \u65B9\u6CD5\u6765\u5C06 <code>xxType</code> \u53D6\u51FA</p><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export const toRawType = (value: unknown): string =&gt; {
  // extract &quot;RawType&quot; from strings like &quot;[object RawType]&quot;
  return toTypeString(value).slice(8, -1)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u6848\u4F8B</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>const objectToString = Object.prototype.toString
const toTypeString = (value) =&gt; objectToString.call(value)

const toRawType = (value) =&gt; toTypeString(value).slice(8, -1)

const str = toRawType(&#39;&#39;)
console.log(&#39;str&#39;, str) // &#39;String&#39;
const num = toRawType(123)
console.log(&#39;num&#39;, num) // &#39;Number&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ison-\u4E8B\u4EF6\u540Don\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#ison-\u4E8B\u4EF6\u540Don\u5224\u65AD" aria-hidden="true">#</a> isOn \u4E8B\u4EF6\u540Don\u5224\u65AD</h3><p>\u5229\u7528\u6B63\u5219\u6765\u5224\u65AD\u5F53\u524D\u7684\u4E8B\u4EF6\u540D\u662F\u5426\u662F <code>on + EventName</code> \u7684\u683C\u5F0F</p><p>\u6CE8\u610F: <code>^</code> \u5728\u6B63\u5219\u5F00\u5934\u8868\u793A\u9996\u4F4D\u5360\u4F4D\u7B26\uFF0C\u5176\u4ED6\u5730\u65B9\u90FD\u662F\u975E\u7684\u542B\u4E49\uFF0C<code>[^a-z]</code> \u8868\u793A\u4E0D\u662F a \u5230 z \u7684\u5B57\u6BCD</p><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>const onRE = /^on[^a-z]/
export const isOn = (key: string) =&gt; onRE.test(key)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ismodellistener-\u4E8B\u4EF6\u540Donupdate\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#ismodellistener-\u4E8B\u4EF6\u540Donupdate\u5224\u65AD" aria-hidden="true">#</a> isModelListener \u4E8B\u4EF6\u540DonUpdate\u5224\u65AD</h3><p>\u68C0\u9A8C\u76D1\u542C\u4E8B\u4EF6\u540D\u662F\u5426\u662F<code>onUpdate:</code>\u5F00\u5934</p><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export const isModelListener = (key: string) =&gt; key.startsWith(&#39;onUpdate:&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>startsWith</code> \u662F <code>es6</code> \u5F53\u4E2D\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u83B7\u53D6\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u4EE5\u6307\u5B9A\u7684\u5B50\u5B57\u7B26\u4E32\u5F00\u5934\uFF0C\u8FD4\u56DEBoolean\u7C7B\u578B</p></blockquote><ul><li>\u4F7F\u7528\u6848\u4F8B</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>console.log(isModeListener(&#39;onUpdate:change&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="extend-\u5408\u5E76\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#extend-\u5408\u5E76\u5BF9\u8C61" aria-hidden="true">#</a> extend \u5408\u5E76\u5BF9\u8C61</h3><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>const extend = Object.assign
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u6848\u4F8B</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>let obj1 = {name: &#39;jack&#39;}
let obj2 = {name: &#39;rose&#39;, age: 18}

let obj = extend(obj1, obj2)
console.log(&#39;obj&#39;, obj) // { name: &#39;rose&#39;, age: 18 }
// \u6CE8\u610F, \u539F\u672C\u7684obj1\u4E5F\u4F1A\u88AB\u6539\u53D8
console.log(&#39;obj1&#39;, obj1) // { name: &#39;rose&#39;, age: 18 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="remove-\u5220\u9664\u6570\u7EC4\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#remove-\u5220\u9664\u6570\u7EC4\u5143\u7D20" aria-hidden="true">#</a> remove \u5220\u9664\u6570\u7EC4\u5143\u7D20</h3><p>\u5220\u9664\u6570\u7EC4\u4E2D\u7684\u67D0\u4E2A\u5143\u7D20\uFF0C\u4F46\u662F\u4F7F\u7528splice\u65B9\u6CD5\uFF0C\u5176\u5B9E\u662F\u6BD4\u8F83\u6D88\u8017\u6027\u80FD\u7684\u3002</p><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export const remove = &lt;T&gt;(arr: T[], el: T) =&gt; {
  const i = arr.indexOf(el)
  if (i &gt; -1) {
    arr.splice(i, 1)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u6848\u4F8B</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>let arr = [1, 2, 3]
remove(arr, 2) // [ 1, 3 ] &#39;arr\u6570\u636E&#39;
console.log(arr, &#39;arr\u6570\u636E&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">Tips</p><p>axios\u6E90\u7801\u4E2D <code>lib/core/interceptorManager.js</code> , \u4F7F\u7528\u4EE5\u4E0B\u7684\u65B9\u5F0F\u5220\u9664\u6570\u7EC4\u4E2D\u7684\u5143\u7D20:</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

// \u7B2C46\u884C
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become \`null\` calling \`eject\`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="hasown-\u662F\u5426\u5305\u542B\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#hasown-\u662F\u5426\u5305\u542B\u5C5E\u6027" aria-hidden="true">#</a> hasOwn \u662F\u5426\u5305\u542B\u5C5E\u6027</h3><p>\u5224\u65AD\u4E00\u4E2A\u5C5E\u6027\u662F\u5426\u662F\u4E00\u4E2A\u5BF9\u8C61\u672C\u8EAB\u7684\u5C5E\u6027\uFF0C\u5229\u7528\u4E86 <code>Object.prototype.hasOwnProperty.call</code> \u7684\u5F62\u5F0F\u6765\u5B9E\u73B0\u529F\u80FD</p><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Vue3 \u7684\u5199\u6CD5
 */
export const hasOwn = (
  val: object,
  key: string | symbol
): key is keyof typeof val =&gt; hasOwnProperty.call(val, key)

/**
 * Vue3.2 \u7684\u5199\u6CD5
 */
export const hasOwn = (
  val: object,
  key: string | symbol
): key is never =&gt; hasOwnProperty.call(val, key)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">Tips</p><ul><li><code>is</code> \u5173\u952E\u5B57\uFF1A\u5B83\u88AB\u79F0\u4E3A\u7C7B\u578B\u8C13\u8BCD\uFF0C\u7528\u6765\u5224\u65AD\u4E00\u4E2A\u53D8\u91CF\u5C5E\u4E8E\u67D0\u4E2A\u63A5\u53E3\u6216\u7C7B\u578B\uFF0C\u6BD4\u5982\uFF1A</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>const isNumber = (val: unknown): val is number =&gt; typeof val === &#39;number&#39;
const isString = (val: unknown): val is string =&gt; typeof val === &#39;string&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>keyof</code> \u5173\u952E\u5B57\uFF1A\u7528\u4E8E\u83B7\u53D6\u67D0\u79CD\u7C7B\u578B\u7684\u6240\u6709\u952E\uFF0C\u5176\u8FD4\u56DE\u7C7B\u578B\u662F\u8054\u5408\u7C7B\u578B\uFF0C\u6BD4\u5982\uFF1A</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>interface Person {
    name: string;
    age: number;
}
type K = keyof Person; // &quot;name&quot; | &quot;age&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>typeof</code> \u5173\u952E\u5B57\uFF1Ajs \u4E2D\u7684 typeof \u53EA\u80FD\u83B7\u53D6\u51E0\u79CD\u7C7B\u578B\uFF0C\u800C\u5728 ts \u4E2D typeof \u7528\u6765\u83B7\u53D6\u4E00\u4E2A\u53D8\u91CF\u58F0\u660E\u6216\u5BF9\u8C61\u7684\u7C7B\u578B\uFF0C\u6BD4\u5982\uFF1A</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>interface Person {
  name: string;
  age: number;
}
 
const sem: Person = { name: &#39;semlinker&#39;, age: 30 };
type Sem = typeof sem; // -&gt; Person
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="isarray-\u662F\u5426\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#isarray-\u662F\u5426\u6570\u7EC4" aria-hidden="true">#</a> isArray \u662F\u5426\u6570\u7EC4</h3><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export const isArray = (arg: any) : arg is any[] =&gt; Array.isArray(arg);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u6848\u4F8B</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>const fakeArray = { __proto__: Array.prototype, length: 0 }

console.log(&#39;isArray(fakeArray)&#39;, isArray(fakeArray)) // false
console.log(&#39;fakeArray instanceof Array&#39;, fakeArray instanceof Array) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ismap-isset-\u662F\u5426map-set" tabindex="-1"><a class="header-anchor" href="#ismap-isset-\u662F\u5426map-set" aria-hidden="true">#</a> isMap/isSet \u662F\u5426Map/Set</h3><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export const isMap = (val: unknown): val is Map&lt;any, any&gt; =&gt; toTypeString(val) === &#39;[object Map]&#39;
export const isSet = (val: unknown): val is Set&lt;any&gt; =&gt; toTypeString(val) === &#39;[object Set]&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h4><p>Map \u662F\u4E00\u79CD <code>es6</code> \u63D0\u4F9B\u7684\u65B0\u7684\u4E00\u79CD\u952E\u503C\u5BF9\u6570\u636E\u7ED3\u6784\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u76F8\u6BD4\u4E8E\u5BF9\u8C61\uFF0C\u5B83\u7684\u952E\u4E0D\u540C\u4E8E\u5BF9\u8C61\u90A3\u79CD\u53EA\u80FD\u662F\u5B57\u7B26\u4E32\u7684\u952E\uFF0C\u53EF\u4EE5\u662F\u5404\u79CD\u7C7B\u578B\u3002</p><ul><li>\u57FA\u7840\u65B9\u6CD5</li></ul><blockquote><p><code>get</code> \u83B7\u53D6\u5143\u7D20\uFF0C <code>set</code> \u65B0\u589E\u5143\u7D20\u6210\u5458\uFF0C <code>has</code> \u662F\u5426\u5305\u542B\u67D0\u5143\u7D20\uFF0C <code>delete</code> \u5220\u9664\u5143\u7D20\u6210\u5458\uFF0C <code>clear</code> \u6E05\u7A7A\u6240\u6709\u5143\u7D20\uFF0C <code>Array.from</code> \u8F6C\u4E3A\u666E\u901A\u7684\u4E8C\u7EF4\u6570\u7EC4</p></blockquote><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// 1. \u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u952E
let fn = function func() { console.log(&#39;this is function&#39;) }
let m = new Map([[&#39;jack&#39;, 100], [fn, &#39;\u6211\u662F\u51FD\u6570\u7684\u503C&#39;]]) // \u5F62\u5F0F\u4E0A, Map\u7C7B\u578B\u662F\u4E8C\u7EF4\u6570\u7EC4

// 2. get\u65B9\u6CD5\u83B7\u53D6\u5143\u7D20
let result = m.get(fn)
console.log(&#39;func -&gt; result&#39;, result)
// func -&gt; result \u6211\u662F\u51FD\u6570\u7684\u503C

// 3. \u901A\u8FC7Array.from\u53EF\u4EE5\u8F6C\u4E3A\u666E\u901A\u7684\u4E8C\u7EF4\u6570\u7EC4
let arr = Array.from(m)
console.log(&#39;func -&gt; arr&#39;, arr)
// func -&gt; arr [ [ &#39;jack&#39;, 100 ], [ [Function: func], &#39;\u6211\u662F\u51FD\u6570\u7684\u503C&#39; ] ]

// 4. set\u65B9\u6CD5\u65B0\u589E\u5143\u7D20\u6210\u5458
let obj = { name: &#39;jack&#39; }
m.set(obj, &#39;28\u5C81\u4E86\u90FD&#39;)
console.log(&#39;set\u65B0\u5143\u7D20\u4E4B\u540E&#39;, m)
// set\u65B0\u5143\u7D20\u4E4B\u540E Map {
// &#39;jack&#39; =&gt; 100,
//  [Function: func] =&gt; &#39;\u6211\u662F\u51FD\u6570\u7684\u503C&#39;,
//  { name: &#39;jack&#39; } =&gt; &#39;28\u5C81\u4E86\u90FD&#39; }

// 5. has \u5224\u65AD\u662F\u5426\u5305\u542B\u67D0\u5143\u7D20
m.has(fn)
console.log(&#39;func -&gt; m.has(fn)&#39;, m.has(fn)) // true

// 6. delete\u5220\u9664\u5143\u7D20\u6210\u5458
m.delete(obj)
console.log(&#39;\u5220\u9664\u540E\u7684\u7ED3\u679C&#39;, Array.from(m))
// \u5220\u9664\u540E\u7684\u7ED3\u679C [ [ &#39;jack&#39;, 100 ], [ [Function: func], &#39;\u6211\u662F\u51FD\u6570\u7684\u503C&#39; ] ]

// 7. clear\u6E05\u7A7A\u6240\u6709\u5143\u7D20
m.clear()
console.log(&#39;\u6E05\u7A7A\u540E\u7684\u7ED3\u679C&#39;, m)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u904D\u5386\u76F8\u5173\u7684\u65B9\u6CD5</li></ul><blockquote><p><code>keys</code> \u8FD4\u56DE\u5305\u542B\u6620\u5C04\u4E2D <strong>\u952E</strong> \u7684\u8FED\u4EE3\u5668\u5BF9\u8C61\uFF0C<code>entries</code> \u8FD4\u56DE\u5305\u542B\u6620\u5C04\u4E2D\u7684 <strong>\u952E\u503C</strong> \u7684\u8FED\u4EE3\u5668\u5BF9\u8C61\uFF0C<code>values</code> \u8FD4\u56DE\u5305\u542B\u6620\u5C04\u4E2D\u7684 <strong>\u503C</strong> \u7684\u8FED\u4EE3\u5668\u5BF9\u8C61\uFF0C<code>forEach</code></p></blockquote><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>let fn = function func() { console.log(&#39;this is function&#39;) }
let m = new Map([[&#39;jack&#39;, 100], [fn, &#39;\u6211\u662F\u51FD\u6570\u7684\u503C&#39;]])
m.forEach(item =&gt; {
  console.log(&#39;forEach -&gt; item&#39;, item)
})
/**
 * forEach -&gt; item 100
 * forEach -&gt; item \u6211\u662F\u51FD\u6570\u7684\u503C
 */


// 1. keys \u65B9\u6CD5, \u8FD4\u56DE\u5305\u542B\u6620\u5C04\u4E2D\u952E\u7684\u8FED\u4EE3\u5668\u5BF9\u8C61
let it = m.keys()
console.log(&#39;it&#39;, it) // it [Map Iterator] { &#39;jack&#39;, [Function: func] }
console.log(it.next().value) // jack
console.log(it.next().value) // [Function: func]
console.log(it.next().value) // undefined
// \u6216\u8005
for (let key of it) {
  console.log(&#39;for...of... -&gt; key&#39;, key)
}
/**
 * 
  for...of... -&gt; key jack
  for...of... -&gt; key function func() {
    console.log(&#39;this is function&#39;);
  }
 */

// 2. entries \u65B9\u6CD5, \u8FD4\u56DE\u5305\u542B\u6620\u5C04\u4E2D\u7684\u952E\u503C\u7684\u8FED\u4EE3\u5668\u5BF9\u8C61
let it = m.entries()
console.log(it.next().value) // [ &#39;jack&#39;, 100 ]
console.log(it.next().value) // [ [Function: func], &#39;\u6211\u662F\u51FD\u6570\u7684\u503C&#39; ]
console.log(it.next().value) // undefined
// \u6216\u8005
for (let item of it) {
  console.log(&#39;for...of... -&gt; entries&#39;, item)
}
/**
 * for...of... -&gt; entries [ &#39;jack&#39;, 100 ]
 * for...of... -&gt; entries [ [Function: func], &#39;\u6211\u662F\u51FD\u6570\u7684\u503C&#39; ]
 */

// 3. values \u65B9\u6CD5, \u8FD4\u56DE\u5305\u542B\u6620\u5C04\u4E2D\u7684\u503C\u7684\u8FED\u4EE3\u5668\u5BF9\u8C61
let it = m.values()
console.log(it.next().value) // 100
console.log(it.next().value) // \u6211\u662F\u51FD\u6570\u7684\u503C
console.log(it.next().value) // undefined
// \u6216\u8005
for (let value of it) {
	console.log(&#39;for...of... -&gt; value&#39;, value)
}
// /**
//  * for...of... -&gt; value 100
//  * for...of... -&gt; value \u6211\u662F\u51FD\u6570\u7684\u503C
//  */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: theorem Map\u548CObject\u7684\u533A\u522B:</p><ul><li>Map\u7684\u952E\u53EF\u4EE5\u662F<code>\u4EFB\u610F\u7C7B\u578B</code>, Object\u53EA\u80FD\u662F <code>String</code> \u6216\u8005 <code>Symbol</code></li><li>Map\u7684\u53EF\u4EE5\u901A\u8FC7<code>size</code>\u5C5E\u6027\u83B7\u53D6\u5143\u7D20\u6570\u91CF, Object\u5219\u5FC5\u987B<code>\u624B\u52A8\u8BA1\u7B97</code></li><li>Map\u5728\u9891\u7E41<code>\u589E\u51CF\u952E\u503C\u5BF9</code>\u7684\u573A\u666F\u4E0B, <code>\u6027\u80FD\u8F83\u597D</code></li><li>Map\u4E2D\u7684\u6570\u636E\u662F<code>\u6709\u5E8F</code>\u7684, \u800CObject\u5219\u662F<code>\u65E0\u5E8F</code>\u7684 :::</li></ul><h4 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h4><p>Set\u7C7B\u578B\u662F<code>es6</code>\u63D0\u4F9B\u7684\u4E00\u79CD\u65B0\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5B83\u5141\u8BB8\u4F60\u5B58\u5165 <code>\u4EFB\u610F\u7C7B\u578B</code> \u7684 <code>\u552F\u4E00\u503C</code> \uFF0C\u65E0\u8BBA\u662F <code>\u57FA\u672C\u6570\u636E\u7C7B\u578B</code> \u8FD8\u662F <code>\u5F15\u7528\u7C7B\u578B</code> \uFF0C\u5C3D\u7BA1NaN !== NaN\uFF0CSet\u4ECD\u7136\u8BA4\u4E3A\u8FD9\u662F\u540C\u4E00\u4E2A\u6570\u636E\u3002</p><ul><li>\u57FA\u7840\u65B9\u6CD5</li></ul><blockquote><p><code>add</code> \u65B0\u589E\u5143\u7D20\u6210\u5458\uFF0C <code>has</code> \u662F\u5426\u5305\u542B\u67D0\u5143\u7D20\uFF0C <code>delete</code> \u5220\u9664\u5143\u7D20\u6210\u5458\uFF0C <code>clear</code> \u6E05\u7A7A\u6240\u6709\u5143\u7D20\uFF0C <code>Array.from</code> \u8F6C\u4E3A\u6570\u7EC4</p></blockquote><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// 1. NaN
let set = new Set([NaN, NaN])
// \u5C3D\u7BA1NaN !== NaN, \u4F46\u662F, \u5728Set\u4E2D\u4ECD\u7136\u88AB\u8BA4\u4E3A\u662F\u76F8\u540C\u7684\u6570\u636E
console.log(&#39;NaN === NaN&#39;, NaN === NaN) // false
console.log(&#39;set&#39;, set) // Set {NaN}

// 2.add \u65B9\u6CD5
let set = new Set()
let person1 = {
  name: &#39;\u5927\u660E&#39;
}
let person2 = {
  name: &#39;\u5C0F\u660E&#39;
}
set.add(person1)
set.add(person2)
console.log(&#39;add\u7684\u7ED3\u679C&#39;, set)
// add\u7684\u7ED3\u679C Set { { name: &#39;\u5927\u660E&#39; }, { name: &#39;\u5C0F\u660E&#39; } }

console.log(&#39;Array.from&#39;, Array.from(set))
// Array.from [ { name: &#39;\u5927\u660E&#39; }, { name: &#39;\u5C0F\u660E&#39; } ]

// 3. delete\u65B9\u6CD5
set.delete(person1)
console.log(&#39;delete\u4E4B\u540E&#39;, set) // delete\u4E4B\u540E Set { { name: &#39;\u5C0F\u660E&#39; } }

// 4. has\u65B9\u6CD5
console.log(&#39;has person1 --&gt;&#39;, set.has(person1))
// has person1 --&gt; false
console.log(&#39;has person2 --&gt;&#39;, set.has(person2))
// has person2 --&gt; true

// 5.\u6E05\u7A7A
set.clear()
console.log(&#39;set clear --&gt;&#39;, set) // set clear --&gt; Set {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u904D\u5386\u76F8\u5173\u7684\u65B9\u6CD5</li></ul><blockquote><p>\u4E3B\u8981\u6709<code>keys</code>\uFF0C<code>entries</code>\uFF0C<code>values</code>\uFF0C<code>forEach</code></p></blockquote><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// 1. keys\u65B9\u6CD5
let it = set.keys()
console.log(it.next().value) // { name: &#39;\u5927\u660E&#39; }
console.log(it.next().value) // { name: &#39;\u5C0F\u660E&#39; }
console.log(it.next().value) // undefined
// \u6216\u8005
for (let key of it) {
  console.log(&#39;for...of... -&gt; keys&#39;, key)
}
/**
 * for...of... -&gt; keys { name: &#39;\u5927\u660E&#39; }
 * for...of... -&gt; keys { name: &#39;\u5C0F\u660E&#39; }
 */

// 2. entries \u65B9\u6CD5
let it = set.entries() // SetIterator\xA0{{\u2026} =&gt; {\u2026}, {\u2026} =&gt; {\u2026}}
for (let key of it) {
  console.log(&#39;for...of... -&gt; entries&#39;, key)
}
/**
 * for...of... -&gt; entries [ { name: &#39;\u5927\u660E&#39; }, { name: &#39;\u5927\u660E&#39; } ]
 * for...of... -&gt; entries [ { name: &#39;\u5C0F\u660E&#39; }, { name: &#39;\u5C0F\u660E&#39; } ]
 */

// 3. values
let it = set.values() // SetIterator {{\u2026}, {\u2026}}
console.log(it.next().value) // { name: &#39;\u5927\u660E&#39; }
console.log(it.next().value) // { name: &#39;\u5C0F\u660E&#39; }
console.log(it.next().value) // undefined
// \u6216\u8005
for (let key of it) {
  console.log(&#39;for...of... -&gt; values&#39;, key)
}
/**
 * for...of... -&gt; values { name: &#39;\u5927\u660E&#39; }
 * for...of... -&gt; values { name: &#39;\u5C0F\u660E&#39; }
 */

// 4. forEach
set.forEach(item =&gt; {
  console.log(&#39;item&#39;, item)
})
/**
 * item { name: &#39;\u5927\u660E&#39; }
 * item { name: &#39;\u5C0F\u660E&#39; }
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isdate-\u662F\u5426\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#isdate-\u662F\u5426\u65F6\u95F4" aria-hidden="true">#</a> isDate \u662F\u5426\u65F6\u95F4</h3>`,87),v=i("\u6E90\u7801\u5B9E\u73B0 "),u=n(`<div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export const isDate = (val: unknown): val is Date =&gt; val instanceof Date
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E48\u505A\u6709\u4E00\u5B9A\u7684\u6F0F\u6D1E\uFF0C\u4F46\u4E00\u822C\u8FD8\u662F\u53EF\u4EE5\u5224\u65AD</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>const isDate = (val) =&gt; val instanceof Date
let date = new Date()
let result = isDate({ __proto__: Date.prototype, length: 0 })
console.log(&#39;result&#39;, result) // result true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isfunction-\u662F\u5426\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#isfunction-\u662F\u5426\u51FD\u6570" aria-hidden="true">#</a> isFunction \u662F\u5426\u51FD\u6570</h3><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export const isFunction = (val: unknown): val is Function =&gt; typeof val === &#39;function&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="isobject-\u662F\u5426\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#isobject-\u662F\u5426\u5BF9\u8C61" aria-hidden="true">#</a> isObject \u662F\u5426\u5BF9\u8C61</h3><ul><li>\u6CE8\u610F\u4E8B\u9879</li></ul><blockquote><p><code>typeof null === &#39;object&#39;</code>\uFF0C\u6240\u4EE5\u5FC5\u987B\u786E\u4FDDval\u4E0D\u4E3Anull\u3002</p><p><code>Record</code>\u662F <code>typescript</code> \u4E2D\u7684\u4E00\u79CD\u5DE5\u5177\u7C7B\u578B\uFF0C\u5B83\u7684\u4F5C\u7528\u662F\u9650\u5236\u4E00\u4E2A\u5BF9\u8C61\u7684\u952E\u503C\u7C7B\u578B\uFF0C\u5176\u4E24\u4E2A\u6CDB\u578B\u53C2\u6570\u5C31\u662F\u4E00\u4E2A\u9650\u5236\u952E\u7C7B\u578B\uFF0C\u4E00\u4E2A\u9650\u5236\u503C\u7C7B\u578B\u3002</p></blockquote><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export const isObject = (val: unknown): val is Record&lt;any, any&gt; =&gt; val !== null &amp;&amp; typeof val === &#39;object&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">Tips</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// \u7B2C1469\u884C\u4EE3\u7801
type Record&lt;K extends keyof any, T&gt; = {
    [P in K]: T;
};
// \u4ECE\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA, \u952E\u7684\u7C7B\u578B\u53EA\u80FD\u4ECEK(\u7B2C\u4E00\u4E2A\u6CDB\u578B\u53C2\u6570\u4E2D\u5F97\u5230), \u800C\u503C\u7684\u7C7B\u578B\u53EA\u80FD\u662FT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Record\u4F7F\u7528\u6848\u4F8B:</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>type Animal = &#39;dog&#39; | &#39;cat&#39; | &#39;pig&#39;

interface Info {
  name: string;
  age: number
}

type AnimalInfo = Record&lt;Animal, Info&gt;

// animalInfo\u7684\u952E, \u53EA\u80FD\u662Fdog, cat, pig\u4E2D\u7684\u4E00\u4E2A
const animalInfo: AnimalInfo = {
  dog: {
    name: &#39;\u963F\u65FA&#39;,
    age: 2
  },
  cat: {
    name: &#39;\u963F\u82B1&#39;,
    age: 1
  },
  pig: {
    name: &#39;\u4E8C\u5E08\u5144&#39;,
    age: 3
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="isplainobject-\u662F\u5426\u7EAF\u7CB9\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#isplainobject-\u662F\u5426\u7EAF\u7CB9\u5BF9\u8C61" aria-hidden="true">#</a> isPlainObject \u662F\u5426\u7EAF\u7CB9\u5BF9\u8C61</h3><p>\u8BE5\u65B9\u6CD5\u4F5C\u7528\u662F\uFF0C\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61<code>\u662F\u5426\u662F\u7EAF\u7CB9\u7684\u5BF9\u8C61</code>\uFF0C\u524D\u9762\u4E00\u4E2AisObject\u65B9\u6CD5\uFF0C<code>isObject([])\u662Ftrue</code>\uFF0C<code>isObject({})\u4E5F\u662Ftrue</code>\uFF0C\u800C\u6B64\u5904\u7684isPlainObject\u5219\u4EC5\u9650\u4E8E\u771F\u6B63\u7684Object\u3002</p><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export const isPlainObject = (val: unknown): val is object =&gt; toTypeString(val) === &#39;[object Object]&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ispromise-\u662F\u5426promise" tabindex="-1"><a class="header-anchor" href="#ispromise-\u662F\u5426promise" aria-hidden="true">#</a> isPromise \u662F\u5426Promise</h3><p>\u5224\u65AD\u662F\u5426\u662Fpromise\u5BF9\u8C61\uFF0C\u8FD9\u91CC\u8981\u6CE8\u610F\u7684\u662FPromise\u7684\u7C7B\u578B\uFF0Ctypescript \u4E2D <code>Promise&lt;T&gt;</code> \u7C7B\u578B\uFF0C\u63A5\u53D7\u4E00\u4E2A<code>\u6CDB\u578B\u53C2\u6570T</code>\uFF0C\u7528\u4EE5\u786E\u5B9A\u8FD9\u4E2Apromise\u5BF9\u8C61\u6700\u7EC8<code>resolve\u7684\u503C\u7684\u7C7B\u578B</code>\u3002</p><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export const isPromise = &lt;T = any&gt;(val: unknown): val is Promise&lt;T&gt; =&gt; isObject(val) &amp;&amp; isFunction(val.then) &amp;&amp; isFunction(val.catch)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">Tips</p><p>\u6211\u4EEC\u5982\u4F55\u63A7\u5236\u58F0\u660EPromise\u8FD4\u56DE\u503C\u7684\u7C7B\u578B:</p><ul><li>\u4F7F\u7528\u8FD9\u91CC\u7684\u6CDB\u578B\u65B9\u5F0F\u58F0\u660E</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>let promiseString:Promise&lt;string&gt; = new Promise(resolve =&gt; resolve(&#39;123&#39;))
let promiseNumber:Promise&lt;number&gt; = new Promise(resolve =&gt; resolve(&#39;123&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5355\u72EC\u58F0\u660Eresolve\u65B9\u6CD5</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>let promiseString = new Promise((resolve: (params: string) =&gt; void, reject) =&gt; resolve(&#39;123&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="isintegerkey-\u662F\u5426\u6570\u5B57\u578B\u7684\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#isintegerkey-\u662F\u5426\u6570\u5B57\u578B\u7684\u5B57\u7B26\u4E32" aria-hidden="true">#</a> isIntegerKey \u662F\u5426\u6570\u5B57\u578B\u7684\u5B57\u7B26\u4E32</h3><p>\u4E3B\u8981\u662F\u7528\u4E8E\u5224\u65AD\u662F\u5426\u662F\u6570\u5B57\u578B\u7684\u5B57\u7B26\u4E32\uFF0C\u5F62\u5982: &#39;123&#39;\uFF0C&#39;888&#39; \u5219\u4E3Atrue\uFF0C&#39;123hello&#39;\u5219\u4E3Afalse\u3002</p><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export const isString = (val: unknown): val is string =&gt; typeof val === &#39;string&#39;
export const isIntegerKey = (key: unknown) =&gt;
  isString(key) &amp;&amp;
  key !== &#39;NaN&#39; &amp;&amp;
  key[0] !== &#39;-&#39; &amp;&amp;
  &#39;&#39; + parseInt(key, 10) === key
isIntegerKey(&#39;888hello&#39;) // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),m={class:"custom-container info"},p=n(`<p class="custom-container-title">Tips</p><p>parseInt \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u5927\u5BB6\u90FD\u5F88\u719F\u6089\uFF0C\u5C31\u662F\u8981\u88AB\u8F6C\u6362\u7684\u5B57\u7B26\u4E32\uFF0C\u4F46\u662F\u7B2C\u4E8C\u4E2A\u51FA\u73B0\u7684\u6982\u7387\u53EF\u80FD\u76F8\u5BF9\u504F\u4F4E\uFF0C\u7B2C\u4E8C\u4E2A\u8868\u793A\u7684\u5C31\u662F<code>\u8FDB\u5236</code>\uFF0C\u4E00\u822C<code>\u9ED8\u8BA4\u662F10</code>\uFF0C\u4E5F\u5C31\u662F\u5341\u8FDB\u5236\uFF01 \u8FD9\u91CC\u6307\u660E\u8FDB\u5236\u6570\u662F\u4E3A\u4E86\u4FDD\u8BC1\u5728\u4E0D\u540C\u7684\u73AF\u5883\u4E0B\u8FD0\u884C\u7ED3\u679C\u80FD\u4FDD\u8BC1\u4E00\u81F4\uFF01</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// \u4EE5\u4E8C\u8FDB\u5236\u7684\u65B9\u5F0F\u89E3\u6790&#39;010&#39;
const result = parseInt(&#39;010&#39;, 2)
console.log(&#39;result&#39;, result) // 2
// \u6211\u4EEC\u90FD\u77E5\u9053\uFF0C\u5982\u679C &#39;010&#39;\u662F\u4E8C\u8FDB\u5236\uFF0C\u90A3\u4E48\uFF0C\u8F6C\u4E3A10\u8FDB\u5236\uFF0C\u5C31\u662F\u4F7F\u7528: 0*2^0 + 1*2^1 + 0*2^2 \u7ED3\u679C\u81EA\u7136\u5C31\u662F2\uFF0C\u540C\u7406\u6211\u4EEC\u53EF\u4EE5\u77E5\u9053\u7528\u4E09\u8FDB\u5236\u6765\u89E3\u6790\uFF1A
const result = parseInt(&#39;010&#39;, 3) // \u7ED3\u679C\u81EA\u7136\u5C31\u662F3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),b=e("p",null,"\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684\u53D6\u503C\u6700\u5927\u80FD\u8FBE\u5230\u591A\u5C11\uFF1F",-1),g=n(` <p>\u6211\u4EEC\u77E5\u9053\uFF0C\u5341\u8FDB\u5236\u6700\u5927\u7684\u6570\u4E5F\u5C31\u662F9\uFF0C\u90A3\u4E48\u5982\u679C\u6211\u8981\u89E3\u6790\u5341\u8FDB\u5236\u4EE5\u4E0A\u7684\u6570\u5B57\u5462\uFF1F \u6700\u5E38\u89C1\u7684\u5C31\u662F\u5341\u516D\u8FDB\u5236\u3002\u4E0D\u9519\uFF0C\u6211\u4EEC\u4F1A\u7528\u5B57\u6BCD\u4EE3\u66FF\uFF01\u4E5F\u5C31\u662Fa-z\uFF0C\u517126\u4E2A\u5B57\u6BCD\uFF0C\u90A3\u4E48\u6211\u4EEC\u5927\u80C6\u731C\u6D4B\u4E0B\uFF0C\u6700\u5927\u53D6\u503C\uFF0C\u662F\u4E0D\u662F\u5C31\u662F36\uFF1F</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>const result = parseInt(&#39;010&#39;, 36)
console.log(&#39;result&#39;, result) // 36
// \u90A3\u518D\u5F80\u4E0A\u52A0\u4E00\u5462:
const result = parseInt(&#39;010&#39;, 37)
console.log(&#39;result&#39;, result) // NaN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u6B64\u6211\u4EEC\u5F97\u77E5, parseInt\u6700\u591A\u53EA\u80FD\u53D6\u523036!</p>`,4),y=n(`<h3 id="makemap-\u6784\u9020\u5E26\u9017\u53F7\u7684\u5B57\u7B26\u4E32\u6821\u9A8C\u5B57\u7B26\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#makemap-\u6784\u9020\u5E26\u9017\u53F7\u7684\u5B57\u7B26\u4E32\u6821\u9A8C\u5B57\u7B26\u51FD\u6570" aria-hidden="true">#</a> makeMap \u6784\u9020\u5E26\u9017\u53F7\u7684\u5B57\u7B26\u4E32\u6821\u9A8C\u5B57\u7B26\u51FD\u6570</h3><p>\u8BE5\u65B9\u6CD5\u4E3B\u8981\u662F\u63A5\u6536\u4E00\u4E2A<code>\u5E26\u9017\u53F7\u7684\u5B57\u7B26\u4E32</code>\uFF0C\u5C06\u8BE5\u5B57\u7B26\u4E32\u4EE5<code>\u9017\u53F7\u62C6\u5206</code>\u4E3A\u4E00\u4E2A\u4E2A\u5B50\u5B57\u7B26\u4E32\uFF0C\u518D\u7528\u8FD9\u4E9B\u5B50\u5B57\u7B26\u4E32\u4F5C\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u7684<code>\u952E</code>\uFF0C<code>\u503C\u5168\u90E8\u4E3Atrue</code>\uFF1B\u8FD4\u56DE\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u68C0\u6D4B\u51FA\u8FD9\u4E2A\u65B9\u6CD5\u63A5\u6536\u7684\u53C2\u6570\u662F\u5426\u662F\u5BF9\u8C61\u4E2D\u7684\u952E\u3002</p><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export function makeMap(
  str: string,
  expectsLowerCase?: boolean
): (key: string) =&gt; boolean {
  const map: Record&lt;string, boolean&gt; = Object.create(null)
  const list: Array&lt;string&gt; = str.split(&#39;,&#39;)
  for (let i = 0; i &lt; list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase ? val =&gt; !!map[val.toLowerCase()] : val =&gt; !!map[val]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u96BE\u70B9\u89E3\u6790</li></ul><p>\u7C7B\u578B\u4E0A\u6765\u770B\uFF0C\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u8FD9\u6837\u7684\u65B9\u6CD5\uFF1A<code>(params1:string, params2?:boolean) =&gt; (key: string) =&gt; boolean</code>\uFF0C\u5176\u8FD4\u56DE\u4E86\u4E00\u4E2A\u68C0\u6D4B\u51FD\u6570\uFF0C\u8BE5\u68C0\u6D4B\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u662F\u8BE5\u5B57\u7B26\u4E32\u662F\u5426\u5B58\u5728\uFF01</p><ul><li>\u4F7F\u7528\u6848\u4F8B</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>const fn = makeMap(&#39;dog,cat,bird&#39;)
const result1 = fn(&#39;fish&#39;)
console.log(result1) // false, \u4E0D\u5B58\u5728fish
const result2 = fn(&#39;dog&#39;)
console.log(result2) // true, \u5B58\u5728dog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),h={class:"custom-container info"},f=e("p",{class:"custom-container-title"},"Tips",-1),T=i(),S=e("p",null,[i("\u521B\u5EFA\u5BF9\u8C61\u4E3A\u4F55\u8981\u7528 "),e("code",null,"Object.create(null)"),i(" \u800C\u4E0D\u662F\u76F4\u63A5\u4F7F\u7528 "),e("code",null,"const map = {}")],-1),x=n("<p><code>Object.create(proto, [propertiesObject])</code>\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u3002\u7B2C\u4E00\u4E2A\u53C2\u6570<code>proto</code>\uFF0C\u5C06\u4F1A\u88AB\u6302\u5728\u5230<code>\u65B0\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61</code>\u4E0A\u3002 \u7B2C\u4E8C\u4E2A\u53C2\u6570<code>propertiesObject</code>\uFF0C\u5BF9\u5E94\u4E86<code>Object.defineProperties</code>\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u4E5F\u5C31\u662F\u6240\u8C13\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26:</p><ul><li>value \u5C5E\u6027\u7684\u503C</li><li>writable \u662F\u5426\u53EF\u4EE5\u5199\uFF0C\u9ED8\u8BA4\u4E3Atrue</li><li>enumerable \u5C5E\u6027\u662F\u5426\u53EF\u679A\u4E3E, \u6240\u8C13\u53EF\u679A\u4E3E\uFF0C\u5C31\u662F\u80FD\u591F\u88AB\u4EE5\u4E0B\u65B9\u6CD5\u8BBF\u95EE\u5230</li><li>for...in \u80FD\u5C06\u8BE5\u5C5E\u6027\u904D\u5386\u51FA\u6765</li><li>Object.keys \u80FD\u5C06\u8BE5\u5C5E\u6027\u5305\u542B\u5728\u8FD4\u56DE\u7684\u6570\u7EC4\u4E2D</li><li>JSON.stringify \u80FD\u591F\u5C06\u5176\u53D8\u4E3AJSON\u5B57\u7B26\u4E32\u7684\u4E00\u90E8\u5206</li><li>configurable \u9ED8\u8BA4true\uFF0C\u5982\u679C\u4E3Afalse\uFF0C\u5219\u5C5E\u6027\u65E0\u6CD5\u88AB\u6539\u53D8\uFF0C\u65E0\u6CD5\u88AB\u5220\u9664\uFF0C\u65E0\u6CD5\u4FEE\u6539\u5C5E\u6027\u63CF\u8FF0\u7B26</li><li>set \u5B58\u503C\u51FD\u6570</li><li>get \u53D6\u503C\u51FD\u6570</li></ul><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C<code>Object.create(null)</code>\u521B\u5EFA\u7684\u5BF9\u8C61\u66F4\u4E3A\u7EAF\u7CB9\uFF0C\u5F53\u65B9\u6CD5\u6267\u884C\u5230<code>map[val.toLowerCase()]</code>\u65F6\uFF0C\u4E0D\u4F1A\u53D7\u5230<code>__proto__</code>\u7684\u5F71\u54CD\u3002</p>",3),j=n(`<h3 id="cachestringfunction-\u7F13\u5B58\u7ED3\u679C\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#cachestringfunction-\u7F13\u5B58\u7ED3\u679C\u51FD\u6570" aria-hidden="true">#</a> cacheStringFunction \u7F13\u5B58\u7ED3\u679C\u51FD\u6570</h3><p>\u51FD\u6570<code>\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570</code>\uFF0C\u8FD9\u4E2A\u51FD\u6570\u63A5\u6536<code>\u4E00\u4E2A\u5B57\u7B26\u4E32</code>\u53C2\u6570\uFF0C\u5982\u679C\u7B2C\u4E00\u6B21\u4F20\u5165\u4E86\u4E00\u4E2A\u53C2\u6570\uFF0C\u8BA1\u7B97\u7ED3\u679C\u5C31\u4F1A\u88AB<code>\u95ED\u5305\`\`\u7F13\u5B58</code>\u8D77\u6765\uFF0C\u4E0B\u6B21\u518D\u9047\u5230\u76F8\u540C\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u5C31\u4E0D\u4F1A\u518D\u8D70<code>fn\u65B9\u6CD5\u91CD\u65B0\u8BA1\u7B97</code>\u4E86\u3002 \u672C\u8D28\u4E0A\u662F\u4E00\u4E2A<code>\u5355\u4F8B\u6A21\u5F0F</code>\uFF0C\u5229\u7528\u95ED\u5305\uFF0C\u4FDD\u5B58\u4E86\u4E4B\u524D\u7684\u8BA1\u7B97\u7ED3\u679C\u3002</p><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>const cacheStringFunction = &lt;T extends (str: string) =&gt; string&gt;(fn: T): T =&gt; {
  const cache: Record&lt;string, string&gt; = Object.create(null)
  return ((str: string) =&gt; {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }) as any
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u6848\u4F8B</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>let fn1 = cacheStringFunction((key) =&gt; {
  console.log(&#39;\u901A\u8FC7\u4E86\u8BA1\u7B97\u5F97\u5230&#39;, key + &#39;world&#39;)
  return key + &#39;world&#39;
})
console.log(fn1(&#39;hello&#39;))
console.log(fn1(&#39;hello&#39;))
console.log(fn1(&#39;goodbye&#39;))
/**
 * 
 * \u901A\u8FC7\u4E86\u8BA1\u7B97\u5F97\u5230 helloworld
 * helloworld
 * helloworld
 * \u901A\u8FC7\u4E86\u8BA1\u7B97\u5F97\u5230 goodbyeworld
 * goodbyeworld
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),k={class:"custom-container info"},N=e("p",{class:"custom-container-title"},"Tips",-1),O=e("p",null,[i("\u4E3A\u4F55\u8FD4\u56DE\u7684\u51FD\u6570\u8981\u88AB"),e("code",null,"as any"),i("\uFF1F\u53BB\u6389\u4F1A\u5982\u4F55\uFF1F")],-1),_=n(` <p><code>(str:string) =&gt; string</code> \u662F\u7B26\u5408 <code>T</code> \u7684\u7C7B\u578B\u8981\u6C42\uFF0C\u4F46\u662F\uFF0C<code>T</code>\u4E5F\u53EF\u4EE5\u662F\u53E6\u4E00\u79CD\u5F62\u5F0F\u7684<code>\u5B50\u7C7B</code>\uFF0C\u4E5F\u5C31\u65E0\u6CD5\u4FDD\u8BC1\u548C\u53C2\u6570\u7684\u7C7B\u578B\u5B8C\u5168\u4E00\u81F4\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5047\u5982\u4EE5\u4E0B\u51FD\u6570\u4E0D\u62A5\u9519\uFF1A</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>let testGenerics = &lt;T extends { length: number }&gt;(params: T, minNum: number): T =&gt;{
  if (params.length &gt;= minNum) {
    return params
  } else {
    return { length: minNum } as T
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u6211\u4EEC\u76F4\u63A5\u8FD0\u884C\u4E0B</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>let data = testGenerics([1,2,3], 8)
// \u6B64\u65F6\u7684data,\u8BB2\u9053\u7406\u5E94\u8BE5\u662FArray\u7C7B\u578B
data.slice(0,1) // \u76F4\u63A5\u62A5\u9519, \u56E0\u4E3A\u6839\u672C\u5C31\u4E0D\u662F\u6570\u7EC4!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),w=n(`<h3 id="camelize-\u9A7C\u5CF0\u8F6C\u5316" tabindex="-1"><a class="header-anchor" href="#camelize-\u9A7C\u5CF0\u8F6C\u5316" aria-hidden="true">#</a> camelize \u9A7C\u5CF0\u8F6C\u5316</h3><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>const camelizeRE = /-(\\w)/g
export const camelize = cacheStringFunction((str: string): string =&gt; {
  return str.replace(camelizeRE, (_, c) =&gt; (c ? c.toUpperCase() : &#39;&#39;))
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u6848\u4F8B</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>let str = &#39;on-handle-click&#39;
const result = camelize(str)
console.log(&#39;result&#39;, result) // result onHandleClick
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),M=e("div",{class:"custom-container info"},[e("p",{class:"custom-container-title"},"Tips"),e("p",null,[i("\u5173\u4E8Ereplace\u7684\u4F7F\u7528: "),e("code",null,"replace(regexp|substr, newSubStr|function)")]),e("blockquote",null,[e("p",null,[i("\u7B2C\u4E00\u4E2A\u53C2\u6570\u65E2\u53EF\u4EE5\u662F"),e("code",null,"\u5B57\u7B26\u4E32"),i("\uFF0C\u4E5F\u53EF\u4EE5\u662F"),e("code",null,"\u6B63\u5219"),i("\uFF0C\u603B\u4E4B\u5C31\u662F\u9700\u8981"),e("code",null,"\u88AB\u66FF\u6362\u7684\u5B57\u7B26\u4E32\u7684\u6587\u672C\u6A21\u5F0F"),i("\u3002")]),e("p",null,[i("\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5B83\u65E2\u53EF\u4EE5\u662F\u7528\u4E8E"),e("code",null,"\u66FF\u6362\u6389"),i("\u7B2C\u4E00\u4E2A\u53C2\u6570\u5728\u539F\u5B57\u7B26\u4E32\u4E2D\u7684\u5339\u914D\u90E8\u5206\u7684"),e("code",null,"\u5B57\u7B26\u4E32"),i("\uFF08\u8BE5\u5B57\u7B26\u4E32\u4E2D\u53EF\u4EE5\u5185\u63D2\u4E00\u4E9B"),e("code",null,"\u7279\u6B8A\u7684\u53D8\u91CF\u540D"),i("\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u7528\u6765\u521B\u5EFA\u65B0\u5B50\u5B57\u7B26\u4E32\u7684"),e("code",null,"\u51FD\u6570"),i("\uFF0C\u8BE5\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u5C06\u66FF\u6362\u6389\u7B2C\u4E00\u4E2A\u53C2\u6570\u5339\u914D\u5230\u7684\u7ED3\u679C\u3002")])]),e("ul",null,[e("li",null,"\u6B63\u5219\u66FF\u6362\u8868\u8FBE\u5F0F")]),e("blockquote",null,[e("p",null,"$& \u7528\u4E8E\u65E0\u5206\u7EC4\u7684\u60C5\u51B5")]),e("div",{class:"language-TypeScript ext-TypeScript line-numbers-mode"},[e("pre",{class:"language-TypeScript"},[e("code",null,`let str = '\u53F2\u8BB0\u771F\u662F\u53F2\u5BB6\u4E4B\u7EDD\u5531,\u65E0\u97F5\u4E4B\u79BB\u9A9A'
let result = str.replace('\u53F2\u8BB0', '\u300A$&\u300B') // \u8FD9\u91CC\u7684$&\u5C31\u662F\`\u53F2\u8BB0\`\u4E8C\u5B57, \u4E5F\u5C31\u662F\u7528\u300A\u53F2\u8BB0\u300B\u4EE3\u66FF\u53F2\u8BB0
console.log(result) // \u300A\u53F2\u8BB0\u300B\u771F\u662F\u53F2\u5BB6\u4E4B\u7EDD\u5531,\u65E0\u97F5\u4E4B\u79BB\u9A9A
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("blockquote",null,[e("p",null,"$` \u5339\u914D\u5230\u7684\u6570\u636E\u7684\u5DE6\u8FB9\u5B57\u7B26\u4E32")]),e("div",{class:"language-TypeScript ext-TypeScript line-numbers-mode"},[e("pre",{class:"language-TypeScript"},[e("code",null,`let str = '\u7814\u7A76\u4E00\u4E0Breplace\u8BE5\u600E\u4E48\u7528'
let result = str.replace('replace', ',$\`\u524D\u7AEF\u6280\u672F') // \u8FD9\u91CC\u7684 $\` === \u7814\u7A76\u4E00\u4E0B\uFF0C\u4E5F\u5C31\u662F\u7528 ',\u7814\u7A76\u4E00\u4E0B\u524D\u7AEF\u6280\u672F' \u4EE3\u66FF 'replace' 
console.log(result) // \u7814\u7A76\u4E00\u4E0B,\u7814\u7A76\u4E00\u4E0B\u524D\u7AEF\u6280\u672F\u8BE5\u600E\u4E48\u7528
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("blockquote",null,[e("p",null,"$' \u548C $` \u76F8\u53CD\uFF0C\u4EE3\u8868\u5339\u914D\u5230\u7684\u6570\u636E\u7684\u53F3\u8FB9\u5B57\u7B26\u4E32")]),e("div",{class:"language-TypeScript ext-TypeScript line-numbers-mode"},[e("pre",{class:"language-TypeScript"},[e("code",null,`let str = '\u7814\u7A76\u4E00\u4E0Breplace\u8BE5\u600E\u4E48\u7528'
let result = str.replace('replace', ",vue3$',") // \u6B64\u5904\u7684 $' === \u8BE5\u600E\u4E48\u7528\uFF0C\u4E5F\u5C31\u662F\u7528 ',vue3\u8BE5\u600E\u4E48\u7528,' \u4EE3\u66FF 'replace'
console.log(result) // \u7814\u7A76\u4E00\u4E0B,vue3\u8BE5\u600E\u4E48\u7528,\u8BE5\u600E\u4E48\u7528
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("blockquote",null,[e("p",null,[i("$1,$2,"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mn",null,"3"),e("mo",{separator:"true"},","),e("mi",{mathvariant:"normal"},"."),e("mi",{mathvariant:"normal"},"."),e("mi",{mathvariant:"normal"},"."),e("mi",{mathvariant:"normal"},"."),e("mi",{mathvariant:"normal"},".")]),e("annotation",{encoding:"application/x-tex"},"3,.....")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8389em","vertical-align":"-0.1944em"}}),e("span",{class:"mord"},"3"),e("span",{class:"mpunct"},","),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},".....")])])]),i("n\uFF0C\u8868\u793A\u7B2C\u51E0\u4E2A\u5206\u7EC4")])]),e("div",{class:"language-TypeScript ext-TypeScript line-numbers-mode"},[e("pre",{class:"language-TypeScript"},[e("code",null,`let str = '\u897F\u74DC,\u756A\u85AF,\u5927\u756A\u85AF,\u54B8\u9C7C,\u841D\u535C,\u82F9\u679C'
let result = str.replace(/(\u897F\u74DC)(.*)(\u82F9\u679C)/, "$1(\u6C34\u679C)$2$3(\u6C34\u679C)")
/**
 * $1 === \u897F\u74DC
 * $2 === ,\u756A\u85AF,\u5927\u756A\u85AF,\u54B8\u9C7C,\u841D\u535C,
 * $3 === \u82F9\u679C
 */
console.log('result', result) // \u897F\u74DC(\u6C34\u679C),\u756A\u85AF,\u5927\u756A\u85AF,\u54B8\u9C7C,\u841D\u535C,\u82F9\u679C(\u6C34\u679C)
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("ul",null,[e("li",null,"\u51FD\u6570")]),e("div",{class:"language-TypeScript ext-TypeScript line-numbers-mode"},[e("pre",{class:"language-TypeScript"},[e("code",null,`let str = '\u4ECA\u5E74\u662F2022\u5E74,\u65F6\u95F4\u597D\u5FEB'
let result = str.replace(/(\u4ECA\u5E74).+?(\u65F6\u95F4).*/g, function () {
  console.log(arguments)
  /**
   * 0: "\u4ECA\u5E74\u662F2022\u5E74,\u65F6\u95F4\u597D\u5FEB"
   * 1: "\u4ECA\u5E74"
   * 2: "\u65F6\u95F4"
   * 3: 0
   * 4: "\u4ECA\u5E74\u662F2022\u5E74,\u65F6\u95F4\u597D\u5FEB"
   */
})
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])]),e("p",null,[i("\u53EF\u4EE5\u5F97\u51FA\u7ED3\u8BBA\uFF0C\u90A3\u5C31\u662F"),e("code",null,"\u6709\u5206\u7EC4"),i("\u7684\u60C5\u51B5\u4E0B\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5F00\u59CB\u5C31\u662F"),e("code",null,"\u4F9D\u6B21\u5C55\u793A"),i("\u6BCF\u6B21\u5206\u7EC4"),e("code",null,"\u5339\u914D\u5230\u7684\u5185\u5BB9"),i("\u3002 \u6240\u4EE5\uFF0C\u6211\u4EEC\u56DE\u5230\u6E90\u7801\u4E2D\uFF0C\u6B64\u5904\u7684"),e("code",null,"c"),i("\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u524D\u9762\u8BF4\u7684\u6BCF\u6B21\u5339\u914D\u5230\u7684"),e("code",null,"\u7B2C\u4E00\u4E2A\u5206\u7EC4"),i("\uFF0C\u672C\u6848\u4F8B\u4E2D\u4F9D\u6B21\u4E3A\uFF1Ah, c\u4E24\u4E2A\uFF0C\u7136\u540E\u5C06\u5176\u6539\u4E3A\u5927\u5199\uFF0C\u76F4\u63A5return\uFF0C\u5C31\u80FD\u5C06"),e("code",null,"-x"),i("\u66FF\u6362\u4E3A"),e("code",null,"X"),i("\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6211\u4EEC\u7684\u76EE\u6807\u3002")]),e("div",{class:"language-TypeScript ext-TypeScript line-numbers-mode"},[e("pre",{class:"language-TypeScript"},[e("code",null,`let str = 'on-handle-click'
let result = str.replace(/-(\\w)/g, function () {
  console.log(arguments)
  // { '0': '-h', '1': 'h', '2': 2, '3': 'on-handle-click' }
  // { '0': '-c', '1': 'c', '2': 9, '3': 'on-handle-click' }
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
})
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1),P=n(`<h3 id="haschanged-\u6BD4\u8F83\u53D8\u91CF\u76F8\u540C" tabindex="-1"><a class="header-anchor" href="#haschanged-\u6BD4\u8F83\u53D8\u91CF\u76F8\u540C" aria-hidden="true">#</a> hasChanged \u6BD4\u8F83\u53D8\u91CF\u76F8\u540C</h3><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// compare whether a value has changed, accounting for NaN.
export const hasChanged = (value: any, oldValue: any): boolean =&gt; !Object.is(value, oldValue)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">Tips</p><p>\u53EF\u80FD\u6709\u4EBA\u611F\u5230\u7591\u95EE\uFF0C\u4E24\u4E2A\u503C\u662F\u5426\u4E0D\u540C\u8FD8\u9700\u8981\u5C01\u88C5\uFF1F\u591A\u6B64\u4E00\u4E3E\uFF0C\u6211\u76F4\u63A5 <code>a !== b</code> \u4E0D\u5C31\u884C\u4E86\uFF1F\u6211\u4EEC\u6765\u770B\u51E0\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// +0 \u548C -0\u95EE\u9898
console.log(+0 === -0) // true
Object.is(+0, -0) // false

// NaN \u95EE\u9898
console.log(NaN === NaN) // false
Object.is(NaN, NaN) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u6B64\u53EF\u4EE5\u770B\u51FA\uFF0C<code>Object.is</code>\u53EF\u4EE5\u5F25\u8865 <code>\u6B63\u8D1F0</code> \u548C <code>NaN</code> \u6BD4\u8F83\u4E0A\u5B58\u5728\u7684\u95EE\u9898\u3002MDN\u7F51\u7AD9\u4E0A\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A<code>polyfill</code>\uFF1A</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>Object.is = function () {
	 // \u5982\u679C\u4E24\u4E2A\u503C\u4E0D\u540C(\u6709\u53EF\u80FD\u662F\u6B63\u8D1F0)
  if (x === y) {
    return x !== 0 || 1/x === 1/y
    /**
     * \u5982\u679Cx,y\u5206\u522B\u4E3A+0 \u548C -0, \u90A3\u4E48, \u4E00\u4E2A\u5C06\u4F1A\u662FInfinity \u53E6\u4E00\u4E2A\u662F-Infinity
     */
    // \u5982\u679C\u4E0D\u540C, \u4E5F\u53EF\u80FD\u662FNaN
  } else {
    // \u81EA\u5DF1\u90FD\u4E0D\u7B49\u4E8E\u81EA\u5DF1, \u90A3\u80AF\u5B9A\u662FNaN\u4E86
    return x !== x &amp;&amp; y !==y
  }
}
console.log(&#39;NaN === NaN --&gt;&#39;, Object.is(NaN, NaN))
console.log(&#39;+0 === -0 --&gt;&#39;, Object.is(+0, -0))
// NaN === NaN --&gt; true \u283C : timing npm:load:cleanupLog Completed in 2ms
// +0 === -0 --&gt; false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="def-\u6DFB\u52A0\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#def-\u6DFB\u52A0\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027" aria-hidden="true">#</a> def \u6DFB\u52A0\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027</h3><p>\u5C31\u662F\u7ED9\u5BF9\u8C61<code>obj</code>\uFF0C\u52A0\u4E0A\u4E00\u4E2A<code>\u53EF\u4EE5\u5220\u9664</code>\uFF0C\u5176\u5C5E\u6027\u63CF\u8FF0\u7B26<code>\u53EF\u4EE5\u6539\u53D8</code>\uFF0C\u4E14<code>\u4E0D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027key</code>\uFF0C\u5176\u503C\u4E3A<code>value</code>\u3002</p><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export const def = (obj: object, key: string | symbol, value: any) =&gt; {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u6848\u4F8B</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>let person = {
  name: &#39;human&#39;,
  age: 100
}
def(person, &#39;gender&#39;, &#39;male&#39;)
console.log(&#39;person --&gt; &#39;, person) 
/**
 * nodejs \u73AF\u5883\u4E0B { name: &#39;human&#39;, age: 100 }
 * chrome \u6D4F\u89C8\u5668\u4E0B { name: &#39;human&#39;, age: 100, gender: &#39;male&#39; }
 *  */ 
console.log(&#39;gender --&gt; &#39;, person.gender) // male
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u53EF\u679A\u4E3E\u6027\uFF0C\u6309\u7167\u6211\u4EEC\u4E4B\u524D\u8BF4\u7684<code>for...in</code>\uFF0C<code>Object.keys</code>\uFF0C<code>JSON.stringify</code>\u4E09\u79CD\u65B9\u6CD5</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// for...in
for (let key in person) {
  console.log(&#39;key&#39;, key)
  /**
   * key name
   * key age
   */
}

// JSON.stringify
console.log(&#39;JSON.stringify(person)&#39;, JSON.stringify(person))
// {&quot;name&quot;:&quot;human&quot;,&quot;age&quot;:100}

// Object.keys(person)
console.log(&#39;Object.keys(person)&#39;, Object.keys(person))
// [ &#39;name&#39;, &#39;age&#39; ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">Tips</p><p>\u5C5E\u6027\u63CF\u8FF0\u7B26\u53EF\u4EE5\u7EC6\u5206\u4E3A<code>\u6570\u636E\u63CF\u8FF0\u7B26</code>\u548C<code>\u5B58\u53D6\u63CF\u8FF0\u7B26</code>\u3002\u6CE8\u610F\uFF0Cconfigurable \u548C enumerable\u65E2\u662F\u6570\u636E\u63CF\u8FF0\u7B26\u53C8\u662F\u5B58\u53D6\u63CF\u8FF0\u7B26\u3002\u9664\u4E86\u8FD9\u4E24\u4E2A\u5C5E\u6027\u4E4B\u5916\uFF0C\u5176\u4ED6\u4E0D\u540C\u7684\u63CF\u8FF0\u7B26\u4E0D\u5F97\u5171\u7528\uFF01</p><p>\u6570\u636E\u63CF\u8FF0\u7B26\uFF1A<code>writable</code> \u53EA\u6709writable\u4E3Atrue\u7684\u65F6\u5019\uFF0C\u8BE5\u5C5E\u6027\u624D\u80FD\u88AB\u6539\u53D8\u503C\u3002 <code>value</code> \u5C5E\u6027\u7684\u503C</p><p>\u5B58\u53D6\u63CF\u8FF0\u7B26\uFF1A <code>get</code>\uFF0C<code>set</code></p></div><h3 id="tonumber-\u5C1D\u8BD5\u8F6C\u6362\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#tonumber-\u5C1D\u8BD5\u8F6C\u6362\u6570\u5B57" aria-hidden="true">#</a> toNumber \u5C1D\u8BD5\u8F6C\u6362\u6570\u5B57</h3><ul><li>\u6E90\u7801\u5B9E\u73B0</li></ul><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>export const toNumber = (val: any): any =&gt; {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">Tips</p><p>isNaN\u4E00\u770B\u5B57\u9762\u610F\u601D\u5C31\u77E5\u9053: \u5224\u65AD\u4E00\u4E2A\u503C\u662F\u5426\u4E3ANaN. \u4F46\u4ED6\u6709\u4E00\u4E9B\u602A\u5F02\u884C\u4E3A, \u4F8B\u5982:</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>isNaN(undefined) // true
isNaN(&#39;undefined&#39;) // true
isNaN(&#39;haha&#39;) // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F88\u660E\u663E, \u8FD9\u4E2A\u65B9\u6CD5\u5173\u5FC3\u7684\u6839\u672C\u4E0D\u662F\u4E00\u4E2A\u503C\u662F\u5426\u662FNaN, \u5B83\u4F3C\u4E4E\u66F4\u5173\u5FC3\u4E00\u4E2A\u503C\u662F\u5426\u65E0\u6CD5\u88AB\u8F6C\u4E3A\u6570\u5B57! \u6240\u4EE5, \u6211\u4EEC\u6709\u4E86Number.isNaN</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>Number.isNaN(undefined) // false
Number.isNaN(&#39;undefined&#39;) // false
Number.isNaN(&#39;haha&#39;) // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5, \u4E00\u5B9A\u8981\u6CE8\u610F\u4E86, <code>isNaN</code>\u548C<code>Number.isNaN</code>\u4E0D\u662F\u4E00\u56DE\u4E8B!</p></div>`,17);function q(A,E){const l=c("Badge");return a(),r("div",null,[o,e("ul",null,[e("li",null,[v,s(l,{text:"\u6709\u98CE\u9669",type:"error"})])]),u,e("div",m,[p,s(l,{text:"\u601D\u8003"}),b,s(l,{text:"\u731C\u6D4B",type:"warning"}),g]),y,e("div",h,[f,s(l,{text:"\u601D\u8003"}),T,S,s(l,{text:"\u89E3\u7B54",type:"warning"}),x]),j,e("div",k,[N,s(l,{text:"\u601D\u8003"}),O,s(l,{text:"\u731C\u6D4B",type:"warning"}),_]),w,M,P])}const z=d(t,[["render",q],["__file","index.html.vue"]]);export{z as default};
