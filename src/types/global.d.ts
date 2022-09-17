import type { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider'
import type { NotificationApiInjection } from 'naive-ui/es/notification/src/NotificationProvider'

/** 定义挂载在window上的全局方法/组件 */
declare global {
  interface Window {
    // Naive Message 组件
    $message: MessageApiInjection
    // Naive Notification 组件
    $notification: NotificationApiInjection
  }
}
