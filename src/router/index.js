import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/components/HomeIndex'
import HomeAbout from '@/components/HomeAbout'
import HomeContact from '@/components/HomeContact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: HomeIndex
    },
    {
      path: '/about',
      name: 'HomeAbout',
      component: HomeAbout
    },
    {
      path: '/contact',
      name: 'HomeContact',
      component: HomeContact
    }
  ]
})
