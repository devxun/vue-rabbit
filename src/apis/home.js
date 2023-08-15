import http from '@/utils/http'

export function getBannerAPI() {
  return http({
    url: 'home/banner',
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
