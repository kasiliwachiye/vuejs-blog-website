<template>
  <div id="app">
    <nav-component/>
    <router-view id="router"/>
    <footer-component class="mt-3"/>
  </div>

</template>

<script>
import NavComponent from './components/header/NavComponent.vue'
import FooterComponent from './components/footer/FooterComponent.vue'
export default {
  metaInfo: {
    title: `${process.env.VUE_APP_TITLE}`,
    meta: [
      { http_equiv: 'Content-Type', content: 'text/html; charset=utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: `${process.env.VUE_APP_DESCRIPTION}` },
      { itemprop: 'name', content: 'Expat.com' },
      { itemprop: 'description', content:`${process.env.VUE_APP_DESCRIPTION}` },
      { itemprop: 'image', content: 'https://th.bing.com/th/id/R.cdadbef0a1cec7e83bdfd3d90fecf5ca?rik=uHqfR51WsjCURA&pid=ImgRaw&r=0' }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.expat.com' }
    ]
  },
  name: 'App',
  components: {
    NavComponent,
    FooterComponent
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#router{
  min-height: 50vh;
}
</style>
