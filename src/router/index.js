import { createRouter, createWebHistory } from 'vue-router'

import PublicRoutes from './modules/public.router'
import AdminRoutes from './modules/admin.router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...PublicRoutes,
    ...AdminRoutes,
    {
      path: '/:pathMatch(.*)*',
      name: "NoRouteView",
      redirect: "/home",
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 }
    }
  },
})

export default router
