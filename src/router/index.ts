import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PropertyView from '@/views/PropertyView.vue'
import MapView from '@/views/MapView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/property/:id',
    name: 'Property',
    component: PropertyView
  },
  {
    path: '/map',
    name: 'Map',
    component: MapView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
