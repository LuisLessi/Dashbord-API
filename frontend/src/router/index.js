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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router