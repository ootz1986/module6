import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/image',
      name: 'images',
      component: () => import('../views/images.vue')
    },
    {
      path: '/image/add',
      name: 'add-image',
      component: () => import('../views/addImage.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/account.vue')
    }
  ]
})
