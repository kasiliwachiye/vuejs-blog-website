<template>
  <div class="container">
    <loading-component v-if="loading"/>
    <article-detail-component :prop="findById"/>
  </div>
</template>

<script>
import ArticleDetailComponent from '@/components/article/ArticleDetailComponent.vue'
import { mapActions, mapGetters } from 'vuex'
import LoadingComponent from '@/components/loading/LoadingComponent.vue'
export default {
  components:{
    ArticleDetailComponent,
    LoadingComponent
  },
  data(){
    return {
      data:null,
      id:this.$route.params.id,
      loading:false
    }
  },
  mounted:async function(){
    this.loading=true;
    this.action_set_id(this.id);
    await this.action_load_data();
    document.title=this.findById.title;
    this.loading=false;
  },
  methods:{
    ...mapActions(['action_load_data','action_set_id'])
  },
  computed:{
    ...mapGetters(['findById'])
  }
}
</script>

<style>

</style>