
import '../public/scss/custom.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import  ScrollAnimation from  './directives/scrollanimation'
import Vuelidate from 'vuelidate'


import 'bulma'
import './scss/custom.scss'
import 'shred-bootstrap/utilities.scss'

import './pack';

import NavBar from "./components/commons/NavBar";
import FooterArea from "./components/commons/FooterArea";

import VueSimpleProgress from './components/uikit/progressBar'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.directive('scrollanimation', ScrollAnimation);



var moment = require('moment');
moment().format();



Vue.directive('move-box', {
  bind (el, binding) {

    const modifiers = binding.modifiers
    if (modifiers.underline) {
      el.style.textDecoration = 'underline'
    }
    if (modifiers.textcenter) {
      el.style.textAlign = 'center'
    }

    const speeds = {
      slow: 50000,
      normal: 1000,
      fast: 500,
      crazy: 100
    };

    const speedName = binding.arg || 'normal';
    const speed = speeds[speedName];

    const colors = binding.value;

    let i = 0;

    setInterval(() => {
      console.log('coloring');
      el.style.backgroundColor = colors[i++];
      if (i > colors.length - 1) {
        i = 0;
      }
    }, speed)
  }

});

// import 'swiper/dist/css/swiper.css'
Vue.use(Vuelidate);
Vue.component('NavBar', NavBar);
Vue.component('FooterArea', FooterArea);
Vue.use(VueAwesomeSwiper, /* { default global options } */)


// expose component to global scope
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-simple-progress', VueSimpleProgress)
}

export { VueSimpleProgress, ScrollAnimation, Vuelidate }

export default VueSimpleProgress;



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


