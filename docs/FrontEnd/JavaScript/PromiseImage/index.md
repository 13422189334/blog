---
title: 异步加载图片
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /JavaScript/PromiseImage/
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
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
</html>
<script>
    function loadImage(url) {
        const promise = new Promise((resolve, reject) => {
            const img = document.createElement('img')
            img.onload = function() {
                resolve(img)
            }
            img.onerror = function() {
                const err = new Error(`图片加载失败，URL为： ${url}`)
                reject(err)
            }
            img.src = url
        })
        return promise
    }
    const url1 = 'https://placeholder.pics/svg/80x80/FF2030/FFF/image1'
    const url2 = 'https://placeholder.pics/svg/80x80/FF2030/FFF/image2'
    loadImage(url1)
        .then((res) => {
            document.body.appendChild(res)
            console.log('图片1加载成功', res)
            return loadImage(url2)
        }).then((res) => {
            document.body.appendChild(res)
            console.log('图片2加载成功', res)
         })
        .catch((err) => {
            console.log(err)
        })
</script>
```
