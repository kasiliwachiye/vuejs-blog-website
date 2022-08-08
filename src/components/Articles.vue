<template>
  <div class="hello">
    <h2><span>Nos articles</span></h2>
    <div class="filter">
      <select name="type" class="input-article" id="" v-model="type">
        <option value="">All</option>
        <option value="news">News</option>
        <option value="features">Features</option>
        <option value="interviews">Interviews</option>
        <option value="sponsored">Sponsored articles</option>
      </select>
      <input type="text" v-model="search" class="input-article" placeholder="Titre de l'article">
      Order by :
      <button class="btn" @click="orderByAsc" :class="{ isActive: asc }">ASC</button>
      <button class="btn" @click="orderByDesc" :class="{ isActive: desc }">DESC</button>
    </div>
    <div class="container">
      <div v-if="filterData.length < 1">Aucun article</div>
      <BlocArticle :item="item" v-for="(item, key) in filterData" v-bind:key="key" />
    </div>
  </div>
</template>

<script>
import BlocArticle from "./blocArticle.vue";
import data from '../data.json'

import moment from 'moment'

export default {
  name: "ArticlesDisplay",
  props: ['title'],
  data() {
    return {
      data: data,
      search: '',
      type: '',
      asc: true,
      desc: false
    };
  },
  components: { BlocArticle },
  computed: {
    filterData: function () {
      return this.filterByTitle(this.filterByType(this.data))
    },
  },
  methods: {
    filterByType: function (data) {
      return data.filter((item) => {
        return item.type.toUpperCase().match(this.type.toUpperCase())
      })
    },
    filterByTitle: function (data) {
      return data.filter((item) => {
        return item.title.toUpperCase().match(this.search.toUpperCase())
      })
    },
    orderByAsc: function () {
      this.asc = true;
      this.desc = false;
      return this.data.sort((a, b) => moment(a.date) - moment(b.date))
    },
    orderByDesc: function () {
      this.desc = true;
      this.asc = false;
      return this.data.sort((a, b) => moment(b.date) - moment(a.date))
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
    border-bottom: 1px solid #dfdfdf;
    line-height: 5px;
  }
  
  h2 span {
    background-color: #fff;
    padding: 0 25px;
  }
  
  .filter {
    text-align: center;
    margin: 50px 0;
  }
  
  .input-article {
    margin-right: 55px;
    padding: 10px;
  }
  
  .btn {
    border: 0;
    padding: 5px 10px;
    margin: 0 0 0 10px;
    border-radius: 4px;
    background-color: #FFF;
    cursor: pointer;
  }
  
  .isActive {
    background-color: #e1dfdf;
  }
</style>
