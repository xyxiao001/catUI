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
import Icon from '@/markdown/icon.md'
import Input from '@/markdown/input.md'
import InputNumber from '@/markdown/inputNumber.md'
import Radio from '@/markdown/Radio.md'
import Checkbox from '@/markdown/Checkbox.md'

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
        },
        {
          path: 'icon',
          name: 'Icon',
          component: Icon
        },
        {
          path: 'input',
          name: 'Input',
          component: Input
        },
        {
          path: 'inputNumber',
          name: 'InputNumber',
          component: InputNumber
        },
        {
          path: 'radio',
          name: 'Radio',
          component: Radio
        },
        {
          path: 'checkbox',
          name: 'Checkbox',
          component: Checkbox
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
