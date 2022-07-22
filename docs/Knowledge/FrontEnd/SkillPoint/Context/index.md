---
title: 上下文批量引入
date: 2022-06-14 16:26:24
permalink: /SkillPoint/Context/
categories:
  - 前端
tags:
  - 前端技术点
---

:::danger
require.context()引入多个组件

常常用来在组件内引入多个组件, `require.context(directory, useSubdirectories, regExp)`
:::

```vue
// 原始写法
import titleCom from '@/components/home/titleCom'
import bannerCom from '@/components/home/bannerCom'
import cellCom from '@/components/home/cellCom'
components: {
  titleCom, bannerCom, cellCom
}
```

这样就写了大量重复的代码,利用 `require.context` 可以写成

```js
const path = require('path')
const files = require.context('@/components/home', false, /\.vue$/)
const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.vue')
  modules[name] = files(key).default || files(key)
})
components: modules
```

在main.js中引入大量公共组件,利用 `require.context` 可以写成

```js
import Vue from 'vue'
// 自定义组件
const requireComponents = require.context('../views/components', true, /\.vue/)
// 打印结果
// 遍历出每个组件的路径
requireComponents.keys().forEach(fileName => {
  // 组件实例
  const reqCom = requireComponents(fileName)
  // 截取路径作为组件名
  const reqComName =reqCom.name|| fileName.replace(/\.\/(.*)\.vue/,'$1')
  // 组件挂载
  Vue.component(reqComName, reqCom.default || reqCom)
})

```
