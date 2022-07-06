<template>
    <div class="wrap">
        <div class="spinner-border" role="status">
        </div><br/>
        <h1> loading</h1>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>



.wrap{
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    height: 100vh;
    z-index: 100;
    width: 100%;
    background: radial-gradient(rgba(0, 128, 128, 0.471), transparent);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
.spinner-border{
    width: 100px;
    height: 100px;
}
</style>