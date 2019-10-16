<template>
  <div id="app">
    <transition
      enter-active-class="animated bounceInLeft"
    >
      <!-- leave-active-class="animated zoomOutRight"//动画 -->    
      <keep-alive><!-- 缓存组件 -->
        <router-view></router-view>
      </keep-alive>
    </transition>
    
    
    <Loading></Loading>
    <Footer v-show ="$root.bFooter"></Footer>
  </div>
</template>

<script>
// import Detail from './pages/Detail'
import Loading from './components/Loading'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    Footer,Loading
  },
  methods:{
    checkPath(path){//路由检测
      console.log('path',path)
      if(/home|user|follow/.test(path)){
        this.$root.$data.bFooter=true;
      }
      if(/login|reg|detail/.test(path)){
        this.$root.$data.bFooter=false;
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
