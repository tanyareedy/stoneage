<template>

  <div>
    <div id="jumbo" v-scrollanimation>


      <div class="pt-5">
        <h1 class="is-size-1 is-size-3-touch has-text-white has-text-left px-5 py-3 has-text-weight-bold">Newagebot
          Software</h1>


        <p class="is-size-4 is-size-6-touch has-text-white has-text-left px-5"><i class="far fa-dot-circle has-text-primary is-size-6 mr-2 "></i>Trade with high accuracy signals </p>
        <p class="is-size-4 is-size-6-touch has-text-white has-text-left px-5"><i class="far fa-dot-circle has-text-primary is-size-6 mr-2 "></i>Facilitate Withdrawals via BTC and ETH</p>
      </div>
      <div id="target"></div>
    </div>

    <div class="columns">
      <div class="column">
        <img class="boxed" src="/img/banner/nbot-box.png">
      </div>
      <div class="column has-text-left">
     <div class="mt-5 px-2">

       <h1 class="is-size-3 has-text-weight-bold">
         Nbot software
       </h1>

       <p class="is-size-4">
         The seamless software programmed for trading and withdrawal of profits from your brokage platform.

       </p>
       <h1 class="is-size-3 has-text-weight-bold">
         Features
       </h1>
       <ul class="is-size-4">
         <li class="list-item">
           <i class="far fa-dot-circle has-text-primary is-size-4 mr-2 "></i>
           <span>Withdrawal from over 200 brokerage platform.</span>
         </li>
         <li class="list-item">
           <i class="far fa-dot-circle has-text-primary is-size-4 mr-2 "></i>
           Facilitate  withdrawals via BTC and ETH.
         </li>
         <li class="list-item">
           <i class="far fa-dot-circle has-text-primary is-size-4 mr-2 "></i>
           98% trading signal accuracy
           for premium users.
         </li>
       </ul>

       <p class="is-size-4 py-5">
         The cost of this software varies by user needs, please contact us for pricing. contact@newagebot.org for
       </p>

     </div>

      </div>
    </div>



  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.list-item{
  display:flex;

}

.boxed{
height: 600px;
}

#jumbo {
  background-image: url("/img/banner/streak-bot.png"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 40vh; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}

/*medeia queries*/
/* Extra small devices (phones, 600px and down) */


/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

  #jumbo {
    background-image: url("/img/banner/streak-bot.png"); /* The image used */

    height: 30vh; /* You must set a specified height */
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

  #jumbo {
    background-image: url("/img/banner/streak-bot.png"); /* The image used */

    height: 30vh; /* You must set a specified height */
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

  #jumbo {
    background-image: url("/img/banner/streak-bot.png"); /* The image used */

    height: 30vh; /* You must set a specified height */
  }

}


</style>
