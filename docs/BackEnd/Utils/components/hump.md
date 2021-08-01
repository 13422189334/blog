---
title: 驼峰转换
lang: zh-CN
---

```java
<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>21.0</version>
</dependency>
```

```java
import com.google.common.base.CaseFormat;
 
public class GuavaTester {
 
    @Test
    public void test() {
        System.out.println(CaseFormat.LOWER_HYPHEN.to(CaseFormat.LOWER_CAMEL, "test-data"));//testData
        System.out.println(CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.LOWER_CAMEL, "test_data"));//testData
        System.out.println(CaseFormat.UPPER_UNDERSCORE.to(CaseFormat.UPPER_CAMEL, "test_data"));//TestData
       System.out.println(CaseFormat.LOWER_CAMEL.to(CaseFormat.LOWER_UNDERSCORE, "testdata"));//testdata
       System.out.println(CaseFormat.LOWER_CAMEL.to(CaseFormat.LOWER_UNDERSCORE, "TestData"));//test_data
       System.out.println(CaseFormat.LOWER_CAMEL.to(CaseFormat.LOWER_HYPHEN, "testData"));//test-data
    }
```

