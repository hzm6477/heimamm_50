//配置路由
import Vue from "vue";
import Login from "@/views/login";
import Layout from "@/views/layout";
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
      component: Layout,
    },
  ],
});
//暴漏出去
export default router;
