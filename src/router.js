import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'
import Works from '@/components/Works'
import Blog from '@/components/Blog'
import ArticleDetail from '@/components/ArticleDetail'
import Other from '@/components/Other'

Vue.use(VueRouter)

const routes = [
  { path: '/mypage',      component: Home },
  { path: '/mypage/about', component: About },
  { path: '/mypage/works', component: Works },
  { path: '/mypage/blog', component: Blog },
  { path: '/mypage/blog/:id', name: "article-detail", component: ArticleDetail, props: true},
  { path: '/mypage/other', component: Other }
]

const router = new VueRouter({
  mode: 'history', 
  routes
})

export default router