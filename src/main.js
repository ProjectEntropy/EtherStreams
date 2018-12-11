// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Web3 from 'web3'

const provider = require('eth-provider')

import MoonLoader from './components/Loader'

import VueMagnet from 'vue-magnet' 
Vue.use(VueMagnet)
Vue.prototype.$WebTorrent = Vue.WebTorrent

Vue.config.productionTip = false

// Globally available web3 instance
Vue.prototype.$web3 = new Web3(provider(['injected', 'direct']))
window.$Vue = Vue;

// ContentStore
import ContentStore from './store/videos'


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
