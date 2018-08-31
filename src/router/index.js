import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/helloworld/HelloWorld.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})

export default router
