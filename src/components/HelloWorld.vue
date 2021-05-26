<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  async mounted() {
    // let test = await this.$axios.get('http://localhost:9090/test/aa')
    let test = await this.$axios.get(`${process.env.VUE_APP_SERVER_URL}/test/aa`)
    console.log('Server response : ', test.data.data.item)
    let test2 = process.env.VUE_APP_TEST
    console.log('test2: ', test2)
  }, // mounted
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
