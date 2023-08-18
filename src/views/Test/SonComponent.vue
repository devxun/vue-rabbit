<script setup>
// 图片列表
const imageList = [
  'https://yanxuan-item.nosdn.127.net/d917c92e663c5ed0bb577c7ded73e4ec.png',
  'https://yanxuan-item.nosdn.127.net/e801b9572f0b0c02a52952b01adab967.jpg',
  'https://yanxuan-item.nosdn.127.net/b52c447ad472d51adbdde1a83f550ac2.jpg',
  'https://yanxuan-item.nosdn.127.net/f93243224dc37674dfca5874fe089c60.jpg',
  'https://yanxuan-item.nosdn.127.net/f881cfe7de9a576aaeea6ee0d1d24823.jpg',
]

import { ref } from 'vue'

const curIndex = ref(0)
const arrayLength = imageList.length

const preImage = () => {
  if (curIndex.value === 0) return
  curIndex.value--
}

const nextImage = () => {
  if (curIndex.value === arrayLength) return
  curIndex.value++
}

defineExpose({
  curIndex,
  arrayLength,
  preImage,
  nextImage,
})
</script>
<template>
  <div>
    <img :src="imageList[curIndex]" alt="" />
  </div>
</template>
