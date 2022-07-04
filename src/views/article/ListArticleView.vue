<template>
  <div class="container">
    <h1>{{test}}</h1>
    <article-component></article-component>
  </div>

</template>

<script>
import ArticleComponent from '@/components/article/ArticleComponent.vue'
import { getAllArticle } from '@/services/article/ArticleService'
export default {
  components: { ArticleComponent },
  data(){
    return {
      test:"huhuh"
    }
  },
  mounted:async function(){
    let response=await getAllArticle();
    console.log(response)
  }
}
</script>

<style>

</style>