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

- 如何使用 `pnpm` 搭建出一个 `Monorepo` 环境
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

目前很多我们熟知的项目都是采用这种模式，如`Vant`，`ElementUI`，`Vue3`等。打造一个`menorepo`环境的工具有很多，如：`lerna`、`pnpm`、`yarn`等，这里我们将使用`pnpm`来开发`UI组件库`。
:::


### 为什么要使用 pnpm ?

因为它简单高效，它没有太多杂乱的配置，它相比于lerna操作起来方便太多


## 组件库搭建

### 初始化 package.json

```shell
pnpm init
```

### 新建配置文件 .npmrc

```shell
shamefully-hoist = true
```

#### 为什么要配置`shamefully-hoist`。

如果某些工具仅在 `根目录` 的 `node_modules` 时才有效，可以将其设置为 `true` 来提升那些`不在根目录`的`node_modules`，就是将你安装的`依赖包`的`依赖包`的`依赖包`的...都放到同一级别（`扁平化`）。说白了就是不设置为`true`有些包就有可能会出问题。

#### monorepo的实现

为了我们各个项目之间能够互相引用我们要新建一个`pnpm-workspace.yaml`文件将我们的包`关联`起来

```yaml
packages:
  - 'packages/**'
  - 'examples'
```

根据上面的`目录结构`很显然在根目录下新建 `packages` 和 `examples` 文件夹，`packages`文件夹存放我们`开发的包`，`examples`用来`调试`的`组件`

`examples文件夹`就是接下来我们要使用`vite`搭建一个基本的`Vue3脚手架项目`的地方

### 安装对应依赖

`开发环境`中的依赖一般`全部安装`在整个项目`根目录`下，方便下面`每个包`都可以`引用`,所以在安装的时候需要加个`-w`

```shell
pnpm install vue@next typescript less -D -w
```

### 配置tsconfig.json

```shell
npx tsc --init
```

#### 调整 tsconfig.json

```json5
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

### 搭建一个基于 vite 的 vue3 项目

其实搭建一个`vite + vue3`项目是非常容易的，因为 `vite` 已经帮我们做了大部分事情

#### 初始化仓库

进入`examples`文件夹，执行

```shell
pnpm init
```

#### 安装 vite 和 @vitejs/plugin-vue

`@vitejs/plugin-vue` 用来支持 `.vue` 文件的转译

```shell
pnpm install vite @vitejs/plugin-vue -D -w
```

这里安装的插件都放在 `根目录` 下

#### 配置 vite.config.ts

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins:[vue()]
})
```

#### 新建 html 文件

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

#### 新建 main.ts

```ts
import { createApp } from "vue";
import App from "./app.vue";

const app = createApp(App);

app.mount("#app");
```

此时会发现编译器会提示个错误：找不到模块 “`./app.vue`” 或其相应的类型声明

因为直接引入`.vue`文件 `TS` 会找不到对应的 `类型声明` ；所以需要新建`types`（命名没有明确规定，TS会自动寻找 `.d.ts` 文件）文件夹来专门放这些声明文件，即文件路径 `types/vue-shim.d.ts`。

`TypeScript` 默认只认 `ES` 模块。如果你要导入`.vue`文件就要 `declare module` 把他们 `声明` 出来。

```ts
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
}
```

#### 配置脚本启动项目

最后在`package.json`文件中配置`scripts`脚本

```json
{
  "name": "examples",
  "version": "1.0.0",
  "main": "main.ts",
  "author": "JSH",
  "license": "MIT",
  "scripts": {
    "dev": "vite"
  },
  "dependencies": {
    "sla-ui": "workspace:^1.0.3"
  }
}
```

终端输入命令：`pnpm run dev`

在浏览器中打开  `http://127.0.0.1:5173/` 就会看我们的`启动测试`页面。

### 本地调试

#### 新建 packages 文件

本节和组件的开发关联不大，但是未来组件需要引入一些`工具方法`的时候会用到。

接下来就是要往我们的packages文件夹冲填充内容了。

#### utils (这里命名为 @sla-ui/utils)

##### 初始化 utils

一般 `packages` 要有 `utils` 包来存放`公共方法`、`工具函数`等

既然它是一个包，所以新建 `utils` 目录后就需要`初始化`它，让它变成一个包；

1. 终端进入 `utils` 文件夹执行：`pnpm init`，然后会生成一个`package.json`文件；
2. 这里需要改一下包名，这里将 `name` 改成 `@sla-ui/utils` 表示这个 `utils` 包是属于 `sla-ui` 这个组织下的。所以记住发布之前要登录 `npm` 新建一个组织；例如`sla-ui`

```json
{
  "name": "@sla-ui/utils",
  "version": "1.0.1",
  "description": "sla-ui的公共方法、工具函数",
  "main": "index.ts",
  "author": "JSH",
  "license": "MIT"
}
```

##### 新建入口文件

因为我们使用`ts`写的，所以需要将入口文件 `index.js` 改为 `index.ts`，并新建`index.ts`文件:(先导出一个简单的加法函数)

```ts
export const testFun = (a: number, b: number) => {
  return a + b;
};

```

#### 组件库 (这里命名为 sla-ui)

##### 初始化组件库

`components`是我们用来存放各种`UI组件`的包

1. 新建`components`文件夹
2. 执行 `pnpm init` 生成 `package.json`

```json
{
  "name": "sla-ui",
  "version": "1.0.3",
  "main": "index.ts",
  "description": "SLA的UI组件库",
  "author": "JSH",
  "license": "MIT"
}
```

##### 新建入口文件

新建`index.ts`入口文件并`引入utils包`

```ts
import {testfun} from '@kitty-ui/utils'

const result = testfun (1,1)

console.log(result)
```

:::danger

由于组件库是基于`ts`的，所以需要安装`esno`来执行ts文件便于测试组件之间的引入情况

控制台输入`esno xxx.ts`即可执行ts文件

```
npm i esno -g
```
:::

##### 包之间本地调试

进入`components`文件夹执行

```shell
pnpm install @sla-ui/utils
```

会发现 `pnpm` 会自动创建个`软链接`直接指向我们的`utils`包；此时`components`下的`packages.json`会变成下面的样子：

```json
{
  "name": "sla-ui",
  "version": "1.0.3",
  "description": "SLA的UI组件库",
  "main": "index.ts",
  "author": "JSH",
  "license": "MIT",
  "dependencies": {
    "@sla-ui/utils": "workspace:^1.0.1"
  }
}
```

你会发现它的依赖 `@sla-ui/utils` 对应的版本为：`workspace:^1.0.x`；因为`pnpm`是由`workspace`管理的，所以有一个前缀`workspace`可以指向`utils`下的`工作空间`从而方便本地调试各个包直接的`关联引用`。

### 尝试开发组件

到这里基本开发方法我们已经知道啦；接下来就要进入正题了，开发一个`button组件`

#### 组件目录

在`components`文件夹下新建`src`，同时在`src`下新建`button组件目录`和`icon组件目录`(新建icon为了便于调试)；

此时`components`文件目录如下

```
-- components
  -- src
    -- button
    -- icon
    -- index.ts
  -- package.json
```

#### 组件实现

让我们先测试一下`button组件`能否在我们搭建的`examples`下的`vue3项目`引用

1. 在 `button` 目录下新建一个简单的 `index.vue`

```vue
<template>
  <button>测试按钮</button>
</template>
```

2. 然后在`button/index.ts`将其导出

```ts
import Button from './button.vue'
export default Button
```

3. 因为开发组件库的时候不可能只有button，所以需要一个`components/index.ts`将开发的组件一个个的`集中导出`

```ts
import Button from "./button";
export {Button};
```

一个组件的大体目录差不多就是这样了，接下来进入的`examples`来看看能否引入`button组件`

### vue3 项目使用组件

上面已经说过执行在`workspace`执行 `pnpm i xxx` 的时候`pnpm`会自动创建个`软链接`直接指向`xxx`包。

所以这里直接在`examples`执行：`pnpm i sla-ui`

此时会发现`packages.json`的依赖多了个 `"sla-ui": "workspace:^1.0.0"`

这时候就能直接在`测试项目`下引入`本地`的`components`组件库了，启动测试项目，来到的 `examples/app.vue` 直接引入 `Button`

```vue
<template>
  <div>
    启动测试
    <Button/>
  </div>
</template>
<script lang="ts" setup>
import { Button } from 'sla-ui'
</script>
```

不出意外的话，页面就会展示刚刚写的button组件了。

### 完善组件

因为 `button` 组件是需要接收很多`属性`的，如`type`、`size`等等，所以要新建个`types.ts`文件来规范这些属性

在`button`目录下新建`types.ts`

```ts
import {ExtractPropTypes} from 'vue'

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

:::danger
`import type` 表示只导入`类型`；

`ExtractPropTypes`是`vue3`中内置的类型声明，它的作用是接收一个`类型`，然后把对应的`vue3`所接收的`props类型`提供出来，后面有需要可以直接使用。
:::

很多时候我们在`vue`中使用一个组件会用的 `app.use` 将组件`挂载`到`全局`。要使用`app.use`函数的话我们需要让我们的每个组件都提供一个`install`方法，`app.use()`的时候就会调用这个方法；

将`button/index.ts`调整为

```ts
import Button from './index.vue'
import  type { App, Plugin } from "vue";
type SFCWithInstall<T> = T & Plugin
const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}

export default withInstall(Button)
```

此时就可以使用`app.use`来挂载组件啦

### vite打包

#### 配置文件

打包们这里选择vite，它有一个`库模式`专门来打包这种`库组件`的。

前面已经安装过vite了，所以这里直接在`components`下直接新建`vite.config.ts`

```ts
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(
  {
    build: {
      target: 'modules',
      //打包文件目录
      outDir: 'es',
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
        entry: 'src/index.ts',
        formats: ['es', 'cjs']
      }
    },
    plugins: [
      vue()
    ]
  }
)
```

这里选择打包`cjs(CommonJS)`和`esm(ESModule)`两种形式，`cjs模式`主要用于`服务端引用(ssr)`，而`esm`就是现在经常使用的方式，它本身自带`treeShaking`而不需要额外配置`按需引入`(前提是将模块分别导出)，非常好用~

其实到这里就已经可以直接打包了；`components`下执行：`pnpm run build` 就会发现打包了`es`和`lib`两个目录

##### 声明文件

到这里其实打包的组件库`只能给js项目使用`，在ts项目下运行会出现一些错误，而且使用的时候还会`失去代码提示功能`，这样的话就失去了用`ts`开发组件库的意义了。所以需要在打包的库里加入声明文件`(.d.ts)`。

那么如何向打包后的库里加入声明文件呢？其实很简单，只需要引入`vite-plugin-dts`

```shell
pnpm i vite-plugin-dts -D -w
```

然后修改一下`vite.config.ts`引入这个插件

```ts
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts'

export default defineConfig(
  {
    build: {
      target: 'modules',
      //打包文件目录
      outDir: 'es',
      //压缩
      minify: false,
      //css分离
      //cssCodeSplit: true,
      rollupOptions: {
        //忽略打包vue文件
        external: ['vue'],
        input: ['./src/index.ts'],
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
        entry: './src/index.ts',
        formats: ['es', 'cjs']
      }
    },
    plugins: [
      vue(),
      dts({
        //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
        tsConfigFilePath: './../../tsconfig.json'
      }),
      //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
      dts({
        outputDir: 'lib',
        tsConfigFilePath: './../../tsconfig.json'
      })
    ]
  }
)
```

因为这个插件默认打包到`es`下，想让`lib`目录下也生成`声明文件`需要再配置一个`dts`插件，暂时没有想到其它更好的处理方法

然后执行打包命令就会发现`es`和`lib`下就有了`声明文件`

其实后面就可以进行发布了，发布之前更改一下`components`下的`package.json`如下：

```json
{
  "name": "sla-ui",
  "version": "1.0.3",
  "description": "SLA的UI组件库",
  "main": "lib/components/src/index.js",
  "module":"es/components/src/index.js",
  "author": "JSH",
  "license": "MIT",
  "scripts": {
    "build": "vite build"
  },
  "files": [
    "es",
    "lib"
  ],
  "typings": "lib/components/src/index.d.ts",
  "dependencies": {
    "@sla-ui/utils": "workspace:^1.0.1"
  },
  "devDependencies": {
  }
}

```

解释一下里面部分字段

- `pkg.module`

组件库`默认入口文件`是传统的`CommonJS`模块，但是如果你的环境支持`ESModule`的话，构建工具会优先使用我们的`module`入口

- `pkg.files`

files是指需要发布到`npm`上的目录，因为不可能`components`下的所有目录都被发布上去

### 开始发布

其实npm发包是很容易的，就拿我们的组件库 `sla-ui` 举例吧

发布之前记得到npm官网注册个账户，如果你要发布 `@xx/xx` 这种包的话需要在`npm`新建个组织，组织组织名就是`@后面`的，比如我建的组织就是 `sla-ui`，注册完之后就可以发布了。

首先要将我们代码提交到`git仓库`，不然`pnpm`发布`无法通过`

后面每次发版记得在对应包下执行 `pnpm version patch` 就会发现这个包的版本号`patch(版本号第三个数) +1` 了

同样的 `pnpm version major major` 和 `pnpm version minor` 分别对应版本号的`第一`和`第二`位增加。

如果你发布的是公共包的话，在对应包下执行

```shell
pnpm publish --access public
```

:::danger
发布的时候要将`npm`的源切换`到npm的官方地址`
:::

### 样式问题

引入打包后的组件会发现`没有样式`，所以需要在全局引入`style.css`才行；如`main.ts`中需要 `import 'sla-ui/es/style.css';`

很显然这种组件库并不是我们想要的，我们需要的组件库是每个`css样式`放在每个组件其`对应目录下`，这样就不需要每次都全量导入css样式。

#### 处理less文件

首先需要将`less`打包成`css`然后放到打包后对应的文件目录下，在`components`下新建`build`文件夹来存放一些打包工具，然后新建`buildLess.ts`，首先我们需要先安装一些工具 `cpy` 和 `fast-glob`

```shell
pnpm i cpy fast-glob -D -w
```

##### cpy

它可以直接复制规定的文件，并将文件copy到指定目录，比如 `buildLess.ts`:

```ts
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

然后在`package.json`中新增命令

```json
{
  "scripts": {
    "build": "vite build",
    "build:less": "esno build/buildLess"
  }
}
```

终端执行 `pnpm run build:less` 就会发现lib和es文件对应目录下就出现了`less`文件.

但是最终要的并`不是less文件而是css文件`，所以我们要将`less打包成css`，所以我们需要用的`less`模块。在`ts`中引入`less`因为它本身没有声明文件所以会出现类型错误，所以我们要先安装它的 `@types/less`

```shell
pnpm i --save-dev @types/less -D -w
```

buildLess.ts如下

```ts
import cpy from 'cpy'
import { resolve, dirname } from 'path'
import { promises as fs } from "fs"
import less from "less"
import glob from "fast-glob"

//lib文件目录
const targetLib = resolve(__dirname, '../lib')
//es文件目录
const targetEs = resolve(__dirname, '../es')

//src目录
const sourceDir = resolve(__dirname, '../src')

const buildLess = async () => {
  //直接将less文件复制到打包后目录
  await cpy(`${sourceDir}/**/*.less`, targetLib)
  await cpy(`${sourceDir}/**/*.less`, targetEs)

  //获取打包后.less文件目录(lib和es一样)
  const lessFils = await glob("**/*.less", { cwd: sourceDir, onlyFiles: true })

  //遍历含有less的目录
  for (let path in lessFils) {

    const filePath = `${sourceDir}/${lessFils[path]}`
    //获取less文件字符串
    const lessCode = await fs.readFile(filePath, 'utf-8')

    //将less解析成css
    const code = await less.render(lessCode, {
      //指定src下对应less文件的文件夹为目录
      paths: [sourceDir, dirname(filePath)]
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

执行打包命令之后会发现对应文件夹下多了`style.css`文件

现在已经将css文件放入对应的目录下了，但是我们的相关组件并没有引入这个css文件，所以我们需要的是每个打包后组件的`index.js`中出现如： `import "xxx/xxx.css"` 之类的代码我们的css才会生效；所以需要对`vite.config.ts`进行相关配置

首先我们先将`.less`文件忽略 **external: ['vue', /.less/],** 这时候打包后的文件中如 `button/index.js` 就会出现

```js
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
