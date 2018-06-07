import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../../components/Index.vue'

import Header from '../../components/main/Header.vue'
import Footer from '../../components/main/Footer.vue'

import Login from '../../components/Login.vue'
import Posts from '../../components/Posts.vue'
import Post from '../../components/Post.vue'
import NewPost from '../../components/NewPost.vue'
import {Auth} from '../../api'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  if (Auth.loggedIn()) return next()
  next({
    path: '/login',
    query: { redirect: to.fullPath }
  })
}

const router = new VueRouter({
  // mode: 'history',
  routes: [
    { 
      path: '/', 
      components :{
        default : Index,
        header : Header,
        footer : Footer,
      } ,
       beforeEnter: requireAuth
    },
    { 
      path: '/login', 
      components: {
        login : Login
      }, 
    },
    { 
      path: '/logout', 
      beforeEnter(to, from, next) {
        Auth.logout()
        next('/login')
      } 
    },
    { 
      path: '/posts', component: Posts , beforeEnter: requireAuth, 
      children: [
        { name: 'new_post', path: 'new', component: NewPost,  },
        { name: 'post', path: ':id', component: Post },
      ]
    },
    { 
      path: '*', component: { template: '<div>Not Found</div>'} }
  ]
})



export default router