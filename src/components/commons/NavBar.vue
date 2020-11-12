<template>
    <div>
        <div id="app">
            <TopHeader/>

            <template>
                <nav class="navbar text-white container" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <router-link class="navbar-item" :to="{name:'home'}">
                            <img alt="NewAgeBot" src="/img/logo_orange.png" id="logo">
                            <h1 class="tile has-text-white has-text-weight-bold px-2">NEWAGEBOT</h1>
                        </router-link>
                        <a role="button" class="navbar-burger burger"
                           @click="showMobileNav" aria-label="menu" aria-expanded="false"
                           data-target="navbarBasicExample">

<!--                            burger icon-->
                            <div class="pr-5 py-1 mr-5">
                                <h1 class="is-size-3 has-text-white has-text-weight-bold px-2"><i
                                        class="fas fa-bars"></i></h1>
                            </div>
                            <!--                            burger icon-->

                        </a>
                    </div>
                    <!--//desktop navigation-->
                    <div class="navbar-menu text-warning pl-5">
                        <div class="navbar-start">
                            <router-link :to="{name:'home'}" exact-active-class="current-page" class="navbar-item">
                                Home
                            </router-link>
                            <router-link :to="{name:'trade'}" exact-active-class="current-page" class="navbar-item">
                                Trade for me
                            </router-link>
                            <router-link :to="{name:'about'}" exact-active-class="current-page" class="navbar-item">
                                About Company
                            </router-link>
                          <router-link :to="{name:'nbot'}" exact-active-class="current-page" class="navbar-item">
                            Nbot 5.0
                          </router-link>
                            <router-link :to="{name:'contact'}" exact-active-class="current-page" class="navbar-item">
                                Contact
                            </router-link>



                        </div>
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <router-link :to="{name:'login'}" class="button is-primary">
                                        <strong>Login</strong>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--//desktop navigation-->
                </nav>
            </template>


            <!--            mobile navigation-->
            <template v-if="showMobileNav">
                <div :class="showNav">
                    <div class="mobile-menu py-5">

                        <span @click="showMobileNav" class="is-size-3 has-text-white"> <i class="fas fa-times"></i><span
                                class="mx-3">Close</span> </span>
                        <div>
                            <ul class="has-text-white">
                                <li @click="showMobileNav" class="py-4 is-size-4 font-weight-bold">
                                    <router-link class="has-text-white" :to="{name:'home'}" href="#">Home</router-link>
                                </li>
                                <li @click="showMobileNav" class="py-4 is-size-4 font-weight-bold">
                                    <router-link class="has-text-white" :to="{name:'trade'}" href="#">Trade for me
                                    </router-link>
                                </li>
                                <li @click="showMobileNav" class="py-4 is-size-4 font-weight-bold">
                                    <router-link class="has-text-white" :to="{name:'about'}" href="#">About Company
                                    </router-link>
                                </li>
                              <li @click="showMobileNav" class="py-4 is-size-4 font-weight-bold">
                                <router-link class="has-text-white" :to="{name:'nbot'}"  href="#">Nbot 5.0
                                </router-link>
                              </li>
                                <li @click="showMobileNav" class="py-4 is-size-4 font-weight-bold">
                                    <router-link class="has-text-white" :to="{name:'contact'}" href="#">Contact
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </template>
            <!--            mobile navigation-->

        </div>


    </div>
</template>

<script>
    import TopHeader from "./TopHeader";


    export default {
        components: {
            TopHeader,

        },


        data() {
            return {
                showNav: {
                    toggle: false,
                    'is-hidden-desktop': true,
                    'is-hidden-touch': true,

                },

            }
        },

        methods: {

            showMobileNav() {
                this.showNav.toggle = !this.showNav.toggle;
                this.showNav["is-hidden-touch"] = !this.showNav["is-hidden-touch"];

            },


        },
        watch: {
            "$route.name"() {
                window.fakeReloadSmooth();

            }
        },


    }
</script>

<style lang="scss" scoped>

    #app {
        background: #21161c;
    }

    .mobile-menu {
        background-color: #fe4d42;
        height: 100vh;

        z-index: 9999;
        position: fixed; /* Sit on top of the page content */
        /*display: none; !* Hidden by default *!*/
        width: 100%; /* Full width (cover the whole page) */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }


    .current-page {

        background-color: #fe4d42;
        color: #ffffff;

    }
    .current-page:focus, .current-page:focus-within {
        background-color: #fe4d42;
        color: #ffffff;
    }






    #logo {
        height: 60px;
        max-width: 100%;
    }


    .navbar-item {
        color: #ffffff;
    }

    .navbar-item:hover {
        color: #f5fffd;
    }

    /*//slide out menu*/

    .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        background-color: #20151c;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
    }

    .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #a5f640;
        display: block;
        transition: 0.3s;
    }


    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }


</style>
