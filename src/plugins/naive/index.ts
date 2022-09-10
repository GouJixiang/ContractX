import type { App } from 'vue'
import { create, NAvatar, NCard, NCarousel, NConfigProvider, NForm, NFormItem, NInput, NTabPane, NTabs } from 'naive-ui'

const naive = create({
  components: [NAvatar, NCarousel, NCard, NTabPane,NTabs,NConfigProvider,NForm,NFormItem,NInput],
})

export function setupNaive(app: App<Element>) {
  app.use(naive)
}
