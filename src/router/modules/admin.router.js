const loadAdminView = () => () => import(`../../views/Admin/AdminView.vue`)

export default [
  {
    path: "/admin",
    name: "Admin",
    component: loadAdminView()
  },
]
