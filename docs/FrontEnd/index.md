---
pageComponent:
  name: Catalogue
  data:
    path: Recommend
    imgUrl: /404.jpg
    description: 包括 前端规范、CSS、JS、VUE、React、浏览器等相关内容
title: 前端知识库
lang: zh-CN
date: 2022-05-17 14:46:27
permalink: /FrontEnd
sidebar: true # 不显示侧边栏
article: true # 不是文章页 (不显示面包屑栏、最近更新栏等)
comment: true # 不显示评论栏
editLink: true # 不显示编辑按钮
categories: 
  -
tags: 
  - 
---


<Container
  title='前端规范'
  :arrData="[
    { url: '/Standard/FrontEnd/', name: 'HTML规范指南' }
  ]"
/>

<Container
  title='JavaScript相关'
  :arrData="[
    { url: '/JavaScript/ES6/', name: 'ES6 / ECMAScript 2015' },
    { url: '/JavaScript/RESTful/', name: 'RESTful Api' },
    { url: '/JavaScript/EventLoop/', name: 'JavaScript 执行机制' },
    { url: '/JavaScript/Question/', name: '待整理问题' },
  ]"
/>

<Container
  title='打包相关'
  subTitle='包括Webpack、Vite等打包工具原理介绍'
  :arrData="[
    { url: '/Webpack/', name: '实现webpack打包流程' }
  ]"
/>

<Container
  title='微前端相关'
  subTitle='包括single-spa、iframe等前端微服务话解决方案'
  :arrData="[
    { url: '/Micro/QianKun/', name: '乾坤 - 阿里微前端解决方案' }
  ]"
/>

<Container
  title='VUE2相关'
  subTitle='包括Vue、Vuex、VueRouter等Vue全家桶相关知识点'
  :arrData="[
    { url: '/Vue/LifeCycle/', name: 'Vue生命周期函数' },
    { url: '/Vue/Communicate/', name: 'Vue组件通讯方式' },
    { url: '/Vue/Question/', name: '待整理问题' },
  ]"
/>

<Container
  title='VUE3相关'
  subTitle='包括源码相关知识点'
  :arrData="[
    { url: '/Vue3/ToolFunction/', name: '工具函数源码解析' }
  ]"
/>

<Container
  title='React相关'
  subTitle='包括React hooks等React相关知识点'
  :arrData="[
    { url: '/React/Hooks/', name: '浅谈12个Hooks' }
  ]"
/>

<Container
  title='服务方面'
  subTitle='包括浏览器问题、跨域问题、服务器问题等内容'
  :arrData="[
    { url: '/Network/BrowserCache/', name: '浏览器缓存' },
    { url: '/Network/CrossDomain/', name: '跨域' },
    { url: '/Network/Question/', name: '待整理问题' },
  ]"
/>

<Container
  title='封装方面'
  subTitle='包括Axios、Storage、utils等内容'
  :arrData="[
    { url: '/Package/Storage/', name: 'Storage' }
  ]"
/>

<Container
  title='实用技术文档'
  :arrData="[
    { url: '/SkillPoint/LazyRouter/', name: '路由懒加载' },
    { url: '/SkillPoint/LazyComponent/', name: '组件懒加载' },
    { url: '/SkillPoint/Context/', name: '上下文批量引入' },
    { url: '/SkillPoint/@Hook/', name: 'hook监听生命周期' },
    { url: '/SkillPoint/Computed/', name: 'Computed中使用this' },
    { url: '/SkillPoint/Freeze/', name: '数据冻结' },
    { url: '/SkillPoint/Sync/', name: '父组件通信' },
    { url: '/SkillPoint/Slot/', name: '插槽' },
  ]"
/>

<Container
  title='CSS样式组件库'
  subTitle='适用Vue、React、Html等不同类型框架的CSS样式组件'
  :arrData="[]"
>

::: cardImgList  4
```yaml
config:
    target: _self
    imgHeight: 100px
    objectFit: cover
    lineClamp: 1

data:
  - name: 打钩动画
    desc: svg css绘制打钩动画
    author: JSH
    avatar: /bingbing.jpg
    img: ./CssComponent/images/checked.jpg
    link: /CssComponent/Checked/
    bgColor: '#CBEAFA' # 背景色，可选，默认var(--bodyBg)。颜色值有#号时请添加引号
    textColor: '#6854A1' # 文本色，可选，默认var(--textColor)
  - name: 登录页
    desc: 蓝紫色风格登录框
    author: JSH
    avatar: /bingbing.jpg
    img: ./CssComponent/images/login.jpg
    link: /CssComponent/login/
    bgColor: '#C2FF2E' # 背景色，可选，默认var(--bodyBg)。颜色值有#号时请添加引号
    textColor: '#6854A1' # 文本色，可选，默认var(--textColor)
  - name: 百叶窗
    desc: checkbox实现百叶窗
    author: JSH
    avatar: /bingbing.jpg
    img: ./CssComponent/images/shutters.jpg
    link: /CssComponent/shutters/
    bgColor: '#FF6BC9' # 背景色，可选，默认var(--bodyBg)。颜色值有#号时请添加引号
    textColor: '#6854A1' # 文本色，可选，默认var(--textColor)
  - name: 流光按钮
    desc: 渐变色实现流光按钮
    author: JSH
    avatar: /bingbing.jpg
    img: ./CssComponent/images/streamerButton.jpg
    link: /CssComponent/streamerButton/
    bgColor: '#43F7FF' # 背景色，可选，默认var(--bodyBg)。颜色值有#号时请添加引号
    textColor: '#6854A1' # 文本色，可选，默认var(--textColor)
```
:::

</Container>



::: right
来自 [JSH](https://gitee.com/jin-shaohui/vuepress)
:::


<Vssue :title="$title" />
