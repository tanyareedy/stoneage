<template>
    <div class="text-left">
        <WalletArea/>
        <div class="footer px-5">
            <div class="columns has-text-grey ">
                <div class="column">
                    <h1 class="is-size-4 font-weight-bold">
                        About
                    </h1>
                    <hr width="20%" class="has-background-primary">

                    <p>
                        {{name}} is the aggregate of 1000+ staffs with a vision to make trading easy, 10x more
                        profiting & very transparent for the new generation of traders.
                    </p>
                    <br>
                    <p>
                        We are proud to help many traders around the globe improve their standard of living through
                        revenues from trading digital options.
                    </p>

                    <router-link :to="{name:'contact'}" class="button  is-primary is-outlined my-3 ">Get started</router-link>
                </div>
                <div class="column has-text-grey">
                    <h1 class="is-size-4 font-weight-bold">
                        Useful links
                    </h1>
                    <hr width="20%" class="has-background-primary">

                    <ul class="footer-nav">
                        <li>
                            <router-link class="bottom-nav" :to="{name:'home'}">Home</router-link>
                        </li>
                        <li>
                            <router-link class="bottom-nav" :to="{name:'traders'}">Trade for me
                            </router-link>
                        </li>
                        <li>
                            <router-link class="bottom-nav" :to="{name:'about'}">
                                About Company
                            </router-link>
                        </li>

                        <li>
                            <router-link class="bottom-nav" :to="{name:'traders'}">Traders</router-link>
                        </li>


                    </ul>
                </div>
                <div class="column">
                    <h1 class="is-size-4 font-weight-bold">Contact</h1>
                    <hr width="20%" class="has-background-primary">

                    <ul>

                        <li><p><i class="far fa-envelope has-text-primary is-size-4  mx-2"></i> {{email}}
                        </p>
                        </li>

                        <li><p><i class="far fa-building has-text-primary is-size-4 mx-2 "></i>

                            {{address}}
                        </p></li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import {mapState} from "vuex";
 import data from "../../db/main_data";
 import WalletArea from "../home/WalletArea";





    export default {
        components:{
          WalletArea
        },
        data() {
            return {

                name:data.global.name,
                email:`Contact@${data.global.domain}`,
                address:data.global.address,
                telephone:data.global.telephone,
            }
        },

        computed: {
            ...mapState(['config'])
        },


    }
</script>

<style lang="scss" scoped>

.bottom-nav {
    color: #7a7a7a;

}
.bottom-nav:hover {
    color: #fe4d42;

}

li {
    padding: 3% 0 3% 0;

}



</style>
