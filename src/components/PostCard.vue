<template>
  <div>
    <v-layout justify-center>
      <v-flex xs12 md8>
        <v-card flat class="py-3 px-2">
          <div>
            <a @click="to_comment">
              <span class="font-weight-medium pr-2 subheading">
                {{ title }} 
              </span>
            </a>
            <a v-if="domain" :href="url">
              <span class="grey--text caption text--lighten-1">
                ({{ domain }})
              </span> 
            </a>
          </div>
          <div>
            <span class="grey--text caption">submitted {{ time_ago }} </span>
            <span class="grey--text caption">by {{ user }} </span>
            <!-- <span class="grey--text caption ">{{ time_ago }} | </span> -->
          </div>
          <div>
            <span class="grey--text caption pr-1 font-weight-bold">{{ points }} points </span>
            <a @click="to_comment">
              <span class="grey--text caption font-weight-bold">
                {{ comments_count }} comments
              </span>
            </a>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    props: ['id', 'comments_count', 'points', 'user', 'title', 'domain', 'time_ago', 'url'],
    methods: {
      to_comment(){
        // route to comment "page" then pass id
        this.$router.push('/comments/' + this.id);
      }
    }
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
