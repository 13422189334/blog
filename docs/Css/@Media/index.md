---
title: 媒体查询 @media
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /Css/@Media/
categories: 
  - Css
tags: 
  - 
---

什么是@media，@media又叫 **媒体查询** ，使用 @media 查询，你可以针对不同的媒体类型定义不同的样式。
            
@media 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，@medjia 是非常有用的。
            
当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。

- 媒体类型

| 值     | 描述                               |
| :----- | :--------------------------------- |
| all    | 用于所有设备                       |
| print  | 用于打印机和打印预览               |
| screen | 用于电脑屏幕，平板电脑，智能手机等 |
| speech | 应用于屏幕阅读器等发声设备         |

> 其中较为常用的就是 **screen**

- 媒体功能 - 宽高

> 设备的屏幕宽度 device-width | min-device-width | max-device-width
>
> 设备的屏幕高度 device-height | min-device-height | max-device-height
>
> 设备中的页面宽度 width | min-width | max-width
>
> 设备中的页面高度 height | min-height | max-height

**案例：** 根据浏览器页面尺寸修改div背景色
```css
  #div {
    width: 400px;
    height: 400px;
  }
  @media screen and (min-width:100px) and (max-width:1000px) {
    #div {
      background-color: red;
    }
  }
  @media screen and (min-device-width:1001px) and (max-device-width:1300px) {
    #div {
      background-color: chartreuse;
    }
  }
```
