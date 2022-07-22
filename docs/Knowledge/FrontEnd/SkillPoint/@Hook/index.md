---
title: 父组件里监听子组件的生命周期
date: 2022-06-14 17:19:46
permalink: /SkillPoint/@Hook/
categories:
  - 前端
tags:
  - 前端技术点
---

比如有父组件 Parent 和子组件 Child，如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，常规的写法可能如下：

```vue
// Parent.vue
<Child @mounted="doSomething"/>

// Child.vue
mounted() {
  this.$emit("mounted");
}
```

此外，还有一种特别简单的方式，子组件不需要任何处理，只需要在父组件引用的时候通过@hook 来监听即可，@hook也可以监听其它的生命周期事件,代码如下：

```vue
<Child @hook:mounted="doSomething" /> 
<Child @hook:updated="doSomething" />
```

实现原理在vue源码的 `/src/core/instance/lifecycle.js`

```js
// 每个生命周期后都会调用 callHook('xxx') 如下
if (vm._isMounted && !vm._isDestroyed) {
  callHook(vm, 'beforeUpdate')
}

export function callHook (vm: Component, hook: string) {
  //...
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook)
  }
  //...
}

```
