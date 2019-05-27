<template>
  <div>
    <v-card flat class="pa-3">
      <v-layout row align-start>
        <!-- medium size 8 with padding of 2 on x axis -->
        <v-flex xs10 md8 offset-xs1 offset-md2>
          <div>
            <!-- <span @click="to_comment">{{ title }} </span>  -->
            <a @click="to_comment">
              <span class="font-weight-medium">
                {{ title }} 
              </span>
            </a>
            <a v-if="domain" :href="url">
              <span class="grey--text caption text--darken-1">
                ({{ domain }})
              </span> 
            </a>
          </div>
          <div>
            <span class="grey--text caption text--darken-1">{{ points }} points by </span>
            <span class="grey--text caption text--darken-1">{{ user }} </span>
            <span class="grey--text caption text--darken-1">{{ time_ago }} | </span>
            <a @click="to_comment">
              <span class="grey--text caption text--darken-1">
                {{ comments_count }} comments 
              </span>
            </a>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
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
