---
title: 二分法
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /pages/f25615/
categories: 
  - Algorithm
  - Dichotomy
tags: 
  - 
---

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

