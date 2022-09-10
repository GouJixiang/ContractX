<template>
  <n-config-provider :theme-overrides="contractTheme">
    <router-view></router-view>
  </n-config-provider>
</template>

<script setup lang="ts">
import { useContractTheme } from '@/store'
const contractTheme = useContractTheme()
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html,
body,
#App {
  box-sizing: border-box;
  height: 100%;
}
</style>
