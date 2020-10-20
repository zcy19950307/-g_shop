/**
 入口js
 **/

import Vue from 'vue'
import App from './App'
// 引入路由器
import router from './router'
// 引入vuex
import store from './store'

new Vue({

  el: '#app',
  render: h => h(App),
  router,
  store
})
