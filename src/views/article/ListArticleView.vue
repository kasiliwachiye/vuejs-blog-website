<template>
  <div class="container">
    <loading-component v-if="loading"/>
    <div class="row d-flex justify-content-center mt-3 mb-5">
      <h1 id="title">Welcome to the list of articles</h1>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6 my-3" v-for="article in filteredData.data" :key="article.id">
        <article-component :prop="article"></article-component>
      </div>
    </div>
  </div>

</template>

<script>
import ArticleComponent from '@/components/article/ArticleComponent.vue'
import { mapActions, mapGetters } from 'vuex'
import LoadingComponent from '@/components/loading/LoadingComponent.vue';
export default {
  metaInfo: {
    titleTemplate: `%s  list of articles and magazines about expatriation`,
  },
  components: { ArticleComponent, LoadingComponent },
  data(){
      return {
        loading:false
      };
  },
  mounted:async function(){
    this.loading=true;
    await this.action_load_data();
    this.loading=false;
  },
  computed:{
    ...mapGetters(['filteredData'])
  },
  methods:{
    ...mapActions([
      'action_load_data'
    ])
  }
}
</script>

<style>
#title{
  color:teal;
}
</style>