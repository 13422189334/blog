---
title: 组件懒加载
date: 2022-06-14 16:06:41
permalink: /SkillPoint/LazyComponent/
categories:
  - 前端
tags:
  - 前端技术点
---

:::danger
异步组件可以让我们在需要一些组件时才将它加载进来，而不是一初始化就加载进来，这跟路由懒加载是一个概念。
:::

以前是这么引入组件的

```vue
import BureauDetail from './components/ChildFirst'
import addBureau from './components/ChildSecond'

//在vue的comoinents中
components: {
  ChildFirst,
  ChildSecond 
}
```

如果不是一开始就要加载的组件，我们可以使用组件懒加载

```vue
//在vue的comoinents中
components: {
  BureauDetail: () => import('./components/ChildFirst'),
  addBureau: () => import('./components/ChildSecond')
},
```

异步组件还有一种比较完善的写法

export default {
  components:{
    ChildFirst:()=>({
      component:import(/* webpackChunkName: "ChildFirst" */ './Async'),
      delay:200, // 延迟几毫秒，默认200
      timeout:3000, // 加载几毫米之后就超时，触发error组件
      loading:LoadingComponent, // 组件未加载回来前显示
      error:ErrorComponent // 组件超时时显示
    })
  }
}
