import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element-ui和样式文件

import elementUi from "element-ui"
import "../node_modules/element-ui/lib/theme-chalk/index.css"
Vue.use(elementUi)
//引入axios文件
import axios from "axios"
//将axios挂载到Vue的原型上面
Vue.prototype.$http=axios
//配置默认的axios信息
axios.defaults.baseURL ='http://litc.pro:9999/v1';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
