<template>
  <!-- <v-container  fluid> -->
  <v-container class="grey" :ma-0="$vuetify.breakpoint.mdAndDown">
    <div class="text-center">
      <v-img  
            :src="require('../assets/logo.svg')"
            class=""
            contain
            height="200"
          />

          <div>aaa</div>
    </div>
    
          

        
          
  </v-container >
</template>

<script>
  import Helloworld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      Helloworld,
    },

    data: ()=>({

    }),

    methods: {
      isMobile() {
        console.log('methods....')
      },

      

    }, // methods 

    mounted() {
      let test = this.$vuetify.breakpoint.mdAndDown
      console.log('test : ', test)
    },

    created() {
      console.log('cteated....')
    }, // created 

    computed: {
      test() {
        console.log('This TEST Function is composed for DATA property')
      } 
    },// computued

  }
</script>
