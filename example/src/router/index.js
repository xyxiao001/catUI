import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/view/Dashboard'
import Component from '@/view/Component'
import Introduce from '@/view/Introduce'
import Resource from '@/view/Resource'

import '@/assets/index.scss'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'router-activity',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/component',
      name: 'Component',
      component: Component
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/resource',
      name: 'Resource',
      component: Resource
    }
  ]
})
