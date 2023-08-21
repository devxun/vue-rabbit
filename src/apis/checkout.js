import http from '@/utils/http.js'

export const getCheckInfoAPI = () => {
  return http('/member/order/pre')
}
