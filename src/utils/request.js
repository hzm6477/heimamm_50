import Vue from "vue";
import axios from "axios";
import router from "@/router"
import { getToken,removeToken } from '@/utils/token'

// 设置基础路径
axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
// 允许携带cookies
axios.defaults.withCredentials = true;

//请求拦截器
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = getToken()
    if(token){ 
        config.headers.token=token
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
//相应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    if(response.data.code==206){
      //删除token
        removeToken()
      //跳转页面
      router.push('/login')
      return
    }
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

Vue.prototype.$axios = axios;