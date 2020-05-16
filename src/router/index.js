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
      path: "/Login",
      component: Login,
    },
    {
      path: "/Layout",
      component: Layout,
    },
  ],
});
export default router;
