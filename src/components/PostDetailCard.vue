<template>
  <div>
    <v-layout row justify-center>
      <v-flex xs12 md8>
        <v-card flat class="pa-3" :style="{ borderBottom: '1px solid #eee' }">
          <div class="title pb-1 grey--text text--lighten-1">
            {{ title }}
          </div>
          <div class="caption grey--text pb-2">
            <span>
              Posted by {{ user }} 
            </span>
            <span>
              {{ time_ago }}
            </span>
          </div>
          <div v-if="content">
            {{ content }}
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    props: ['user', 'content', 'time_ago', 'title'] 
  }
</script>

