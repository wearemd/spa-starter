import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages')
  },
  {
    path: '/page',
    name: 'Page',
    component: () => import('@/pages/page')
  }
]

export default new Router({
  routes // short for `routes: routes`,
})
