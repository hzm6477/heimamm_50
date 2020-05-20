import Vue from "vue";
import axios from "axios";
import { getToken } from '@/utils/token'

// 设置基础路径
axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
// 允许携带cookies
axios.defaults.withCredentials = true;

//拦截器
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

// Add a response interceptor
Vue.prototype.$axios = axios;