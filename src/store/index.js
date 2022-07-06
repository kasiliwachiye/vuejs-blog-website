import Vue from "vue";
import Vuex from "vuex";
import state from './state.store'
import mutations from './mutations.store'
import actions from './actions.store'
import getters from './getters.store'

Vue.use(Vuex);

const store =new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});
export default store;