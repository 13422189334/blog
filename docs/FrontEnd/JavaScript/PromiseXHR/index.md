---
title: Promise 和 XHR 封装请求
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /JavaScript/PromiseXHR/
sidebar: true # 不显示侧边栏
article: true # 不是文章页 (不显示面包屑栏、最近更新栏等)
comment: true # 不显示评论栏
editLink: true # 不显示编辑按钮
categories: 
  - JavaScript
tags: 
  - 
---

**注意事项：**

为防止跨域问题，post请求采用简单请求，内容详见[跨域问题](../CrossDomain)

XMLHttpRequest的 **readyState** 状态码内容如下：
- 0 - 代表未初始化。 还没有调用 open 方法
- 1 - 代表正在加载。 open 方法已被调用，但 send 方法还没有被调用
- 2 - 代表已加载完毕。send 已被调用。请求已经开始
- 3 - 代表正在与服务器交互中。服务器正在解析响应内容
- 4 - 代表完成。响应发送完毕

## Get请求
```javascript
function getAjax(url, query) {
    let queryData = []
    for (let key in query) {
        queryData.push(`${key}=${query[key]}`)
    }
    url = `${url}?${queryData.join('&')}&timeStamp=${new Date().getTime()}`
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('get', url)
        xhr.send()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(xhr.statusText)
                }
            } else {
                reject(xhr.statusText)
            }
        }
    })
}
```

## Post请求
```javascript
function postAjax(url, query) {
    let queryData = []
    for (let key in query) {
        queryData.push(`${key}=${query[key]}`)
    }
    let queryStr = queryData.join('&')
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('post', url)
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        xhr.send(queryStr)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(xhr.statusText)
                }
            } else {
                reject(xhr.statusText)
            }
        }
    })
}
```
