x<template>
    <div id="app">
        <div v-scrollanimation  id="jumbo">



            <div  class="pt-5">
                <h1 class="is-size-1 is-size-3-touch has-text-white has-text-left px-5 py-3 has-text-weight-bold">Contact  Us</h1>
                <p class="is-size-4 is-size-6-touch has-text-white has-text-left px-5">We are here to help you answer any questions you might have</p>
            </div>
            <div id="target"></div>
        </div>

        <ContactForm v-scrollanimation />
        <FaqSection v-scrollanimation />


    </div>


</template>

<script>



    import FaqSection from "../components/faq/FaqSection";
    import ContactForm from "../components/form/ContactForm";

    export default {
        components: {
            FaqSection,
            ContactForm,
        },

        data() {
            return {
                // key: value
            }
        },

    }
</script>

<style scoped>
    #jumbo {
        background-image: url("/img/banner/contact.jpg"); /* The image used */
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
            background-image: url("/img/banner/contact-mini.jpg"); /* The image used */

            height: 50vh; /* You must set a specified height */
        }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {

        #jumbo {
            background-image: url("/img/banner/contact-mini.jpg"); /* The image used */

            height: 50vh; /* You must set a specified height */
       }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {

        #jumbo {
            background-image: url("/img/banner/contact-mini.jpg"); /* The image used */

            height: 50vh; /* You must set a specified height */
        }

    }


</style>
