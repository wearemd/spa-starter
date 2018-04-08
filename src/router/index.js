import Vue    from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: () => import('@/pages')
  },
  { 
    path: '/aheuh', 
    name: 'Aheuh',
    component: () => import('@/pages/aheuh')
  }
]

export default new Router({
  routes // short for `routes: routes`,
})