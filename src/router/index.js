import { createRouter, createWebHistory } from 'vue-router'

const loadHomeView = () => () => import(`../views/Home/HomeView.vue`)
const loadAboutUsView = () => () => import(`../views/AboutUs/AboutUsView.vue`)
const loadServicesView = () => () => import(`../views/Services/ServicesView.vue`)
const loadProjectsView = () => () => import(`../views/Projects/ProjectsView.vue`)
const loadContactView = () => () => import(`../views/Contact/ContactView.vue`)

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
      path: "/services",
      name: "Services",
      component: loadServicesView()
    },
    {
      path: "/projects",
      name: "Projects",
      component: loadProjectsView()
    },
    {
      path: "/contact",
      name: "Contact",
      component: loadContactView()
    },
  ],
})

export default router
