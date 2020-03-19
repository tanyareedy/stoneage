<template>
    <div class="has-background-white ">

        <div class="section">
            <div class="container">
                <div class="columns ">
                    <div class="column is-two-thirds has-text-left py-4">
                        <h1 class="is-size-3 is-size-4-touch"> {{name}} CLOUD ACCT (Crypto-Wallet)</h1>
                        <p class="is-size-6 is-size-6-touch">
                            This is a CRYPTOCURRENCY HUB or cloud-account
                            (as officially known) where you can store,receive, send
                            and withdraw cryptocurrencies like Bitcoin using the ‘Crypto-wallet’
                            it comes with on default after creation. (this account is not for Trading or mining
                            Cryptocurrencies).
                        </p>
                    </div>

                    <div class="column">
                        <router-link :to="{name:'contact'}" class="button is-primary is-outlined is-size-5 my-5">
                            Open Walllet
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import data from "../../db/main_data";
    export default {
        data() {
            return {
                name:data.global.name,
            }
        },

    }
</script>

<style scoped>

</style>
