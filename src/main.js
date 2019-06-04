import Vue from 'vue'
import App from './App'

import router from './router'

//控制台的生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})

