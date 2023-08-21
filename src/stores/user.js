import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user.js'
import { useCartStore } from './cart'
import { mergeCartAPI } from '@/apis/cart.js'

export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()

    // 定义管理用户数据的 state
    const userInfo = ref({})
    // 定义获取接口数据的 action 函数
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password })
      userInfo.value = res.result
      // 合并购物车的操作
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return { skuId: item.skuId, selected: item.selected, count: item.count }
        })
      )
      cartStore.updateNewCartList()
    }
    // 退出时清除用户信息和购物车信息
    const clearUserInfo = () => {
      userInfo.value = {}
      cartStore.clearCartList()
    }
    // 以对象的格式 return 出去 state 和 action
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    }
  },
  {
    persist: true,
  }
)
