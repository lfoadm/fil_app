import { createRouter, createWebHistory } from 'vue-router'
import { auth, redirectIfAuthenticated } from './guard';

const routes = [
  {
    path: '/login',
    component: () => import('@/layouts/Auth.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Login.vue'),
        name: 'login',
        beforeEnter: redirectIfAuthenticated,
      }
    ]
  },

  {
    path: '/',
    component: () => import('@/layouts/Dashboard.vue'),
    beforeEnter: auth,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
      }
    ]
  },

  {
    path: '/cadastrar',
    component: () => import('@/layouts/Auth.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Register.vue'),
        name: 'register',
        beforeEnter: redirectIfAuthenticated,
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
