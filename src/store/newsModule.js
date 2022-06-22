import http from "@/service/http.js";
import { generateRandomColor, generateIcon } from "@/helpers/utils";
import { defaultType } from "@/helpers/const";

/*
    VueX module
*/

// Our state
const state = {
    news: [],
    types: {
        [defaultType]: {}
    },
    filteredNews: []
};

// Getters
const getters = {
    news: state => state.news,
    types: state => state.types,
    filteredNews: state => state.filteredNews
};

// Setters
const mutations = {
    setNews: (state, newsList) => {
        state.news = newsList;
        state.filteredNews = newsList;
    },
    addType: (state, typeName) => {
        if (!state.types[typeName])
            state.types[typeName] = {
                color: generateRandomColor(),
                icon: generateIcon()
            };
    },
    setFilteredNews: (state, filteredNews) => state.filteredNews = filteredNews
};

// Actions to be dispatched
const actions = {
    getNews({ commit }) {
        http
            .get("news")
            .then((news) => {
                news = news.map((item) => {
                    item.timestamp = Math.floor(new Date(item.date.replace(" ", "T")).getTime() / 1000);
                    commit("addType", item.type);
                    return item;
                });
                commit("setNews", news);
            })
            .catch((err) => console.error(err));
    },
    updateFilteredNews({ commit }, list) {
        commit("setFilteredNews", list);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}