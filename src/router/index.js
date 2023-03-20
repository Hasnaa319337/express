import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('../views/AddressView.vue')
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServiesView.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/CoursesView.vue')
    },
    {
      path: '/airFreight',
      name: 'airFreight',
      component: () => import('../views/AirFreight.vue')
    },
    {
      path: '/size-calc',
      name: 'size-calc',
      component: () => import('../views/CalcSize.vue')
    }
  ]
})

export default router
