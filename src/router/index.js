import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Classification from '@/components/Classification'
import Shoppingcart from '@/components/Shoppingcart'
import Personal from '@/components/Personal'


Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/classification',
      name: 'classification',
      component: Classification,
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: Shoppingcart
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    }

  ]
})
