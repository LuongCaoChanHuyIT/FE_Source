import { createRouter, createWebHistory } from 'vue-router'
import { AuthModule } from '@/modules/auth'
import { HomeModule } from '@/modules/home'

const routes = [...HomeModule.routes, ...AuthModule.routes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
