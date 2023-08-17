// 会引起主页布局结构偏移
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)

// 全局指令注册，引入懒加载指令插件
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from './components'

app.use(createPinia())
app.use(router)

app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
