<template>
  <div class="user">
    <nav>个人中心</nav>
    <section id="dl">
      <div class="t">
          <div>
            <img :src="server.baseUrl + user.icon" alt=""/>
            <router-link to="/login"><h3>{{user.nikename}}</h3></router-link>            
          </div>
          <p><span>V</span>免费兑换VIP</p>   
      </div>
      <div class="b">
          <div class="l">
            <img src="../assets/img/xin.png"/>
            <div>
                <h3 @click="logout">退出登录</h3>
                <p>哥哥记得想我哦！</p>
            </div>
          </div>
          <div class="r">
            <img src="../assets/img/quan.png"/>
            <p>影视圈</p>
          </div>   
      </div>
    </section>
    <section id="lx">
      <ul>
          <li><a href="#">
                <img src="../assets/img/quan.png" class="te"/>
                <h3>离线缓存</h3>
            </a>
          </li>
          <li>
            <a href="#">
                <img src="../assets/img/quan.png" class="te"/>
                <h3>观看历史</h3>
            </a>          
          </li>
          <div class="fu">
                <div class="zi">
                  <img src="../assets/img/wy.png" class="te1"/>
                  <p>快见的法律咖啡</p>
                  <p>第36集</p>
                </div>
                <div class="zi">
                  <img src="../assets/img/wy.png" class="te1"/>
                  <p>快见看法律咖啡</p>
                  <p>第36集</p>
                </div>
                <div class="zi">
                  <img src="../assets/img/wy.png" class="te1"/>
                  <p>快见的法律咖啡</p>
                  <p>第36集</p>
                </div>
                <div class="zi">
                  <img src="../assets/img/wy.png" class="te1"/>
                  <p>快见的法律咖啡</p>
                  <p>第36集</p>
                </div>
            </div>
          <li><a href="#">
                <img src="../assets/img/quan.png" class="te"/>
                <h3>离线缓存</h3>
            </a>
          </li>
          <li><a href="#">
                <img src="../assets/img/quan.png" class="te"/>
                <h3>离线缓存</h3>
            </a>
          </li>     
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user:{}
    }
  },  
  beforeRouteEnter(to,from,next){
    axios({
      url:'http://localhost:3000/api/user'
    }).then(
      res=>res.data.err===0 ? next(_this=>_this.user=res.data.data) : next('/login')
    )
  },
  methods:{   
    logout(){
      axios({
        url:'http://localhost:3000/api/logout',
        method:'delete'
      }).then( 
        res=>res.data.err===0 && this.$router.push('/home')
      )
    }
  }
}
</script>


<style>
  nav{font:.32rem/.86rem "";color:#222;text-align:center;background:url(../assets/img/v1.png) no-repeat 6.86rem .27rem;background-size:.3rem .3rem;border-bottom:1px solid #d9d9d9;}

  #dl .t{overflow:hidden;height:1.49rem;border-bottom:.41rem solid #f5f7f9;}
  #dl .t div{float:left}
  #dl .t div img{float:left;width:1rem;height:1rem;margin:.25rem .21rem 0 .24rem;border-radius: 50%;}
  #dl .t div h3{float:left;font:.28rem/1.5rem "";color:#222;}
  #dl .t p{float:right;font:.24rem/.36rem "";color:#a0a0a0;background:#e5e5e5;width:1.96rem;height:.36rem;margin:.57rem .28rem 0 0;border-radius:.18rem;display:flex;justify-content:center;align-items:center;}
  #dl .t p span{width:.28rem;height:.28rem;background:#cccccc;font-size:.18rem;border-radius:50%;margin-right:.11rem;text-align:center;color:#fff;}
  #dl .b{height:1.4rem;border-bottom:.41rem solid #f5f7f9;overflow:hidden;}
  #dl .b .l{float:left;height:.8rem;width:3.46rem;margin:.29rem 0 0 .28rem;overflow:hidden;}
  #dl .b .l img{float:left;width:.4rem;height:.4rem;margin:.21rem .21rem 0 0;}
  #dl .b .l div{float:left;}
  #dl .b .l div h3{font:.28rem/.42rem "";color:#222;}
  #dl .b .l div p{font:.24rem/.38rem "";color:#999;}
  #dl .b .r{float:left;border-left:.02rem solid #ebebeb;margin-top:.35rem;}
  #dl .b .r img{float:left;width:.36rem;height:.36rem;margin:.17rem .23rem 0 .29rem;}
  #dl .b .r p{float:left;font:.28rem/.7rem "";color:#222;}

  #lx ul{overflow:hidden;border-bottom:.41rem solid #f5f7f9;}
  #lx ul li{margin-left:.29rem;background:url(../assets/img/youjian.png) no-repeat 7.03rem .44rem;overflow:hidden;border-bottom:1px solid #ebebeb;overflow:hidden;}
  #lx ul li img.te{float:left;width:.36rem;height:.36rem;margin:.39rem .22rem 0 0;}
  #lx ul li h3{float:left;font:.28rem/1.11rem "";color:#222;}
  #lx ul .fu{overflow:hidden;display:flex;}
  #lx ul .fu .zi{width:2.08rem;margin-left:.07rem;}
  #lx ul .fu .zi img.te1{display:block;width:2.08rem;height:1.16rem;}
  #lx ul .fu .zi p{font:.24rem/.32rem "";color:#333;margin-left:.06rem;}
</style>