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


<el-divider content-position="left"><strong style="color: red">前端规范</strong></el-divider>
<div><a target="_blank" href="/Standard/FrontEnd/">HTML规范指南</a></div>


<el-divider content-position="left"><strong style="color: red">JavaScript相关</strong></el-divider>
<el-row :gutter="20">
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/JavaScript/ES6/">ES6 / ECMAScript 2015</a></div></el-col>
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/JavaScript/RESTful/">RESTful Api</a></div></el-col>
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/JavaScript/EventLoop/">JavaScript 执行机制</a></div></el-col>
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/JavaScript/Question/">待整理问题</a></div></el-col>
</el-row>


<el-divider content-position="left"><strong style="color: red">打包相关</strong> - 包括Webpack、Vite等打包工具原理介绍</el-divider>
<div><a target="_blank" href="/Webpack/">实现webpack打包流程</a></div>


<el-divider content-position="left"><strong style="color: red">微前端相关</strong> - 包括single-spa、iframe等前端微服务话解决方案</el-divider>
<div><a target="_blank" href="/Micro/QianKun/">乾坤 - 阿里微前端解决方案</a></div>


<el-divider content-position="left"><strong style="color: red">VUE2相关</strong> - 包括Vue、Vuex、VueRouter等Vue全家桶相关知识点</el-divider>
<el-row :gutter="20">
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/Vue/LifeCycle/">Vue生命周期函数</a></div></el-col>
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/Vue/Communicate/">Vue组件通讯方式</a></div></el-col>
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/Vue/Question/">待整理问题</a></div></el-col>
</el-row>

<el-divider content-position="left"><strong style="color: red">VUE3相关</strong> - 包括源码相关知识点</el-divider>
<el-row :gutter="20">
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/Vue3/ToolFunction/">工具函数源码解析</a></div></el-col>
</el-row>

<el-divider content-position="left"><strong style="color: red">React相关</strong> - 包括React hooks等React相关知识点</el-divider>
<div><a target="_blank" href="/React/Hooks/">浅谈12个Hooks</a></div>


<el-divider content-position="left"><strong style="color: red">服务方面</strong> - 包括浏览器问题、跨域问题、服务器问题等内容</el-divider>
<el-row :gutter="20">
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/Network/BrowserCache/">浏览器缓存</a></div></el-col>
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/Network/CrossDomain/">跨域</a></div></el-col>
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/Network/Question/">待整理问题</a></div></el-col>
</el-row>


<el-divider content-position="left"><strong style="color: red">封装方面</strong> - 包括Axios、Storage、utils等内容</el-divider>
<div><a target="_blank" href="/Package/Storage/">Storage</a></div>


<el-divider content-position="left"><strong style="color: red">实用技术文档</strong></el-divider>
<el-row :gutter="20">
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/SkillPoint/LazyRouter/">路由懒加载</a></div></el-col>
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/SkillPoint/LazyComponent/">组件懒加载</a></div></el-col>
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/SkillPoint/Context/">上下文批量引入</a></div></el-col>
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/SkillPoint/@Hook/">hook监听生命周期</a></div></el-col>
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/SkillPoint/Computed/">Computed中使用this</a></div></el-col>
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/SkillPoint/Freeze/">数据冻结</a></div></el-col>
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/SkillPoint/Sync/">父组件通信</a></div></el-col>
  <el-col :lg="8" :sm="24"><div><a target="_blank" href="/SkillPoint/Slot/">插槽</a></div></el-col>
</el-row>


<el-divider content-position="left"><strong style="color: red">CSS样式组件库</strong> - 适用Vue、React、Html等不同类型框架的CSS样式组件</el-divider>

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


::: right
来自 [JSH](https://gitee.com/jin-shaohui/vuepress)
:::


<Vssue :title="$title" />
