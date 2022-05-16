---
title: 冒泡算法
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /pages/3fb790/
categories: 
  - Algorithm
  - BubbleSort
tags: 
  - 
---

1. 比较相邻的两个元素，如果前一个比后一个大，则交换位置。

2. 第一轮的时候最后一个元素应该是最大的一个。

3. 按照步骤一的方法进行相邻两个元素的比较，这个时候由于最后一个元素已经是最大的了，所以最后一个元素不用比较。

```javascript
function sort(list) {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < list.length - 1 - i; j++) {
            if (list[j] > list[j + 1]) {
                let num = list[j]
                list[j] = list[j + 1]
                list[j + 1] = num
            }
        }
    }
    return list
}
```