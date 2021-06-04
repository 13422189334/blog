- **Mixins 的使用方法：**

  首先，我们先定义一个Mixins混入类对象。

  ```javascript
  export const myMixin = {
  	data(){
  		return {
  			num:1
  		}
  	},
  	created(){
  		this.hello();
  	},
  	methods:{
  		hello(){
  			console.log('hello from mixin');
  		}
  	}
  }
  ```

  然后，将对象混合到当前组件中：

  ```vue
  <template>
  	<div>
  		组件1
  	</div>
  </template>
  <script>
  	import { myMixin  } from '@/assets/mixin.js'
  	export default{
  		mixins:[ myMixin ]
  	}
  </script>
  ```

  ​		Mixins选项接收一个混入对象的数组（即可以多个）。这些混入对象可以像正常的实例对象一样包含实例选项，这些选项将会被合并到组件的选项中。

  ​		其中，有以下几点可以便于理解Mixins

  1. 应用场景：在项目中，如果我们需要提取公用的数据或者通用的方法，并且这些数据与方法不需要组件间进行维护，就可以使用Mixins
  
  2. 特点：方法和参数在各组件中不共享
     当值为对象的选项，如 **methods,components** 等，选项会被合并，键冲突的时候组件会覆盖混入对象
   当值为函数的选项，如 **created,mounted** 等，就会被合并调用，混入对象钩子函数会比组件里的钩子函数先调用
     
  3. 与vuex的区别
     vuex：用来做状态管理的（即全局），里面定义的变量在每个组件中均可以使用和修改，在任一组件中修改此变量的值之后，其他组件中此变量的值也会随之修改。
   Mixins：可以定义共用的变量，在每个组件中使用，引入组件中之后，各个变量是相互独立的，值的修改在组件中不会相互影响。
  
  4. 与公共组件的区别
     组件：父组件中引入子组件，相当于在父组件中给出一片独立的空间供子组件使用，然后根据props来传值，但本质上两者是相对独立的。
   Mixins：则是在引入组件之后与组件中的对象和方法进行合并，相当于扩展了父组件的对象与方法，可以理解为形成了一个新的组件。
  
  5. Mixins中的异步请求
   当混合里面包含异步请求函数，而我们又需要在组件中使用异步请求函数的返回值时，我们应直接返回异步函数（即 new Promise）
  
   
  
- **extends 的使用方法：**

首先，我们先定义一个extend对象。

```javascript
//只能使用一个extends对象，多个无效，extends会先于mixins执行
export const myExtends = {
    methods: {
        hello() {
            console.log("hello extends");
        }
    },
    beforeCreate(){
        console.log("extends的beforeCreated");
    },
    created() {
        this.hello();
    }
}
```

然后，将对象混合到当前组件中：

```vue
<template>
<div>
    home
</div>
</template>
<script>
import { myExtends } from '../util/test.js'
export default {
name: "Home",
 data () {
   return {
   };
 },
 beforeCreate(){
      console.log("组件的beforeCreated");
 },
 created(){
     console.log("1212");
 },
 extends: myExtends  // 使用extends
}
</script>
<style lang="css" scoped>
</style>
```

​	其中，有以下几点可以便于理解extends

1. extends和Mixins类似，通过暴露一个extends对象到组件中使用。
2. extends会比Mixins先执行。执行顺序：extends > Mixins> 组件
3. extends只能暴露一个extends对象，暴露多个extends不会执行

- **extend 的使用方法：**

    ​		vue.extend()方法其实是vue的一个构造器，继承自vue，可以通过extent拓展全局组件，首先我们新建一个 hello.vue
    
      <!--hello.vue-->
    
    ```vue
    <template>
      <div>{{text}}</div>
    </template>
    <script>
    export default {
      name: 'hello',
      data () {
        return {
          text: ''
        }
      }
    }
    </script>
    ```
    
    ​	然后，我们在同级新建一个 hello.js
    
    ```javascript
    - // hello.js
      import Vue from 'vue';
      import HelloTemplate from './hello.vue';
    
    // 使用extend方法创建vue的子类
    const HelloConstructor = Vue.extend(HelloTemplate);
    
    // 使用这个方法调用hello组件
    function Hello(options) {
      options = options || {};
      if (typeof options === 'string') {
        options = {
          text: options
        }
      }
    
      // 实例化子组件，然后获取到DOM结构并挂载到body上
      const helloInstence = new HelloConstructor({data: options});
      helloInstence.vm = helloInstence.$mount();
      console.log(helloInstence.vm)
      document.body.appendChild(helloInstence.vm.$el);
    }
    export default Hello;
    ```
    
    
    最后在main.js引入
    
    ```js
    import Hello from './src/components/hello/hello;
    Hello({
    	text:'hello world'
    })
    ```
    
  - **extend,extends, Mixins 区别**

Vue.extend创建组件的构造函数，为了复用
Mixins 可以混入多个Mixin ，extends只能继承一个
Mixins 类似于面向切面的编程（AOP），extends类似于面向对象的编程
优先级Vue.extend>extends>Mixins 
      