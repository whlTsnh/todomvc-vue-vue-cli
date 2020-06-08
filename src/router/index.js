import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/all'
  },
  {
    path: '/all',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/all.vue')
  },
  {
    path:'/active',
    component: () => import(/* webpackChunkName: "about" */ '../components/active.vue')
  },
  {
    path:'/completed',
    component: () => import(/* webpackChunkName: "about" */ '../components/completed.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
