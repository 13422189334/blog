---
title: 文档碎片减少dom操作
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /pages/4285bd/
categories: 
  - JavaScript
  - Fragment
tags: 
  - 
---

```javascript
const list = document.getElementById('list')

// 文档碎片
const fragment = document.createDocumentFragment()

for (let i = 0; i < 5; i++) {
    const item = document.createElement('li')
    item.innerHTML = `项目${i}`
    // list.appendChild(item) // 操作5次dom
    fragment.appendChild(item)
}

list.appendChild(fragment) // 操作1次dom
```