<template>
  <div id="app">
    <ArticleDetails />
  </div>
</template>

<script>
import ArticleDetails from './components/ArticleDetails.vue';

export default {
  name: 'App',
  components: {
    ArticleDetails
}
}
</script>

<style>
@font-face {
  font-family: 'Neue Haas Display Medium';
  src: url(./fonts/NeueHaasDisplayMedium.ttf) format('truetype');
}

#app {
  font-family: 'Neue Haas Display Medium', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
