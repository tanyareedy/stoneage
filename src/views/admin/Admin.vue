<template>
    <div id="admin">


        <button class="button is-primary mt-3" @click="toggleMenu">&#9776;{{menuMessage}}</button>

        <div class="columns">

            <div :class="columnClass" class=" is-2 mr-5">

                <br>

                <div class=" has-background-primary">

                    <div v-if="isHidden" id="mySidenav" class="sidenav">
                        <div  class="has-text-left">
                           <span class="py-5 px-5 is-size-4 has-text-primary " @click="toggleMenu"> <i class="fas fa-times"></i> Close</span>

                                <br>
                                <br>
                            <router-link class="has-text-white is-size-5 mb-2" :to="{name:'addTrader'}"><i class="fas fa-user-plus"></i><span class="px-3">New Trader</span></router-link>
                            <hr>
                            <router-link class="has-text-white is-size-5 mb-2" :to="{name:'allTraders'}" ><i class="far fa-eye"></i> <span class="px-3">All Traders</span></router-link>
                            <hr>
                            <router-link class="has-text-white is-size-5 mb-2" :to="{name:'home'}" ><i class="fas fa-home"></i><span class="px-3">Home</span></router-link>
                            <hr>
                            <router-link class="has-text-white is-size-5 mb-2" :to="{name:'traders'}" ><i class="fas fa-users"></i><span class="px-3">Guest traders</span></router-link>
                            <hr>
                            <router-link class="has-text-grey is-size-5 mb-2" :to="{name:'users'}" ><i class="far fa-eye"></i> <span class="px-3">Users</span></router-link>
                            <hr>
                            <router-link class="has-text-grey is-size-5 mb-2" :to="{name:'traders'}"><i class="fas fa-cog"></i><span class="px-3">Configuration</span></router-link>
                            <hr>
                            <button @click="logout" class="button mx-5 is-danger has-text-white is-size-5 mb-2" ><i class="fas fa-cog"></i><span class="px-3">Logout</span></button>

                        </div>
                    </div>
                </div>
            </div>
            <div class="pr-5"  :class="[columnClass,containerClass]">
                <router-view/>

            </div>
        </div>




<footer class="has-background-white">
<p class="has-text-grey">manager</p>
</footer>





    </div>
</template>

<script>

    export default {
        data() {
            return {
                isHidden:false,
                menuMessage:'MENU',
                containerClass:{
                    'column':true,
                    'is-10':false,
                },
                columnClass:{
                    'column':false
                }
            }
        },


        mounted() {
            // this.tradersPage();
        },

        methods:{
            toggleMenu(){
                this.isHidden = !this.isHidden;
                this.columnClass.column = !this.columnClass.column;
                this.containerClass["is-10"] = !this.containerClass["is-10"]
            },

            logout(){
              localStorage.clear();
              this.$router.push('/login')
            },

            tradersPage(){
                this.$router.push({name: 'allTraders'});

            }

        },
    }
</script>

<style scoped>


    #admin{
        height: 80%;
    }

    #mySidenav{
        width: 250px;
    }

    .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #111;
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




    a{
        color: white;
    }
    footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: red;
        color: white;
        text-align: center;
    }


    /*  li{
          padding: 10% 0 10% 0;
          border-bottom: rgba(122, 129, 144, 0.36) thin solid;
      }*/

</style>


