/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2021-08-27 21:34:14
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-02-24 11:55:07
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
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import './utils/showdown-table.min.js'
// import './utils/showndown'
Vue.use(mavonEditor)

Vue.use(Element, {
  size: 'small',
  zIndex: 3000
});
Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
