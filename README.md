# Contract X Vue

> 👨🏻‍💻LazyKoalas 丨 📮tiamoer@outlook.com 丨 🇨🇳Xi'an

## 一、基础环境

​	Vite 需要 [Node.js](https://nodejs.org/en/) 版本 14.18+，16+

```shell
# 初始化项目
npm create vite@latest
# 安装依赖
npm run install
# 启动项目
npm run dev
```

​	**Git操作**

```shell
# 先在Github上创建一个空仓库，然后推送本地仓库到远程仓库
git remote add origin https://github.com/LazyKoalas/ContractX.git
git add .
git commit -M '项目初始化'
git branch -M main
git push -u origin main
```

​	**Sass**

```shell
npm i -D sass
```

​	**Router**

```shell
npm i -D vue-router@next
```

​	**Axios**

```shell
npm i -D axios
```

​	**Naive**

```shell
# UI
npm i -D naive-ui
# 字体
npm i -D vfonts
# 图标

```

​	**Tailwind CSS**

```
# 安装Tailwind CSS
npm i -D tailwindcss@latest postcss@latest autoprefixer@latest
# 创建配置文件，在项目根目录下执行
npx tailwindcss init -p
```

​	*注意⚠️：*配置文件自动创建完成后，修改配置文件 `tailwind.config.cjs` 将content属性内容设置为：

```javascript
'./index.html',
'./src/*/*.{vue, ts}',
'./src/*/*/*.{vue, ts}'
```

​	完整 `tailwind.config.cjs` 如下：

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/*/*.{vue, ts}',
    './src/*/*/*.{vue, ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

​	**Vite路径别名设置：**安装node模块 `path`,然后修改项目的配置文件`vite.config.ts`,内容如下：

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

function _resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: _resolve('src')
      }
    ]
  }
})
```

​	因为本项目是用TypeScript语言的，所以还需要在`tsconfig.json`中添加如下配置：

```json
"baseUrl": ".",
"paths": {
     "@/*": ["src/*"]
 },
```

​	**Xicons**

```shell
# 适用于 vue3
npm i -D @vicons/fluent
npm i -D @vicons/ionicons4
npm i -D @vicons/ionicons5
npm i -D @vicons/antd
npm i -D @vicons/material
npm i -D @vicons/fa # font awesome
npm i -D @vicons/tabler
npm i -D @vicons/carbon
```



## 二、路由配置

基础路由配置及LadingBar组件的使用：

​	创建router文件夹，并在该文件夹下创建 `index.ts` 文件，内容如下：

```typescript
import { createVNode, render } from 'vue'
import { createRouter, Router, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import loadingBar from '@/components/Loadding/LoadingBar.vue'

const Vnode = createVNode(loadingBar)
render(Vnode, document.body)

const routes: Array<RouteRecordRaw> = [
    //...
]

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title as string
    }
    Vnode.component?.exposed?.startLoading()
    next()
})

router.afterEach((to, from) => {
    Vnode.component?.exposed?.endLoading()
})

export default router

```

​	上文中所使用的LoadingBar组件定义如下：`src/components/Loading/LoadingBar.vue`

```vue
<template>
    <div class="wraps">
        <div ref="bar" class="bar"></div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

let speed = ref<number>(1)
let bar = ref<HTMLElement>()
let timer = ref<number>(0)
const startLoading = () => {
    speed.value = 1
    let dom = bar.value as HTMLElement
    timer.value = window.requestAnimationFrame(function fn() {
        if (speed.value < 90) {
            speed.value += 1
            dom.style.width = speed.value + '%'
            timer.value = window.requestAnimationFrame(fn)
        } else {
            speed.value = 1
            window.cancelAnimationFrame(timer.value)
        }
    })
}

const endLoading = () => {
    let dom = bar.value as HTMLElement
    setTimeout(() => {
        window.requestAnimationFrame(() => {
            speed.value = 100
            dom.style.width = speed.value + '%'
        })
    }, 500)
}

defineExpose({
    startLoading,
    endLoading,
})

</script>

<style lang="scss">
.wraps {
    position: fixed;
    top: 0px;
    width: 100%;
    height: 2px;
    z-index: 100;
    .bar {
        height: inherit;
        width: 0px;
        background-image: linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%);
    }
}
</style>
```

