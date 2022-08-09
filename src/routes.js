import Articles from './components/Articles.vue'
import ArticleDetails from './components/articleDetails.vue'

export default [
    { path: '/', component: Articles },
    { path: '/articles/:id', component: ArticleDetails },
]