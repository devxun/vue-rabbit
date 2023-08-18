<script setup>
import SunComponent from './SonComponent.vue'
import { ref } from 'vue'

const SunComponentRef = ref(null)

const preImage = () => {
  if (SunComponentRef.value.curIndex === 0) {
    alert('第一张')
    return
  }

  SunComponentRef.value.preImage()
}
const nextImage = () => {
  if (SunComponentRef.value.curIndex === SunComponentRef.value.arrayLength - 1) {
    alert('最后一张')
    return
  }
  SunComponentRef.value.nextImage()
}
</script>
<template>
  <div class="sun-component">
    <button @click="preImage">上一张</button>
    <button @click="nextImage">下一张</button>
    <SunComponent ref="SunComponentRef" />
  </div>
</template>
<style scoped>
.sun-component {
  width: 400px;
  height: 400px;
}
</style>
