<template>
    <div id="app">


        <div class="container">
            <div class="section">
                <div class="bar">

                    <h4 class="is-size-5">Supported Brokers<span class="mx-3">{{percent}}%</span></h4>
                    <div class="loading-bar">

                        <div class="percentage" :style="{'width':percentage + '%'}"></div>
                    </div>

                </div>
                <div class="bar">

                    <h4 class="is-size-5">Supported Assets<span class="mx-3">{{percent}}%</span></h4>
                    <div class="loading-bar">

                        <div class="percentage" :style="{'width':percentage + '%'}"></div>
                    </div>

                </div>


                <div class="bar">

                    <h4 class="is-size-5">Trade Accuracy<span class="mx-3">{{percent}}%</span></h4>
                    <div class="loading-bar">

                        <div class="percentage" :style="{'width':percentage + '%'}"></div>
                    </div>

                </div>
                <div class="bar">

                    <h4 class="is-size-5">Customer Service<span class="mx-3">{{percent}}%</span></h4>
                    <div class="loading-bar">

                        <div class="percentage" :style="{'width':percentage + '%'}"></div>
                    </div>

                </div>
            </div>

        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                percentage: 50,
                staff: 90,
                sp: 86,
                sa: 75,

                ta: 70,
                cs: 75,
            }
        },

        computed: {
            percent() {
                return this.percentage.toFixed();

            }
        },

        created() {
            let intval = setInterval(() => {
                if (this.percentage < this.staff)
                    this.percentage += .1;
                else
                    clearInterval(intval);
            }, 10)
        },
    }
</script>

<style lang="scss" scoped>

    .bar {
        text-align: left;
        /*font-size:8rem;*/
        color: black;
        padding: 10px 0 10px 0;
    }

    .loading-bar {
        position: relative;
        width: 300px;
        height: 20px;
        border-radius: 15px;
        overflow: hidden;
        border-bottom: 1px solid #ddd;
        box-shadow: inset 0 1px 2px rgba($color: #000, $alpha: .4),
        0 -1px 1px #fff, 0 1px 0 #fff;


        .percentage {
            position: absolute;
            top: 1px;
            left: 1px;
            right: 1px;
            display: block;
            height: 100%;

            border-radius: 15px;
            background-color: #fe4d42;
            background-size: 30px 30px;
            background-image: linear-gradient(135deg, rgba($color: #fff, $alpha: .15) 25%,
                    transparent 50%, rgba($color: #fff, $alpha: .15) 50%,
                    rgba($color: #fff, $alpha: .15) 75%, transparent 75%,
                    transparent);

            animation: animate-stripes 3s linear infinite;
        }
    }

    @keyframes animate-stripes {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 60px 0;
        }
    }


</style>
