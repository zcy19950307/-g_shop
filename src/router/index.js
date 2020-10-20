/**
 路由器对象木块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta:{ // 这个用法  当前路由是否显示 添加一个 meta.showFooter 为条件 在 App.vue 中    <FooterGuide  v-show="$route.meta.showFooter"/> 为条件的
        showFooter:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{ // 这个用法  当前路由是否显示 添加一个 meta.showFooter 为条件 在 App.vue 中    <FooterGuide  v-show="$route.meta.showFooter"/> 为条件的
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{ // 这个用法  当前路由是否显示 添加一个 meta.showFooter 为条件 在 App.vue 中    <FooterGuide  v-show="$route.meta.showFooter"/> 为条件的
        showFooter:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{ // 这个用法  当前路由是否显示 添加一个 meta.showFooter 为条件 在 App.vue 中    <FooterGuide  v-show="$route.meta.showFooter"/> 为条件的
        showFooter:true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: 'msite'
    }
  ]
})
