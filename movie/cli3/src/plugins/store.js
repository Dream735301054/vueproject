import Vue from 'vue';
import Vuex from 'vuex';
import state from '../store/state';
import actions from '../store/actions';
import getters from '../store/getters';
import mutations from '../store/mutations';

Vue.use(Vuex);
//创建状态管理实例
// let store = new Vuex.Store(配置);
let store = new Vuex.Store({
    // key:value
    // key = actions/state/getters/mutations
    // value =={} 
    // state:{} 
    // state:state 
    state,actions,getters,mutations 
});
export default store;