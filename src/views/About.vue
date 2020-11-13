<template>
    <div id="app">
        <div v-scrollanimation id="jumbo">

            <div class="pt-5">
                <h1 id="target" class="is-size-1 is-size-3-touch has-text-white has-text-left px-5 py-3 has-text-weight-bold">About
                    Us</h1>
                <p class="is-size-4 is-size-6-touch has-text-white has-text-left px-5">
                    Newagebot gives you access to
                    Premium Trading tools, and <br class="is-hidden-touch"> assistance from experienced traders.</p>
            </div>
        </div>

        <!--      Brief history-->
        <template>
            <div v-scrollanimation class="columns has-background-white py-5 px-5">
                <div class="column">
                    <div class="has-text-justified">
                        <div v-for="history in historys" :key="history.id">
                            <h1 class="is-size-3 has-text-left">
                                {{history.title}}
                            </h1>

                            <p v-html="history.text">

                            </p>
                        </div>

                    </div>
                </div>
                <div class="column">
                    <img src="/img/tfm/map.png">
                </div>


            </div>
        </template>
        <!--      Brief history-->

        <section class="section" v-scrollanimation id="profit">
            <div>

                <div class="container">

                    <div v-for="profit in profits" :key="profit.id" class="columns   py-4 ">
                        <div class="column is-4">
                            <article class="media mx-5">
                                <figure class="media-left align-content-center">
                                    <p class="image is-64x64">
                                        <img class="icon " :src="profit.image">
                                    </p>
                                </figure>
                                <div class="media-content">
                                    <div class="content">
                                        <h1 class="is-size-4 my-3  has-text-weight-bold">
                                            {{profit.title}}
                                        </h1>
                                    </div>

                                </div>

                            </article>
                        </div>

                        <div class="column px-5">
                            <p v-html="profit.text" class="has-text-justified ">

                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </section>

        <AwardSection v-scrollanimation/>

        <PortfolioArea v-scrollanimation/>
        <FaqAbout v-scrollanimation/>


    </div>
</template>

<script>
    import PortfolioArea from "../components/home/PortfolioArea";
    import AwardSection from "../components/AwardSection";
    import FaqAbout from "../components/faq/FaqAbout";
    import data from "../db/about_data";
    import {mapState} from "vuex";


    export default {
        components: {
            PortfolioArea,
            AwardSection,
            FaqAbout

        },
        data() {
            return {
                historys: data.history,
                profits: data.profit,


            }

        },

        computed: {
            ...mapState(['config'])
        },

    }
</script>

<style scoped>


    #jumbo {
        background-image: url("/img/banner/traders.jpg"); /* The image used */
        background-color: #cccccc; /* Used if the image is unavailable */
        height: 40vh; /* You must set a specified height */
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
    }

    /* #profit {
         background-image: url("/img/tfm/profit.jpg"); !* The image used *!
         background-color: #cccccc; !* Used if the image is unavailable *!
         height: 100%; !* You must set a specified height *!
         background-position: center; !* Center the image *!
         background-repeat: no-repeat; !* Do not repeat the image *!
         background-size: cover; !* Resize the background image to cover the entire container *!
     }*/

    .icon {

        height: 60px;
        width: 60px;

    }

    .vl {
        border-left: 3px solid #fe4d42;
        height: 100px;
    }

    .is-horizontal-center {
        justify-content: center;
    }

    .before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: all 2s ease-out;
    }

    .enter {
        opacity: 1;
        transform: translateY(0px);
    }


    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        #jumbo {
            height: 50vh; /* You must set a specified height */
        }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        #jumbo {
            height: 55vh; /* You must set a specified height */
        }

    }

</style>
