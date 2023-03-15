import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/waterfall',
      component: () => import('@/views/Waterfall.vue')
    },
    {
      path: '/recursive',
      component: () => import('@/views/Recursive.vue')
    },
    {
      path: '/dynamic',
      component: () => import('@/views/Dynamic.vue')
    },
    {
      path: '/dialog',
      component: () => import('@/views/Dialog.vue')
    },
    {
      path: '/async',
      component: () => import('@/views/Async.vue')
    },
    {
      path: '/keepAlive',
      component: () => import('@/views/KeepAlive.vue')
    }
  ]
})

export default router
