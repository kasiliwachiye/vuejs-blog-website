import Home from "@/views/Home.vue";

/*
    Export our routes
*/

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    /* {
        path: "/*",
        name: "Secret",
        component: AppError,
    }, */
];

export default routes;
