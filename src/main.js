import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
Vue.config.productionTip = false
//导入路由
import router from './router'
// import elment from './plugins/lement.js'
// 导入 request(封装了axios)
import '@/utils/request.js'

import '@/plugins/lement.js'
new Vue({
  render: h => h(App),
  //挂载路由
  router,
  
}).$mount('#app')
