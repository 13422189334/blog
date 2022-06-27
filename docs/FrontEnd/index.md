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


## 前端规范

::: cardList 4
```yaml
config:
    target: _self
    imgHeight: auto
    objectFit: cover
    lineClamp: 1

data:
  - name: 前端规范
    desc: HTML规范指南
    link: /Standard/FrontEnd/
    bgColor: '#FCDBA0'
    textColor: '#A05F2C'
```
:::


## CSS样式组件库
适用Vue、React、Html等不同类型框架的CSS样式组件

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



## JavaScript相关
包括JavaScript知识点

::: cardList 4
```yaml
config:
    target: _self
    imgHeight: auto
    objectFit: cover
    lineClamp: 1

data:
  - name: ES6
    desc: ECMAScript 2015
    link: /JavaScript/ES6/
    avatar: ./images/es6.jpg
    bgColor: '#FCDBA0'
    textColor: '#A05F2C'
  - name: RESTful
    desc: RESTful Api
    link: /JavaScript/RESTful/
    avatar: ./images/restful.jpg
    bgColor: '#CBEAFA' # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
    textColor: '#6854A1' # 可选，默认var(--textColor)
  - name: EventLoop
    desc: JavaScript 执行机制
    link: /JavaScript/EventLoop/
    avatar: ./images/eventLoop.jpg
    bgColor: '#FCDBA0'
    textColor: '#A05F2C'
  - name: 问答
    desc: 待整理问题
    link: /JavaScript/Question/
    avatar: ./images/question.jpg
    bgColor: '#718971'
    textColor: '#ffffff'
```
:::


## 打包相关
包括Webpack、Vite等打包工具原理介绍

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
    avatar: ./images/webpack.jpg
    bgColor: '#FCDBA0'
    textColor: '#A05F2C'
```
:::



## 微前端相关
包括微前端技术、single-spa、iframe等前端微服务话解决方案

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
    avatar: ./images/qiankun.jpg
    bgColor: '#FCDBA0'
    textColor: '#A05F2C'
```
:::


## VUE相关
包括Vue、Vuex、VueRouter等Vue全家桶相关知识点

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
    bgColor: '#FCDBA0'
    textColor: '#A05F2C'
  - name: 组建通信
    desc: Vue组件通讯方式
    link: /Vue/Communicate/
    bgColor: '#CBEAFA' # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
    textColor: '#6854A1' # 可选，默认var(--textColor)
  - name: 问答
    desc: 待整理问题
    link: /Vue/Question/
    avatar: ./images/question.jpg
    bgColor: '#718971'
    textColor: '#ffffff'
```
:::

## React相关
包括React hooks等React相关知识点

::: cardList 4
```yaml
config:
    target: _self
    imgHeight: auto
    objectFit: cover
    lineClamp: 1

data:
  - name: React hooks
    desc: 浅谈12个Hooks
    link: /React/Hooks/
    bgColor: '#FCDBA0'
    textColor: '#A05F2C'
```
:::


## 服务方面
包括浏览器问题、跨域问题、服务器问题等内容

::: cardList 4
```yaml
config:
    target: _self
    imgHeight: auto
    objectFit: cover
    lineClamp: 1

data:
  - name: 浏览器缓存
    desc: 浏览器缓存
    link: /Network/BrowserCache/
    avatar: ./images/304.jpg
    bgColor: '#FCDBA0'
    textColor: '#A05F2C'
  - name: 跨域
    desc: 跨域
    link: /Network/CrossDomain/
    avatar: ./images/cors.jpg
    bgColor: '#CBEAFA' # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
    textColor: '#6854A1' # 可选，默认var(--textColor)
  - name: 问答
    desc: 待整理问题
    link: /Network/Question/
    avatar: ./images/question.jpg
    bgColor: '#718971'
    textColor: '#ffffff'
```
:::


## 封装方面
包括Axios、Storage、utils等内容

::: cardList 4
```yaml
config:
    target: _self
    imgHeight: auto
    objectFit: cover
    lineClamp: 1

data:
  - name: Storage
    desc: Storage
    link: /Package/Storage/
    bgColor: '#FCDBA0'
    textColor: '#A05F2C'
```
:::


## 实用技术文档
包括 等内容

::: cardList 4
```yaml
config:
    target: _self
    imgHeight: auto
    objectFit: cover
    lineClamp: 1

data:
  - name: LazyRouter
    desc: 路由懒加载
    link: /SkillPoint/LazyRouter/
    bgColor: '#FCDBA0'
    textColor: '#A05F2C'
  - name: LazyComponent
    desc: 组件懒加载
    link: /SkillPoint/LazyComponent/
    bgColor: '#CBEAFA' # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
    textColor: '#6854A1' # 可选，默认var(--textColor)
  - name: Context
    desc: 上下文批量引入
    link: /SkillPoint/Context/
    bgColor: '#FCDBA0'
    textColor: '#A05F2C'
  - name: Hook
    desc: hook监听生命周期
    link: /SkillPoint/@Hook/
    bgColor: '#CBEAFA' # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
    textColor: '#6854A1' # 可选，默认var(--textColor)
  - name: Computed
    desc: Computed中使用this
    link: /SkillPoint/Computed/
    bgColor: '#FCDBA0'
    textColor: '#A05F2C'
  - name: Freeze
    desc: 数据冻结
    link: /SkillPoint/Freeze/
    bgColor: '#CBEAFA' # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
    textColor: '#6854A1' # 可选，默认var(--textColor)
  - name: Sync
    desc: 父组件通信
    link: /SkillPoint/Sync/
    bgColor: '#FCDBA0'
    textColor: '#A05F2C'
  - name: Slot
    desc: 插槽
    link: /SkillPoint/Slot/
    bgColor: '#CBEAFA' # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
    textColor: '#6854A1' # 可选，默认var(--textColor)
```
:::

<Vssue :title="$title" />
