import Vue from 'vue';
//引入
import VueRouter from 'vue-router';
//安装
Vue.use(VueRouter);
//引入路由路径
import Home from "../pages/Home.vue";
import Follow from "../pages/Follow.vue";
import User from "../pages/User.vue";
import Login from "../pages/Login.vue";
import Reg from "../pages/Reg.vue";
import Error from "../components/Error.vue";
import Detail from "../pages/Detail.vue";
let routes = [
    {path:"/home",component:Home},
    {path:"/follow",component:Follow},
    {path:"/detail/:id",component:Detail,name:"detail"},
    {path:"/user",component:User},
    {path:"/login",component:Login},
    {path:"/reg",component:Reg},
    {path:"/",redirect:'/home'},
    {path:"/*",component:Error},
]
//实例化
let router = new VueRouter({
    mode:'history',
    routes
});
//全局前置守卫
// router.beforeEach((to, from, next) => {
//     // console.log("前置守卫",to,from)
//     Math.random()<.5 ? next() : next('/login')    
//   })
//全局后置钩子
// router.afterEach((to, from) => {
//     // ...
//   })  
//导出
export default router;