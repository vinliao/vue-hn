<template>
  <div id="app">
    <!-- maybe put a header here? -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'app',
  components: {

  },
  methods: {
    ...mapActions([
      'get_page'
    ])
  },
  created(){
    this.get_page();
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
