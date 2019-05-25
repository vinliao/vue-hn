<template>
  <div id="app">
    <!-- maybe put a header here? -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  },
  created(){
    // get data from the unofficial HN backend
    this.$http.get('https://api.hnpwa.com/v0/news/1.json')
      .then(response => {
        this.$store.commit('push_page', response.body);
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
