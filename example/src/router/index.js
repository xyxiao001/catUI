import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/view/Dashboard'
import Component from '@/view/Component'
import Guide from '@/view/Guide'
import Resource from '@/view/Resource'

// 引入md
// 介绍
import Introduce from '@/markdown/introduce.md'
// 安装
import Install from '@/markdown/install.md'
import QuickStart from '@/markdown/quickStart.md'
import UpdateLog from '@/markdown/updateLog.md'

// 组件
import Button from '@/markdown/button.md'

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
      component: Component,
      redirect: '/component/introduce',
      children: [
        {
          path: 'introduce',
          name: 'Introduce',
          component: Introduce
        },
        {
          path: 'install',
          name: 'Install',
          component: Install
        },
        {
          path: 'quickStart',
          name: 'QuickStart',
          component: QuickStart
        },
        {
          path: 'updateLog',
          name: 'UpdateLog',
          component: UpdateLog
        },
        {
          path: 'button',
          name: 'Button',
          component: Button
        }
      ]
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/resource',
      name: 'Resource',
      component: Resource
    }
  ]
})
