<template>
    <div class="card shadow">
        <img src="https://cdn.pixabay.com/photo/2021/10/11/11/12/countryside-6700296__340.jpg" class="card-img"
            alt="Card image cap">
        <div class="card-img-overlay">
            <div class="categorie">
                <h3>categorie</h3>
            </div>
        </div>
        <div class="card-body">
            <h3>hello world</h3>
            <p class="crop">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet itaque ut maiores natus non
                distinctio
                vitae culpa in dolorum. Delectus quibusdam quae veniam maxime possimus aut? Quis soluta quaerat
                quidem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet itaque ut maiores natus non
                distinctio vitae culpa in dolorum. Delectus quibusdam quae veniam maxime possimus aut? Quis soluta
                quaerat quidem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet itaque ut maiores natus
                non distinctio vitae culpa in dolorum. Delectus quibusdam quae veniam maxime possimus aut? Quis soluta
                quaerat quidem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet itaque ut maiores natus
                non distinctio vitae culpa in dolorum. Delectus quibusdam quae veniam maxime possimus aut? Quis soluta
                quaerat quidem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet itaque ut maiores natus
                non distinctio vitae culpa in dolorum. Delectus quibusdam quae veniam maxime possimus aut? Quis soluta
                quaerat quidem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet itaque ut maiores natus
                non distinctio vitae culpa in dolorum. Delectus quibusdam quae veniam maxime possimus aut? Quis soluta
                quaerat quidem!</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>



.card{
    border-radius: 3%!important;
}

.card-img{
    border-radius: 3% 3% 0% 0% !important;
}

.categorie{
    display: inline-flex;
}
.crop {
    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;
}
</style>