import http from '@/utils/http'

export function getBannerAPI(params = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return http({
    url: 'home/banner',
    params: {
      distributionSite,
    },
  })
}

export const getNewAPI = () => {
  return http({
    url: '/home/new',
  })
}

export const getHotAPI = () => {
  return http('/home/hot')
}

export const getGoodsAPI = () => {
  return http('/home/goods')
}
