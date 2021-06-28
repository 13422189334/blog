---
title: then、catch如何改变promise状态
lang: zh-CN
---



**then** 

1. 正常返回的时候，Promise的状态是fulfilled
2. 报错的时候，Promise的状态是rejected

**catch**
1. 正常返回的时候，Promise的状态是 fulfilled
2. 报错的时候，Promise的状态是 rejected

fulfilled 状态的Promise会执行 then 里的回调函数

rejected 状态的 Promise会执行catch 里的回调函数

