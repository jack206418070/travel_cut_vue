import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutOne from '../views/LayoutOne.vue'
import TravelDetail from '../views/TravelDetail.vue'
const routes = [
  {
    path: '/',
    component: LayoutOne
  },
  {
    path: '/detail',
    component: TravelDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
