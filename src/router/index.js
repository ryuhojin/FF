import Vue from 'vue'
import VueRouter from 'vue-router'
import SignInPage from '../views/SignIn/SignInPage'
import UserPage from '../views/User/UserPage'

Vue.use(VueRouter)

const routes=[
  {
    path : '/index.html', redirect: '/login'
  },
  {
    path: '/login',
    component: SignInPage
  },
  {
    path:'/user',
    component:UserPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router
