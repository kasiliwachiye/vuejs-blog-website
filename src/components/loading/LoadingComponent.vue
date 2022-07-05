<template>
    <div class="wrap">
        <div class="spinner-border spinner-border-sm" style="width: 100px; height: 100px" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.wrap{
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    height: 100vh;
    z-index: 10;
    width: 100%;
    background: rgba(0, 0, 0, 0.429);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>