<template>
  <div class="wraps">
    <div ref="bar" class="bar"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let speed = ref<number>(1)
let bar = ref<HTMLElement>()
let timer = ref<number>(0)
const startLoading = () => {
  speed.value = 1
  let dom = bar.value as HTMLElement
  timer.value = window.requestAnimationFrame(function fn() {
    if (speed.value < 90) {
      speed.value += 1
      dom.style.width = speed.value + '%'
      timer.value = window.requestAnimationFrame(fn)
    } else {
      speed.value = 1
      window.cancelAnimationFrame(timer.value)
    }
  })
}

const endLoading = () => {
  let dom = bar.value as HTMLElement
  setTimeout(() => {
    window.requestAnimationFrame(() => {
      speed.value = 100
      dom.style.width = speed.value + '%'
    })
  }, 500)
}

defineExpose({
  startLoading,
  endLoading,
})
</script>

<style lang="scss">
.wraps {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 2px;
  z-index: 100;
  .bar {
    height: inherit;
    width: 0px;
    background-image: linear-gradient(
      to right,
      #e4afcb 0%,
      #b8cbb8 0%,
      #b8cbb8 0%,
      #e2c58b 30%,
      #c2ce9c 64%,
      #7edbdc 100%
    );
  }
}
</style>
