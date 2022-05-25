---
title: 封装绑定事件处理函数
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /JavaScript/Event/
sidebar: true # 不显示侧边栏
article: true # 不是文章页 (不显示面包屑栏、最近更新栏等)
comment: true # 不显示评论栏
editLink: true # 不显示编辑按钮
categories: 
  - JavaScript
tags: 
  - 
---

```html
<!DOCTYPE html>
<html lang="en">
<body>
<ul id="ul">
    <li id="li1">test1</li>
    <li id="li2">test2</li>
    <li id="li3">test3</li>
    <li id="li4">test4</li>
    <button id="button1">test5</button>
</ul>
</body>
</html>
<script>
    const ul = document.getElementById('ul')
    const li1 = document.getElementById('li1')

    function bindEvent(elem, type, selector, fn) {
        if(fn === undefined) {
            fn = selector
            selector = null
        }
        elem.addEventListener(type, (event) => {
            const target = event.target
            if (selector) {
                if (target.matches(selector)){
                    // fn(event)
                    fn.call(target, event)
                }
            } else {
                fn(event)
            }
        })
    }

    bindEvent(ul, 'click', 'li', function(e) {
        alert(this.innerHTML)
    })

    bindEvent(li1, 'click', function(e) {
        alert(e.target.innerHTML)
    })
</script>
```
