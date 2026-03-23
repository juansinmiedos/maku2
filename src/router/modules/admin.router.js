
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
      },
      {
        path: "projects",
        name: "AdminProjects",
        component: loadComponent("ProjectsView"),
      },
      {
        path: "projects/:name",
        name: "AdminProjectDetail",
        component: loadComponent("ProjectDetailView"),
      },
      {
        path: "projects/new",
        name: "NewProject",
        component: loadComponent("NewProjectView"),
      },
    ],
  },
]
