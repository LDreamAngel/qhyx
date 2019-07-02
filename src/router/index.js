import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      redirect: 'home',
      component: (resolve) => { require(['@/components/layout/index.vue'], resolve) },
      children: [{
        path: 'home',
        name: 'Home',
        component: (resolve) => { require(['@/components/home/index.vue'], resolve) }
      },
      {
        path: 'sort',
        name: 'Sort',
        component: (resolve) => { require(['@/components/sort/index.vue'], resolve) }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: (resolve) => { require(['@/components/cart/index.vue'], resolve) }
      },
      {
        path: 'personal',
        name: 'Personal',
        component: (resolve) => { require(['@/components/personal/index.vue'], resolve) }
      },]
    },
    {
      path: '/detail',
      name: 'Detail',
      component: (resolve) => { require(['@/components/detail/index.vue'], resolve) },
    }
  ]
})
