import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login.vue'
import Home from '@/components/Home.vue'
import users from '@/components/user.vue'
import dakai from '@/components/dakai.vue'
import register from '@/components/register.vue'
import huojiang from '@/components/huojiang.vue'
import introduction from '@/components/introduction.vue'
import direction from '@/components/direction.vue'
import lunzhibiao from '@/components/lunzhibiao.vue'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/register', component: register },
    {
      path: '/Home', component: Home,
      redirect: '/dashboard',
      children: [
        { path: '/users', component: users },
        { path: '/dashboard', component: dakai },
        { path: '/huojiang', component: huojiang },
        { path: '/introduction', component: introduction },
        { path: '/direction', component: direction },
        { path: '/lunzhibiao', component: lunzhibiao }
      ]
    }
  ]
})
