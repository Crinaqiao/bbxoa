import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import { Message } from 'element-ui'
import axios from 'axios'


Vue.prototype.$Message = Message
Vue.prototype.$http = axios
//配置请求的根路径
axios.defaults.baseURL = ''
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
router.beforeEach((to, from, next) => {
  if (to.path == '/login' || to.path == '/register') return next();
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) {
    return next('/login');
  }
  next()
})


Vue.prototype.$http = axios
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
