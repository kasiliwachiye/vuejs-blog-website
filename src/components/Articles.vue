<template>
  <div class="hello">
    <h3>Articles</h3>
    <hr>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    Vue.axios.get('https://www.expat.com/dataset.php')
      .then(res => console.log(res.data.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
