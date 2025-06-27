import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import PropertyView from '@/pages/PropertyView.vue'
import MapView from "@/pages/MapView.vue";
import LayoutView from "@/layouts/LayoutView.vue";
import HomeView from "@/views/HomeView.vue";
import CardsList from "@/components/CardsList.vue";
import SettingsMain from "@/components/SettingsMain.vue";



const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: LayoutView
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
