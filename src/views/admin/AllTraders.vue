<template>
    <div class="body">

        <h1 v-if="message !== null" class="has-background-success py-2">{{message}}</h1>
        <div id="traders" class="section">
            <div class="container">
                <br>

                <div class="field is-grouped">


                    <div class="field has-addons">
                        <div class="control">
                            <input v-model="searchBox" class="input  input-length" type="text"
                                   placeholder="Find a trader">
                        </div>
                    </div>


                    <div class="control">
                        <router-link class="button is-success  ml-2 " :to="{name:'addTrader'}">
                            <i class="fas fa-user-plus"></i> New trader
                        </router-link>
                    </div>
                </div>

                <div class="content-wrapper">
                    <!-- Displays if myData is not set.
                    Options
                    speed: Number - How many seconds between pulses of the loader.
                    height / width: Number - size of the loader contents.
                    primaryColor: String - The color of the elements.
                    secondaryColor: String - The color of the pulser.
                    animate: Boolean - Whether or not to display the pulser.
                    -->

                    <div class="my-real-content">
                        <table class="table is-fullwidth">
                            <tr class="table-menu">
                                <th>No.</th>
                                <th>Trader Name</th>
                                <th>Starting Price</th>
                                <th>Rating</th>
                                <th>Type</th>
                                <th>Win Rate</th>
                                <th>Clients</th>

                                <th>Action</th>
                            </tr>

                            <template v-for="(trader, id) in traders">
                                <tr :key="id">
                                    <td class="is-size-5">{{id + 1}}.</td>
                                    <td class="is-size-5">{{trader.name}}</td>
                                    <td><span class="is-size-5">${{trader.startingPrice}}</span></td>
                                    <td><img class="rating" :src="`/img/icons/rating/${trader.rating}-star.png`"></td>
                                    <td><span class="is-capitalized">{{trader.level}}</span></td>
                                    <td class="is-size-5 has-text-centered ">{{trader.winRate}}%</td>
                                    <td class="is-size-5 has-text-centered">{{trader.totalClients}}</td>
                                    <td>
                                        <div>
                                            <router-link :to="{name:'viewTrader',params:{id:trader.code}}"
                                                         class="button has-background-success is-pulled-left"><i
                                                    class="far fa-eye"></i>
                                            </router-link>


                                            <button @click="deleteTrader(trader.code)" class="button is-danger"><i
                                                    class="far fa-trash-alt"></i></button>
                                        </div>

                                    </td>
                                </tr>


                            </template>


                        </table>
                        <p></p>
                    </div>
                    <ContentLoader v-if="!loaded"
                                        primaryColor="#D2D2D2"
                                   width=570
                                   height=500
                    >
                        <rect x="0" y="2" rx="3" ry="3" width="155" height="12" />
                        <rect x="191" y="2" rx="3" ry="3" width="58" height="12" />
                        <rect x="256" y="2" rx="3" ry="3" width="67" height="12" />
                        <rect x="339" y="2" rx="3" ry="3" width="67" height="12" />
                        <rect x="419" y="2" rx="3" ry="3" width="40" height="12" />
                        <rect x="516" y="-1" rx="100" ry="100" width="20" height="20" />
                        <rect x="464" y="3" rx="3" ry="3" width="40" height="12" />
                        <rect x="542" y="0" rx="100" ry="100" width="20" height="20" />
                        <rect x="0" y="35" rx="3" ry="3" width="155" height="12" />
                        <rect x="191" y="31" rx="3" ry="3" width="58" height="12" />
                        <rect x="256" y="31" rx="3" ry="3" width="67" height="12" />
                        <rect x="339" y="31" rx="3" ry="3" width="67" height="12" />
                        <rect x="419" y="31" rx="3" ry="3" width="40" height="12" />
                        <rect x="516" y="28" rx="100" ry="100" width="20" height="20" />
                        <rect x="464" y="32" rx="3" ry="3" width="40" height="12" />
                        <rect x="542" y="29" rx="100" ry="100" width="20" height="20" />
                        <rect x="-1" y="61" rx="3" ry="3" width="155" height="12" />
                        <rect x="190" y="61" rx="3" ry="3" width="58" height="12" />
                        <rect x="255" y="61" rx="3" ry="3" width="67" height="12" />
                        <rect x="338" y="61" rx="3" ry="3" width="67" height="12" />
                        <rect x="418" y="61" rx="3" ry="3" width="40" height="12" />
                        <rect x="515" y="58" rx="100" ry="100" width="20" height="20" />
                        <rect x="463" y="62" rx="3" ry="3" width="40" height="12" />
                        <rect x="541" y="59" rx="100" ry="100" width="20" height="20" />
                        <rect x="2" y="91" rx="3" ry="3" width="155" height="12" />
                        <rect x="193" y="91" rx="3" ry="3" width="58" height="12" />
                        <rect x="258" y="91" rx="3" ry="3" width="67" height="12" />
                        <rect x="341" y="91" rx="3" ry="3" width="67" height="12" />
                        <rect x="421" y="91" rx="3" ry="3" width="40" height="12" />
                        <rect x="518" y="88" rx="100" ry="100" width="20" height="20" />
                        <rect x="466" y="92" rx="3" ry="3" width="40" height="12" />
                        <rect x="544" y="89" rx="100" ry="100" width="20" height="20" />
                    </ContentLoader>


                </div>


            </div>
        </div>


    </div>
</template>

<script>
    import {ContentLoader} from 'vue-content-loader';
    import axios from "axios";

    export default {
        components: {
            ContentLoader
        },
        data() {
            return {
                myData: null,
                message: null,
                loaded: false,
                searchBox: null,
                searchList: [],
                traders: [],


            }
        },

        watch: {
            searchBox() {
                if (this.searchBox) {
                    this.searchTrader()
                } else {
                    this.fetchTraders()
                }
            },
        },
        mounted() {

            setTimeout(() => {
                this.fetchTraders()
            }, 5000);

        },

        created() {
            if (localStorage.getItem('token') === null) {
                this.$router.push('/login')
            }

        },

        methods: {

            fetchTraders() {

                axios.get('/api/traders')
                    .then(({data}) => {
                        this.traders = data;
                        this.loaded = true;

                    })
                    .catch()

            },


            deleteTrader(code) {
                axios.delete('/api/traders/' + code)
                    .then(() => {
                        window.location.reload();
                        this.message = 'Trader Deleted Successfully';

                        // alert('trader deleted');

                    })
            },

            viewTrader(code) {
                axios.get('/api/traders/' + code)
                    .then(() => {


                    })
                    .catch()
            },
            searchTrader() {
                axios.get(`/api/traders/?search=${this.searchBox}`)
                    .then(({data}) => {
                        this.traders = data;
                        this.loaded = true;

                    })
                    .catch()
            }
        },
    }
</script>

<style scoped>

    #traders {

        height: 100vh;
    }

    th {
        color: white;
    }

    .rating {
        width: 70px;
    }

    th {
        margin-top: 20%;
        background-color: #21161c;
        padding: 10px 20px 10px 20px;
        color: #f5fffd;
    }

    .shortForm {
        width: 200%;
    }

    a {
        color: white;
    }


    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {

        .input-length {
            width: 290px;
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {

        .input-length {
            width: 400px;
        }

    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {


        .input-length {
            width: 500px;
        }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {

        .input-length {
            width: 500px;
        }

    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {

        .input-length {
            width: 500px;
        }


    }

</style>
