import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element-ui和样式文件

import elementUi from "element-ui"
import "../node_modules/element-ui/lib/theme-chalk/index.css"
Vue.use(elementUi)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
