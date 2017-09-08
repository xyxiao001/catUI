// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import DemoBox from '@/components/demobox'
Vue.component('demo-box', DemoBox)

import IconList from '@/components/IconList'
Vue.component('icon-list', IconList)

// catUi组件
// Button
import { Button, ButtonGroup } from '@/components/cat/Button'
Vue.component('cat-button', Button)
Vue.component('cat-button-gruop', ButtonGroup)

import { Icon } from '@/components/cat/Icon'
Vue.component('catIcon', Icon)

import { Input } from '@/components/cat/Input'
Vue.component('catInput', Input)

import { InputNumber } from '@/components/cat/InputNumber'
Vue.component('catInputNumber', InputNumber)

import { Radio, RadioGroup, RadioButton } from '@/components/cat/Radio'
Vue.component('catRadio', Radio)
Vue.component('catRadioGroup', RadioGroup)
Vue.component('catRadioButton', RadioButton)

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
