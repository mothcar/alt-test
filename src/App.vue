<template>
  <!--<div id="app">
     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> 
    
  </div>-->
  <v-app>
    <Appbar/>

    <v-main class="pa-0">
      <Home/>
    </v-main>

    <Navigation/>


    

  </v-app>
</template>


<script>
import Home from './views/Home';
import HelloWorld from './components/HelloWorld';
import Appbar from './components/AppBar';
import Navigation from './components/Navigation';

export default {
  name: 'App',

  components: {
    HelloWorld, Home, Appbar, Navigation
  },

  data: () => ({
    //
    value: 1, 
    pageTitle: '사이콘', 
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
