import Vue from 'vue'
import Router from 'vue-router'
const Home = () => System.import('../components/Home')
const Portfolio = () => System.import('../components/Portfolio')
const Contact = () => System.import('../components/Contact')
const Page404 = () => System.import('../components/Page404')

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/*',
      name: 'page404',
      component: Page404
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
