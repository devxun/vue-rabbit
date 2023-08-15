import http from '@/utils/http'

export const getTopCategoryAPI = (id) => {
  return http({
    url: '/category',
    params: {
      id,
    },
  })
}
