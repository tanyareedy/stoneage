<template>
    <div class="has-background-primary py-4">
        <h1 class="is-size-3 has-text-white">What our Users say
        </h1>


        <div class="container">
            <div class="section">
                <div class="columns">
                    <swiper :options="swiperOption">

                        <swiper-slide>
                            <div class="column mx-5 ">
                                <article class="align-content-center">
                                    <figure class="">
                                        <p class="align-content-center is-128x128">
                                            <img src="img/testify/retired.jpeg">
                                        </p>
                                    </figure>
                                    <div >
                                        <div class="content has-text-white">
                                            <p class="is-italic is-size-4 is-size-5-touch">
                                                "At Newagebot, the Traders connect with you on a very personal level,
                                                you can tell they really want you to succeed "
                                            </p>
                                                <br>

                                                <h4 class="is-size-5 has-text-white">
                                                    Prof. J.M. Partinnin-Lowe</h4>

                                                <span>Professor</span>


                                        </div>

                                    </div>
                                    <div class="media-right">

                                    </div>
                                </article>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="column mx-5 ">
                                <article class="align-content-center">
                                    <figure class="">
                                        <p class="align-content-center is-128x128">
                                            <img src="img/testify/business-man.jpeg">
                                        </p>
                                    </figure>
                                    <div >
                                        <div class="content has-text-white">
                                            <p class="is-italic is-size-4 is-size-5-touch">
                                                "Great service I only wish I can receive the signals my experts uses to
                                                trade so I learn as well"
                                            </p>
                                            <br>

                                            <h4 class="is-size-5 has-text-white">Jeff Witzeman</h4>

                                            <span>Business man</span>


                                        </div>

                                    </div>
                                    <div class="media-right">

                                    </div>
                                </article>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="column mx-5 ">
                                <article class="align-content-center">
                                    <figure class="">
                                        <p class="align-content-center is-128x128">
                                            <img src="img/testify/couples.jpg">

                                        </p>
                                    </figure>
                                    <div >
                                        <div class="content has-text-white">
                                            <p class="is-italic is-size-4 is-size-5-touch">
                                                "After i lost my job as a writer, Trading has been my major source of income.
                                                i am so lucky to have found Newagebot"
                                            </p>
                                            <br>

                                            <h4 class="is-size-5 has-text-white">Katee Page
                                            </h4>

                                            <span>Writer</span>


                                        </div>

                                    </div>
                                    <div class="media-right">

                                    </div>
                                </article>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="column mx-5 ">
                                <article class="align-content-center">
                                    <figure class="">
                                        <p class="align-content-center is-128x128">
                                            <img src="img/testify/man.png">
                                        </p>
                                    </figure>
                                    <div >
                                        <div class="content has-text-white">
                                            <p class="is-italic is-size-4 is-size-5-touch">
                                                "Painting has always been my passion, but developing and pushing my passion was made
                                                possible from my earnings on Newagebot."
                                            </p>
                                            <br>

                                            <h4 class="is-size-5 has-text-white">Glenn Rocess


                                            </h4>

                                            <span>Artist</span>


                                        </div>

                                    </div>
                                    <div class="media-right">

                                    </div>
                                </article>
                            </div>
                        </swiper-slide>


                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>

                    </swiper>

                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    loop:true,
                    slidesPerView: 1,
                  /*  autoplay: {
                        delay: 5000
                    },*/


                },
            }
        },

    }
</script>

<style lang="scss" scoped>


    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }


</style>
