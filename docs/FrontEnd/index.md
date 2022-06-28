---
pageComponent:
  name: Catalogue
  data:
    path: Recommend
    imgUrl: /404.jpg
    description: 前端知识库
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

<el-collapse>
<el-collapse-item title="前端规范" name="1">
  <div><a target="_blank" href="/Standard/FrontEnd/">HTML规范指南</a></div>
</el-collapse-item>
<el-collapse-item title="CSS样式组件库 - 适用Vue、React、Html等不同类型框架的CSS样式组件" name="2">
  
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
  
</el-collapse-item>
<el-collapse-item title="JavaScript相关" name="3">
  <div><a target="_blank" href="/JavaScript/ES6/">ES6 / ECMAScript 2015</a></div>
  <div><a target="_blank" href="/JavaScript/RESTful/">RESTful Api</a></div>
  <div><a target="_blank" href="/JavaScript/EventLoop/">JavaScript 执行机制</a></div>
  <div><a target="_blank" href="/JavaScript/Question/">待整理问题</a></div>
</el-collapse-item>
<el-collapse-item title="打包相关 - 包括Webpack、Vite等打包工具原理介绍" name="4">
  <div><a target="_blank" href="/Webpack/">实现webpack打包流程</a></div>
</el-collapse-item>
<el-collapse-item title="微前端相关 - 包括微前端技术、single-spa、iframe等前端微服务话解决方案" name="5">
  <div><a target="_blank" href="/Micro/QianKun/">乾坤 - 阿里微前端解决方案</a></div>
</el-collapse-item>
<el-collapse-item title="VUE相关 - 包括Vue、Vuex、VueRouter等Vue全家桶相关知识点" name="6">
  <div><a target="_blank" href="/Vue/LifeCycle/">Vue生命周期函数</a></div>
  <div><a target="_blank" href="/Vue/Communicate/">Vue组件通讯方式</a></div>
  <div><a target="_blank" href="/Vue/Question/">待整理问题</a></div>
</el-collapse-item>
<el-collapse-item title="React相关 - 包括React hooks等React相关知识点" name="7">
  <div><a target="_blank" href="/React/Hooks/">浅谈12个Hooks</a></div>
</el-collapse-item>
<el-collapse-item title="服务方面 - 包括浏览器问题、跨域问题、服务器问题等内容" name="8">
  <div><a target="_blank" href="/Network/BrowserCache/">浏览器缓存</a></div>
  <div><a target="_blank" href="/Network/CrossDomain/">跨域</a></div>
  <div><a target="_blank" href="/Network/Question/">待整理问题</a></div>
</el-collapse-item>
<el-collapse-item title="封装方面 - 包括Axios、Storage、utils等内容" name="9">
  <div><a target="_blank" href="/Package/Storage/">Storage</a></div>
</el-collapse-item>
<el-collapse-item title="实用技术文档" name="10">
  <div><a target="_blank" href="/SkillPoint/LazyRouter/">路由懒加载</a></div>
  <div><a target="_blank" href="/SkillPoint/LazyComponent/">组件懒加载</a></div>
  <div><a target="_blank" href="/SkillPoint/Context/">上下文批量引入</a></div>
  <div><a target="_blank" href="/SkillPoint/@Hook/">hook监听生命周期</a></div>
  <div><a target="_blank" href="/SkillPoint/Computed/">Computed中使用this</a></div>
  <div><a target="_blank" href="/SkillPoint/Freeze/">数据冻结</a></div>
  <div><a target="_blank" href="/SkillPoint/Sync/">父组件通信</a></div>
  <div><a target="_blank" href="/SkillPoint/Slot/">插槽</a></div>
</el-collapse-item>
</el-collapse>


::: right
来自 [JSH](https://gitee.com/jin-shaohui/vuepress)
:::


<Vssue :title="$title" />
