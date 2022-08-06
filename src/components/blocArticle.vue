<template>
    <div>
        <div class="articleItem">
            <img :src="item.images" v-html="item.images"/>
            <div class="content">
                <div v-html="item.type"></div>
                <div 
                    v-html="item.title"
                    :style="{
                        'display': '-webkit-box',
                        '-webkit-line-clamp': 3,
                        '-webkit-box-orient': 'vertical',
                        'overflow': 'hidden'}"
                ></div>
                <div 
                    v-html="item.introduction" 
                    :style="{
                        'display': '-webkit-box',
                        '-webkit-line-clamp': 2,
                        '-webkit-box-orient': 'vertical',
                        'overflow': 'hidden'}"
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
    .articleItem {
        border: 1px solid #ededed;
        width: 250px;
        margin: 0 10px 20px 10px;
        height: 300px;
        border-radius: 8px;
    }
    .articleItem:hover {
        border: 1px solid rgb(145, 141, 141);
    }
    img {
        width: 250px;
        border-radius: 8px 8px 0 0;
    }
    .content {
        margin: 0 10px;
    }
</style>