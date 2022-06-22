import Vue from "vue";
import Home from "@/components/Home.vue";
import "@/helpers/icons.js";
import "@/styles/index.scss";
import store from "@/store";

/*
	Entry point
*/

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(Home),
	store
}).$mount("#app");
