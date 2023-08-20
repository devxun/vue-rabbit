// 配置 axios
import { useUserStore } from '@/stores/user'
import axios from 'axios'

import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

import router from '@/router'

// 创建 axios 实例
const http = axios.create({
  // baseURL: 'http://127.0.0.1:4523/m1/2929028-0-default',
  baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
})

// axios 请求拦截器
http.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
      // 由后端规定
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// axios 响应式拦截器
http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const userStore = useUserStore()
    ElMessage({ type: 'warning', message: error.response.data.message })
    // 401 token 失效处理
    // 1. 清除本地用户数据
    // 2. 跳转到登录页
    if (error.response.status === 401) {
      userStore.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default http
