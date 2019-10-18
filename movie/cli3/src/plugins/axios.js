import Vue from 'vue';
import axios from 'axios';
import store from './store'
axios.defaults.withCredentials=true;//整体携带跨院凭证

//拦截器
axios.interceptors.request.use(function (config) {
    //添加公共请求头  token key：value
    store.dispatch('VIEW_LOADING',true)
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  
  axios.interceptors.response.use(function (response) {
    store.dispatch('VIEW_LOADING',false)
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

Vue.prototype.$axios=axios;
window.axios=axios;
