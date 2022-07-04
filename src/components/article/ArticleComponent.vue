<template>
    <div class="card shadow" @click="showDetail">
        <img :src="prop.images" class="card-img" alt="Card image cap">
        <div class="card-img-overlay">
            <div class="categorie">
                <h3 class="bull">{{prop.type}}</h3>
            </div>
        </div>
        <div class="card-body">
            <h3>{{cropTitle}}</h3>
            <p class="crop" v-html="cropIntro"></p>
        </div>
    </div>
</template>

<script>
export default {
    props:['prop'],
    mounted:()=>{
    
    },
    methods:{
        showDetail(){
            this.$router.push(`/article/${[this.prop.id]}`)
        }
    },
    computed:{
        cropTitle(){
            return this.prop.title.length>=30?this.prop.title.slice(0,30)+"...":this.prop.title
        },
        cropIntro() {
            return this.prop.introduction.length >= 100 ? this.prop.introduction.slice(0, 100) + "..." : this.prop.introduction
        }
    }
}
</script>

<style scoped>

.card{
    border-radius: 3%!important;
    overflow: hidden;
    cursor: pointer;
}

.card-img{
    border-radius: 3% 3% 0% 0% !important;
}

.card-img-overlay{
    display: flex;
    justify-content: center;
    align-items: center;
}

.categorie{
    display: inline-flex;
    position:absolute;
    top:0;
    right:0;
}
.crop {
    overflow: hidden;
    color:grey;
    font-weight: lighter;
}
.bull{
    background: rgba(0, 0, 0, 0.49);
    padding:5px;
    color:white;
    font-size:medium;
}
</style>