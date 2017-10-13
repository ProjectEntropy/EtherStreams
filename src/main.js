// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import BootstrapVue from 'bootstrap-vue'

import MoonLoader from './components/Loader'
//
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false


// ContentStore
import ContentStore from './store/videos'

// Vue.use(BootstrapVue);


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
