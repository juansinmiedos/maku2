
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
      }
    ],
  },
]

// children
// login
// proyectos
// detalle de proyectos
// proyecto nuevo
