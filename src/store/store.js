import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: {
      name: process.env['VUE_APP_NAME'] || '{env.APP_NAME}',
      slogan: 'Secure your money using eskimo',
      domain: process.env['VUE_APP_DOMAIN'] || '{env.APP_DOMAIN}',
      email:process.env['VUE_APP_EMAIL'] || '{env.APP_EMAIL}',
      address:process.env['VUE_APP_ADDY'] || '{env.APP_ADDY}',
      telephone:process.env['VUE_APP_NUM'] || '{env.APP_NUM}',
    },
  },
  mutations: {

  },
  actions: {

  }
})
