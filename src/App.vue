<template>
  <v-app>
    <Appbar/>

    <v-main class="">
      <v-container fill-height fluid>
        <Map/>
      </v-container>
      
    </v-main>

    <Navigation/>


    

  </v-app>
</template>

<script>
import Home from './views/Home';
import Map from './views/Map';
import HelloWorld from './components/HelloWorld';
import Appbar from './components/AppBar';
import Navigation from './components/Navigation';

export default {
  name: 'App',

  components: {
    HelloWorld, Home, Appbar, Navigation, Map
  },

  data: () => ({
    //
    value: 1, 
    pageTitle: '부동산', 
  }),

  


  methods: {


  }, //methods 

  created() {
    let isLogged = localStorage.getItem('user')
    // console.log('user data : ', isLogged)
  }, // created 

  computed: {
    // set user localStorage 
    // this.$store.dispatch('saveUserData', { newMsg: '사이콘' })

    getUerState () {
        // console.log('user data :  ', this.$store.getters.getUserData)
        
        return this.$store.getters.getUserData
      }

  }, //computed

};
</script>
