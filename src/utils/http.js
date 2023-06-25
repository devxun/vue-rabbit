// 配置 axios
import axios from 'axios'

// 创建 axios 实例
const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
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
