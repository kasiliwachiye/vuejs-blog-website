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

// Removes HTML tags in a string
const removeTags = (str) => str.replace(/(<([^>]+)>)/ig, "");

// Sort news by newest or oldest date
// const sortNewsDate = (news, direction) => direction === "Newest article" ? news.sort((a, b) => a.timestamp - b.timestamp) : news.sort((a, b) => b.timestamp - a.timestamp);
const sortNewsDate = (news, direction) => direction === "Newest article" ? news.sort((a, b) => a.timestamp - b.timestamp) : news.sort((a, b) => b.timestamp - a.timestamp);
// Sort news by keywords
const sortNewsKeyword = (news, keyword) => news.filter(value => value.title.match(new RegExp(keyword, "gi")) || value.introduction.match(new RegExp(keyword, "gi")) || value.body.match(new RegExp(keyword, "gi")));
// Sort news by type
const sortNewsType = (news, type) => type === defaultType ? news : news.filter(value => value.type.toLowerCase() === type.toLowerCase());
// Sort alphabetically (ascending or descending)
const sortNewsTitle = (news, direction) => direction === "A-Z title" ? news.sort((a, b) => removeTags(a.title).localeCompare(removeTags(b.title))) : news.sort((a, b) => (-1) * removeTags(a.title).localeCompare(removeTags(b.title)));

export {
    random,
    removeTags,
    generateRandomColor,
    generateIcon,
    sortNewsDate,
    sortNewsKeyword,
    sortNewsType,
    sortNewsTitle
};
