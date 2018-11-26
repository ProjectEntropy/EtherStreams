// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import MoonLoader from './components/Loader'

import VueMagnet from 'vue-magnet' 
Vue.use(VueMagnet)


Vue.config.productionTip = false


// ContentStore
import ContentStore from './store/videos'

import { Drizzle, generateStore } from 'drizzle'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, MoonLoader },

  created: function () {
    // Establish Ethereum connection on create
    // console.log(ContentStore);
    // debugger
    ContentStore.establishWeb3()
  }
})
