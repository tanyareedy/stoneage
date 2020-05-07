<template>
    <div id="commentPage" v-if="loaded">

        <div class="py-4 px-4">
            <div class="is-pulled-right">
                <router-link :to="{name:'viewTrader',params:{id:trader.code}}" class="button is-pulled-right">Go back to
                    <strong class="px-2">{{trader.name}}</strong> Profile
                </router-link>
            </div>
            <h1 class="is-size-3 is-clearfix"> {{trader.name}} reviews</h1>
        </div>
        <div>

            <h1 v-if="notification.success !== null" class=" has-background-success mx-5">{{notification.success}}</h1>
            <h1 v-if="notification.error !== null" class=" has-background-danger mx-5">{{notification.error}}</h1>
        </div>

        <div class="container">
            <div class="section">
                <div v-for="(guestComment, id) in guestComments" :key="id">

                    <!--                    guest commnet start-->
                    <div class="media">
                        <div class="media-left">
                            <p class="image is-64x64">
                                <img src="/img/traders/guest.png">
                            </p>
                        </div>
                        <div class="media-content">

                            <div class="content">
                                <h1 class="is-size-5">{{guestComment.author.name}}</h1>
                                <span><i class="far fa-clock"></i><span
                                        class="mx-2 is-capitalized">{{guestComment.createdAt | timeAgo }}</span></span>
                                <br>
                                {{guestComment.message}}
                                <br>
                                <!--                    guest commnet END-->

                                <!--                            START   guest commnent actions-->
                                <div class="my-3 is-size-6">
                                    <a href="#" @click.prevent="reply(guestComment._id)"
                                       class="rounded-pill has-text-dark  is-outlined mx-2">Reply me</a>
                                    <a href="#" @click.prevent="deleteComment(guestComment.code)"
                                       class="rounded-pill  is-outlined  mx-2">Delete</a>
                                    <a href="#" @click.prevent="editComment(guestComment)"
                                       class="rounded-pill  has-text-dark is-outlined px-4 ">Edit </a>
                                </div>
                                <!--                             END  guest commnent actions-->

                                <!--                                 Start comment Reply-->
                                <div class="">
                                    <div v-for="traderComment in guestComment.replys" :key="traderComment.id">
                                        <div class="media">
                                            <div class="media-left">
                                                <p class="image "><img :src="`/${trader.image}`" class="avatar-small"></p>
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
                                                    <div class=" is-size-6">
                                                        <a href="#" @click.prevent="deleteReply(traderComment._id)"
                                                           class="rounded-pill  is-outlined  mx-2">Delete</a>
                                                        <a href="#" @click.prevent="editReply(traderComment )"
                                                           class="rounded-pill  has-text-dark is-outlined px-4 ">Edit</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br>
                                    </div>
                                </div>
                                <!--                                 End comment Reply-->


                                <!--                           start Edit comment -->
                                <div v-if="updateUserComment.code === guestComment.code">
                                    <div class="control">
                                        <strong>Editing {{guestComment.author.name}}....</strong>
                                        <textarea v-model="updateUserComment.message"
                                                  class="textarea shortForm"></textarea>
                                        <div class="control pt-2">
                                            <strong> Edit Comment Date</strong>
                                            <Datetime input-class="input" class="shortForm"
                                                      v-model="updateUserComment.createdAt"></Datetime>

                                        </div>
                                    </div>
                                    <div class="my-3 is-size-6 is-pulled-right"><span
                                            @click="updateComment(guestComment.author._id)"
                                            class=" button hand    rounded-pill is-primary is-outlined ">Update Comment</span>
                                    </div>

                                    <br>
                                </div>
                                <!--                          end   EDIT comment -->

                                <!--                           start reply comment -->
                                <div v-if="replyTo === guestComment._id">

                                    <div class="control">
                                        <strong>Replying {{guestComment.author.name}}..... </strong>

                                        <textarea v-model="TraderReply.message" class="textarea shortForm"></textarea>
                                    </div>
                                    <div class="control pt-2">
                                        <strong> Reply Date</strong>
                                        <Datetime input-class="input" class="shortForm"
                                                  v-model="TraderReply.createdAt"></Datetime>

                                    </div>

                                    <div class="my-3 is-size-6 is-pulled-right"><span @click="saveReply"
                                                                                      class=" button hand    rounded-pill is-success is-outlined ">Reply Trader</span>
                                    </div>

                                    <br>
                                </div>
                                <!--                          end   reply comment -->
                                <!--                           start Edit REPLY

                                 -->
                                <div v-if="updateTraderReply.code !== null">
                                    <div class="control">
                                        <strong>Editing {{trader.name}} Reply....</strong>
                                        <textarea v-model="updateTraderReply.message"
                                                  class="textarea shortForm"></textarea>
                                        <div class="control pt-2">
                                            <strong> Edit Reply Date</strong>
                                            <Datetime input-class="input" class="shortForm"
                                                      v-model="updateTraderReply.createdAt"></Datetime>

                                        </div>
                                    </div>
                                    <div class="my-3 is-size-6 is-pulled-right"><span
                                            @click="updateReply(guestComment.author._id)"
                                            class=" button hand    rounded-pill is-primary is-outlined ">Update Reply</span>
                                    </div>

                                    <br>
                                </div>
                                <!--                          end   EDIT REPLY -->
                            </div>

                        </div>
                    </div>
                </div>


                <h1 v-if="notification.success !== null" class="notification has-background-success mx-5">
                    {{notification.success}}</h1>
                <h1 v-if="notification.error !== null" class="notification has-background-danger mx-5">
                    {{notification.error}}</h1>

                <!--                        add new user and comment-->
                <hr class="has-background-dark">
                <div id="target"></div>

                <button @click="userBox = !userBox" class="button">New Guest</button>
                <button @click="commentBox = !commentBox" class="button mx-2">New Comment</button>
                <div class="columns">


                    <div class="column">


                        <div v-show="userBox">
                            <h1 class="is-size-3 ">Add a New user</h1>
                            <div class="media">

                                <figure class="media-left">

                                    <p class="image is-64x64">
                                        <img src="/img/traders/guest.png">
                                    </p>
                                </figure>

                                <div class="media-content">

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
                                            class="fas fa-user-plus"></i><span class="px-2">Create a user</span>
                                    </button>
                                    <br>
                                    <br>


                                </div>
                            </div>
                        </div>
                        <!--                                add new comment START-->

                        <div v-show="commentBox" class="media">
                            <div class="media-content">
                                <div class="pl-5">
                                    <h1 class="is-size-3">Add a New Comment</h1>
                                    <p>Select a user</p>
                                    <div class="select">
                                        <select v-model="comment.author">
                                            <option value="none">Select dropdown</option>
                                            <template v-for="(guest, id) in guest">
                                                <option :value="guest._id" :key="id">{{guest.name}}</option>
                                            </template>
                                        </select>
                                    </div>
                                    <p class="control">
                                        <label class="label has-text-left pt-2">User Comment:</label>
                                        <textarea v-model="comment.message" class="textarea shortForm"
                                                  placeholder="Add a comment..."></textarea>
                                    </p>
                                    <label class="label has-text-left pt-2">Date Created:</label>
                                    <div class="control">
                                        <Datetime input-class="input" class="shortForm"
                                                  v-model="comment.createdAt"></Datetime>
                                        <p>Date the Comment was made </p>
                                    </div>

                                    <button @click="saveComment" class="button is-danger">Post Comment</button>

                                </div>

                            </div>
                        </div>
                        <!--                                add new comment END-->

                    </div>

                </div>

                <!--                      END  add new user and comment-->


            </div>
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
                userBox: true,
                commentBox: false,
                userComment: false,
                notification: {
                    success: null,
                    error: null
                },
                loaded: false,
                trader: {},
                guest: {},
                comments: [],
                guestComments: [],
                traderComments: [],
                replyTo: null,
                editUserComment: null,
                updateUserComment: {
                    message: '',
                    createdAt: '',
                    code: null,
                },
                updateTraderReply: {
                    message: '',
                    createdAt: '',
                    code: null,
                },


                comment: {

                    author: '',
                    message: chance.paragraph({sentences: 1}),
                    createdAt: '',
                },
                TraderReply: {

                    message: '',
                    createdAt: '',

                },
                user: {
                    // commentId:'',
                    name: chance.name(),
                    email: chance.email(),
                    image: 'img/traders/user.png',
                }
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


            async viewTrader() {
                const code = this.$route.params.id;
                try {
                    const {data} = await axios.get('/api/traders/' + code)
                    this.trader = data;
                    this.loaded = true;
                } catch (e) {
                    this.notification = e;

                }
            },
            async viewGuests() {
                const code = this.$route.params.id;
                try {
                    const {data} = await axios.get(`/api/traders/${code}/guests/`);
                    this.guest = data;
                    this.loaded = true;
                } catch (e) {
                    this.notification = e;

                }
            },
            async newGuest() {
                function refresh(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                const code = this.$route.params.id;
                try {
                    await axios.post(`/api/traders/${code}/guests`, this.user)
                    this.notification = 'New Guest has been added';
                    await refresh(2000);
                    window.location.reload()
                } catch (e) {
                    this.notification = e;
                }
            },

            async viewComment() {
                const owner = this.$route.params.id;
                try {
                    const {data} = await axios.get(`/api/comments/trader/${owner}`)
                    this.guestComments = data;
                    this.loaded = true;
                } catch (e) {
                    this.notification = e;

                }
            },

            async saveComment() {
                this.notification.error = null;

                function refresh(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                const owner = this.$route.params.id;

                try {

                    const {data} = await axios.post(`/api/comments/trader/${owner}`, this.comment);

                    if (data.error) {
                        this.notification.error = data.error;
                    } else {
                        this.notification.success = 'New comment was added';
                        await refresh(1000);
                        this.viewComment();
                        // window.location.reload()
                    }


                } catch (e) {
                    this.notification.error = e;
                }

            },

            async saveReply() {

                function refresh(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                const owner = this.$route.params.id;

                try {
                    await axios.post(`/api/replys/trader/${owner}`, {
                        author: this.trader._id,
                        commentId: this.replyTo,
                        message: this.TraderReply.message,
                        createdAt: this.TraderReply.createdAt,
                        owner: this.trader._id
                    });
                    this.notification.success = 'New reply was added';
                    await refresh(2000);
                    window.location.reload()

                } catch (e) {
                    this.notification.error = e;
                }


            },

            // get repl specific id on button click

            reply(id) {
                if (this.replyTo) {
                    this.replyTo = null


                } else {
                    this.replyTo = id;
                    this.editUserComment = null
                }


            },

            editComment(comment) {
                if (this.updateUserComment.code) {
                    this.updateUserComment.code = null

                } else {
                    this.updateUserComment.code = comment.code;
                    this.updateUserComment.message = comment.message;
                    this.updateUserComment.createdAt = comment.createdAt;
                }


            },
            editReply(reply) {
                if (this.updateTraderReply.code) {
                    this.updateTraderReply.code = null
                } else {
                    this.updateTraderReply.code = reply.code;
                    this.updateTraderReply.message = reply.message;
                    this.updateTraderReply.createdAt = reply.createdAt;
                }

            },
            async updateComment() {
                const id = this.updateUserComment.code;
                try {
                    await axios.put(`/api/comments/trader/${id}`, this.updateUserComment)
                    this.notification.success = 'Successfully updated Comments';
                    window.location.reload();
                } catch (e) {
                    this.notification.error = e;
                }


            },
            async updateReply() {
                const id = this.updateTraderReply.code;
                try {
                    await axios.put(`/api/replys/trader/${id}`, this.updateTraderReply);
                    this.notification.success = 'Successfully updated Reply';
                    window.location.reload();
                } catch (e) {
                    this.notification.error = e;
                }

            },

            async deleteComment(id) {
                function refresh(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                try {
                    await axios.delete(`/api/comments/trader/${id}`);
                    this.notification.success = 'Comment has been deleted';
                    await refresh(2000);
                    window.location.reload();

                } catch (e) {
                    this.notification.error = e;
                }


            },
            async deleteReply(id) {
                function refresh(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                try {
                    await axios.delete(`/api/replys/trader/${id}`);
                    this.notification.success = 'Reply has been deleted';
                    await refresh(2000);
                    window.location.reload();

                } catch (e) {
                    this.notification.error = e;
                }


            },


        },
    }
</script>

<style scoped>


    @import "~vue-datetime/dist/vue-datetime.min.css";

    #commentPage {
        max-height: 100vh;
    }




    .datePick {
        padding-top: 10px;
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
        .shortForm {
            width: 70%;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {

        .shortForm {
            width: 70%;
        }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        .shortForm {
            width: 40%;
        }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        .shortForm {
            width: 40%;
        }

    }

    .avatar{
        max-height: 200px;
        max-width: 200px;
        width: 200px;
        height: 200px;
        border-radius: 50%;


    }
    .avatar-small{
        max-height: 60px;
        max-width: 60px;
        width: 60px;
        height: 60px;
        border-radius: 50%;


    }



</style>
