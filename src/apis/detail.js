import http from '@/utils/http'

export const getDetail = (id) => {
  return http({
    url: '/goods',
    params: {
      id,
    },
  })
}
