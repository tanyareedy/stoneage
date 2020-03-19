<template>
    <div>

        <div class="container">
            <h1 v-if="notification.error !== null" class="notification is-warning mt-5 mx-5">{{this.notification.error}} </h1>
            <h1 v-if="notification.success !== null" class="notification is-success mt-5 mx-5">{{this.notification.success}} </h1>
            <h1 class="is-size-2">Register Now</h1>

            <div class="columns is-mobile">
                <div class="column is-three-fifths is-offset-one-fifth">


                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input v-model="form.email" class="input" type="email" value="ironman@gmail.com"
                                   placeholder="e.g. alexsmith@gmail.com">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input v-model="form.password" class="input" type="password" placeholder="your Password">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Confirm Password</label>
                        <div class="control">
                            <input v-model="form.confirmPassword" class="input" type="password"
                                   placeholder="your password">
                        </div>
                    </div>

                    <div class="my-5">
                        <button @click="signup" class="button is-success mx-3"> Register</button>


                        already Registered ?
                        <router-link :to="{name:'login'}">login Now</router-link>
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                notification: {
                    success: null,
                    error: null,
                },
                form: {
                    email: '',
                    password: '',
                    confirmPassword: '',
                }
            }
        },


        mounted() {

        },

        methods: {




            checkPassword() {
                if (this.form.password !== this.form.confirmPassword) {

                    return  this.notification.error = 'Password does not match';
                }
            },

            async signup() {
                await this.checkPassword();
                try {

                    await axios.post('/api/user/signup', this.form);
                    this.notification.success = 'Signup successful'
                } catch (e) {
                    this.notification.error = e;
                }

            },


        },

    }
</script>

<style scoped>

</style>
