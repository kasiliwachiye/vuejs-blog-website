import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/fontawesome/css/fontawesome-all.css'
import './assets/css/style.css'

Vue.config.productionTi = false

new Vue({
  store,
  router,
  render: function(createElement){
      return createElement(App)
  }
}).$mount('#app')
