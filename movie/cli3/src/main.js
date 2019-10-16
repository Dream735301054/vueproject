import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false//阻止vue在启动时产生提示
//配置整个应用

//引入css公共样式
import './assets/css/public.css';
import './assets/js/font';
//引入路由的配置 
import router from "./plugins/router"  
//引入动画
import 'animate.css'

//引入异步交互插件axios的配置
import './plugins/axios';
//全局过滤器配置
// import './filters';
// 配置服务器地址
Vue.prototype.server = require('./config/server')


new Vue({
  data:{
    bFooter:true,
  },
  render: h => h(App),
  //挂载
  router
}).$mount('#app')

