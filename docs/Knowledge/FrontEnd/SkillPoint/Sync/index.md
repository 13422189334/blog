---
title: 父组件通信
date: 2022-06-15 11:18:42
permalink: /SkillPoint/Sync/
category:
  - VUE SKILL
tag:
  - 前端小技巧
---

:::danger
`.sync`提供了一种与父组件沟通的思路！

你如果只是单纯的在子组件当中修改父组件的某个数据时，建议使用 `sync` ，简单，快捷，不需要在传一个自定义方法来接收了
:::

vue中我们经常会用 `v-bind(缩写为:)` 给子组件传入参数，然后子组件 `emit` 事件去改变父组件的状态。

或者我们会给子组件传入一个函数，子组件通过调用传入的函数来改变父组件的状态。

举个例子🌰

```vue
//父组件 给子组件传入一个函数
 <MyFooter :age="age" @setAge="(res)=> age = res">
 </MyFooter>
 
 
 //子组件 通过调用这个函数来实现修改父组件的状态。
 mounted () {
    console.log(this.$emit('setAge',1234567));
 }
```

现在只需要使用.sync就可以轻松更新赋组件的值

```vue
//父组件 将age传给子组件并使用.sync修饰符。
<MyFooter :age.sync="age">
</MyFooter>


//子组件 触发事件
 mounted () {
   console.log(this.$emit('update:age',1234567));
 }
```
