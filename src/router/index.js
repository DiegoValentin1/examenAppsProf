import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('../components/Landing.vue')
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: () => import('../components/Pagination.vue')
    },
    {
      path: '/formulario',
      name: 'formulario',
      component: () => import('../components/Formulario.vue')
    }
  ]
})

export default router
