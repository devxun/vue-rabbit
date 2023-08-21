// createRouter：创建 router 实例对象
// createWebHistory：创建 history 模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import Test from '@/views/Test/ParentComponent.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 配置 path 和 component 的映射关系
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: '/category/:id',
          name: 'category',
          component: Category,
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategory,
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: Detail,
        },
        {
          path: 'cartlist',
          name: 'cartlist',
          component: CartList,
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: Checkout,
        },
        {
          path: 'pay',
          name: 'pay',
          component: Pay,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

export default router
