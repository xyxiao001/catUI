import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/view/Dashboard'

import '@/assets/index.scss'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'router-activity',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
