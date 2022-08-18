import Articles from '../components/Articles.vue'
import ArticleDetails from '../components/ArticleDetails.vue'

export default [
  { path: '/', component: Articles},
  { path: '/articledetails/:id', component: ArticleDetails}
]