import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListarUsuario from "../components/Cliente/ListarUsuario.vue"
import CrearUsuario from "../components/Cliente/CrearUsuario.vue"
import EditarCliente from "../components/Cliente/EditarCliente.vue"
import ListarDepartamento from "../components/Departamento/ListarDepartamento.vue"
import CrearDepartamento from "../components/Departamento/CrearDepartamento.vue"
import EditarDepartamento from "../components/Departamento/EditarDepartamento.vue"
import ListarEmpleado from "../components/Empleado/ListarEmpleado.vue"
import CrearEmpleado from "../components/Empleado/CrearEmpleado.vue"
import EditarEmpleado from "../components/Empleado/EditarEmpleado.vue"
import ListarFactura from "../components/Factura/ListarFactura.vue"
import CrearFactura from "../components/Factura/CrearFactura.vue"
import EditarFactura from "../components/Factura/EditarFactura.vue"
import ListarPuesto from "../components/Puesto/ListarPuesto.vue"
import CrearPuesto from "../components/Puesto/CrearPuesto.vue"
import EditarPuesto from "../components/Puesto/EditarPuesto.vue"
import ListarRol from "../components/Rol/ListarRol.vue"
import CrearRol from "../components/Rol/CrearRol.vue"
import EditarRol from "../components/Rol/EditarRol.vue"
import ListarUsuarioR from "../components/Usuario/ListarUsuarioR.vue"
import CrearUsuarioR from "../components/Usuario/CrearUsuarioR.vue"
import EditarUsuarioR from "../components/Usuario/EditarUsuarioR.vue"
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
      path: '/listarc',
      name: 'listar',
      component: ListarUsuario
    },
    {
        path: '/crearc',
        name: 'crear',
        component: CrearUsuario
    },
    {
      path: '/editarc/:pkCliente',
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
    {
      path: '/listarempleado',
      name: 'listarempleado',
      component: ListarEmpleado
    },
    {
      path: '/crearempleado',
      name: 'crearempleado',
      component: CrearEmpleado
    },
    {
      path: '/editarempleado/:pkEmpleado',
      name: 'editarempleado',
      component: EditarEmpleado
    },
    {
      path: '/listarfactura',
      name: 'listarfactura',
      component: ListarFactura
    },
    {
      path: '/crearfactura',
      name: 'crearfactura',
      component: CrearFactura
    },
    {
      path: '/editarfactura/:pkFactura',
      name: 'editarfactura',
      component: EditarFactura
    },
    {
      path: '/listarpuesto',
      name: 'listarpuesto',
      component: ListarPuesto
    },
    {
      path: '/crearpuesto',
      name: 'crearpuesto',
      component: CrearPuesto
    },
    {
      path: '/editarpuesto/:pkpuesto',
      name: 'editarpuesto',
      component: EditarPuesto
    },
    {
      path: '/listarrol',
      name: 'listarrol',
      component: ListarRol
    },
    {
      path: '/crearrol',
      name: 'crearrol',
      component: CrearRol
    },
    {
      path: '/editarrol/:pkRol',
      name: 'editarrol',
      component: EditarRol
    },
    {
      path: '/listarusuarior',
      name: 'listarusuarior',
      component: ListarUsuarioR
    },
    {
      path: '/crearusuarior',
      name: 'crearusuarior',
      component: CrearUsuarioR
    },
    {
      path: '/editarusuarior/:pkUsuario',
      name: 'editarusuarior',
      component: EditarUsuarioR
    },
  ]
})

export default router
