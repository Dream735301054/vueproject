<template>
    <footer>
        <ul>
            <router-link tag="li" to="/home">
                <a href="javascript:;" class="active"><i class="l1"></i><p>首页</p></a>
            </router-link>            
            <router-link tag="li" to="/follow">
                <a href="javascript:;"><i class="l2"></i><p>列表</p></a>
            </router-link>
        </ul>
        <ul>
            <!-- <li><a href="#"><i class="l3"></i><p>直播</p></a></li> -->
            <router-link tag="li" to="/Detail">
                <a href="javascript:;"><i class="l3"></i><p>明星帖</p></a>
            </router-link>
            <router-link tag="li" to="/user">
                <a href="javascript:;"><i class="l4"></i><p>个人中心</p></a>
            </router-link>
        </ul>
    </footer>
</template>

<style>
  footer{height:.99rem;border-top:.01rem solid #cbd7cc;background:#f3f1ef url(../assets/img/c4.png) no-repeat center;background-size:1.05rem .95rem;position:fixed;left:0;right:0;bottom:0;display:flex;justify-content:space-between;padding:0 .36rem 0 .53rem;}
  footer ul{display:flex;justify-content:space-between;width:1.94rem;}
  footer ul li a{display:block;margin-top:.16rem;}
  footer ul li i{display:block;background:url(../assets/img/c1.png) no-repeat;width:.48rem;height:.36rem;background-size:.48rem 1.08rem;margin:0 auto;}
  footer ul li i.l2{background-position:0 -.36rem;}
  footer ul li i.l3{background-position:0 -.72rem;}
  footer ul li i.l4{background-position:0 -.36rem;}
  footer ul li p{font:.24rem/.44rem "";color:#cbcbcb;text-align:center;}
  footer ul li a.active p{color:#ff4600;}
</style>