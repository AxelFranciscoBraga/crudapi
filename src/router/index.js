import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListarUsuario from "../components/Cliente/ListarUsuario.vue"
import CrearUsuario from "../components/Cliente/CrearUsuario.vue"
import EditarCliente from "../components/Cliente/EditarCliente.vue"
import ListarDepartamento from "../components/Departamento/ListarDepartamento.vue"
import CrearDepartamento from "../components/Departamento/CrearDepartamento.vue"
import EditarDepartamento from "../components/Departamento/EditarDepartamento.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/listar',
      name: 'listar',
      component: ListarUsuario
    },
    {
        path: '/crear',
        name: 'crear',
        component: CrearUsuario
    },
    {
      path: '/editar/:pkCliente',
      name: 'editar',
      component: EditarCliente
    },
    {
      path: '/listardepartamento',
      name: 'listardepartamento',
      component: ListarDepartamento
    },
    {
      path: '/creardepartamento',
      name: 'creardepartamento',
      component: CrearDepartamento
    },
    {
      path: '/editardepartamento/:pkDepartamento',
      name: 'editardepartamento',
      component: EditarDepartamento
    },
  ]
})

export default router
