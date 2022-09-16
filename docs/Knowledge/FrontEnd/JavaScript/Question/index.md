---
title: JavaScript相关面试问题
lang: zh-CN
date: 2022-06-01 11:21:30
permalink: /JavaScript/Question/
sidebar: true # 不显示侧边栏
article: true # 不是文章页 (不显示面包屑栏、最近更新栏等)
comment: true # 不显示评论栏
editLink: true # 不显示编辑按钮
category: 
  - Question
tag: 
  - 前端面试仔
---

## 常问问题

### 回调地狱

:::details

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

:::

### 闭包

:::details

闭包就是能够读取其他函数内部变量的函数。

例如在javascript中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成"定义在一个函数内部的函数"。

在本质上，闭包是将函数内部和函数外部连接起来的桥梁。

:::

### 封装绑定事件处理函数

:::details

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

:::

### 文档碎片

:::details

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

:::

### Jsonp

:::details

我们都知道，Ajax请求是不能跨域的，无论是静态页面、动态网页、web服务等，只要是跨域请求，一律都不允许通过浏览器跨域的检测和阻拦。
但是，我们可以发现，web页面上调用js是不受跨域的影响，同时拥有src属性的标签也具有相同的能力，比如 <**script**>、<**img**>、<**iframe**>

于是如果想通过纯web端跨域访问数据就可以这样：在远程服务器上设法把数据装进js格式的文件里，供客户端调用和进一步处理。

恰巧有一种叫做JSON的纯字符数据格式可以简洁的描述复杂数据，更巧的是JSON还被js原生支持，所以在客户端几乎可以随心所欲的处理这种格式的数据。

这样子解决方案就呼之欲出了，web客户端通过与调用脚本一样的方式，来调用跨域服务器上动态生成的js格式文件，显而易见，服务器之所以要动态生成JSON文件，目的就在于把客户端需要的数据装进去。

客户端在对js文件调用成功之后，也就获得了自己所需的数据，剩下的就是按照自己需求进行处理和展现了。

为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。

```js
    (function (global) {
        global.jsonp = function jsonp(url, params, callback) {
            // 接收接口所需的所有参数及callback的函数名
            let paramList = []
            for (let key in params) {
                paramList.push(`${key}=${params[key]}`)
            }
            // 随机callback函数名称
            let random = Math.random().toString().replace('.', '')
            const callbackFunctionName = 'jsonp_' + random
            paramList.push(`callback=${callbackFunctionName}`)
            const urlStr = url + '?' + paramList.join('&')
            // 定义全局函数，为后续拿到js文件调用准备
            global[callbackFunctionName] = function (param) {
                callback(param)
            }
            // 生成element
            const script = document.createElement('script')
            script.src = urlStr
            // 放入body, 立即调用全局函数 callbackFunctionName
            document.body.appendChild(script)
            // js拿到后，移除文件
            document.body.removeChild(script)
        }
    })(window)
```

:::

### preload和prefetch的区别
### script脚本加了defer属性后，是DOMContentLoaded回调先执行，还是script脚本的代码先执行
### Object object any的区别
### Object.definedProperty有哪些属性
### object静态方法freeze()，seal(),preventExtension()的区别

## promise 相关

### 异步加载图片

:::details

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

:::

### 封装接口请求

:::details


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

:::

### await 一个promise，promise里的执行reject的话会怎么样




