<template>
  <v-app>
    <v-app-bar></v-app-bar>
    <v-main>
      <v-container>
        <title>
          This is Basic Template  
        </title>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Basic',
  components: {
  },

  data: ()=>({

  }),

  methods: {
    isMobile() {
      console.log('methods....')
    },

    

  }, // methods 

  mounted() {
  }, // mounted

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