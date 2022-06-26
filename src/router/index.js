import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutOne from '../views/LayoutOne.vue'
import LayoutTwo from '../views/LayoutTwo.vue'
import TravelDetail from '../views/TravelDetail.vue'
const routes = [
  {
    path: '/',
    component: LayoutOne
  },
  {
    path: '/layout2',
    component: LayoutTwo
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
