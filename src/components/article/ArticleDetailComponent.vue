<template>
    <div class="card mt-5" v-if="prop">
        <img class="card-img-top" :src="prop.images" alt="Card image">
        <div class="card-body">
            <div class="info">
                <p class="info-time">Published on <span class="date">{{formatDate.day}}</span> at <span
                        class="time">{{formatDate.time}}</span>
                </p>
            </div>
            <div class="introduction my-3">
                <h1 v-html="prop.introduction"></h1>
            </div>
            <div class="content mt-5">
                <p v-html="formatBody"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['prop'],

    computed:{
        formatDate(){
            let d = this.prop.date.replace(/\s/g, "");
            return {
                day: d.slice(0, 10),
                time: d.slice(10, d.length)
            };
        },
        formatBody(){
            let occ=this.prop.body.indexOf("\n");
            return this.prop.body.slice(occ,this.prop.body.length)
        }
    }
}
</script>

<style>
    .card{
        height: 100%;
    }
    .introduction h1 {
        font-size:xx-large;
    }
    .info-time{
        color: gray;
    }
    .date, .time{
        font-style:oblique;
    }
    .content{
        text-align: justify;
    }
</style>