<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {

  mounted () {
    //this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
  },
  methods:{
    //  ...mapActions(['getAddress'])
    // 相当于声明了一个方法  getAddress(){ return this.$store.dispatch('getAddress')} 上面 mounted 通过  this.getAddress()调用 这里 方法的名字必须 getAddress
    ...mapActions(['getAddress','getUserInfo'])

  },
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background #f5f5f5
</style>
