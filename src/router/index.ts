import { createVNode, render } from 'vue'
import {
  createRouter,
  Router,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'
import loadingBar from '@/components/Loading/LoadingBar.vue'
import type { App } from 'vue'

// 创建loadingBar的虚拟Dom
const Vnode = createVNode(loadingBar)
render(Vnode, document.body)

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/view/home/Home.vue'),
        meta: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/view/login/LoginPassword.vue'),
    meta: {
      title: '登录',
    },
  },
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 前置守卫
router.beforeEach((to, from, next) => {
  Vnode.component?.exposed?.startLoading()
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  if (localStorage.getItem('token')) {
    next()
  } else {
    // if (to.path === '/login') {
    //   next()
    // } else {
    //   next('/login')
    // }
    next()
  }
})

// 后置守卫
router.afterEach((to, from) => {
  Vnode.component?.exposed?.endLoading()
})

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
