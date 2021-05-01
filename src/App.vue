<template>
  <div id="app">
    <NavBar v-if="hideMenuFooter"/>

    <router-view/>
    <FooterArea v-if="hideMenuFooter"/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

  #nav a.current-page{
    color: #4d63bc;
  }

</style>



<script>


  export default {

    data() {
      return {
        site:{
          title:'Newagebot'

        },
      }
    },

      computed:{
         hideMenuFooter() {

             const pages = ['admin','viewTrader','allTraders','addTrader','comments','editTrader','users'];
             return !pages.includes(this.$route.name);
         },

     },

  }
</script>

