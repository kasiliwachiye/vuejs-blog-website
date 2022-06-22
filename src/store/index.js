import Vue from "vue";
import Vuex from "vuex";
import newsModule from "@/store/newsModule";

/*
    VueX store
*/

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        newsModule
    }
});
