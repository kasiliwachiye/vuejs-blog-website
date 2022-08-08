<template>
<div>
    <div class="article-title">
        <div v-html="article.title" :class="['article-title-content']"></div>
    </div>
    <div class="container">
        <div class="item article-body">
            <div v-html="article.body"></div>
        </div>
        <div class="item article-info">
            <img :src="article.images" v-html="article.images"/>
            <div v-html="article.introduction"></div>
            <span v-html="article.type" :class="[article.type, 'article-title-type']"></span> - <span v-html="article.date" :class="['article-title-date']"></span>
        </div>
    </div>
</div>
</template>
<script>
import data from '../data.json'

export default {
    name: 'articleDetails',
    data() {
        return {
            id: this.$route.params.id,
            data: data,
            article: {}
        }
    },
    created() {
        this.article = this.data.filter((item) => {
            return item.id == this.id
        })
        this.article = this.article[0]
        console.log(this.article)
    }
}
</script>
<style scoped>
    .article-title {
        margin: 10px 50px 50px 50px;
    }
    .article-title .article-title-content {
        border-bottom: 1px solid #000;
        font-size: 35px;
        font-weight: bold;
    }
    .container {
        display: flex;
        justify-content: center;
    }
    .container .item {
        padding: 0 50px;
    }
    .container .item.article-info {
        padding-right: 50px;
    }
    .article-title-type {
        padding: 4px 10px;
        border-radius: 5px;
        font-size: 12px;
    }
    .News {
        color: #FFF;
        background-color: rgb(121, 185, 121);
    }
    .Features {
        color: #FFF;
        background-color: rgb(207, 114, 38);
    }
    .Interviews {
        color: #FFF;
        background-color: rgb(38, 106, 207);
    }
    .Sponsored.articles {
        color: #FFF;
        background-color: rgb(207, 38, 75);
    }
</style>