---
title: 路由懒加载
date: 2022-06-14 14:41:41
permalink: /SkillPoint/LazyRouter/
categories:
  - 前端
tags:
  - 前端技术点
---

:::danger
路由懒加载，能让你首次加载更快
:::

路由懒加载可以让我们的包不需要一次把所有的页面的加载进来，只加载当前页面的路由组件就行。

举个栗子🌰，如果这样写，加载的时候会全部都加载进来。

```js
const router = new VueRouter({
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
```

所以，应该避免上面的写法，尽量使用懒加载。

路由的懒加载可以分为以下三种写法。

- Vue异步组件
- es6的import
- webpack提供的require.ensure()
```js

// 1、Vue异步组件
VueRouter({
  routes:[
    {
      path: '/about',
      name: 'About',
      component: resolve => reqire(['path路径'], resolve)
    }
  ]
})

// 2、es6的import
VueRouter({
  routes:[
    {
      path: '/about',
      name: 'About',
      component: () => import('path路径')
    }
  ]
})

// 3、webpack提供的require.ensure()
VueRouter({
  routes:[
    {
      path: '/about',
      name: 'About',
      component: r => require.ensure([],() =>  r(require('path路径')), 'demo')
    }
  ]
})

```
