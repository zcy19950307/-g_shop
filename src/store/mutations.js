/*
直接更新state对象
 */
import  Vue from 'vue'

import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS, INCREMENT_FOOD_COUNT, DECREMENT_FOOD_COUNT
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },

  [INCREMENT_FOOD_COUNT] (state, {food}) {

    // 这里 food 里面没有 count 这个属性 会导致 数据发生改变，但是界面看不到 数据发生变化后的值
    // 所以 我们在这里添加一个 Vue.set(food,'count',1) 第一个参数 要给那个对象里面添加
    // 第2个事 添加对象的属性  3. 添加数据的值

    // !food.count ? Vue.set(food,'count',1) :   food.count++

    if(!food.count){
      Vue.set(food,'count',1)
      //将Food添加到cartFoods
      state.cartFoods.push(food)
    }else{
      food.count++
    }

  },

  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if (food.count) {
      food.count--
      if(food.count === 0){
          //讲Food中cartFoods 移除
          state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  }
}
