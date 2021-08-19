/*
 * @Descripttion: unTitle
 * @Author: yizheng.yuan
 * @Date: 2021-07-07 16:24:33
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2021-08-19 15:19:50
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import echarts from 'echarts'
import 'echarts-gl'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
import './assets/css/common.scss'
import './assets/css/resetUi.scss'
import 'echarts/extension/bmap/bmap';

import './assets/css/common.css'
Vue.prototype.$echarts = echarts

import { ajax } from '@/utils/commonAjax'
Vue.prototype.$ajax = ajax

// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view';
Vue.use(dataV)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
