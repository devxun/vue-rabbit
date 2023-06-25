# vue-rabbit

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```



---



## Begin

### 初始化 vue-rabbit 应用

```sh
$ npm init vue@latest

Need to install the following packages:
  create-vue@3.7.1
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

√ Project name: ... vue-rabbit
√ Add TypeScript? ... No / Yes
√ Add JSX Support? ... No / Yes
√ Add Vue Router for Single Page Application development? ... No / Yes
√ Add Pinia for state management? ... No / Yes
√ Add Vitest for Unit Testing? ... No / Yes
>   No
    Cypress
    Nightwatch
    Playwright
√ Add an End-to-End Testing Solution? » No
√ Add ESLint for code quality? ... No / Yes
√ Add Prettier for code formatting? ... No / Yes

Scaffolding project in E:\project\vue-rabbit...

Done. Now run:

  cd vue-rabbit
  npm install
  npm run dev

```

### 别名路径联想设置

`@/` 自动联想到 `src` 目录。

在 `jsconfig.json` 中添加如下配置：

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}

```

### 按需导入 `element-plus`

```sh
# 安装 `element-plus`
# NPM
$ npm install element-plus --save

# Yarn
$ yarn add element-plus
```

```sh
# 安装 `unplugin-vue-components` 和 `unplugin-auto-import` 两款插件
$ npm install -D unplugin-vue-components unplugin-auto-import
```

```js
// vite.config.ts
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

// 按需导入 element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

```

### 使用 `sass` 方案定制 `element-plus` 主题色

```sh
# 安装 `sass`
npm i sass -D
```

在 `styles` 目录下新建 `element\index.scss`：

```scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      // 主色
      'base': #27ba9b,
    ),
    'success': (
      // 成功色
      'base': #1dc779,
    ),
    'warning': (
      // 警告色
      'base': #ffb302,
    ),
    'danger': (
      // 危险色
      'base': #e26237,
    ),
    'error': (
      // 错误色
      'base': #cf4444,
    ),
  )
)
```

```js
// vite.config.js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

// 按需导入 element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
})

```

### 配置 `axios`

```sh
# 安装 `axios`
```

```js
// utils/http.js
// 配置 axios
import axios from 'axios'

// 创建 axios 实例
const http = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 5000,
})

// axios 请求拦截器
http.instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error)
)

// axios 响应式拦截器
http.instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error)
  }
)

export default http

```

