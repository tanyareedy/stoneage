<template>
    <div v-if="loaded">


        <div class="container is-clearfix">


            <div class="section ">
                <h1 class="is-size-3 pb-3">Edit Trader Details</h1>


                <h2 v-if="message !== null" class="container has-background-success my-2 my-4 is-size-3">{{trader.name}}
                    {{message}} </h2>

                <div class="columns has-background-white px-3  py-3">


                    <div class="column is-8">

                        <!--                                    Step 1 - Personal Info-->
                        <div>
                            <h1 class="text-left mx-3 is-size-4 mb-5 ">Personal Info:</h1>
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label class=" is-size-6">Trader Name:</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <div class="control">
                                            <input v-model="trader.name" class="input shortForm" type="text"
                                                   placeholder="Trader Name">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label class="">Trade level</label>
                                </div>
                                <div class="field-body">
                                    <div class="field is-narrow">
                                        <div class="control">
                                            <div class="select is-fullwidth">
                                                <select v-model="trader.level">
                                                    <option disabled value="none">Please select one</option>
                                                    <option value="primary">Primary</option>
                                                    <option value="secondary">Secondary</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="field is-horizontal">
                                <div class="field-label">
                                    <label>Sex</label>
                                </div>
                                <div class="field-body">
                                    <div class="field is-narrow">
                                        <div class="control">
                                            <label class="radio">
                                                <input type="radio" value="male" name="member"
                                                       v-model="trader.sex">
                                                Male
                                            </label>
                                            <label class="radio">
                                                <input type="radio" value="female" name="member"
                                                       v-model="trader.sex">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label>Rating</label>
                                </div>
                                <div class="field-body">
                                    <div class="field is-narrow">
                                        <div class="control">
                                            <div class="select is-fullwidth">
                                                <select v-model="trader.rating">
                                                    <option disabled value="none">Please select one</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--                                    Step 2 - Statistcis-->
                        <div class="py-5">
                            <h1 class="text-left mx-3 is-size-4 mb-5 ">Statistcis:</h1>

                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label class="">Starting Price:</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <div class="control">
                                            <input v-model="trader.startingPrice" class="input shortForm"
                                                   type="text"
                                                   placeholder="Starting price">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label class="">Win rate:</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <div class="control">
                                            <input v-model="trader.winRate" class="input shortForm"
                                                   type="number"
                                                   placeholder="Win Rate">
                                            <p>Win Rate in percentage</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label>Weekly Trades:</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <div class="control">
                                            <input v-model="trader.weeklyTrades" class="input shortForm"
                                                   type="number"
                                                   placeholder="Number of Trades weekly">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label>Completed Trades:</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <div class="control">
                                            <input v-model="trader.completedTrades" class="input shortForm"
                                                   type="number"
                                                   placeholder="Total number of trades">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label>Total Clients:</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <div class="control">
                                            <input v-model="trader.totalClients" class="input shortForm"
                                                   type="number"
                                                   placeholder="Total number of Clients">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label>Response rate:</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <div class="control">
                                            <input v-model="trader.responseRate" class="input shortForm"
                                                   type="number"
                                                   placeholder="Total number of Clients">
                                            <br>
                                            <span>Response rate in Percentage</span>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--                                    Step 5 - Platforms-->
                        <div>
                            <h1 class="text-left mx-3 is-size-4 mb-5 ">Platforms:</h1>
                            <textarea class="textarea" v-model="trader.platForm"></textarea>

                        </div>


                    </div>

                    <div class="column is-4">
                        <div>
                            <h1 class="is-size-5">Trader Profile Image:</h1>


                            <div class="media-right">
                                <div class="image">
                                    <img class="profile py-3" :src="`/${trader.image}`">
                                </div>
                            </div>
                            <input
                                    type="file"
                                    @change="selectFile"
                                    ref="file"
                            />
                            <button @click="sendFile" class="button is-primary my-5">Upload image</button>
                        </div>

                        <div>
                            <h1 class="is-size-5  has-text-left">Select Trader Assets:</h1>
                            <p class="has-text-left">Select your preferred trading assets</p>
                            <hr>

                            <table class="table is-fullwidth">
                                <tr>
                                    <td>Crypto Currency:</td>
                                    <td>
                                        <label>
                                            <input v-model="trader.assets" value="Crypto Currency"
                                                   type="checkbox" checked="checked">
                                        </label>
                                    </td>
                                </tr>
                                <br>
                                <tr>
                                    <td>Forex:</td>
                                    <td>
                                        <label>
                                            <input v-model="trader.assets" value="Forex" type="checkbox"
                                                   checked="checked">
                                        </label>

                                    </td>
                                </tr>
                                <br>
                                <tr>
                                    <td>Binary Options:</td>
                                    <td>
                                        <label>
                                            <input v-model="trader.assets" value="Binary Options"
                                                   type="checkbox" checked="checked">
                                        </label>
                                    </td>
                                </tr>
                                <br>
                                <tr>
                                    <td>Stocks:</td>
                                    <td>
                                        <label>
                                            <input v-model="trader.assets" value="Stocks" type="checkbox"
                                                   checked="checked">
                                        </label>
                                    </td>

                                </tr>

                            </table>


                                <router-link class="button is-success has-text-white " :to="{name:'comments',params:{id:trader.code}}"
                                             ><i
                                        class="far fa-comment-dots"></i><span
                                        class="px-2">Add Reviews and Comments</span>
                                </router-link>



                                <router-link class="button is-success my-2" :to="{name:'users',params:{id:trader.code}}">
                                    <span class=" "><i class="fas fa-user-plus"></i>Add a New User</span>
                                </router-link>




                        </div>

                    </div>


                </div>
                <h2 v-if="message !== null" class="container has-background-success my-2 my-4 is-size-3">{{trader.name}}
                    {{message}} </h2>
                <button @click="updateTrader((trader.code))" class="button  is-large is-full is-primary">UPDATE TRADER
                </button>

                <button class="button has-background-grey is-large mx-5">
                    <router-link :to="{name:'viewTrader',params:{id:trader.code}}"
                                 class=" has-text-white is-pulled-left"><i class="far fa-eye"></i>
                        view Trader
                    </router-link>
                </button>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                file: '',
                message: null,
                loaded: false,
                trader: {},
                guest: {},
                form: {
                    name: '',
                    startingPrice: '',

                }
            }
        },

        mounted() {
            this.viewTrader();
            this.viewGuests();
        },

        computed: {
            progress() {
                return this.currentStepNumber / this.length * 100
            }
        },

        created(){
            if(localStorage.getItem('token') === null){
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


            selectFile() {
                this.file = this.$refs.file.files[0];

            },

            async sendFile() {
                const code = this.$route.params.id;
                const formData = new FormData();
                formData.append('file', this.file);


                try {
                    await axios.post(`/api/upload/trader/${code}`, formData);
                    this.message = "image has been uploaded ";

                    setTimeout(function () {
                        location = ''
                    }, 3000);


                } catch (err) {
                    // console.log(err);
                }

            },

            async updateTrader(code) {

                try {
                    await axios.put(`/api/traders/${code}`,
                        {
                            name: this.trader.name,

                            sex: this.trader.sex,
                            level: this.trader.level,
                            rating: this.trader.rating,
                            startingPrice: this.trader.startingPrice,
                            winRate: this.trader.winRate,
                            weeklyTrades: this.trader.weeklyTrades,
                            completedTrades: this.trader.completedTrades,
                            totalClients: this.trader.totalClients,
                            responseRate: this.trader.responseRate,
                            assets: this.trader.assets,
                            platForm: this.trader.platForm,

                        }
                    );
                    this.message = "Successfully Edited";
                    // alert('Trader updated');
                    setTimeout(function () {
                        location = ''
                    }, 3000);
                } catch (err) {
                    // console.log(err)
                }
            },

            goBack() {
                this.currentStepNumber--
            },

            goNext() {
                this.currentStepNumber++
            }


        },


    }

</script>

<style scoped>

    .shortForm {
        width: 70%
    }

</style>
