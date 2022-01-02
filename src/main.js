import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import Home from '@/components/Home'
import About from '@/components/About'
import Works from '@/components/Works'
import Blog from '@/components/Blog'
import Other from '@/components/Other'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/mypage',      component: Home },
  { path: '/mypage/about', component: About },
  { path: '/mypage/works', component: Works },
  { path: '/mypage/blog', component: Blog },
  { path: '/mypage/other', component: Other }
]

const router = new VueRouter({
  mode: 'history', 
  routes
})

new Vue({
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')
