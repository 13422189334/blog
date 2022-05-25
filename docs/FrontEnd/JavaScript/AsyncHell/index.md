---
title: Promise解决回调地狱
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /JavaScript/AsyncHell/
sidebar: true # 不显示侧边栏
article: true # 不是文章页 (不显示面包屑栏、最近更新栏等)
comment: true # 不显示评论栏
editLink: true # 不显示编辑按钮
categories: 
  - JavaScript
tags: 
  - 
---

人们普遍以javaScript的执行顺序来编写代码,在执行异步代码时,无论以什么顺序简单的执行代码,通常情况会变成许多层级的回调函数堆积

下面代码使用promise多次加载图片，防止回调函数嵌套
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
</html>
<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js"></script>
<script>
    const ID_BASE_URL = 'https://jsonplaceholder.typicode.com/todos'
    const ROBOT_IMG_BASE_URL = 'https://robohash.org'

    function getRobotId(url) {
        const promise = new Promise((resolve, reject) => {
            $.get(url, function (data) {
                const id = data.id
                resolve(id)
            })
        })
        return promise

    }

    function createRobot(id) {
        const img = document.createElement('img')
        img.src = ROBOT_IMG_BASE_URL + `/${id}&size=200*200`
        document.body.appendChild(img)
    }

    getRobotId(ID_BASE_URL + '/1').then(res1 => {
        createRobot(res1)
        return getRobotId(ID_BASE_URL + '/2')
    }).then(res2 => {
        createRobot(res2)
    }).catch(e => {
        alert(e)
    })
</script>
```
