<template>
    <div class="" v-if="loaded">
        <div class="container">
            <h1 class="is-size-4 py-2"> {{trader.name}} Profile</h1>
            <h1 v-if="notification.success !== null" class="has-background-success py-2">{{notification}}</h1>
            <h1 v-if="notification.error !== null" class="has-background-danger py-2">{{notification}}</h1>


            <div class="columns">
                <div class="column is-9 pt-5  ">
                    <div class="has-background-white px-3  py-4 rounded-lg rounded-lg  mb-3">
                        <h1 class="text-left is-size-4 has-text-weight-bold">Details</h1>
                        <hr>
                        <div class="pb-3">
                            <table class="table  is-striped is-hoverable is-fullwidth">

                                <tr>
                                    <td>Level:</td>
                                    <td class="is-size-5 is-capitalized">{{trader.level}}</td>
                                </tr>
                                <tr>
                                    <td>Starting Pricing:</td>
                                    <td class="is-size-5">${{trader.startingPrice}}</td>
                                </tr>
                                <tr>
                                    <td>Win Rate:</td>
                                    <td class="is-size-5">{{trader.winRate}}</td>
                                </tr>
                                <tr>
                                    <td>Trades / Week:</td>
                                    <td class="is-size-5">{{trader.weeklyTrades}}</td>
                                </tr>
                                <tr>
                                    <td>Completed Trades:</td>
                                    <td class="is-size-5">{{trader.completedTrades}}</td>
                                </tr>
                                <tr>
                                    <td>Number of clients:</td>
                                    <td class="is-size-5">{{trader.totalClients}}</td>
                                </tr>
                                <tr>
                                    <td>Response rate:</td>
                                    <td class="is-size-5">{{trader.responseRate}}</td>
                                </tr>
                            </table>


                        </div>

                        <br>
                        <br>
                        <br>

                    </div>
                    <div class="has-text-left px-3 py-4 has-background-white rounded-lg">

                        <router-link :to="{name:'users',params:{id:trader.code}}">
                            <span class="button is-white  is-pulled-right has-text-success underline"><i
                                    class="far fa-edit"></i>Edit Users</span>
                        </router-link>

                        <div class="is-clearfix"><h1 class="is-size-4 font-weight-bold"> All Users</h1></div>
                        <hr>


                        <table class="table is-fullwidth">
                            <tr>
                                <th>No.</th>
                                <th>Username</th>
                                <th>Email</th>

                            </tr>
                            <tr v-for="(guest, id) in guest" :key="id">
                                <td class="is-size-5" :value="guest._id">{{id + 1}}.</td>
                                <td>{{guest.name}}</td>
                                <td>{{guest.email}}</td>
                            </tr>
                        </table>
                    </div>
                </div>


                <div class="column is-2-desktop-only mt-3 mr-md-5 ">
                    <div class="has-background-white my-3 py-3 rounded-lg px-3">

                        <figure class="media-left">
                            <p class="image">
                                <img :src="`/${trader.image}`" class="avatar">

                            </p>
                        </figure>
                        <div class="has-text-left py-4">
                            <h1 class="is-size-2 is-capitalized">{{trader.name}}</h1>
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
                        <h1 class="is-size-5 has-text-weight-semibold has-text-left">Action</h1>
                        <hr>

                        <button class="button is-primary my-2">
                            <router-link :to="{name:'editTrader',params:{id:trader.code}}">
                                <i class="fas fa-edit"></i> Edit Trader
                            </router-link>
                        </button>
                        <br>
                        <button class="button is-success my-2">
                            <router-link :to="{name:'users',params:{id:trader.code}}">
                                <span class=" "><i class="fas fa-user-plus"></i>Add User</span>
                            </router-link>

                        </button>
                        <br>
                        <button @click="deleteTrader(trader.code)" class="button is-danger"><i
                                class="far fa-trash-alt"></i><span class="mx-2">Delete Trader</span></button>
                        <br>

                        <!--                        <button @click="delete(id)" class="button">assign code</button>-->
                        <button class="button has-background-grey my-2">
                            <router-link :to="{name:'comments',params:{id:trader.code}}"
                            ><i
                                    class="far fa-comment-dots"></i><span class="px-2">View  and Reply Comments</span>
                            </router-link>
                        </button>
                    </div>

                </div>
            </div>
            <br>

        </div>


        <!--user review section-->
        <div class="section">
            <div class="container">
                <div class="columns custom-columns">
                    <div class="column  is-12 has-background-white rounded-lg">

                        <h1 class="is-size-4 my-3">
                            {{trader.name}} Review
                        </h1>
                        <div>
                            <!--                           REVIEW START-->

                            <template v-for="(guestComment, id) in guestComments">

                                <div :key="id">
                                    <div class="media">
                                        <div class="media-left">
                                            <p class="image ">
                                                <img src="/img/traders/guest.png" class="avatar-small">
                                            </p>
                                        </div>
                                        <div class="media-content">
                                            <div class="content">


                                                <template v-if="guestComment.author">
                                                    <div>
                                                        <h1 class="is-size-6">{{guestComment.author.name}}</h1>

                                                        <span><i class="far fa-clock"></i><span
                                                                class="mx-2 is-capitalized">{{guestComment.author.createdAt | timeAgo }}</span></span>
                                                        <br>
                                                        {{guestComment.message}}
                                                        <br>

                                                    </div>

                                                </template>


                                                <div class="">
                                                    <template v-for="(traderComment, id) in guestComment.replys">

                                                        <div :key="id">
                                                            <div class="media">
                                                                <div class="media-left">
                                                                    <p class="image">
                                                                        <img :src="`/${trader.image}`"
                                                                             class="avatar-small">
                                                                    </p>
                                                                </div>
                                                                <div class="media-content">
                                                                    <div class="content">
                                                                        <p>
                                                                            <strong>
                                                                                {{traderComment.author.name}}</strong>
                                                                            <br>
                                                                            <span><i class="far fa-clock"></i><span
                                                                                    class="mx-2 is-capitalized">{{traderComment.author.createdAt | timeAgo}}</span></span>
                                                                            <br>
                                                                            {{traderComment.message}}
                                                                        </p>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <br>
                                                        </div>
                                                    </template>

                                                </div>

                                                <div>


                                                    <br>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </template>

                            <!--                           REVIEW START-->


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

                notification: {
                    success: null,
                    error: null
                },
                loaded: false,

                trader: {},
                guest: {},

                guestComments: [],

                guestCode: '',
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

        created() {
            if (localStorage.getItem('token') === null) {
                this.$router.push('/login')
            }

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

            async deleteTrader(code) {
                function navigate(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                try {
                    await axios.delete('/api/traders/' + code)
                    await navigate(500);

                    return this.$router.push({name: 'allTraders',});
                } catch (err) {
                    this.message = err;
                }

            },


            async deleteUser(code) {
                try {
                    await axios.delete(`/api/guests/${code}`,)
                    location.reload();

                } catch (err) {
                    this.message = err;
                }
            }

        },


    }
</script>

<style scoped>


    a {
        color: #ffffff;
        /*background-color: #00d0b2;*/
    }

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

    .clearfix {
        overflow: auto;
        /*zoom: 1;*/
    }

    @media (max-width: 767px) {
        .custom-columns {
            flex-direction: column-reverse;
            display: flex;
        }
    }

    .avatar {
        max-height: 200px;
        max-width: 200px;
        width: 200px;
        height: 200px;
        border-radius: 50%;


    }

    .avatar-small {
        max-height: 100px;
        max-width: 100px;
        width: 100px;
        height: 100px;
        border-radius: 50%;


    }


    /*medeia queries*/
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        #target {
            height: 20px; /* You must set a specified height */
            background-color: #006bd0;
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        #target {
            height: 20px; /* You must set a specified height */
            background-color: #0fd061;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        #target {
            height: 20px; /* You must set a specified height */
            background-color: #d0a10a;
        }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        #target {
            height: 20px; /* You must set a specified height */
            background-color: #d0090e;
        }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        #target {
            height: 20px; /* You must set a specified height */
            background-color: #cf00d0;
        }

    }


</style>
