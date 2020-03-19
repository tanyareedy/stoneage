<template>


    <div id="app">
        <div class="is-hidden-touch has-background-dark py-2">
            <div class="columns">
                <div class="column">

                    <h1 class="is-size-6 text-white ">
                        <i class="fas fa-phone-alt"></i>
                       : +122 234 123 </h1>

                </div>
                <div class="column">
                    <h1 class="is-size-6 text-white font-weight-normal "> <i class="far fa-envelope"></i> : contact@newagebot.org</h1>

                </div>
                <div class="column">
                    <h1 class="is-size-6 text-white " @click="currentTime()">
                        <i class="far fa-clock"></i>
                        {{time}}</h1>
                </div>
            </div>
        </div>



        <template>
            <nav class="navbar text-white pr-5" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">

                    <router-link class="navbar-item" to="/">
                        <img alt="NewAgeBot" src="/img/logo_orange.png" id="logo">

                        <h1 class="tile has-text-white has-text-weight-bold px-2">NEWAGEBOT</h1>

                    </router-link>


                    <a role="button" class="navbar-burger burger" :class="{ 'is-active': showNav }"
                       @click="openNav()" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">

                        <div class="pr-5 py-3 mr-5">
                            <h1 class="tile has-text-white has-text-weight-bold px-2">MENU</h1>

                        </div>


                    </a>


                </div>

                <!--        <span style="font-size:30px;cursor:pointer"   @click="openNav()" >&#9776; MENU </span>-->


                <div class="navbar-menu text-warning" :class="{ 'is-active': showNav }">
                    <div class="navbar-start">
                        <router-link to="/" exact-active-class="current-page" class="navbar-item">
                            Home
                        </router-link>

                        <router-link to="/tradeforme" exact-active-class="current-page"  class="navbar-item">
                            Trade for me
                        </router-link>

                        <router-link to="/history" exact-active-class="current-page" class="navbar-item">
                            About Company
                        </router-link>

                        <router-link to="/contact" exact-active-class="current-page" class="navbar-item">
                            Contact
                        </router-link>


                    </div>


                    <div class="navbar-end">


                        <div class="navbar-item">


                            <div class="buttons">
                                <a class="button is-primary">
                                    <strong>Get Started</strong>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </template>

        <template>
            <div>
                <div id="mySidenav" class="sidenav">


                    <a href="javascript:void(0)" @click="closeNav()">&times;</a>
                    <router-link to="/" href="#">Home</router-link>
                    <router-link to="/tradeforme" href="#">Trade for me</router-link>
                    <router-link to="/history" href="#">About Company</router-link>
                    <router-link to="/contact" href="#">Contact</router-link>
                    <router-link to="/uikit" href="#">UIKIt</router-link>
                </div>


            </div>
        </template>

    </div>
</template>

<script>
    import moment from "moment";


    export default {


        data() {
            return {
                showNav: false,
                time: null,
            }
        },


        methods: {

            openNav() {
                document.getElementById("mySidenav").style.width = "250px";
            },

            closeNav() {
                document.getElementById("mySidenav").style.width = "0";
            },

            currentTime() {
                this.time = moment().format('MMM Do , h:mm:ss a');

            },


        },

        created() {

            setInterval(this.currentTime, 1000);
        },

        mounted() {


            this.currentTime();

        },




    }
</script>

<style lang="scss" scoped>



    .current-page {
        border-bottom: #27cdff thick solid;

    }


        #logo {
        height: 60px;
        max-width: 100%;
    }


    /*//slide out menu*/

    .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
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
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    .sidenav a:hover {
        color: #f1f1f1;
    }

    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }

    @media screen and (max-height: 450px) {
        .sidenav {
            padding-top: 15px;
        }
        .sidenav a {
            font-size: 18px;
        }
    }


</style>
