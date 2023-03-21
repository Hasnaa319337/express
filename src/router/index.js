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
      path: '/seaFreight',
      name: 'seaFreight',
      component: () => import('../views/SeaFreight.vue')
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
      path: '/land',
      name: 'land',
      component: () => import('../views/LandView.vue')
    },
    {
      path: '/size-calc',
      name: 'size-calc',
      component: () => import('../views/CalcSize.vue')
    }
  ]
})

export default router
