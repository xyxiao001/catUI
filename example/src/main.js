// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import DemoBox from '@/components/demobox'
Vue.component('demo-box', DemoBox)

// catUi组件
import { Button, ButtonGroup } from '@/components/cat/Button'
Vue.component('cat-button', Button)
Vue.component('cat-button-gruop', ButtonGroup)

import '@/assets/hjs.scss'
import '@/assets/markdown.scss'
import '@/components/cat/index.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
