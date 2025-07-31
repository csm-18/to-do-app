import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',

      name: 'home',

      component: Home,

      meta: { title: 'To-Do App' }, //Add title here
    },
  ],
})

router.beforeEach((to, from, next) => {
  const defaultTitle = 'To-Do App' //Fallback title

  document.title = String(to.meta.title) || defaultTitle

  next()
})

export default router
