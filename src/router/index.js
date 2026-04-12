import { createRouter, createWebHistory } from 'vue-router'
import { pingUserRequest } from '@/services/auth.js'

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

router.beforeEach(async (to, from, next) => {
  if (!to.meta.requiresAuth && !to.meta.loggedOutOnly) {
    return next()
  }

  try {
    await pingUserRequest()
    if (to.meta.loggedOutOnly) {
      return next("/admin/projects")
    }
    return next()
  } catch (error) {
    if (to.path === "/admin/login") {
      return next()
    }
    return next("/admin/login")
  }
})

export default router
