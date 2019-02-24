import Vue from 'vue'
import Router from 'vue-router'
import loginComponent from "./views/login"
import homeComponent from  "./views/home"
import allReceiverComponent from "./views/home/children"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",redirect:"/login"
    },
    {
      path:'/login',component:loginComponent
    },
    {
      path:"/home",
      component:homeComponent,
      redirect:"/home/allReceiver",
      children :[
        {
          path:"allReceiver",component:allReceiverComponent
        }
      ]
    }
  ]
})
