import { createVNode, render } from 'vue'
import { createRouter, Router, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import loadingBar from '@/components/Loadding/LoadingBar.vue'

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
                }
            }
        ]
    }
]

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 前置守卫
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title as string
    }
    Vnode.component?.exposed?.startLoading()
    next()
})

// 后置守卫
router.afterEach((to, from) => {
    Vnode.component?.exposed?.endLoading()
})

export default router