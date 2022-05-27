---
title: 算法
date: 2022-05-27 13:36:20
permalink: /Algorithm/
sidebar: true # 不显示侧边栏
article: true # 不是文章页 (不显示面包屑栏、最近更新栏等)
comment: true # 不显示评论栏
editLink: true # 不显示编辑按钮
categories:
  - Algorithm
tags:
  - 很菜的算法
---

## 冒泡算法

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

## 二分法


二分查找法只适用于从有序的数列中进行查找(比如数字和字母等)，将数列排序后再进行查找。

**代码:**

```java
public class BinarySearchNoRecur {
    public static void main(String[] args) {
        int[] arr = {-5, 9, 23, 54, 67, 81, 96, 234};
        int result = binarySearch(arr, 81);
        if (result == -1) {
            System.out.println("该数不存在");
        } else {
            System.out.println("该数的下标为：" + result);
        }
    }

    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
}
```

## 去重
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

function repeatAndSort(list) {
  return Array.from(new Set(list))
}
```
