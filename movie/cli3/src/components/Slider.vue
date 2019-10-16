<template>
  <div class="banner">
    <ul class="clearfix">
      <li v-for="(item,index) of banner" :key="item._id">
        <router-link :to="'/detail/'+item._id+'?dataName=' + dataName ">
            <img :src="item.banner">
            <div class="text-box">
              <h2>{{index+1}}.{{item.title}}</h2>
              <p>{{item.sub_title}}</p>
            </div>
        </router-link> 
      </li>                 
    </ul>
  </div>
</template>
<script>

import $ from 'jquery';
import Swipe from '../assets/js/swipe.js';

export default {
  props:['banner','dataName'],
  updated(){
    new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
  },
  
}
</script>

<style scoped>
.banner{position: relative;overflow: hidden; z-index: 1}
.banner ul li{width:6.4rem;float:left;position: relative;}
.banner ul li img{width:100%; display:block;}
.banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box p{ line-height:100%;}
.banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
.banner ol li.active{ background:#fff;}
</style>
