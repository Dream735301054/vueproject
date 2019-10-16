<template>
  <div class="home">
    <nav>
      <div class="l">
          <a href="#">精选</a>
          <a href="#">那年花开</a>
          <a href="#">电视剧</a>
          <a href="#">精选</a>
          <span></span>
      </div>      
    </nav>
    <section id="serch">
      <input type="text" value="小猪佩奇第四季"/>
    </section >
    <Slider :banner="banner" :data-name="'banner'"></Slider>		
    <section id="haoli">
      <p>空间里看风景阿里看<span>&gt;</span></p>
    </section>
    <List :list-data="listData" :data-name="'list'"></List>
  </div>
</template>


<script>
import Slider from '@/components/Slider'
import List from '@/components/List'
export default {
  data(){
    return {
      listData:[],
      banner:[]
    }
  },
  components:{Slider,List}, 
  activated(){
    axios({
      url:'http://localhost:3000/api/list',
      params:{_page:1,_limit:10}
    }).then(
      res=>this.listData=res.data.data,
    )
    axios({
      url:'http://localhost:3000/api/banner',
      params:{_page:1,_limit:3}
    }).then(
      res=>this.banner=res.data.data,
    )   
  }, 
}
</script>

<style>
  nav .l{position:relative;height:.88rem;background:url(../assets/img/shu.png) no-repeat .5rem;
  background-size:.1rem .82rem;display:flex;align-items:center;}
  nav .l a{margin-left:.5rem;}
  nav .l a:nth-child(1){font:.32rem/.6rem "";color:#232222;margin-left:.8rem;}
  nav span{position:absolute;top:.31rem;left:.15rem;border-top:.04rem solid #222222;border-bottom:.04rem solid #222222;width:.28rem;height:.18rem;display:flex;align-items:center;}
  nav span:after{content:"";width:100%;height:.04rem;background:#222;}
  nav .l a:hover{color:#fe7000;border-bottom:.06rem solid #fe7000;}

  #serch{height:.92rem;background:#f5f5f5;}
  #serch input{float:left;width:4.70rem;height:.6rem;background:#dddede;margin:.16rem 0 0 .24rem;border:none;border-radius:.1rem;text-align:center;font:.24rem/.6rem "";color:#666;position:relative;}

  #haoli p{font:.26rem/1.2rem "";color:#222222;background:url(../assets/img/c2.png) no-repeat left;background-size:.27rem .32rem;margin-left:.3rem;padding-left:.51rem;}
  #haoli p span{font:.26rem/1.2rem "黑体";color:#a3a3a3;margin-left:1.5rem;} 
</style>