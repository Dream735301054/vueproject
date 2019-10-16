import Vue from 'vue';
import axios from 'axios';

axios.defaults.withCredentials=true;//整体携带跨院凭证

Vue.prototype.$axios=axios;
window.axios=axios;
