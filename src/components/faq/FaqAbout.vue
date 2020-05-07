<template>
    <div>
        <div class="section">
            <div class="container">
                <div class="columns ">
                    <div class="column">
                        <BulmaAccordion
                                :dropdown="dropdown"
                                :initialOpenItem="initialOpenItem"
                                :icon="'plus-minus'"
                                :caretAnimation="caretAnimation"
                                :slide="slide"
                        >
                            <!-- add as many of these items as you need - fill them with content via the slots -->
                            <BulmaAccordionItem class=" my-4">
                                <h4 class="has-text-left has-text-weight-bold" slot="title">What is the minimum duration
                                    for a Trade for me Session</h4>

                                <p class="has-text-left" slot="content">
                                    Minimum of two weeks, A trader can Extend the trading Session for a longer period
                                    this if they wish
                                </p>
                            </BulmaAccordionItem>
                            <BulmaAccordionItem>
                                <h4 class="has-text-left font-weight-bold" slot="title">

                                 <span class="has-text-left">
                                        How do I Identify my Trade-expert after successfully subscribing into a
                                    Trade-For-Me Plan?
                                 </span>
                                </h4>
                                <p class="has-text-left" slot="content">
<span class="has-text-left">
                                        The Contact information of your designated trade-expert automatically comes with the successful subscription notification email.

</span>
                                </p>
                            </BulmaAccordionItem>

                        </BulmaAccordion>
                    </div>
                    <div class="column">
                        <BulmaAccordion
                                :dropdown="dropdown"
                                :initialOpenItem="initialOpenItem"
                                :icon="'plus-minus'"
                                :caretAnimation="caretAnimation"
                                :slide="slide"
                        >

                            <!-- add as many of these items as you need - fill them with content via the slots -->
                            <BulmaAccordionItem class="my-4">
                                <h4 class="font-weight-bold has-text-left" slot="title">

                                    Will I be required to share my brokerage account login details
                                </h4>
                                <p class="has-text-left" slot="content">
                                    Your login Details are confidential!
                                    <br>
                                    You will not be required at any time to share your login Details wit any Trader.
                                </p>
                            </BulmaAccordionItem>

                       

                        </BulmaAccordion>
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import {BulmaAccordion, BulmaAccordionItem} from 'vue-bulma-accordion'

    export default {
        name: 'cool-component',
        data() {
            return {
                dropdown: false,
                initialOpenItem: 1,
                caretAnimation: {
                    duration: '.2s',
                    timerFunc: 'ease-in-out'
                },
                slide: {
                    duration: '.3s',
                    timerFunc: 'ease'
                },

            }
        },

        components: {
            BulmaAccordion,
            BulmaAccordionItem
        }

    }
</script>

<style scoped>

</style>
