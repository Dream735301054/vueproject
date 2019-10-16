import fillzero from './fillzero';
import {date} from './date'

import Vue from 'vue';

let filters = {
  fillzero,
  date
}
// console.log('filters',filters);
// Vue.filter('fillzero',filters.fillzero)

/* for(var key in filters){
  Vue.filter(key,filters[key])
} */

Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]))