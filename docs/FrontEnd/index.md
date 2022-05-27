---

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
::: right
来自 [JSH](https://gitee.com/jin-shaohui/vuepress)
:::

::: center
  ## CSS相关
  包括css使用、知识简介等
:::

::: cardList 4
```yaml
config:
    target: _self
    imgHeight: auto
    objectFit: cover
    lineClamp: 1

data:
  - name: 媒体查询@Media
    desc: css断点查询技术
    link: /Css/@Media/
    bgColor: '#F0DFB1'
    textColor: '#242A38'
```
:::


::: center
  ### CSS样式组件库
  适用Vue、React、Html等不同类型框架的CSS样式组件
:::

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
    img: ./Css/Component/images/checked.jpg
    link: /Css/Component/Checked/
    bgColor: '#CBEAFA' # 背景色，可选，默认var(--bodyBg)。颜色值有#号时请添加引号
    textColor: '#6854A1' # 文本色，可选，默认var(--textColor)
  - name: 登录页
    desc: 蓝紫色风格登录框
    author: JSH
    avatar: /bingbing.jpg
    img: ./Css/Component/images/login.jpg
    link: /Css/Component/login/
    bgColor: '#C2FF2E' # 背景色，可选，默认var(--bodyBg)。颜色值有#号时请添加引号
    textColor: '#6854A1' # 文本色，可选，默认var(--textColor)
  - name: 百叶窗
    desc: checkbox实现百叶窗
    author: JSH
    avatar: /bingbing.jpg
    img: ./Css/Component/images/shutters.jpg
    link: /Css/Component/shutters/
    bgColor: '#FF6BC9' # 背景色，可选，默认var(--bodyBg)。颜色值有#号时请添加引号
    textColor: '#6854A1' # 文本色，可选，默认var(--textColor)
  - name: 流光按钮
    desc: 渐变色实现流光按钮
    author: JSH
    avatar: /bingbing.jpg
    img: ./Css/Component/images/streamButton.jpg
    link: /Css/Component/streamButton/
    bgColor: '#43F7FF' # 背景色，可选，默认var(--bodyBg)。颜色值有#号时请添加引号
    textColor: '#6854A1' # 文本色，可选，默认var(--textColor)
```
:::


::: center
  ## JavaScript相关
  包括JavaScript知识点、面试题等
:::

::: cardList 4
```yaml
config:
    target: _self
    imgHeight: auto
    objectFit: cover
    lineClamp: 1

data:
  - name: 回调地狱
    desc: Promise解决回调地狱
    link: /JavaScript/AsyncHell/
    bgColor: '#F0DFB1'
    textColor: '#242A38'
  - name: 闭包
    desc: 闭包
    link: /JavaScript/Closure/
    bgColor: '#DFEEE7'
    textColor: '#2A3344'
  - name: 封装绑定事件处理函数
    desc: 封装绑定事件处理函数
    link: /JavaScript/Event/
    bgColor: '#F0DFB1'
    textColor: '#242A38'
  - name: EventLoop
    desc: JavaScript 执行机制
    link: /JavaScript/EventLoop/
    bgColor: '#DFEEE7'
    textColor: '#2A3344'
  - name: 文档碎片
    desc: Fragment减少dom操作
    link: /JavaScript/Fragment/
    bgColor: '#F0DFB1'
    textColor: '#242A38'
  - name: 封装接口请求
    desc: Promise 和 XHR 封装请求
    link: /JavaScript/PromiseXHR/
    bgColor: '#DFEEE7'
    textColor: '#2A3344'
  - name: 异步加载图片
    desc: img元素onload加载图片
    link: /JavaScript/PromiseImage/
    bgColor: '#F0DFB1'
    textColor: '#242A38'
  - name: Jsonp
    desc: 跨域解决方式
    link: /JavaScript/Jsonp/
    bgColor: '#DFEEE7'
    textColor: '#2A3344'
  - name: 代完成...
    desc: 待整理问题
    link: /JavaScript/await/
    bgColor: '#FF0000'
    textColor: '#FFFFFF'
```
:::

::: center
  ## 打包相关
  包括Webpack、Vite等打包工具原理介绍
:::

::: cardList 4
```yaml
config:
    target: _self
    imgHeight: auto
    objectFit: cover
    lineClamp: 1

data:
  - name: 手写webpack
    desc: 实现webpack打包流程
    link: /Webpack/
    bgColor: '#F0DFB1'
    textColor: '#242A38'
```
:::


::: center
  ## 微前端相关
  包括微前端技术、single-spa、iframe等前端微服务话解决方案
:::

::: cardList 4
```yaml
config:
    target: _self
    imgHeight: auto
    objectFit: cover
    lineClamp: 1

data:
  - name: 乾坤
    desc: 阿里微前端解决方案
    link: /Micro/QianKun/
    bgColor: '#F0DFB1'
    textColor: '#242A38'
```
:::


::: center
  ## VUE相关
  包括Vue、Vuex、VueRouter等Vue全家桶相关知识点
:::

::: cardList 4
```yaml
config:
    target: _self
    imgHeight: auto
    objectFit: cover
    lineClamp: 1

data:
  - name: 生命周期
    desc: Vue生命周期函数
    link: /Vue/LifeCycle/
    bgColor: '#F0DFB1'
    textColor: '#242A38'
```
:::
