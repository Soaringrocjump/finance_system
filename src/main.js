// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入echarts图表
import echarts from 'echarts'
import axios from './axios';
//引入jquery插件
import $ from 'jquery'

import common from './components/common/common.js'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$common = common // 增加了一些公共方法

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
