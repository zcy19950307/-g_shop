/*
间接通过 mutation更新state对象
 */

import {

  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS
} from './mutation-types'

import {reqAddress, reqFoodCategorys, reqShops} from '../api'

export default {

  // 异步获取地址
  async getAddress ({commit, state}) {

    // 发送ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    console.log(result)
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
    console.log(result)
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

  }

}



