// 封装购物车模块

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { useUserStore } from './user'
import { findNewCartListAPI, insertCartAPI } from '@/apis/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)

    // 1. 定义 state - cartList
    const cartList = ref([])
    // 2. 定义 action - addCart
    const addCart = async (goods) => {
      const { skuId, count } = goods
      if (isLogin.value) {
        // 登录之后的加入购车逻辑
        await insertCartAPI({ skuId, count })
        const res = await findNewCartListAPI()
        cartList.value = res.result
      } else {
        // 本地逻辑

        // 添加购物车操作
        // 已添加过 - count + 1
        // 没有添加过 - 直接 push
        // 思路：通过匹配传递过来的商品对象中的 skuId 能不能在 cartList 中找到，找到了就是添加过
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
          // 找到了
          item.count++
        } else {
          // 没找到
          cartList.value.push(goods)
        }
      }
    }
    const delCart = (skuId) => {
      // 思路1：找到要删除项的下标值 - splice
      // const idx = cartList.value.findIndex((item) => item.skuId === skuId)
      // cartList.value.splice(idx, 1)
      // 思路2：数组过滤 - filter
      cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
    }

    // 计算属性
    // 1. 总的数量 count 之和
    // 2. 总价 coutn * price
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    // 单选功能
    const singleCheck = (skuId, selected) => {
      // 通过 skuId 筛选要修改的项
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
    }

    // 已选择
    // 数量
    const selectedCount = computed(() => cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count, 0))
    // 总价
    const selectedPrice = computed(() => cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      selectedCount,
      selectedPrice,
    }
  },
  {
    persist: true,
  }
)
