import { defaultType } from "@/helpers/const";

/*
    Various usefull functions
*/

// Generates random number
const random = (max) => Math.floor(Math.random() * max) + 1;

// Generates random dark color
const generateRandomColor = () => `rgb(${random(180)}, ${random(180)}, ${random(180)})`;

// Generates icon for the news type
const generateIcon = () => {
    const rand = random(3);
    return rand === 0 ? "leaf" : rand === 1 ? "star" : "gears";
};

// Sort news in different ways
const sortNewsNewest = (news) => news.sort((a, b) => a.timestamp - b.timestamp);
const sortNewsOldest = (news) => news.sort((a, b) => b.timestamp - a.timestamp);
const sortNewsTitle = (news, search) => news.filter(item => item.title.match(new RegExp(search, "gi")));
const sortNewsType = (news, type) => type === defaultType ? news : news.filter(item => item.type.toLowerCase() === type.toLowerCase());

export {
    random,
    generateRandomColor,
    generateIcon,
    sortNewsNewest,
    sortNewsOldest,
    sortNewsTitle,
    sortNewsType
};
