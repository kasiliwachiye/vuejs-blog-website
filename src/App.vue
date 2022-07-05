<template>
  <div id="app">
    <nav-component/>
    <router-view id="router"/>
    <footer-component/>
  </div>

</template>

<script>
import NavComponent from './components/header/NavComponent.vue'
import FooterComponent from './components/footer/FooterComponent.vue'
export default {
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
