<template>
    <div class="px-3">
<br>
<br>
<br>
<br>
        <img class="banner" src="/img/404.png">
        <h1 class="is-size-3 font-weight-bold">Ooooooops !!</h1>
        <br>
        <p class="is-size-4">Sorry Page not found </p>
            <router-link :to="{name:'home'}" class="button is-primary my-5">Go Home</router-link>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

    .bg {
        /* The image used */
        /*background-image: url("img/404.png");*/

        /* Full height */
        height: 100%;

        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>
