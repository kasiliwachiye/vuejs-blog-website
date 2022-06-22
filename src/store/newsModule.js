import http from "@/service/http.js";
import { generateRandomColor, generateIcon } from "@/helpers/utils";
import { defaultType } from "@/helpers/const";

/*
    VueX news module
*/

// Our state
const state = {
    news: [],
    filtered: [],
    order: null,
    type: null,
    search: null,
    typeList: [defaultType]
};

// Getters
const getters = {
    newsList: state => state.news,
    getOrder: state => state.order,
    getType: state => state.type,
    getSearch: state => state.search,
    getTypelist: state => state.typeList,
    getFiltered: state => state.filtered,
};

// Setters
const mutations = {
    setNews: (state, news) => (state.news = news),
    setOrder: (state, order) => (state.order = order),
    setType: (state, type) => (state.type = type),
    setSearch: (state, search) => (state.search = search),
    setTypelist: (state, typeList) => (state.typeList = typeList),
    setFiltered: (state, filtered) => (state.filtered = filtered),
};

// Actions to be dispatched
const actions = {
    // Fetches news list
    fetchNews({ commit }) {
        return new Promise((resolve, reject) => {
            http
                .get("news")
                .then((result) => {
                    let news = [];
                    let color = {};
                    let icon = {};
                    let typeList = [defaultType];
                    result.forEach((item) => {
                        if (!typeList.includes(item.type))
                            typeList.push(item.type);
                        if (!color[item.type])
                            color[item.type] = generateRandomColor();
                        if (!icon[item.type]) icon[item.type] = generateIcon();
                        item.timestamp = Date.parse(item.date);
                        news.push(item);
                    });
                    commit("setTypelist", typeList);
                    commit("setNews", news);
                    commit("setFiltered", news);
                    resolve({ color, icon });
                })
                .catch((err) => reject(err));
        });
    },
    updateOrder({ commit }, order) {
        commit("setOrder", order);
    },
    updateType({ commit }, type) {
        commit("setType", type);
    },
    updateSearch({ commit }, search) {
        commit("setSearch", search);
    },
    updateTypelist({ commit }, typeList) {
        commit("setTypelist", typeList);
    },
    updateFiltered({ commit }, filtered) {
        commit("setFiltered", filtered);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}