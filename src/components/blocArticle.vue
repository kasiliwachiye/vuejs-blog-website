<template>
    <div>
        <div class="article-item">
            <img :src="item.images" v-html="item.images"/>
            <div class="content">
                <div v-html="item.type" :class="[item.type, 'article-type']"></div>
                <div v-html="item.date"></div>
                <div 
                    v-html="item.title"
                    :class="['article-title']"
                ></div>
                <div 
                    v-html="item.introduction" 
                    :class="['article-introduction']"
                ></div>
            </div>
            <!-- <div v-html="item.body"></div> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'blocArticle',
    props: ['item']
}
</script>
<style scoped>
    .article-item {
        border: 1px solid #ededed;
        width: 250px;
        margin: 0 10px 20px 10px;
        height: 300px;
        border-radius: 8px;
    }
    .article-item:hover {
        border: 1px solid rgb(145, 141, 141);
    }
    .article-title {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .article-introduction {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .article-type {
        position: absolute;
        top: -35px;
        padding: 4px 10px;
        border-radius: 5px;
        font-size: 12px;
    }
    img {
        width: 250px;
        border-radius: 8px 8px 0 0;
    }
    .content {
        margin: 0 10px;
        position: relative;
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