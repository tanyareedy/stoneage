<template>
    <div class="container  py-3 ">

        <div class="py-5">
            <p class="is-size-4 is-size-5-touch has-text-primary">
                With Newagebot, <br> you are always making the right choice
            </p>
            <h1 class="is-size-1  has-text-weight-bold is-size-3-touch">
                Choose Your Trading Preference
            </h1>
            <hr class="has-background-primary my-3">

        </div>

        <div class="">
            <div class="mx-md-5 mx-3">
                <div class="columns is-centered ">
                    <template v-for="preference in preferences">
                        <div :key="preference.id" class="column is-12-mobile px-lg-5">
                            <div>
                                <div class=" box has-background-white text-dark py-5" id="preference">
                                    <p class="has-text-grey">Trade for me</p>
                                    <p class="is-size-3 has-text-weight-bold px-lg-5">{{preference.title}}</p>

                                    <p class="is-size-1">${{preference.cost}}<span class="has-text-grey">+</span></p>
                                    <div v-for="item in preference.item" :key="item.id">
                                        <ul class="has-text-left">
                                            <li class="py-2 px-lg-5">
                                                <i id="icon" class="far fa-dot-circle has-text-primary is-size-5"></i>

                                                {{item}}
                                            </li>
                                        </ul>

                                    </div>


                                    <div>
                                        <span v-html="preference.contact"></span>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </template>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    let icons = `
<div class="field has-addons">
  <p class="control">
    <i class="fab fa-skype ml-5 is-size-3 has-text-primary"></i>
    <span class="has-text-weight-bold">Skype</span>
  </p>
  <p class="control">
   <i class="fas fa-envelope ml-3 is-size-3 has-text-primary"></i>
   <span class="has-text-weight-bold">Email</span>

  </p>
</div>

                    `;
    export default {

        data() {
            return {
                preferences: [
                    {
                        title: 'Primary',
                        cost: '5,000',
                        item: [
                            'Subscription cost range; USD 5,000+',
                            'Estimated minimum payout (2weeks); USD $19,850',
                            '24/7 Customer support', 'Designated Trade Expert',
                            '100% access into trading account',
                            'Trade-expert contact:',
                        ],
                        contact: icons

                    },
                    {
                        title: 'Secondary',
                        cost: '1,850',

                        item: [
                            'Subscription Cost Range; 1850+',
                            'Estimated minimum payout (2weeks); USD $9,850',
                            '24/7 Customer support',
                            'Designated Trade Expert',
                            '100% access into trading account',
                            'Trade-expert contact:',
                        ],
                        contact: `
                         <p class="control">
   <i class="fas fa-envelope ml-5 is-size-3 has-text-primary"></i>
   <span class="has-text-weight-bold">Email</span>

  </p>
                        `


                    }
                ],
            }
        },

    }
</script>

<style lang="scss" scoped>
    hr {

        width: 15%;
        margin: 0 auto;
        height: 10px;
    }


    /*  p{
          color: #3abb67 !important;
      }

      ul{
          color: #3abb67 !important;
      }

      #icon{
          color: #3abb67 !important;

      }*/


</style>
