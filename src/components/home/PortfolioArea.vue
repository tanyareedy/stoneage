

<template>
 <div>
<section class="section">
  <div class="image records has-background-primary py-5">
    <div class="columns">
      <div class="column" v-for="record in records" :key="record.id">
        <div class="py-lg-5">
          <div class="has-text-centered py-5">
            <p class="is-size-1 has-text-white"><span><i
                :class="record.icon "></i></span></p>
            <h1 class="is-size-2 has-text-weight-bold has-text-white">
              <span class="counter " :data-target="record.target"></span><span>+</span>
            </h1>
            <h5 class="is-size-5 has-text-weight-semibold has-text-white ">{{record.text}}</h5>
          </div>

        </div>
      </div>


    </div>
  </div>
</section>
 </div>
</template>
<script>
    export default {
        data() {
            return {
                records:[
                    {
                        icon: 'fas fa-users',
                        target: '1366',
                        text: 'Total Clients'
                    },
                    {
                        icon: 'fas fa-award',
                        target: '4',
                        text: 'Global Fin TechAwards',
                    },
                    {
                        icon: 'fas fa-user-shield',
                        target: '55',
                        text: 'Professional Traders',
                    },
                    {
                        icon: 'fas fa-history',
                        target: '5',
                        text: 'Years of Trading Experince',
                    },

                ]

            }
        },

        mounted() {

            const record = document.querySelector('.records');

            const observer = new IntersectionObserver((entries) => {

                if (entries[0].intersectionRatio > 0) {

                    //counter Section

                    const counter = document.querySelectorAll('.counter');

                    counter.forEach(counter => {
                        counter.innerText = '0';

                        const updateCounter = () => {

                            const target = +counter.getAttribute('data-target');

                            const c = +counter.innerText;

                            const increment = target / 1000;

                            if (c < target) {
                                counter.innerText = Math.ceil(c + increment);
                                setTimeout(updateCounter, 1);
                                observer.unobserve(record);


                            }

                        }
                        updateCounter();
                    });

                } else {
                    entries[0].target.style = 'none';
                }

            });

            observer.observe(record);

            // counter  function


        }
    }
</script>

<style scoped>


    .image {
        /* The image used */
        background-image: url("../../../public/img/home/business-people.jpg");

        /* Set a specific height */
        min-height: 200px;

        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>
