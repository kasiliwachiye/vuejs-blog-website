import Vue from 'vue'
import VueRouter from 'vue-router'
import ListArticleView from '@/views/article/ListArticleView.vue' 
import ArticleView from '@/views/article/ArticleView.vue'
import NotFoundView from '@/views/error/NotFoundView.vue'
Vue.use(VueRouter)

const routes = [
    { 
       path: '/',
       name: 'home',
       component: ListArticleView
    },
    { 
       path: '/article',
       name: 'artcile',
       component: ArticleView
    },
    {
        path:'/:catchAll(.*)',
        name:'notFound',
        component:NotFoundView
    },
]

// eslint-disable-next-line no-new
const router = new VueRouter({
    linkActiveClass: "active",
    mode: "history",
    routes
})

export default router