<template>
    <div id="about" class=" has-background-dark">
        <div class="columns mx-5">

            <swiper :options="swiperOption">
            <swiper-slide>
            <div class="column">
                <img class="award" src="/img/awards/award-01.svg">
            </div>
            </swiper-slide>
            <swiper-slide>
            <div class="column">
                <img class="award" src="/img/awards/award-02.svg">
            </div>
            </swiper-slide>
            <swiper-slide>
            <div class="column">
                <img class="award" src="/img/awards/award-03.svg">
            </div>
            </swiper-slide>
            <swiper-slide>
            <div class="column">
                <img class="award" src="/img/awards/award-04.svg">
            </div>
            </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>


        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption:{
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    loop:true,
                    autoplay:{
                        delay:3000,
                    }

                }
            }
        },

    }
</script>

<style scoped>

    .award{
        height: 400px;
        width: 400px;
    }


</style>
