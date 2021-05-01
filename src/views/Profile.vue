<template>
    <div v-if="loaded">
        <div class="container">
            <div class="columns is-8">
                <div class="column pt-5  is-8 ">

                    <div class="has-background-white px-3  py-4 rounded-lg rounded-lg mx-3 mb-3">
                        <h1 class="text-left mx-3 is-size-4 has-text-weight-bold">Details</h1>
                        <hr>

                        <div class="pb-3">


                            <table class="table  is-striped is-hoverable is-fullwidth">

                                <tr>
                                    <td>Level:</td>
                                    <td class="is-size-5 is-capitalized">{{trader.level}}</td>
                                </tr>
                                <tr>
                                    <td>Starting Pricing:</td>
                                    <td class="mx-5  is-size-5">${{trader.startingPrice}}</td>
                                </tr>
                                <tr>
                                    <td>Win Rate:</td>
                                    <td class="mx-5  is-size-5">{{trader.winRate}}</td>
                                </tr>
                                <tr>
                                    <td>Trades / Week:</td>
                                    <td class="mx-5  is-size-5">{{trader.weeklyTrades}}</td>
                                </tr>
                                <tr>
                                    <td>Completed Trades:</td>
                                    <td class="mx-5 is-size-5">{{trader.completedTrades}}</td>
                                </tr>
                                <tr>
                                    <td>Number of clients:</td>
                                    <td class="mx-5  is-size-5">{{trader.totalClients}}</td>
                                </tr>
                                <tr>
                                    <td>Response rate:</td>
                                    <td class="mx-5  is-size-5">{{trader.responseRate}}</td>
                                </tr>
                            </table>


                        </div>
                    </div>

                </div>


                <div class="column is-4 mt-3 mx-3 ">
                    <div class="has-background-white my-3 py-3 rounded-lg px-3">
                        <figure class="media-left">
                            <p class="image">
                                <img :src="`/${trader.image}`" class=" avatar">
                            </p>
                        </figure>
                        <div class="has-text-left py-4">
                            <h1 class="is-size-4  is-capitalized">{{trader.name}}</h1>
                            <h1 class="is-size-5 has-text-weight-bold is-capitalized ">{{trader.level}}</h1>
                            <img class="star" :src="`/img/icons/rating/${trader.rating}-star.png`">

                        </div>


                    </div>

                    <div class="has-background-white my-3 py-3 rounded-lg px-3">
                        <h1 class="is-size-5 has-text-weight-semibold has-text-left">Platforms</h1>
                        <hr>

                        <p class="has-text-left">

                            {{trader.platForm}}</p>

                    </div>

                    <div class="has-background-white my-3 py-3 rounded-lg px-3">
                        <h1 class="is-size-5 has-text-weight-semibold has-text-left">Assets</h1>
                        <hr>
                        <div>

                            <ul v-for="asset in trader.assets" :key="asset.id">

                                <li class="has-text-left ml-3 is-capitalized">{{asset}} :<span
                                        class="ml-3 is-size-4 has-text-success"><i
                                        class="fas fa-check-circle"></i></span></li>
                            </ul>


                        </div>

                    </div>


                  <div class="has-background-white my-3 py-3 rounded-lg px-3">
                        <h1 class="is-size-5 has-text-weight-semibold has-text-left">Contact</h1>
                        <hr>

<div class="button" >
  <router-link class="has-text-black" :to="{name:'contact'}"  >Contact Trader <i class="fas fa-external-link-alt"></i></router-link>

</div>

                    </div>

                </div>
            </div>
            <br>

        </div>


        <!--user review section-->
        <div class="py-5">
            <div class="container">
                <div class="columns">
                    <div class="column px-4 is-12 has-background-white rounded-lg">
                        <h1 class="is-size-3">
                            Trader Review
                        </h1>
                        <div>
                            <!--                           REVIEW START-->

                            <div v-for="(guestComment) in guestComments" :key="guestComment.id">
                                <div class="media">
                                    <div class="media-left">
                                        <p class="image ">
                                            <img  src="/img/traders/guest.png" class="avatar-small">
                                        </p>
                                    </div>
                                    <div class="media-content">
                                        <div class="content">

                                            <h1 class="is-size-4">{{guestComment.author.name}}</h1>

                                            <span><i class="far fa-clock"></i><span
                                                    class="mx-2 is-capitalized">{{guestComment.createdAt | timeAgo }}</span></span>
                                            <br>
                                            {{guestComment.message}}
                                            <br>

                                            <div>
                                                <div v-for="traderComment in guestComment.replys" :key="traderComment.id">
                                                    <div class="media">
                                                        <div class="media-left">
                                                            <p class="image ">
                                                                <img :src="`/${trader.image}`" class="avatar-small">
                                                            </p>
                                                        </div>
                                                        <div class="media-content">
                                                            <div class="content">
                                                                <p>
                                                                    <strong> {{traderComment.author.name}}</strong>
                                                                    <br>
                                                                    <span><i class="far fa-clock"></i><span
                                                                            class="mx-2 is-capitalized">{{traderComment.createdAt | timeAgo}}</span></span>
                                                                    <br>
                                                                    {{traderComment.message}}
                                                                </p>

                                                            </div>

                                                        </div>
                                                        <div class="media-right">
                                                        </div>
                                                    </div>


                                                    <br>


                                                </div>

                                            </div>

                                            <div>


                                                <br>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <!--                           REVIEW START-->


                            <div>
                                <p class="has-text-warning">Only logged in Users can comment </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--user review section-->


    </div>
</template>

<script>

    import axios from "axios";
    import moment from "moment";

    export default {

        data() {
            return {

                loaded: false,

                trader: {},
                guest: {},
                comments: [],
                guestComments: [],
                traderComments: [],
            }
        },

        filters: {

            timeAgo(value) {
                return moment(value).fromNow();

            }
        },

        mounted() {
            this.viewTrader();
            this.viewGuests();
            this.viewComment();
        },

        methods: {
            viewTrader() {
                const code = this.$route.params.id;
                axios.get('/api/traders/' + code)
                    .then(({data}) => {
                        this.trader = data;
                        this.loaded = true;

                    })
                    .catch()
            },

            viewGuests() {
                const code = this.$route.params.id;
                axios.get(`/api/traders/${code}/guests/`)
                    .then(({data}) => {
                        this.guest = data;
                        this.loaded = true;
                    })
                    .catch()

            },

            viewComment() {
                const owner = this.$route.params.id;
                axios.get(`/api/comments/trader/${owner}`)
                    .then(({data}) => {
                        this.guestComments = data;
                        this.loaded = true;

                    })
                    .catch()
            },

        },


    }
</script>

<style lang="scss" scoped>



    hr {
        margin-top: 0;

        background-color: #c9d3e2;
        height: 1px;
    }

    .icon {
        height: 20px;
        width: 20px;
        margin-top: 3%;
        margin-left: 3%;
    }

    .content h6 {
        font-size: small;
        margin-bottom: 1em;
        color: #7a8190;

        font-weight: normal;
    }

    .star {
        margin-top: 5%;
        width: 40%;


    }

    .avatar{
          max-height: 200px;
          max-width: 200px;
          width: 200px;
          height: 200px;
          border-radius: 50%;


      }
    .avatar-small{
        max-height: 100px;
        max-width: 100px;
        width: 100px;
        height: 100px;
        border-radius: 50%;


    }


</style>
