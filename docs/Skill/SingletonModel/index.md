---
title: 单例模式
lang: zh-CN
---

常见的单例模式实现方式有五种：饿汉式、懒汉式、双重检测锁式。而在这三种方式中**饿汉式**和**懒汉式**最为常见。下面将一一列举这三种方式的实现方法：

- **饿汉式**：**线程安全，调用效率高**。但是不能延时加载。

```java
public class SingletonDemo1 {
    //线程安全的
    //类初始化时，立即加载这个对象
    private static SingletonDemo1 instance = new SingletonDemo1();
    private SingletonDemo1() {
    }
    //方法没有加同步块，所以它效率高
    public static SingletonDemo1 getInstance() {
        return instance;
    }
}
```

由于该模式在加载类的时候对象就已经创建了，所以加载类的速度比较慢，但是获取对象的速度比较快，且是**线程安全**的。

- **懒汉式**：**线程不安全**

```java
public class SingletonDemo2 {
    //线程不安全的
    private static SingletonDemo2 instance = null;
    private SingletonDemo2() {
    }
    //运行时加载对象
    public static SingletonDemo2 getInstance() {
        if (instance == null) {
            instance = new SingletonDemo2();
        }
        return instance;
    }
}
```

由于该模式是在运行时加载对象的，所以加载类比较快，但是对象的获取速度相对较慢，且**线程不安全**。**如果想要线程安全的话可以加上synchronized关键字**，但是这样会付出惨重的效率代价。

- **懒汉式（双重同步锁）**

```java
public class SingletonDemo3 {
    private static volatile SingletonDemo3 instance = null;
    private SingletonDemo3() {
    }
    //运行时加载对象
    public static SingletonDemo3 getInstance() {
        if (instance == null) {
            synchronized (SingletonDemo3.class) {
                if (instance == null) {
                    instance = new SingletonDemo3();
                }
            }
        }
        return instance;
    }
}
```



**常见应用场景**

- 网站计数器。
- 项目中用于读取配置文件的类。
- 数据库连接池。因为数据库连接池是一种数据库资源。
- Spring中，每个Bean默认都是单例的，这样便于Spring容器进行管理。
- Servlet中Application
- Windows中任务管理器，回收站。

