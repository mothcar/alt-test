<template>
  <div  class="white">
    <DlgAppBar :title='title'></DlgAppBar>
    <v-card height="100vh">

        <div>
          <h1>This is Sample Page</h1>
        </div>

      </v-card>

  </div>
  
</template>

<script>
// @ is an alias to /src
import DlgAppBar from '@/components/DlgAppBar.vue'

export default {
  name: 'Sample',
  components: {
    DlgAppBar,
  },

  data: ()=>({
    title:'title',

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