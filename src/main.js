import Vue from "vue";
import Home from "@/components/Home.vue";
import "@/helpers/icons.js";
import "@/styles/index.scss";
import store from "@/store";
import VueLazyLoad from "vue-lazyload";

/*
	Entry point
*/

Vue.config.productionTip = false;
Vue.use(VueLazyLoad, {
	preLoad: 1.3,
	loading: "/assets/loading.gif",
	error: "/assets/error.jpg"
});

new Vue({
	render: (h) => h(Home),
	store
}).$mount("#app");
