<template>
    <div class="container" id="users" v-if="loaded">
        <h1 class="is-size-3">{{trader.name}} Users</h1>
        <div class="is-pulled-right pt-4">
            <router-link :to="{name:'viewTrader',params:{id:trader.code}}"
                         class="button has-background-grey has-text-white is-pulled-right">Go back to
                <strong class="px-2">{{trader.name}}</strong> Profile
            </router-link>
        </div>
        <div>

            <h1 v-if="notification.success !== null" class=" has-background-success mx-5">{{notification.success}}</h1>
            <h1 v-if="notification.error !== null" class=" has-background-danger mx-5">{{notification.error}}</h1>
        </div>
        <div class="py-3">
            <div v-if="display.allUser" class="has-text-left has-background-white py-4 px-4 rounded-lg ">

                <hr>
                <table class="table is-fullwidth">
                    <tr>
                        <th>No.</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="(guest, id) in guest" :key="id">
                        <td class="is-size-5" :value="guest._id">{{id + 1}}.</td>
                        <td>{{guest.name}}</td>
                        <td>{{guest.email}}</td>
                        <td>
                            <span class="button has-text-danger mx-2" @click.prevent="deleteUser(guest.code)"><i
                                    class="fas fa-trash-alt"></i></span>
                            <span class="button has-text-success mx-2" @click.prevent="editGuest(guest.code)">
                                <i class="fas fa-user-edit"></i></span>
                            <span class="button has-text-grey mx-2" @click.prevent="addComment(guest.code)"><i
                                    class="far fa-comment-dots "></i></span>
                        </td>
                    </tr>


                </table>
                <button @click="displayOption" class="button is-primary "><i
                        class="fas fa-user-plus"></i>Add a new user
                </button>

            </div>
            <button class="button is-success is-large my-2">
                <router-link class="has-text-white" :to="{name:'comments',params:{id:trader.code}}"
                ><i
                        class="far fa-comment-dots"></i><span class="px-2">View and Reply Comments</span>
                </router-link>
            </button>


            <!--        All Users-->
            <!--             start   create a  user start-->

            <div v-if="display.createUser" class="has-background-white mt-5 mx-3 rounded-lg pt-3 px-3">
                <div>
                    <button @click="reloadPage" class="button is-pulled-right"><i
                            class="fas fa-arrow-left"></i> Go Back
                    </button>

                </div>
                <h1 class="is-size-4 has-text-left pl-4 font-weight-bold is-clearfix">Create a new User</h1>

                <!--                create a  user-->
                <div class="media px-5 py-5">

                    <figure class="media-left">
                        <p class="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/128x128.png">
                        </p>
                    </figure>
                    <div class="media-content pl-4">
                        <div class="field">

                            <label class="label has-text-left">Username:</label>
                            <div class="control">
                                <input v-model="user.name" class="input shortForm" type="text"
                                       placeholder="guest name">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label has-text-left">Email:</label>
                            <div class="control">
                                <input v-model="user.email" class="input shortForm" type="text"
                                       placeholder="guest name">
                            </div>

                        </div>

                        <button @click="newGuest" class="button is-success"><i
                                class="fas fa-user-plus"></i><span class="px-2">Create a user</span></button>
                        <br>

                    </div>
                </div>

            </div>
            <!--             end  create a  user end-->


            <!--                update a  user-->
            <div v-if="display.updateUser" class="has-background-white mt-5 mx-3 rounded-lg px-3 pt-3">
                <button @click="reloadPage" class="button is-pulled-right"><i
                        class="fas fa-arrow-left"></i> Go Back
                </button>
                <h1 class="is-size-4 has-text-left pl-4 font-weight-bold is-clearfix">Edit a user</h1>

                <h1 v-if="alertMessage !== null" class="has-background-success my-3 py-2 mx-5 container">
                    {{alertMessage}}</h1>
                <!--                update a  user-->
                <div class="media px-5 py-5">

                    <figure class="media-left">
                        <p class="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/128x128.png">
                        </p>
                    </figure>
                    <div class="media-content pl-4">
                        <div class="field">

                            <label class="label has-text-left">Username:</label>
                            <div class="control">
                                <input v-model="singleGuest.name" class="input shortForm" type="text"
                                       placeholder="guest name">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label has-text-left">Email:</label>
                            <div class="control">
                                <input v-model="singleGuest.email" class="input shortForm" type="text"
                                       placeholder="guest name">
                            </div>

                        </div>

                        <button @click="updateGuest" class="button is-primary"><i
                                class="fas fa-user-plus"></i><span class="px-2">update user</span></button>
                        <br>

                    </div>
                </div>

            </div>
            <!--               end  update a  user-->

            <!--                Add a comment-->
            <div v-if="display.createComment" class="has-background-white mt-5 mx-3 rounded-lg px-3 pt-3">
                <button @click="reloadPage" class="button is-pulled-right"><i
                        class="fas fa-arrow-left"></i> Go Back
                </button>
                <h1 class="is-clearfix is-size-5 is-bold">Create a Comment for Trader <strong>{{trader.name}}</strong>
                </h1>

                <h1 v-if="alertMessage !== null" class="has-background-success my-3 py-2 mx-5 container">
                    {{alertMessage}}</h1>

                <div class=" px-5 py-5">

                    <div>

                        <div>
                            <h1 class="is-size-1"> {{singleGuest.name}}</h1>


                            <p class="control">
                                <label class="label has-text-left pt-2">{{singleGuest.name}} is Commenting...:</label>
                                <textarea v-model="comment.message" class="textarea"
                                          placeholder="Add a comment..."></textarea>
                            </p>
                            <label class="label has-text-left pt-2">Date Created:</label>
                            <div class="control">
                                <Datetime input-class="input" class="shortForm" v-model="comment.createdAt"></Datetime>
                                <p>Date the Comment was made, this will be displayed publicly </p>
                            </div>

                            <button @click="saveComment" class="button is-danger">Post Comment</button>

                            <div class="field py-2">


                                <div class="control">
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <!--               Add a comment End-->


        </div>


    </div>

</template>

<script>
    import {Datetime} from 'vue-datetime';
    import axios from 'axios';
    import Chance from 'chance';
    import moment from "moment";

    const chance = new Chance;
    export default {
        components: {
            Datetime
        },
        data() {
            return {
                notification: {
                    success: null,
                    error: null,
                },
                alertMessage: null,
                display: {
                    allUser: true,
                    createUser: false,
                    updateUser: false,
                    createComment: false,
                },
                searchBox: null,
                guestId: null,
                loaded: false,
                trader: {},
                singleGuest: {},
                guest: {},
                isHidden: true,
                guestComments: [],
                comment: {

                    author: '',
                    message: chance.paragraph({sentences: 1}),
                    createdAt: '',
                },
                traderComments: [],
                TraderReply: {
                    message: '',
                },
                user: {
                    // commentId:'',
                    name: chance.name(),
                    email: `${chance.name()}@gmail.com`,
                    image: 'img/traders/user.png',
                },
                replyTo: null,
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

            reloadPage() {
                location.reload()
            },
            displayOption() {
                this.display.allUser = false;
                this.display.createUser = true;
                this.display.updateUser = false;
            },
            editGuest(id) {
                this.display.updateUser = true;
                this.display.allUser = false;
                axios.get(`/api/guests/${id}`)
                    .then(({data}) => {
                        this.singleGuest = data;
                        this.guestId = id;
                    })
                    .catch()
            },

            addComment(id) {
                this.display.createComment = true;
                this.display.allUser = false;
                axios.get(`/api/guests/${id}`)
                    .then(({data}) => {
                        this.singleGuest = data;
                        this.comment.author = this.singleGuest._id;
                        this.guestId = id;


                    })
                    .catch()

            },
            async updateGuest() {
                try {

                    await axios.put(`/api/guests/${this.guestId}`, {
                        name: this.singleGuest.name,
                        email: this.singleGuest.email,
                    });
                    this.alertMessage = 'updated user Details';


                } catch (e) {
                    this.message = e;
                }


            },
            viewTrader() {
                const code = this.$route.params.id;
                axios.get('/api/traders/' + code)
                    .then(({data}) => {
                        this.trader = data;
                        this.loaded = true;
                    })
                    .catch()
            },
            newGuest() {
                const code = this.$route.params.id;
                axios.post(`/api/traders/${code}/guests`, this.user)
                    .then(() => {
                        this.notification.success = 'Guest added';
                        window.location.reload()
                    })
                    .catch((e) => {
                        this.notification.error = e;
                    });

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
            saveComment() {
                const owner = this.$route.params.id;
                axios.post(`/api/comments/trader/${owner}`, this.comment)
                    .then(() => {
                        this.notification.success = 'comment added';
                        window.location.reload()
                    })
                    .catch((e) => {
                        this.notification.error = e;
                    });

            },
            updateComment() {
                const owner = this.$route.params.id;
                axios.put(`/api/comments/trader/${owner}`, {
                    message: this.message,
                    createdAt: this.createdAt
                })
                    .then(() => {
                        this.notification.success = 'comment updated';
                        window.location.reload()
                    })
                    .catch((e) => {
                        this.notification.error = e;

                    });

            },

            saveReply() {
                const owner = this.$route.params.id;
                axios.post(`/api/replys/trader/${owner}`, {
                    author: this.trader._id,
                    commentId: this.replyTo,
                    message: this.TraderReply.message,
                    owner: this.trader._id
                })
                    .then(() => {
                        alert('comment added');
                        window.location.reload()
                    })
                    .catch();

            },
            reply(id) {
                if (this.replyTo) {
                    this.replyTo = null

                } else {
                    this.replyTo = id
                }


            },

            async deleteUser(code) {
                try {
                    await axios.delete(`/api/guests/${code}`,)

                    location.reload();


                } catch (err) {
                    this.message = err;
                }


            },


        },

    }
</script>

<style scoped>
    @import "~vue-datetime/dist/vue-datetime.min.css";

    #users {
        max-height: 100vh;
    }

    .shortForm {
        width: 50%;
    }
    .input-length{
        width: 300px;
    }

</style>
