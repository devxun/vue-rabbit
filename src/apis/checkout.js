import http from '@/utils/http.js'

export const getCheckInfoAPI = () => {
  return http('/member/order/pre')
}

// 创建订单
export const createOrderAPI = (data) => {
  return http({
    url: '/member/order',
    method: 'POST',
    data,
  })
}
