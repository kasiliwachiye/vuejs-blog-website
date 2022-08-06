<template>
  <div class="hello">
    <h3>Articles</h3>
    <hr>
    <div class="container">
      <BlocArticle :item="item" v-for="(item, key) in data" v-bind:key="key"/>
    </div>
  </div>
</template>

<script>
import BlocArticle from "./blocArticle.vue";
import data from '../data.json'

console.log(data)
export default {
    name: "ArticlesDisplay",
    data() {
        return {
            data: data
        };
    },
    components: { BlocArticle },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
