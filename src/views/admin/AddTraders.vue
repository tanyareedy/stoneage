<template>
    <div id="newTrader">
        <div class="container">


            <div v-if="currentStepNumber === 3 || information === '1' " class="mx-5 mt-5 ">
                <p class="has-background-success mx-5 notify py-3">When you click the <span class="is-italic">"CREATE NEW TRADER" </span>
                    button,
                    you will be directed to "All traders page", <br>
                    the First trader <strong>{{form.name}}</strong> is the most recent trader you just created. <br>
                    click Edit on the next page to add an image for <strong>{{form.name}}</strong>
                </p>
            </div>
            <div class="section">
                <p v-if="message !== null" class="has-background-success">
                    {{message}}
                </p>
                <div class="progress-bar">
                    <div :style="`width: ${progress}%;`"></div>
                </div>
                <div class="columns   has-background-white">


                    <div class="column">
                        <div class=" px-5   rounded-lg rounded-lg">

                            <div class="pb-3 is-clearfix">


                                <!--                                    Step 1 - Personal Info-->
                                <template v-if="currentStepNumber === 1">
                                    <div>

                                        <h1 class="has-text-centered mx-3 is-size-4 is-size-7-mobile mb-5 ">Step 1 - Personal Info</h1>
                                        <div class="field is-horizontal">
                                            <div class="field-label is-normal">
                                                <label class="is-size-6">Trader Name:</label>
                                            </div>
                                            <div class="field-body">
                                                <div class="field">
                                                    <div class="control">
                                                        <input v-model="form.name" class="input shortForm"
                                                               type="text"
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
                                                            <select v-model="form.level">
                                                                <option disabled value="none">Please select one
                                                                </option>
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
                                                                   v-model="form.sex">
                                                            Male
                                                        </label>
                                                        <label class="radio">
                                                            <input type="radio" value="female" name="member"
                                                                   v-model="form.sex">
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
                                                            <select v-model="form.rating">
                                                                <option disabled value="none">Please select one
                                                                </option>
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
                                </template>
                                <!--                                    Step 2 - Statistcis-->
                                <template v-if="currentStepNumber === 2">
                                    <div>
                                        <div class="py-5">
                                            <h1 class="text-left mx-3 is-size-4 mb-5 "> Step 2 - Statistcis</h1>

                                            <div class="field is-horizontal">
                                                <div class="field-label is-normal">
                                                    <label class="">Starting Price:</label>
                                                </div>
                                                <div class="field-body">
                                                    <div class="field">
                                                        <div class="control">
                                                            <input v-model="form.startingPrice"
                                                                   class="input shortForm"
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
                                                            <input v-model="form.winRate" class="input shortForm"
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
                                                            <input v-model="form.weeklyTrades"
                                                                   class="input shortForm"
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
                                                            <input v-model="form.completedTrades"
                                                                   class="input shortForm"
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
                                                            <input v-model="form.totalClients"
                                                                   class="input shortForm"
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
                                                            <input v-model="form.responseRate"
                                                                   class="input shortForm"
                                                                   type="number"
                                                                   placeholder="Total number of Clients">
                                                            <br>
                                                            <span>Response rate in Percentage</span>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 class="is-size-5  has-text-left">Step 4 - Select Trader Assets</h1>
                                          <p>Check the assets you support</p>
                                            <hr>

                                            <table class="table is-fullwidth">
                                                <tr>
                                                    <td>Crypto Currency:</td>
                                                    <td>
                                                        <label>
                                                            <input v-model="form.assets" value="Crypto Currency"
                                                                   type="checkbox" checked="checked">

                                                        </label>


                                                    </td>
                                                </tr>
                                                <br>
                                                <tr>
                                                    <td>Forex:</td>
                                                    <td>
                                                        <label>
                                                            <input v-model="form.assets" value="Forex"
                                                                   type="checkbox"
                                                                   checked="checked">

                                                        </label>

                                                    </td>
                                                </tr>
                                                <br>
                                                <tr>
                                                    <td>Binary Options:</td>
                                                    <td>
                                                        <label>
                                                            <input v-model="form.assets" value="Binary Options"
                                                                   type="checkbox" checked="checked">

                                                        </label>

                                                    </td>

                                                </tr>
                                                <br>
                                                <tr>
                                                    <td>Stocks:</td>
                                                    <td>
                                                        <label>
                                                            <input v-model="form.assets" value="Stocks"
                                                                   type="checkbox"
                                                                   checked="checked">
                                                        </label>
                                                    </td>

                                                </tr>

                                            </table>
                                        </div>
                                    </div>
                                </template>

                                <template v-if="currentStepNumber === 3">
                                    <!--                                    Step 5 - Platforms-->
                                    <div>
                                        <h1 class="text-left mx-3 is-size-4 mb-5 "> Step 5 - Platforms</h1>
                                        <p>What platforms do you trade on ?</p>

                                        <textarea class="textarea" v-model="form.platForm"
                                        ></textarea>
                                    </div>


                                </template>


                                <div class="level mx-5 mt-5">
                                    <div class="level-left">
                                        <button
                                                v-if="currentStepNumber > 1"
                                                @click="goBack"
                                                class="button is-dark">Back
                                        </button>
                                    </div>
                                    <div class="level-right">
                                        <button
                                                v-if="currentStepNumber < 3"
                                                @click="goNext"
                                                class="button is-dark">Next
                                        </button>
                                    </div>
                                </div>
                                <div class="pl-5 py-5">
                                    <button
                                            @click="newTrader"
                                            class="button is-primary has-text-left is-pulled-left">
                                        <i class="fas fa-user-plus"></i><span class="mx-3"> Create New Trader</span>
                                    </button>


                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
<!--        {{traderCode.data.createdTraders.name}}-->



    </div>
</template>

<script>
    import axios from 'axios';
    import Chance from 'chance';

    const chance = new Chance;

    export default {


        data() {
            return {

                notify: '',
                currentStepNumber: 1,
                length: 3,
                information: null,
                traderCode: {},
                page:{},
                message: null,

                bioText: `The trader bio is a short descriptive sentence that tells the users a little about you. This message will not be added to Trader information`,

                form: {
                    image: 'img/traders/user.png',
                    name: chance.name(),
                    sex: ['male', 'female'][chance.integer({min: 0, max: 1})],
                    level: ['primary', 'secondary'][chance.integer({min: 0, max: 1})],
                    rating: chance.integer({min: 3, max: 5}),
                    startingPrice: chance.integer({min: 1500, max: 9500}),
                    winRate: chance.integer({min: 70, max: 100}),
                    weeklyTrades: chance.integer({min: 50, max: 300}),
                    completedTrades: chance.integer({min: 300, max: 1000}),
                    totalClients: chance.integer({min: 70, max: 92}),
                    responseRate: chance.integer({min: 50, max: 100}),
                    assets: ['Crypto Currency', 'Forex', 'Binary Options', 'Stocks'],
                    platForm: 'All supported platforms',

                }
            }
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

            info() {
                this.information = '1'
            },




            async newTrader() {
                function navigate(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                try {
                    const data = await axios.post('/api/traders', this.form);
                    this.traderCode = data;


                    this.message = 'Trader Created Successfully ';
                    await navigate(2000);
                    return this.$router.push({name: 'editTrader', params:{id:this.traderCode.data.createdTraders.code}});

                } catch (err) {
                    this.message = err;
                }


            },

            goBack() {
                this.currentStepNumber--
            },

            goNext() {
                this.currentStepNumber++
            },


        }
    }
</script>

<style scoped>

    #newTrader{
        max-height: 100vh;
    }



    .shortForm {
        width: 80%;
    }

    .profile {

        height: 300px;
        width: 300px;
    }

    .progress-bar {
        width: 100%;
        border-radius: 9999px;
        position: relative;
        margin-top: 1rem;
        margin-bottom: 1rem;
        height: 12px;
        background: #c6c6c6
    }

    .progress-bar > div {
        border-radius: 9999px;
        position: absolute;
        height: 100%;
        background-color: #fe4d42;
        -webkit-transition: all .3s ease;
        transition: all .3s ease
    }


    /*check Box Styling*/


</style>
