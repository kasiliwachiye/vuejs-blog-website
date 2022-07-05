import Vue from 'vue'
import VueRouter from 'vue-router'
import ListArticleView from '@/views/article/ListArticleView.vue' 
import DetailArticleView from '@/views/article/DetailArticleView.vue'
import NotFoundView from '@/views/error/NotFoundView.vue'
Vue.use(VueRouter)

const routes = [
    { 
       path: '/',
       name: 'home',
       component: ListArticleView
    },
    { 
       path: '/article/:id',
       name: 'articleDetail',
       component: DetailArticleView
    },
    {
        path:'/:catchAll(.*)',
        name:'notFound',
        component:NotFoundView
    },
]

const router = new VueRouter({
    linkActiveClass: "active",
    mode: "history",
    routes
})

export default router