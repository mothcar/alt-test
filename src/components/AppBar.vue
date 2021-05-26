<template>
    <v-app-bar
      app
      color="primary"
      dark
      fade-img-on-scroll
      hide-on-scroll
    >

      <!-- <v-spacer></v-spacer> -->

      <v-col cols="2">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        
      </v-col>
      <v-col class="d-flex justify-space-around">
          <h2>{{getTitle}}</h2>
      </v-col>
      <v-col cols="2" class="d-flex justify-end">
        <!-- <span style="font-size: 48px; ">
          <i class="far fa-window-close" @click="browserReload"></i>
        </span> -->
      </v-col>

    </v-app-bar>
</template>

<script>
export default {
    props: ['title'],
    data: ()=>({
      // getTitle : null,
    }),

    methods: {
      browserReload() {
        // console.log('Reload Browser......')
        location.reload();
      },


    }, //methods 

    computed: { 
    //   ...mapState({
    //  title: state => state.barTitle, 
    //  }),
      getTitle () {
        // console.log('Compiutdd... ', this.$store.getters.getMsg)
        return this.$store.getters.getMsg
      }
    }, // computed 
}
</script>