<template>
  <div class="hello">
    <h2>{{ title }}</h2>
    <div class="filter">
      <select name="type" id="" v-model="type" @change="onChoiseType">
        <option value="news">News</option>
        <option value="features">Features</option>
        <option value="interviews">Interviews</option>
        <option value="sponsored">Sponsored articles</option>
      </select>
      <input type="text" v-model="search" placeholder="Titre de l'article">
    </div>
    <div class="container">
      <BlocArticle :item="item" v-for="(item, key) in filterOnTitle" v-bind:key="key"/>
    </div>
  </div>
</template>

<script>
import BlocArticle from "./blocArticle.vue";
import data from '../data.json'

console.log(data)
export default {
    name: "ArticlesDisplay",
    props: ['title'],
    data() {
        return {
            data: data,
            search: '',
            type: ''
        };
    },
    components: { BlocArticle },
    computed: {
      filterOnTitle: function() {
        return this.data.filter((item) => {
          return item.title.toUpperCase().match(this.search.toUpperCase())
        })
      },
    },
    methods: {
      onChoiseType: function() {
        console.log(this.type)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
h2 {
  text-align: center;
}
.filter {
  text-align: center;
  margin: 50px 0;
}
</style>
