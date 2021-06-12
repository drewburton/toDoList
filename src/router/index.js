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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
