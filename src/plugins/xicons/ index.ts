import { QqCircleFilled } from '@vicons/antd'
import {} from '@vicons/carbon'
import { Github } from '@vicons/fa'
import {} from '@vicons/ionicons4'
import {} from '@vicons/fluent'
import { LogoWechat } from '@vicons/ionicons5'
import {} from '@vicons/material'
import {} from '@vicons/tabler'
import type { App } from 'vue'

export function setupIcons(app: App) {
  app.component('QqCircleFilled', QqCircleFilled)
  app.component('LogoWechat', LogoWechat)
  app.component('Github', Github)
}
