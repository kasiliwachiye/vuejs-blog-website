import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Articles from './components/Articles.vue'
import ArticleDetails from './components/articleDetails.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Articles },
    { path: '/articles/:id', component: ArticleDetails },
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
