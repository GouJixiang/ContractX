<template>
  <n-config-provider :theme-overrides="contractTheme">
    <n-notification-provider>
      <n-message-provider>
        <GlobalProvider></GlobalProvider>
      </n-message-provider>
    </n-notification-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { useContractTheme } from '@/store'

import GlobalProvider from './components/common/GlobalProvider.vue'

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
