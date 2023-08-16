// 封装 banner 轮播图相关的业务代码
import { getBannerAPI } from '@/apis/home'
import { ref } from 'vue'

export const useBanner = () => {
  const bannerList = ref([])

  const getBanner = async () => {
    const res = await getBannerAPI({ distributionSite: '2' })
    bannerList.value = res.result
  }

  getBanner()

  return { bannerList }
}
