import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/bootstrap/bootstrap.min.css'
import './assets/css/fontawesome/css/fontawesome-all.css'

Vue.config.productionTi = false

new Vue({
  router,
  render: function(createElement){
      return createElement(App)
  }
}).$mount('#app')
