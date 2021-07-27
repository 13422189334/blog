---
title: 去重排序
lang: zh-CN
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