---
title: v-if 和 v-for优先级
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /pages/f1337c/
categories: 
  - Question
  - VUE
  - FAQs
tags: 
  - 
---

**v-if和v-for是开发中经常会遇到的2个指令，那么在使用的过程中，二者如果同时存在同一个标签上，谁的优先级会更高一点呢？**

那么我们从源码的角度去看他，源码位置： compiler/codegen/index.js

在genElement方法中，我们可以看到一些if else的判断

```
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    let code
    if (el.component) {
      code = genComponent(el.component, el, state)
    } else {
      let data
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData(el, state)
      }

      const children = el.inlineTemplate ? null : genChildren(el, state, true)
      code = `_c('${el.tag}'${
        data ? `,${data}` : '' // data
      }${
        children ? `,${children}` : '' // children
      })`
    }
    // module transforms
    for (let i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code)
    }
    return code
  }
```

> 处理for循环是处于if的上面的，所以我们由此可以判定v-for的优先级是高于v-if的。

我们经常会遇见这种情况，在v-for的时候，在数组中会有一些需要进行v-if的判断，这种情况下，我们如果先使用computed将不需要渲染的项过滤出来，那么在进行v-for的时候，循环的就只是需要渲染的项，这也是提升vue性能的一种方式。
 
