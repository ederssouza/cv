import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import Vue2Filters from 'vue2-filters'
import router from './router'
import App from './App.vue'

Vue.use(Meta)
Vue.use(Vue2Filters)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
