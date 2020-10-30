/**
 入口js
 **/

import Vue from 'vue'
import App from './App'
// 引入路由器
import router from './router'
// 引入vuex
import store from './store'
import {Button} from 'mint-ui'

//注册全局全局组件标签
Vue.component(Button.name,Button)


new Vue({

  el: '#app',
  render: h => h(App),
  router,
  store
})
