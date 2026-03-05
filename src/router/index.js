import { createRouter, createWebHistory } from 'vue-router'

const loadHomeView = () => () => import(`../views/Home/HomeView.vue`)
const loadAboutUsView = () => () => import(`../views/AboutUs/AboutUsView.vue`)
const loadProjectsView = () => () => import(`../views/Projects/ProjectsView.vue`)
const loadProjectDetailView = () => () => import(`../views/ProjectDetail/ProjectDetailView.vue`)
const loadContactView = () => () => import(`../views/Contact/ContactView.vue`)
const loadLegalView = () => () => import(`../views/LegalView.vue`)
const loadPrivcyView = () => () => import(`../views/PrivacyView.vue`)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: loadHomeView(),
    },
    {
      path: "/about-us",
      name: "AboutUs",
      component: loadAboutUsView()
    },
    {
      path: "/projects",
      name: "Projects",
      component: loadProjectsView()
    },
    {
      path: "/projects/:id",
      name: "ProjectDetail",
      component: loadProjectDetailView()
    },
    {
      path: "/contact",
      name: "Contact",
      component: loadContactView()
    },
    {
      path: "/legal",
      name: "Legal",
      component: loadLegalView()
    },
    {
      path: "/privacy",
      name: "Privacy",
      component: loadPrivcyView()
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
