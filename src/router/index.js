import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const LoadingPage = () => import('@/pages/LoadingPage')

const MainBoard = () => import('@/pages/MainBoard')

const Settings = () => import('@/pages/Settings')


const routes = [
  {
    path: '/',
    name: 'LoadingPage',
    component: LoadingPage,
  },
  {
    path: '/main',
    name: 'MainBoard',
    component: MainBoard,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
