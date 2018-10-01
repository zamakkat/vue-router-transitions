import Vue from 'vue'
import Router from 'vue-router'

const dynamicComponentImport = (name) => {
  return () => ({
    component: delayedImport(name)
  })
}

const delayedImport = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import(`@/components/${name}`))
    }, 5000)
  })
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: dynamicComponentImport('HomeIndex')
    },
    {
      path: '/about',
      name: 'HomeAbout',
      component: dynamicComponentImport('HomeAbout')
    },
    {
      path: '/contact',
      name: 'HomeContact',
      component: dynamicComponentImport('HomeContact')
    }
  ]
})
