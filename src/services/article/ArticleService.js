import httpClient from "../http/HttpService";

const END_POINT = 'dataset.php';

const getAllArticle = () => {
    httpClient.get(`${END_POINT}`)
};
export {
    getAllArticle
}