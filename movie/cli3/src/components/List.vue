<template>
    <div class="newsList">      
      <dl>
          <dt>重磅热播</dt>
          <dd v-for="(item,index) of listData" :key="item._id">
            <router-link :to="'/detail/'+item._id+'?dataName=' + dataName ">
            <img src="/images/c3.png"/>
            <h3>{{index+1}}.{{item.title}}</h3>
            <p>{{item.sub_title}}</p>
            </router-link>
          </dd> 
      </dl>
    </div>	    
</template>

<script>
export default {
  props:['listData','dataName']       
}
</script>

<style>
  .newsList dl dt{font:.28rem/.84rem "";color:#222;margin-left:.26rem;padding-top:.25rem;border-top:.01rem solid #ebebeb;}
  .newsList dl dd{height:3.42rem;text-align: center;}
  .newsList dl dd img{width:3.72rem;height:2.1rem;}
  .newsList dl dd h3{font:.28rem/.46rem "";color:#222;margin:.1rem 0 0 .25rem;}
  .newsList dl dd p{font:.26rem/.38rem "";color:#999;margin-left:.25rem;}
</style>