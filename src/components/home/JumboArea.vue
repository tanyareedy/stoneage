<template>
    <div>


        <div id="jumbo">


            <div class="pt-5">
               <div class="spacer"></div>
                <h1 class="is-size-1 is-size-5-touch has-text-primary mt-5">Join NewageBot</h1>

                <swiper :options="swiperOption">
                    <swiper-slide>


                        <h1 class="is-size-5-touch is-size-1-desktop has-text-weight-semibold  has-text-white has-text-centered">
                            PROFESSIONAL TRADERS AT YOUR SERVICE!
                        </h1>



                    </swiper-slide>
                    <swiper-slide>
                        <h1 class="is-size-5-touch is-size-1-desktop has-text-weight-semibold  has-text-white has-text-centered">

                            NEW AGE BINARY OPTIONS TRADING PLATFORM!
                        </h1>



                    </swiper-slide>
                    <swiper-slide>
                        <h1 class="is-size-5-touch is-size-1-desktop has-text-weight-semibold  has-text-white has-text-centered">


                            TRIED AND TESTED SYSTEMS THAT WORK
                        </h1>

                    </swiper-slide>

                </swiper>
                <h2 class="is-size-6-touch is-size-3-desktop has-text-white has-text-centered">

                    Reduced Risk & Guaranteed Earning.
                </h2>
            </div>


        </div>


    </div>
</template>

<script>
    import data from "../../db/main_data";

    export default {

        data() {
            return {
                name: data.global.name,
                swiperOption: {
                    loop: true,
                    autoplay: {
                        delay: 5000,
                    },

                },
            }
        },

    }
</script>

<style scoped>

    .boxed {
        text-align: center;
        color: white;
    }

    .banner {

        width: 100%;

    }

    .header {
        color: white;
        position: absolute;
        top: 40%;
        left: 20%;
        /*transform: translate(-50%, -50%);*/
    }

    .text {

        top: 54%;
        /*left: 39%;*/
        /*transform: translate(-50%, -50%);*/

    }


    #jumbo {
        background-image: url("/img/banner/banner3.jpg "); /* The image used */
        background-color: #cccccc; /* Used if the image is unavailable */
        height: 800px; /* You must set a specified height */

        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        #jumbo {
            height: 350px; /* You must set a specified height */

        }


    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {

        #jumbo {
            height: 350px; /* You must set a specified height */

        }

    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        #jumbo {
            height: 550px; /* You must set a specified height */

        }

    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {

        #jumbo {
            height: 650px; /* You must set a specified height */

        }


    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        #jumbo {
            height: 800px; /* You must set a specified height */

        }

    }

    .img-responsive {
        display: block;
        max-width: 100%;
        height: 50%;
    }
</style>
