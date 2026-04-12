
const loadComponent = name => () => import(`../../views/Admin/${name}.vue`)

export default [
  {
    path: "/admin",
    name: "Admin",
    component: loadComponent("AdminView"),
    redirect: "/admin/login",
    children: [
      {
        path: "login",
        name: "Login",
        component: loadComponent("LoginView"),
        meta: { loggedOutOnly: true },
      },
      {
        path: "projects",
        name: "AdminProjects",
        component: loadComponent("ProjectsView"),
        meta: { requiresAuth: true },
      },
      {
        path: "projects/:name",
        name: "AdminProjectDetail",
        component: loadComponent("ProjectDetailView"),
        meta: { requiresAuth: true },
      },
      {
        path: "projects/new",
        name: "NewProject",
        component: loadComponent("NewProjectView"),
        meta: { requiresAuth: true },
      },
    ],
  },
]
