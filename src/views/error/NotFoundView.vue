<template>
  <div class="container">
    <h1>{{text}}</h1>
  </div>
</template>

<script>
export default {
  props:['textError'],
  data(){
    return {
      text: this.textError ? this.textError :'[404] Not found'
    }
  }
}
</script>

<style scoped>
  .container{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1{
    color: teal;
  }



</style>