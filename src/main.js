import Vue from "vue";
import Home from "@/components/Home.vue";
import "@/styles/index.scss";

/*
	Entry point
*/

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(Home),
}).$mount("#app");
