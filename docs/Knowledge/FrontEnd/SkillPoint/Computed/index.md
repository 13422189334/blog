---
title: Computed中使用this
date: 2022-06-15 10:19:03
permalink: /SkillPoint/Computed/
category:
  - VUE SKILL
tag:
  - 前端小技巧
---

我们平时在 `computed` 属性中可以通过 `this.xxx` 去拿 `data` 里面的数据和 `methods` 里面的方法，

或许还会通过 `this.$store` 去拿 `vuex` 的 `state` 和 `commit` 等，

甚至，还会通过 this.`$route` 去获取路由里面的数据。 

其实，我们可以避免这些丑陋的this，它甚至会给我们带来看不见的性能问题。

实现上，我们通过this能访问到的数据，在computed的第一个参数上都能结构出来。

```vue
export default {
  computed: {
    a({$attrs,$route,$store,$listeners,$ref}){
     // 还能结构很多属性，可自行打印看看
     return 
   }
  }
}
```
