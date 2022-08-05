---
title: VUE3组件库
date: 2022-07-25 17:59:10
permalink: /Vue3/Component/
categories:
  - Vue
  - Vue3
tags:
  - 组件库
---

## 前言

随着前端技术的发展，业界涌现出了许多的 `UI组件库` 。例如熟知的`ElementUI`，`Vant`，`AntDesign`等等。

但是作为一个前端开发者，你知道一个UI组件库是如何被打造出来的吗?

读完这篇文章你将学会:

- 如何使用pnpm搭建出一个 `Monorepo` 环境
- 如何使用 `vite` 搭建一个基本的 `Vue3` 脚手架项目
- 如何开发调试一个自己的 `UI组件库`
- 如何使用vite `打包` 并 `发布` 自己的UI组件库

## Monorepo环境

在一个大的项目仓库中，管理多个`模块/包`（package），这种类型的项目大都在项目 `根目录` 下有一个 `packages` 文件夹，分多个项目管理。大概结构如下：

```   
-- packages
  -- pkg1
    --package.json
  -- pkg2
    --package.json
--package.json
```

:::danger
简单来说就是`单仓库` `多项目`

目前很多我们熟知的项目都是采用这种模式，如`Vant`，`ElementUI`，`Vue3`等。打造一个`menorepo`环境的工具有很多，如：`lerna`、`pnpm`、`yarn`等，这里我们将使用`yarn`来开发`UI组件库`。
:::


## 为什么要使用 yarn ?

因为它简单高效，它没有太多杂乱的配置，它相比于lerna操作起来方便太多

好了，下面我们就开始用yarn来进行我们的组件库搭建吧


### 初始化 package.json

```shell
yarn init
```

### 新建配置文件 .npmrc

```shell
shamefully-hoist = true
```

#### 为什么要配置`shamefully-hoist`。

如果某些工具仅在 `根目录` 的 `node_modules` 时才有效，可以将其设置为 `true` 来提升那些`不在根目录`的`node_modules`，就是将你安装的`依赖包`的`依赖包`的`依赖包`的...都放到同一级别（`扁平化`）。说白了就是不设置为`true`有些包就有可能会出问题。

### monorepo的实现

为了我们各个项目之间能够互相引用我们要新建一个`yarn-workspace.yaml`文件将我们的包`关联`起来

```yaml
packages:
    - 'packages/**'
    - 'examples'
```

根据上面的`目录结构`很显然你在根目录下新 `packages` 和 `examples` 文件夹，`packages`文件夹存放我们`开发的包`，`examples`用来`调试`的`组件`

`examples文件夹`就是接下来我们要使用`vite`搭建一个基本的`Vue3脚手架项目`的地方

### 安装对应依赖

`开发环境`中的依赖一般`全部安装`在整个项目`根目录`下，方便下面`每个包`都可以`引用`,所以在安装的时候需要加个`-w`

```shell
yarn add vue@next typescript less -D -w
```

#### 配置tsconfig.json

```shell
npx tsc --init
```

#### 调整 tsconfig.json

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "ES2015",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "lib": ["esnext", "dom"],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
    // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
    // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

    /* Modules */
    "module": "ESNext",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    "baseUrl": ".",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
    // "resolveJsonModule": true,                        /* Enable importing .json files. */
    // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}

```

### 搭建一个基于vite 的 vue3 项目

其实搭建一个`vite + vue3`项目是非常容易的，因为 `vite` 已经帮我们做了大部分事情

#### 初始化仓库

进入examples文件夹，执行

```shell
yarn init
```

####  安装 vite 和 @vitejs/plugin-vue

`@vitejs/plugin-vue` 用来支持 `.vue` 文件的转译

```shell
yarn add vite @vitejs/plugin-vue -D -w
```

这里安装的插件都放在 `根目录` 下

#### 配置 vite.config.ts

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins:[vue()]
})
```

#### 新建html文件

`@vitejs/plugin-vue` 会默认加载`examples`下的`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
    <script src="main.ts" type="module"></script>
</body>
</html>
```

:::danger
vite 是基于 `esmodule` 的，所以 `type="module"`
:::

#### 新建 app.vue 模板

```vue
<template>
    <div>
        启动测试
    </div>
</template>
```

新建main.ts
```
import {createApp} from 'vue'
import App from './app.vue'

const app = createApp(App)

app.mount('#app')
```
复制代码
此时会发现编译器会提示个错误：找不到模块“./app.vue”或其相应的类型声明

因为直接引入.vue文件 TS会找不到对应的类型声明；所以需要新建typings（命名没有明确规定，TS会自动寻找.d.ts文件）文件夹来专门放这些声明文件。

```
typings/vue-shim.d.ts

```
TypeScriptTS默认只认ES 模块。如果你要导入.vue文件就要declare module把他们声明出来。

```
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component:DefineComponent<{},{},any>
}
```
复制代码
配置脚本启动项目
最后在package.json文件中配置scripts脚本

```
"scripts": {
    "dev": "vite"
  },
```
复制代码
然后终端输入我们熟悉的命令：pnpm run dev

vite启动默认端口为3000；在浏览器中打开localhost:3000 就会看我们的“启动测试”页面。

本地调试
新建包文件
本节可能和目前组件的开发关联不大，但是未来组件需要引入一些工具方法的时候会用到

接下来就是要往我们的packages文件夹冲填充内容了。

utils包
一般packages要有utils包来存放我们公共方法，工具函数等

既然它是一个包，所以我们新建utils目录后就需要初始化它，让它变成一个包；终端进入utils文件夹执行：pnpm init 然后会生成一个package.json文件；这里需要改一下包名，我这里将name改成@kitty-ui/utils表示这个utils包是属于kitty-ui这个组织下的。所以记住发布之前要登录npm新建一个组织；例如kitty-ui

```
{
  "name": "@kitty-ui/utils",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

复制代码
因为我们使用ts写的，所以需要将入口文件index.js改为index.ts，并新建index.ts文件:(先导出一个简单的加法函数)

```
export const testfun = (a:number,b:number):number=>{
    return a + b
}
```
复制代码
组件库包(这里命名为kitty-ui)
components是我们用来存放各种UI组件的包

新建components文件夹并执行 pnpm init 生成package.json

```
{
  "name": "kitty-ui",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

复制代码
新建index.ts入口文件并引入utils包

```
import {testfun} from '@kitty-ui/utils'

const result = testfun (1,1)

console.log(result)
```
复制代码
esno
由于组件库是基于ts的，所以需要安装esno来执行ts文件便于测试组件之间的引入情况

控制台输入esno xxx.ts即可执行ts文件

```
npm i esno -g
```
复制代码
包之间本地调试
进入components文件夹执行

```
pnpm install @kitty-ui/utils
```
复制代码
你会发现pnpm会自动创建个软链接直接指向我们的utils包；此时components下的packages：

```
{
  "name": "kitty-ui",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@kitty-ui/utils": "workspace:^1.0.1"
  }
}
```

复制代码
你会发现它的依赖@kitty-ui/utils对应的版本为：workspace:^1.0.0；因为pnpm是由workspace管理的，所以有一个前缀workspace可以指向utils下的工作空间从而方便本地调试各个包直接的关联引用。

到这里基本开发方法我们已经知道啦；接下来就要进入正题了，开发一个button组件

试着开发一个button组件
在components文件夹下新建src,同时在src下新建button组件目录和icon组件目录(新建icon为了便于调试);此时components文件目录如下

-- components
  -- src
    -- button
    -- icon
    -- index.ts
-- package.json

复制代码
让我们先测试一下我们的button组件能否在我们搭建的examples下的vue3项目本引用~

首先在button下新建一个简单的button.vue

```
<template>
    <button>测试按钮</button>
</template>
```
复制代码
然后在button/index.ts将其导出

```
import Button from './button.vue'

export default Button
```
复制代码
因为我们开发组件库的时候不可能只有button，所以我们需要一个components/index.ts将我们开发的组件一个个的集中导出

```
import Button from './button'

export {
    Button
}
```

复制代码
好了，一个组件的大体目录差不多就是这样了，接下来请进入我们的examples来看看能否引入我们的button组件

vue3项目使用button
上面已经说过执行在workspace执行 pnpm i xxx的时候pnpm会自动创建个软链接直接指向我们的xxx包。

所以这里我们直接在examples执行：pnpm i kitty-ui

此时你就会发现packages.json的依赖多了个

```
"kitty-ui": "workspace:^1.0.0"
```
复制代码
这时候我们就能直接在我们的测试项目下引入我们本地的components组件库了，启动我们的测试项目，来到我们的 examples/app.vue 直接引入Button

```
<template>
    <div>
        <Button />
    </div>
</template>
<script lang="ts" setup>
import { Button } from 'kitty-ui'
</script>
```
复制代码
不出意外的话你的页面就会展示我们刚刚写的button组件了

好了万事具...(其实还差个打包，这个后面再说~)；接下来的工作就是专注于组件的开发了；让我们回到我们的button组件目录下（测试页面不用关，此时我们已经可以边开发边调试边看效果了）

因为我们的button组件是需要接收很多属性的，如type、size等等，所以我们要新建个types.ts文件来规范这些属性

在button目录下新建types.ts



```
import { ExtractPropTypes } from 'vue'


export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger']

export const ButtonSize = ['large', 'normal', 'small', 'mini'];


export const buttonProps = {
  type: {
    type: String,
    values: ButtonType
  },
  size: {
    type: String,
    values: ButtonSize
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
```







复制代码
TIPS

import type 表示只导入类型；ExtractPropTypes是vue3中内置的类型声明,它的作用是接收一个类型，然后把对应的vue3所接收的props类型提供出来，后面有需要可以直接使用

很多时候我们在vue中使用一个组件会用的app.use 将组件挂载到全局。要使用app.use函数的话我们需要让我们的每个组件都提供一个install方法，app.use()的时候就会调用这个方法;

我们将button/index.ts调整为

```
import button from './button.vue'
import type {App,Plugin} from "vue"
type SFCWithInstall<T> = T&Plugin
const withInstall = <T>(comp:T) => {
    (comp as SFCWithInstall<T>).install = (app:App)=>{
        //注册组件
        app.component((comp as any).name,comp)
    }
    return comp as SFCWithInstall<T>
}
const Button = withInstall(button)
export default Button
```
复制代码
此时我们就可以使用app.use来挂载我们的组件啦

其实withInstall方法可以做个公共方法放到工具库里，因为后续每个组件都会用到，这里等后面开发组件的时候再调整

到这里组件开发的基本配置已经完成，最后我们对我们的组件库以及工具库进行打包，打包之前如果要发公共包的话记得将我们的各个包的协议改为MIT开源协议

```
"license": "MIT",
```
复制代码
vite打包
配置文件
打包们这里选择vite，它有一个库模式专门为我们来打包这种库组件的。

前面已经安装过vite了，所以这里直接在components下直接新建vite.config.ts(配置参数文件中已经注释):


```
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
export default defineConfig(
    {
        build: {
            target: 'modules',
            //打包文件目录
            outDir: "es",
            //压缩
            minify: false,
            //css分离
            //cssCodeSplit: true,
            rollupOptions: {
                //忽略打包vue文件
                external: ['vue'],
                input: ['src/index.ts'],
                output: [
                    {
                        format: 'es',
                        //不用打包成.es.js,这里我们想把它打包成.js
                        entryFileNames: '[name].js',
                        //让打包目录和我们目录对应
                        preserveModules: true,
                        //配置打包根目录
                        dir: 'es',
                        preserveModulesRoot: 'src'
                    },
                    {
                        format: 'cjs',
                        entryFileNames: '[name].js',
                        //让打包目录和我们目录对应
                        preserveModules: true,
                        //配置打包根目录
                        dir: 'lib',
                        preserveModulesRoot: 'src'
                    }
                ]
            },
            lib: {
                entry: './index.ts',
                formats: ['es', 'cjs']
            }
        },
        plugins: [
            vue()
        ]
    }
)
```

复制代码
这里我们选择打包cjs(CommonJS)和esm(ESModule)两种形式,cjs模式主要用于服务端引用(ssr),而esm就是我们现在经常使用的方式，它本身自带treeShaking而不需要额外配置按需引入(前提是你将模块分别导出)，非常好用~

其实到这里就已经可以直接打包了；components下执行：pnpm run build你就会发现打包了es和lib两个目录

图片
kitty_1.jpg
到这里其实打包的组件库只能给js项目使用,在ts项目下运行会出现一些错误，而且使用的时候还会失去代码提示功能，这样的话我们就失去了用ts开发组件库的意义了。所以我们需要在打包的库里加入声明文件(.d.ts)。

那么如何向打包后的库里加入声明文件呢？其实很简单，只需要引入vite-plugin-dts

```
pnpm i vite-plugin-dts -D -w
```
复制代码
然后修改一下我们的vite.config.ts引入这个插件

```
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import dts from 'vite-plugin-dts'

export default defineConfig(
    {
        build: {...},
        plugins: [
            vue(),
            dts({
                //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
                tsConfigFilePath: '../../tsconfig.json'
            }),
            //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
            dts({
                outputDir:'lib',
                tsConfigFilePath: '../../tsconfig.json'
            })

        ]
    }
)
```
复制代码
因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个dts插件，暂时没有想到其它更好的处理方法~

然后执行打包命令你就会发现你的es和lib下就有了声明文件

其实后面就可以进行发布了，发布之前更改一下我们components下的package.json如下：

```
{
  "name": "kitty-ui",
  "version": "1.0.0",
  "main": "lib/index.js",
  "module":"es/index.js",
  "scripts": {
    "build": "vite build"
  },
  "files": [
    "es",
    "lib"
  ],
  "keywords": [
    "kitty-ui",
    "vue3组件库"
  ],
  "author": "小月",
  "license": "MIT",
  "description": "",
  "typings": "lib/index.d.ts"
}
```

复制代码
解释一下里面部分字段

pkg.module

我们组件库默认入口文件是传统的CommonJS模块，但是如果你的环境支持ESModule的话，构建工具会优先使用我们的module入口

pkg.files

files是指我们1需要发布到npm上的目录，因为不可能components下的所有目录都被发布上去

开始发布
做了那么多终于到发布的阶段了；其实npm发包是很容易的，就拿我们的组件库kitty-ui举例吧

发布之前记得到npm[1]官网注册个账户,如果你要发布@xx/xx这种包的话需要在npm新建个组织组织组织名就是@后面的，比如我建的组织就是kitty-ui,注册完之后你就可以发布了

首先要将我们代码提交到git仓库，不然pnpm发布无法通过，后面每次发版记得在对应包下执行 pnpm version patch你就会发现这个包的版本号patch(版本号第三个数) +1 了，同样的 pnpm version major major和 pnpm version minor 分别对应版本号的第一和第二位增加。

如果你发布的是公共包的话，在对应包下执行

```
pnpm publish --access public
```
复制代码
输入你的账户和密码（记得输入密码的时候是不显示的，不要以为卡了）正常情况下应该是发布成功了

注意

发布的时候要将npm的源切换到npm的官方地址(registry.npmjs.org/[2]); 如果你使用了其它镜像源的话

样式问题
引入我们打包后的组件你会发现没有样式，所以你需要在全局引入我们的style.css才行；如 main.ts中需要

import 'kitty-ui/es/style.css';
复制代码
很显然这种组件库并不是我们想要的，我们需要的组件库是每个css样式放在每个组件其对应目录下，这样就不需要每次都全量导入我们的css样式。

下面就让我们来看下如何把样式拆分打包

处理less文件
首先我们需要做的是将less打包成css然后放到打包后对应的文件目录下,我们在components下新建build文件夹来存放我们的一些打包工具,然后新建buildLess.ts,首先我们需要先安装一些工具cpy和fast-glob

```
pnpm i cpy fast-glob -D -w
```
复制代码
cpy
它可以直接复制我们规定的文件并将我们的文件copy到指定目录,比如buildLess.ts:

```
import cpy from 'cpy'
import { resolve } from 'path'

const sourceDir = resolve(__dirname, '../src')
//lib文件
const targetLib = resolve(__dirname, '../lib')
//es文件
const targetEs = resolve(__dirname, '../es')
console.log(sourceDir);
const buildLess = async () => {
    await cpy(`${sourceDir}/**/*.less`, targetLib)
    await cpy(`${sourceDir}/**/*.less`, targetEs)
}
buildLess()
```

复制代码
然后在package.json中新增命令

```
"scripts": {
    "build": "vite build",
    "build:less": "esno build/buildLess"
  },
```
复制代码
终端执行 pnpm run build:less 你就会发现lib和es文件对应目录下就出现了less文件.

但是我们最终要的并不是less文件而是css文件,所以我们要将less打包成css,所以我们需要用的less模块.在ts中引入less因为它本身没有声明文件所以会出现类型错误,所以我们要先安装它的 @types/less

```
pnpm i --save-dev @types/less -D -w
```
复制代码
buildLess.ts如下(详细注释都在代码中)

```
import cpy from 'cpy'
import { resolve, dirname } from 'path'
import { promises as fs } from "fs"
import less from "less"
import glob from "fast-glob"
const sourceDir = resolve(__dirname, '../src')
//lib文件目录
const targetLib = resolve(__dirname, '../lib')
//es文件目录
const targetEs = resolve(__dirname, '../es')

//src目录

const srcDir = resolve(__dirname, '../src')

const buildLess = async () => {
    //直接将less文件复制到打包后目录
    await cpy(`${sourceDir}/**/*.less`, targetLib)
    await cpy(`${sourceDir}/**/*.less`, targetEs)

    //获取打包后.less文件目录(lib和es一样)
    const lessFils = await glob("**/*.less", { cwd: srcDir, onlyFiles: true })

    //遍历含有less的目录
    for (let path in lessFils) {

        const filePath = `${srcDir}/${lessFils[path]}`
        //获取less文件字符串
        const lessCode = await fs.readFile(filePath, 'utf-8')
        //将less解析成css

        const code = await less.render(lessCode, {
            //指定src下对应less文件的文件夹为目录
            paths: [srcDir, dirname(filePath)]
        })

        //拿到.css后缀path
        const cssPath = lessFils[path].replace('.less', '.css')


        //将css写入对应目录
        await fs.writeFile(resolve(targetLib, cssPath), code.css)
        await fs.writeFile(resolve(targetEs, cssPath), code.css)
    }



}
buildLess()
```


复制代码
执行打包命令之后你会发现对应文件夹下多了.css文件

图片
1657259623489.jpg
现在我已经将css文件放入对应的目录下了,但是我们的相关组件并没有引入这个css文件;所以我们需要的是每个打包后组件的index.js中出现如:
```
import "xxx/xxx.css"
```

复制代码
之类的代码我们的css才会生效;所以我们需要对vite.config.ts进行相关配置

首先我们先将.less文件忽略**external: ['vue', /.less/],**这时候打包后的文件中如button/index.js就会出现
```
import "./style/index.less";
```
复制代码
然后我们再将打包后代码的.less换成.css就大功告成了

```
plugins: [
            ...

            {
                name: 'style',
                generateBundle(config, bundle) {
                    //这里可以获取打包后的文件目录以及代码code
                    const keys = Object.keys(bundle)

                    for (const key of keys) {
                        const bundler: any = bundle[key as any]
                        //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

                        this.emitFile({
                            type: 'asset',
                            fileName: key,//文件名名不变
                            source: bundler.code.replace(/\.less/g, '.css')
                        })
                    }
                }
            }
        ...
        ]
```
复制代码
我们最终的vite.config.ts如下
```
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import dts from 'vite-plugin-dts'

export default defineConfig(
    {
        build: {
            target: 'modules',
            //打包文件目录
            outDir: "es",
            //压缩
            minify: false,
            //css分离
            //cssCodeSplit: true,
            rollupOptions: {
                //忽略打包vue和.less文件
                external: ['vue', /\.less/],
                input: ['src/index.ts'],
                output: [
                    {
                        format: 'es',
                        //不用打包成.es.js,这里我们想把它打包成.js
                        entryFileNames: '[name].js',
                        //让打包目录和我们目录对应
                        preserveModules: true,
                        //配置打包根目录
                        dir: 'es',
                        preserveModulesRoot: 'src'
                    },
                    {
                        format: 'cjs',
                        //不用打包成.mjs
                        entryFileNames: '[name].js',
                        //让打包目录和我们目录对应
                        preserveModules: true,
                        //配置打包根目录
                        dir: 'lib',
                        preserveModulesRoot: 'src'
                    }
                ]
            },
            lib: {
                entry: './index.ts',
                formats: ['es', 'cjs']
            }
        },




        plugins: [
            vue(),
            dts({
                //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
                tsConfigFilePath: '../../tsconfig.json'
            }),
            //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
            dts({
                outputDir: 'lib',
                tsConfigFilePath: '../../tsconfig.json'
            }),

            {
                name: 'style',
                generateBundle(config, bundle) {
                    //这里可以获取打包后的文件目录以及代码code
                    const keys = Object.keys(bundle)

                    for (const key of keys) {
                        const bundler: any = bundle[key as any]
                        //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

                        this.emitFile({
                            type: 'asset',
                            fileName: key,//文件名名不变
                            source: bundler.code.replace(/\.less/g, '.css')
                        })
                    }
                }
            }

        ]
    }
)
```
复制代码
最后我们将打包less与打包组件合成一个命令(package.json):

```
"scripts": {
    "build": "vite build & esno build/buildLess"
  },
```

复制代码
后续直接执行pnpm run build 即可完成所有打包啦

直接使用
如果你不想一步步的搭建，想直接使用现成的话，你可以直接把项目clone下来-> kittyui[3],然后你只需要以下几步便可将其完成

安装pnpm npm i pnpm -g
安装esno npm i esno -g
安装所有依赖 pnpm install
本地测试 进入examples文件夹执行 pnpm run dev 启动vue3项目
打包 pnpm run build
写在最后
由于作者水平有限，难免会存在一些错误或不妥之处，希望各位能够不吝指出，一定及时修改。如果你对这个项目有更好的想法或者建议也欢迎在评论区提出，不胜感激。

后续我会对一些常用组件进行开发，每个组件的开发都会以文章的形式展现出来以供大家参考。也欢迎大家将项目fork下来，提交自己组件或者对kittyui的修改到kittyui[4]~

创作不易，你的点赞就是我的动力！如果感觉对自己有帮助的话就请点个赞吧，感谢~