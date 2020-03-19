<template>
    <div>
        <div class="section">
            <div>


                <div class="columns">

                    <div class="column is-6 has-background-white">

                        <div class="py-5 is-size-5" v-if="notification.message !== null">
                            <p>{{notification.message}}</p>

                        </div>



                        <!--                main form-->
                        <div v-if="notification.message === null" class="py-5 rounded-lg px-2 px-sm-5 px-lg-5">
                            <h3 class="is-size-3 has-text-left pb-5">Leave a Message</h3>

                            <div class="field">
                                <label class="label has-text-left">Tell Us your name:</label>
                                <div class="control">
                                    <input v-model.trim="form.name"
                                           @blur="$v.form.name.$touch"
                                           :class="{
                                            'is-success':!$v.form.name.$invalid,
                                            'is-danger':$v.form.name.$error,
                                           }"
                                           class="input shortForm"
                                           type="text"
                                           placeholder="Your full name"
                                    >
                                </div>
                                <p class="has-text-danger has-text-left" v-if="$v.form.name.$error">Please tell us
                                    your name</p>
                                <p class="has-text-danger has-text-left" v-if="!$v.form.name.minLength">Field must have
                                    at least {{
                                    $v.form.name.$params.minLength.min }} characters.</p>
                            </div>
                            <div class="field">
                                <label class="label has-text-left">Your Email</label>
                                <div class="control">
                                    <input v-model="form.email"
                                           @blur="$v.form.email.$touch"
                                           class="input shortForm"
                                           :class="{
                                            'is-success':!$v.form.email.$invalid,
                                            'is-danger':$v.form.email.$error,
                                           }"
                                           type="email"
                                           placeholder="youremail@domain.com">
                                </div>
                                <p class="has-text-danger has-text-left" v-if="$v.form.email.$error">you email is
                                    required</p>
                                <p class="has-text-danger has-text-left" v-if="!$v.form.email.email">Please type a valid
                                    email </p>
                            </div>
                            <div class="field">
                                <label class="label has-text-left">Purpose</label>
                                <div class="control">
                                    <div class="select">
                                        <select v-model="form.purpose">
                                            <option disabled value="none">Please select one</option>

                                            <option>General Enquiry</option>
                                            <option>Report an issue</option>
                                            <option>Something else</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div v-if="form.purpose === 'Report an issue'" class="field">
                                <label class="label has-text-left mb-3">Do you have an Account?</label>
                                <div class="control">
                                    <label class="radio">
                                        Yes
                                        <input type="radio" id="yes" value="yes" v-model="form.member" name="member">

                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="radio">
                                        No
                                        <input type="radio" id="no" value="no" v-model="form.member" name="member">
                                        <span class="checkmark"></span>

                                    </label>
                                </div>
                            </div>

                            <div v-if="form.member === 'yes'" class="field">
                                <label class="label has-text-left">Your username:</label>
                                <div class="control">
                                    <input v-model.trim="form.username" class="input shortForm" type="text"
                                           placeholder="Your name">
                                </div>
                            </div>


                            <div class="field">
                                <label class="label has-text-left">Question:</label>
                                <div class="control">

                                     <textarea v-model.trim="$v.form.questions.$model"
                                               :class="{
                                         'is-success':!$v.form.questions.$invalid,
                                         'is-danger':$v.form.questions.$error,
                                               }"
                                               class="textarea shortForm"
                                               placeholder="Explain how we can help you"></textarea>
                                </div>
                            </div>
                            <button @click="processForm" value="Send Form"
                                    class="button is-primary is-large">
                                Send message
                            </button>
                            <br>
                            <br>
<!--                            <button @click="validForm" class="button is is-large is-danger">text</button>-->

                        </div>


                    </div>
                    <div class="column is-6">
                        <div class="has-text-left">
                            <h3 class="is-size-3 is-size-4-touch font-weight-bold">
                                Contact Details
                            </h3>
                            <ul class="is-size-4">
                                <li><i class="fas fa-phone-alt"></i> Phone Number: {{phone}}</li>
                                <li><i class="fas fa-envelope"></i> Email: {{emailAddress}}</li>
                                <li><i class="fas fa-building"></i> Address: {{location}}</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {required, minLength, email} from 'vuelidate/lib/validators'
    import data from "../../db/main_data";


    export default {
        data() {
            return {
                phone: data.global.telephone,
                emailAddress: `contact@${data.global.domain}`,
                location: data.global.address,

                notification: {
                    message: null,

                },

                form: {
                    name: null,
                    userEmail: null,
                    username: '',
                    member: ['yes', 'no'],
                    purpose: 'none',
                    questions: null,

                }

            }
        },

        validations: {
            form: {
                name: {
                    required,
                    minLength: minLength(2)

                },
                email: {
                    required,
                    email
                },


                purpose: {
                    required
                },


                questions: {
                    required
                }

            }

        },




      /*  watch:{

           'form.questions'() {
                if (this.form.name === null || this.form.email === null || this.form.questions)  {
                    console.log('empty form')
                }else{
                    console.log('hurray')

                }
            }
        },*/

        methods: {


            async processForm() {
                const  {data} = await axios.post('/api/mailer', this.form);
                try {

                    // this.notification.success = 'Message delivered, we will get back to you shortly'
                    this.notification.message = data.msg;

                } catch {
                    this.notification.message = data.msg;

                }


            },


        },

    }
</script>


<style scoped>

    /* The container */
    .radio {

        padding-left: 35px;
        padding-right: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    .radio input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
    }

    /* On mouse-over, add a grey background color */
    .radio:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .radio input:checked ~ .checkmark {
        background-color: #2196F3;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .radio input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .radio .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }


    li {
        padding-top: 5%;
        padding-bottom: 5%;
    }

    .label {
        font-weight: normal;
    }


    /*medeia queries*/
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        .shortForm {
            width: 100%;
        }


    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {

    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        .shortForm {
            width: 90%;

        }

    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        .shortForm {
            width: 80%;
        }


    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        .shortForm {
            width: 60%;
        }


    }


</style>
