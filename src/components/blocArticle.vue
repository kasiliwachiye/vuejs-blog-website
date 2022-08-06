<template>
    <div>
        <div class="articleItem">
            <div v-html="item.type"></div>
            <div v-html="item.title"></div>
            <div v-html="item.date"></div>
            <img :src="item.images" v-html="item.images"/>
            <div v-html="item.introduction"></div>
            <div v-html="item.body"></div>
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
        border: 1px solid red
    }
</style>