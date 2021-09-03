/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-08-27 21:34:14
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2021-09-03 11:07:33
 */
import Vue from 'vue'
import router from './router'
import axios from './utils/axios'
import Element from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.prototype.$axios = axios
Vue.config.productionTip = false


Vue.use(Element, {
  size: 'small',
  zIndex: 3000
});
Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
