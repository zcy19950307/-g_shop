/**
 入口js
 **/

import Vue from 'vue'
import App from './App'
// 引入路由器
import router from './router'
import VueLazyload from 'vue-lazyload'
// 引入vuex
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer'  // 主需要加载 mockServer 就行
import loading from './common/imgs/loading.gif'
import './components/fiters' // 加载过滤起
//注册全局全局组件标签
Vue.component(Button.name,Button)
//图片懒加载
Vue.use(VueLazyload,{  // 内部自定义一个指令lazy
  loading
})

new Vue({

  el: '#app',
  render: h => h(App),
  router,
  store
})
