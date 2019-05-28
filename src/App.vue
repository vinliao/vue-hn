<template>
  <v-app>
    <v-container>
      <v-content>
        <app-header
          :current_page_to_1="current_page_to_1"
          ></app-header>
        <router-view></router-view>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import Header from './components/Header'

export default {
  name: 'App',

  data () {
    return {

    }
  },

  components: {
    appHeader: Header,
  },

  methods: {
    ...mapActions([
      'get_page'
    ]),
    ...mapMutations([
      'current_page_to_1'
    ])
  },

  created(){
    this.get_page();
  },
}
</script>
