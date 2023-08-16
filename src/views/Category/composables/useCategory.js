// 封装分类数据业务相关代码

import { getTopCategoryAPI } from '@/apis/category'
import { ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

export const useCategory = () => {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id = route.params.id) => {
    // 如何在 setup 中获取路由参数
    // useRoute() -> route 等价于 this.$route
    const res = await getTopCategoryAPI(id)
    categoryData.value = res.result
  }

  getCategory()

  // 方案二：使用 onBeforeRouteUpdate 钩子函数，做精确更新
  onBeforeRouteUpdate((to) => {
    // 存在问题：参数滞后现象，应该使用最新的路由参数请求最新的分类数据
    getCategory(to.params.id)
  })

  return { categoryData }
}
