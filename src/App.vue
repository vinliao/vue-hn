<template>
  <v-app>
    <v-container >
      <v-content>
        <app-header></app-header>
        <router-view></router-view>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import Header from './components/Header'

export default {
  name: 'App',

  data () {
    return {
      //
    }
  },

  components: {
    appHeader: Header,
  },

  methods: {
    ...mapActions([
      'get_page'
    ])
  },

  created(){
    this.get_page();
  },
}
</script>
