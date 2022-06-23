import Home from "@/views/Home.vue";
import ArticleDisplay from "@/views/ArticleDisplay.vue";

/*
    Export our routes
*/

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/article/:id",
        name: "Article",
        component: ArticleDisplay,
    },
];

export default routes;
