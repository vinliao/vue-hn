<template>
  <div>
    <v-layout justify-center>
      <v-flex xs12 md8>
        <v-card flat class="pa-1">
          <!-- <span>
            <v-img
              position="left"
              src="https://upload.wikimedia.org/wikipedia/commons/1/10/Y_Combinator_Logo.png"
              height="20px"
              width="20px"
              ></v-img>
          </span> -->
          <!-- <v-icon>fas fa-y-combinator</v-icon> -->
          <!-- <v-icon>home</v-icon> -->
          <v-icon @click="comment_to_home" color="#ff4000">fab fa-y-combinator</v-icon>
          <span>&nbsp;</span>
          <a @click="comment_to_home">
            <span class="font-weight-bold">Hacker News</span>
          </a>
          <!-- <span> | </span>
          <a @click="to_new">
            <span>New</span>
          </a> -->
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    props: ['current_page_to_1'],
    methods: {
      comment_to_home(){
        this.current_page_to_1();
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}
</style>

