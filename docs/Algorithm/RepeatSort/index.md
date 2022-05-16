---
title: 去重排序
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /pages/781b68/
categories: 
  - Algorithm
  - RepeatSort
tags: 
  - 
---

1. array.indexOf去重

2. sort函数排序

```javascript
function repeatAndSort(list) {
    let repeatList = []
    for (let i in list) {
        if (repeatList.indexOf(list[i]) === -1) {
            repeatList.push(list[i])
        }
    }
    return repeatList.sort((a, b) => {
        return a - b
    })
}
```