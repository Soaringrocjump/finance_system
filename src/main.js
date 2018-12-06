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
//格式化时间  案例：2018-01-01
Vue.filter('formatterDate', function (value) {
  if (!value) return ''
  return formatDate(new Date(value),'yyyy-MM-dd')
})
//格式化金额 案例：1,237,878.71
Vue.filter('moneyFormat', function(val) {
  val=val/10000;
  val = val.toString().replace(/\$|\,/g,'');
  if(isNaN(val)) {
    val = "0";
  }
  let sign = (val == (val = Math.abs(val)));
  val = Math.floor(val*100+0.50000000001);
  let cents = val%100;
  val = Math.floor(val/100).toString();
  if(cents<10) {
    cents = "0" + cents
  }
  for (var i = 0; i < Math.floor((val.length-(1+i))/3); i++) {
    val = val.substring(0,val.length-(4*i+3))+',' + val.substring(val.length-(4*i+3));
  }

  return (((sign)?'':'-') + val + '.' + cents);
})
