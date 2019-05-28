<template>
  <div>
    <v-layout row justify-center>
      <v-flex xs12 md8>
        <v-card flat class="pa-1">
          <a>
            <span @click="prev_page()">
              Prev
            </span>
          </a>
          <a>
            <span @click="next_page()">
              Next 
            </span>
          </a>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    props: ['next_page', 'prev_page']
  }
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
