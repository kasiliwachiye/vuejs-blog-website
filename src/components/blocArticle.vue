<template>
    <div>
        <div class="article-item">
            <img :src="item.images" v-html="item.images"/>
            <div class="content" :class="[item.type]">
                <div v-html="item.type"></div>
                <div 
                    v-html="item.title"
                    :class="['article-title']"
                ></div>
                <div 
                    v-html="item.introduction" 
                    :class="['article-introduction']"
                ></div>
                <div v-html="item.date"></div>
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
    img {
        width: 250px;
        border-radius: 8px 8px 0 0;
    }
    .content {
        margin: 0 10px;
    }
</style>