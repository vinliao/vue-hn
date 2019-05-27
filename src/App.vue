<template>
  <v-app>
    <v-container>
      <v-content>
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',

  data () {
    return {
      //
    }
  },

  components: {
    appHeader: Header,
    appFooter: Footer,
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
