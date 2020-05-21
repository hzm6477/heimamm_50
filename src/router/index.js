//配置路由
import Vue from "vue";
//导入页面
import Login from "@/views/login";
import Layout from "@/views/layout";
import Chart from "@/views/layout/chart"
import Enterprise from "@/views/layout/enterprise"
import Question from "@/views/layout/question"
import Subject from "@/views/layout/subject"
import User from "@/views/layout/user"
import { getToken } from "@/utils/token.js"
//导包
import VueRouter from "vue-router";
// 注册
Vue.use(VueRouter);
//实例化
const router = new VueRouter({
  routes: [
    {
        // 路由重定向
      path: "*",
      redirect: "/Login",
    },
    {
      path: "/Login",
      component:Login,
    },
    {
      path: "/Layout",
      component: Layout,children: [
        {path: 'chart',component: Chart},
        {path: 'enterprise',component: Enterprise},
        {path: 'question',component: Question},
        {path: 'subject',component: Subject},
        {path: 'user',component: User}
      ] },
    
  ],
});
//
router.beforeEach((to,from,next)=>{
  console.log(to);
  console.log(from);
  if(to.fullPath=='/login'){
    next()
  }else{
      const token = getToken()
      if(token){ //代表登录了
        next() //去想去的页面
      }else{
        next('/login') //如果没有带token返回原路
      }
  }
})


//暴漏出去
export default router;
