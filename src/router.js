import Vue from 'vue'
import Router from 'vue-router'
import loginComponent from "./views/login"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",redirect:"/home"
    },
    {
      path:'/home',component:loginComponent
    }
  ]
})
