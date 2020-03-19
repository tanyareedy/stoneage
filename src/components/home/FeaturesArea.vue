<template>

    <div class="py-5">

<p class="has-text-primary text-capitalize has-text-weight-semibold">Our features</p>
        <h3 class="is-size-3 is-size-5-touch has-text-weight-bold">What We are Offering<br>
            to {{name}} customers </h3>

<div class="section mx-3">
    <div class="container">

        <div  class="columns">
            <div  v-for="feature in features" :key="feature.id">

                <div class="column rounded-lg ">
                    <div class="card ">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img class="img" :src="feature.image" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content hova">
                            <div class="content has-text-left ">
                                <span class="is-size-1 has-text-primary" id="icon"> <i :class="feature.icon"></i></span>

                                <h6 class="is-size-5 has-text-weight-bold has-text-left heda ">{{feature.title}}</h6>

                                <p class="has-text-justified is-size-6-touch"> {{feature.text}}</p>

                                <router-link :to="{name:'trade'}"><span class="underline has-text-weight-semibold has-text-dark heda">LEARN MORE</span></router-link>


                            </div>
                        </div>
                    </div>

                </div>

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
                name: data.global.name,
                features: data.features,

            }
        },

    }
</script>

<style lang="scss" scoped>


    $grey:#4a4a4a;
    $white:#ffffff;
    $orange:#fe4d42;


.hova{

    -webkit-transition: .25s ease-in-out .25s;

    #icon {
        color: $orange !important;
        transition: .25s ease-in-out .25s;
    }

    h6{
        color: $grey;
        transition: .25s ease-in-out .25s;
    }

    p{
        color: $grey;
        transition: .25s ease-in-out .25s;
    }

}



    .hova:hover {
        background-color: $orange;
        transition: .25s ease-in-out .25s;

        #icon {
            color: $white !important;
            transition: .25s ease-in-out .25s;
        }
        p{
            color: $white !important;
            transition: .25s ease-in-out .25s;

        }
        .heda{
            color: $white !important;
            transition: .25s ease-in-out .25s;

        }
        .img{
            height: 3000px;
        }


    }

</style>


