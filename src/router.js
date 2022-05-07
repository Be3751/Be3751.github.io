import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Profile from '@/views/Profile'
import Works from '@/views/Works'
import ProductDetail from '@/views/ProductDetail'
import Blog from '@/views/Blog'
import ArticleDetail from '@/views/ArticleDetail'

Vue.use(VueRouter)

// 独自ドメインがない場合
// const routes = [
//   { path: '/mypage',      component: Home },
//   { path: '/mypage/profile', component: Profile},
//   { path: '/mypage/works', component: Works },
//   { path: '/mypage/works/:id', name: "product-detail", component: ProductDetail},
//   { path: '/mypage/blog', component: Blog },
//   { path: '/mypage/blog/:id', name: "article-detail", component: ArticleDetail},
//   { path: '/mypage/other', component: Other }
// ]

// 独自ドメインがある場合
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