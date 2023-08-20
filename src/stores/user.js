import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user.js'

export const useUserStore = defineStore(
  'user',
  () => {
    // 定义管理用户数据的 state
    const userInfo = ref({})
    // 定义获取接口数据的 action 函数
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password })
      userInfo.value = res.result
    }
    // 以对象的格式 return 出去 state 和 action
    return {
      userInfo,
      getUserInfo,
    }
  },
  {
    persist: true,
  }
)
