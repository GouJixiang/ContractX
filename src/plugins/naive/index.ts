import type { App } from 'vue'
import {
  create,
  NAvatar,
  NButton,
  NCard,
  NCarousel,
  NCheckbox,
  NConfigProvider,
  NDivider,
  NForm,
  NFormItem,
  NGi,
  NGrid,
  NIcon,
  NInput,
  NInputGroupLabel,
  NSpace,
  NTabPane,
  NTabs,
  NModal,
} from 'naive-ui'

const naive = create({
  components: [
    NAvatar,
    NCarousel,
    NCard,
    NTabPane,
    NTabs,
    NConfigProvider,
    NForm,
    NFormItem,
    NInput,
    NButton,
    NGrid,
    NGi,
    NSpace,
    NDivider,
    NIcon,
    NCheckbox,
    NInputGroupLabel,
    NModal,
  ],
})

export function setupNaive(app: App<Element>) {
  app.use(naive)
}
