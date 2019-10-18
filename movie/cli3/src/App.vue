<template>
  <div id="app">
    <Loading v-show ="$store.state.bLoading"></Loading>
    <transition
      enter-active-class="animated bounceInLeft"
    >
      <!-- leave-active-class="animated zoomOutRight"//动画 -->    
      <keep-alive><!-- 缓存组件 -->
        <router-view></router-view>
      </keep-alive>
    </transition>    
    <Footer v-show ="$store.state.bFoot"></Footer>
  </div>
</template>

<script>
import Loading from './components/Loading'
import Footer from './components/Footer'
import { VIEW_FOOT } from './store/types'
export default {
  name: 'app',
  components: {
    Footer,Loading
  },
  mounted(){
  },
  methods:{
    checkPath(path){//路由检测
      if(/home|user|follow/.test(path)){
        this.$store.dispatch(VIEW_FOOT,true)
      }
      if(/login|reg|detail/.test(path)){
        this.$store.dispatch(VIEW_FOOT,false)
      }
    }
  },
    watch:{
      $route:{
        handler(current,prev){
          this.checkPath(current.path)
        },
        immediate:true,
        deep:true
      }
    }
  }
</script>

<style>
</style>
