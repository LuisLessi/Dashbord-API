import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/LoginView.vue')
  },

  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "login" */ '../views/Home/HomeView.vue')
  },

  {
    path: '/produtos',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '../views/Product/ProductView.vue')
  },

  {
    path: '/clientes',
    name: 'clientes',
    component: () => import(/* webpackChunkName: "clientes" */ '../views/Clientes/ClientesView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router