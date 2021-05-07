# 前言

​		每个Vue实例再被创建之前，都会经过一系列的初始化过程，这个过程被称之为vue的生命周期。

​		下面这张官网的图，想必大家都熟悉，那让我们一步一步的分析，并最后验证一下。

<img src="images/lifecycle.png" alt="Vue 实例生命周期" style="zoom:50%;" />

​		图中可以看到在一整个生命周期中会有很多的钩子函数，不同的钩子函数提供给我们在vue生命周期不同的时刻进行的操作, 那么我们先列出所有的钩子函数，然后我们再一一详解：

> 结合 [生命周期案例](demo.html) ，F12看控制台更容易理解。

- **beforeCreate**

  ​		在 **beforeCreate** 和 **created** 生命周期之间，进行 **初始化事件，进行数据的观测** ，这时候我们可以看到在created钩子的时候数据已经和data中的属性进行绑定（其中在data中的属性值发生改变的时候，视图也会相对应改变，即所谓的双向绑定）。
  ​		注意事项：此时并没有el

- **created**

  ​		在 **created** 和 **beforeMount** 生命周期之间，发生的事情相对比较多，结合官网给出的生命周期图可以分析下：

  <img src="images/createdToBeforeMount.png" alt="createdToBeforeMount" style="zoom:50%;" />

  

  ​		首先会判断对象是否有 **el** 。如果有的话就继续向下编译，如果没有el选项，则停止编译，也就意味着停止了生命周期，直到在该vue实例上调用vm.$mount(el)。

  > ​		此时注释掉demo代码中的 **el: '#app'** ，然后可以看到控制台打印的日志到created的时候就停止了，如果我们在代码后面继续调用 **vm.$mount(el)** ，可以发现代码继续向下执行了，其中这个 **el** 参数就是挂载的dom节点

  ​		

  ​		然后，我们往下看，**template** 参数选项的对生命周期的影响。（详细请看 [template详解](../template/index.md) ）

  1. 如果vue实例对象中有template参数选项，则将其作为模板编译成 **render函数**。（详细请看 [render详解](../render/index.md) ）

  2. 如果没有template选项，则将外部HTML作为模板编译。

  3. 可以看到template中的模板优先级要高于outer HTML的优先级。

     > ​		vue中还有一个 **rennder 函数** ，它是以createElement作为参数，然后做渲染操作，而且我们可以直接嵌入JSX，可以看到页面中渲染的是： **render function** 。若没有 **rennder 函数** ，则观察demo中的template参数，在有这个参数的时候，页面渲染出来的结果为 **Vue的生命周期 --- 这是在template中的** ，若注释掉 **template** 参数，则页面渲染结果为 **Vue的生命周期 --- 这是在outer HTML中的** ，证明以上三点结论。

     

     同时，也可以从侧面解释为什么 **Has 'el' option** 要在 **Has 'template' option** 之前，因为vue需要通过 **el** 去找到对应的 **outer html** ，最终可得出优先级结论：**render函数选项 > template选项 > outer HTML**

  

- **beforeMount**

- **mounted**

- **beforeUpdate**

- **updated**

- **beforeDestroy**

- **destroyed**
