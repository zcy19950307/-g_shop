/**
 路由器对象木块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
// import MSite from '../pages/MSite/MSite'
// import Order from '../pages/Order/Order'
// import Profile from '../pages/Profile/Profile'
// import Search from '../pages/Search/Search'

const MSite = () => import('../pages/MSite/MSite')
const Order = () => import('../pages/Order/Order')
const Profile = () => import('../pages/Profile/Profile')
const Search = () => import('../pages/Search/Search')

import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopRatins from '../pages/Shop/ShopRatins/ShopRatins'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'



// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,  // 返回路由组件  函数，只有执行函数才会加载路由组件， 在请求路由路径的时候才会执行
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
    },
    {
      path: '/shop',
      component: Shop,
      children:[
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatins
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    }
  ]
})
