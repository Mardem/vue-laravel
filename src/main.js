// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import routes from './router'
import {sync} from 'vuex-router-sync'
import Vue from 'vue'
import Vuex from 'vuex'
import VueResouce from 'vue-resource'
import VueRouter from 'vue-router'
import VuexStore from './router/vuex/store'

Vue.use(Vuex)
Vue.use(VueResouce)
Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.http.options.root = process.env.SERVER

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
  routes
})

sync(store, router)

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
