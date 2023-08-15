// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    // 懒加载指令逻辑
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el: 指令绑定的元素，放在 <img v-img-lazy="" alt="" /> 中就表示是 img
        // binding: binding.value 指令绑定的元素的取值，放在 <img v-img-lazy="" alt="" /> 中就表示是 src 取值的图片的 url
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 进入视口区域
            el.src = binding.value
            stop()
          }
        })
      },
    })
  },
}
