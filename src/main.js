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
  { path: '/',      component: Home },
  { path: '/about', component: About },
  { path: '/works', component: Works },
  { path: '/blog', component: Blog },
  { path: '/other', component: Other }
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
