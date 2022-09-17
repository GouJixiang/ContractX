<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { useMessage, useNotification } from 'naive-ui'

/** 绑定自定义的全局方法到window上 */
window.$message = useMessage()
window.$notification = useNotification()
</script>
