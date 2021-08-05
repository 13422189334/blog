---
title: 百叶窗
lang: zh-CN
---

<Shutters />

```vue
<template>
  <div class="accordion">
    <input type="radio" name="select" class="accordion-select" checked />
    <div class="accordion-title"><span>Title</span></div>
    <div class="accordion-content">Content</div>
    <input type="radio" name="select" class="accordion-select" />
    <div class="accordion-title"><span>Title</span></div>
    <div class="accordion-content">Content</div>
    <input type="radio" name="select" class="accordion-select" />
    <div class="accordion-title"><span>Title</span></div>
    <div class="accordion-content">Content</div>
  </div>
</template>

<script>
  export default {
    name: "Shutters"
  }
</script>

<style scoped>
  /* 整体布局 */
  .accordion {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    overflow: hidden;
    width: 100%;
    /*border-color: #dedede;*/
    /*border-style: solid;*/
    /*border-width: 1px;*/
    border: 1px solid #dedede;
    border-radius: 8px;
    height: auto;
  }

  /* select 和 title 是放在同一行，先设置公用，在单独设置 */
  .accordion-title,
  .accordion-select  {
    background-color: #ffffff;
    color: #7f8787;
    width: 100%;
    height: 65px;
    font-size: 15px;
  }

  .accordion-select {
    cursor: pointer;
    /*margin: 0;*/
    opacity: 0;
    z-index: 1;
    /* 推上去，select不需要高度 */
    margin-bottom: -65px;
    margin-right: 0;
  }

  accordion-select:hover + .accordion-title,
  .accordion-select:checked + .accordion-title {
    background-color: #ffffff;
  }

  .accordion-title {
    position: relative;
  }

  .accordion-title:not(:nth-last-child(2))::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px solid transparent;
    border-bottom-color: rgb(234, 234, 234);
  }

  .accordion-title span {
    bottom: 0;
    line-height: 65px;
    box-sizing: border-box;
    display: block;
    position: absolute;
    white-space: nowrap;
    width: 100%;
    padding: 0 33px;
    transform: rotate(0deg);
    -ms-writing-mode: lr-tb;
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0);
  }

  .accordion-content {
    box-sizing: border-box;
    overflow: auto;
    position: relative;
    transition: margin 0.3s ease 0.1s;
    background-color: #f7f7f7;
    color: #7f8787;
    height: 280px;
    margin-bottom: -280px;
    margin-right: 0;
    padding: 30px;
    width: 100%;
  }

  .accordion-select:checked + .accordion-title + .accordion-content  {
    margin-bottom: 0;
    margin-right: 0;
  }
</style>
```