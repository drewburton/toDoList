import { createRouter, createWebHistory } from 'vue-router'
import ToDo from '../views/ToDo.vue'
import CategoryInfo from '@/views/CategoryInfo.vue'

const routes = [
  {
    path: '/',
    name: 'ToDo',
    component: ToDo
  },
  {
    path: '/lists/:id',
    name: 'CategoryInfo',
    props: true,
    component: CategoryInfo
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
