import { defaultType } from "@/helpers/const";

/*
    Our main state
*/

const state = {
    // Store news list
    news: [],
    // Store news types (name/color/icon)
    types: {
        [defaultType]: {}
    },
    // Store filtered news
    filteredNews: []
};

export default state;