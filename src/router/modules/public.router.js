const loadMainView = () => () => import(`../../views/MainView.vue`)
const loadHomeView = () => () => import(`../../views/Home/HomeView.vue`)
const loadAboutUsView = () => () => import(`../../views/AboutUs/AboutUsView.vue`)
const loadProjectsView = () => () => import(`../../views/Projects/ProjectsView.vue`)
const loadProjectDetailView = () => () => import(`../../views/ProjectDetail/ProjectDetailView.vue`)
const loadContactView = () => () => import(`../../views/Contact/ContactView.vue`)
const loadLegalView = () => () => import(`../../views/LegalView.vue`)
const loadPrivcyView = () => () => import(`../../views/PrivacyView.vue`)

export default [
  {
    path: "/",
    name: "Main",
    component: loadMainView(),
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: loadHomeView(),
      },
      {
        path: "about-us",
        name: "AboutUs",
        component: loadAboutUsView()
      },
      {
        path: "projects",
        name: "Projects",
        component: loadProjectsView()
      },
      {
        path: "projects/:id",
        name: "ProjectDetail",
        component: loadProjectDetailView()
      },
      {
        path: "contact",
        name: "Contact",
        component: loadContactView()
      },
      {
        path: "legal",
        name: "Legal",
        component: loadLegalView()
      },
      {
        path: "privacy",
        name: "Privacy",
        component: loadPrivcyView()
      },
    ],
  },
]
