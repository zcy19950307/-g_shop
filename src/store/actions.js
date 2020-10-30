/*
间接通过 mutation更新state对象
 */

import {

  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout
} from '../api'

export default {

  // 异步获取地址
  async getAddress ({commit, state}) {

    // 发送ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }

  },

  //异步获取食品分类信息
  // 异步获取地址
  async getCategorys ({commit}) {
    // 发送ajax请求
    const result = await reqFoodCategorys()
    // 提交一个mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }

  },

  // 异步获取商家列表
  // 异步获取地址
  async getShops ({commit, state}) {
    // 发送ajax请求
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  //同步记录用户信息
  recordUser({commit},userInfo){
    commit(RECEIVE_USER_INFO,userInfo)
  },

  // 异步获取用户信息
  async getUserInfo({commit}){
    const result = await  reqUserInfo()
    console.log(result)
    if(result.code === 0){
      const userInfo = result.data
      commit(RECEIVE_USER_INFO,userInfo)
    }
  },

  //异步退出

  async logout({commit}){
    const result = await  reqLogout()
    console.log(result)
    if(result.code === 0){
      commit(RESET_USER_INFO)
    }
  },

}



