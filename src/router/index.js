import { createRouter, createWebHistory } from 'vue-router'

const loadComponent = component => () => import(`../views/Home/${component}.vue`)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadComponent("HomeView"),
    },
  ],
})

export default router
