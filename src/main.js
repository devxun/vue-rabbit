// 会引起主页布局结构偏移
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)

// 全局指令注册
import { lazyPlugin } from '@/directives'

app.use(createPinia())
app.use(router)

app.use(lazyPlugin)

app.mount('#app')
