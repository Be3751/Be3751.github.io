import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Works from '@/components/Works'
import ProductDetail from '@/components/ProductDetail'
import Blog from '@/components/Blog'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(VueRouter)

// const routes = [
//   { path: '/mypage',      component: Home },
//   { path: '/mypage/profile', component: Profile},
//   { path: '/mypage/works', component: Works },
//   { path: '/mypage/works/:id', name: "product-detail", component: ProductDetail},
//   { path: '/mypage/blog', component: Blog },
//   { path: '/mypage/blog/:id', name: "article-detail", component: ArticleDetail},
//   { path: '/mypage/other', component: Other }
// ]

// 独自ドメイン用
const routes = [
  { path: '/',      component: Home },
  { path: '/profile', component: Profile},
  { path: '/works', component: Works },
  { path: '/works/:id', name: "product-detail", component: ProductDetail},
  { path: '/blog', component: Blog },
  { path: '/blog/:id', name: "article-detail", component: ArticleDetail},
]

const router = new VueRouter({
  mode: 'history', 
  routes
})

export default router