import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: () => import(/* webpackChunkName: "nosotros" */ '../views/Nosotros.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import(/* webpackChunkName: "productos" */ '../views/Productos.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "cotacto" */ '../views/Contacto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
