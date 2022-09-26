import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/user/Login';
import Register from "../components/user/Register";
import Introduce from "../components/user/Introduce";
import Home from"../components/Home";
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/introduce', component: Introduce},
    {path:'/home',component:Home}
  ]
})
