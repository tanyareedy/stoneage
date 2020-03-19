<template>
    <div>
        <div class="is-hidden-touch has-background-dark py-2">
            <div class="columns">
                <div class="column">

                    <h1 class="is-size-6 text-white ">
                        <i class="fas fa-phone-alt"></i>
                        : {{telephone}}</h1>

                </div>
                <div class="column">
                    <h1 class="is-size-6 text-white font-weight-normal "> <i class="far fa-envelope"></i> :{{email}}</h1>

                </div>
                <div class="column">

                </div>
            </div>
        </div>


        </div>
</template>

<script>
    import {mapState} from "vuex";
    import Store from  "../../store/store";

    const domain = Store.state.config.domain;
    const address = Store.state.config.address;
    const telephone = Store.state.config.telephone;

    // const name = Store.state.config.name;

    export default {
        data() {
            return {
                email:`Contact@${domain}`,
                address:address,
                telephone:telephone,

            }
        },



        computed: {
            ...mapState(['config'])
        },

    }
</script>

<style scoped>

</style>


