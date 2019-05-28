<template>
  <div>
    <v-card flat class="pa-3 left-border-color" v-bind:style="{ marginLeft: left_indent, marginRight: right_indent }">
      <v-layout row align-start>
        <!-- medium size 8 with padding of 2 on x axis -->
        <v-flex xs12 md12>
          <div class="caption grey--text text--darken-1">
            <span>
              {{ author }} 
            </span>
            <span>
              {{ time_ago }}
            </span>
          </div>
          <div>
            <p>{{ content }}</p>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
  
</template>

<script>
  export default {
    // add other props here
    props: ['author', 'content', 'time_ago', 'level'],

    data(){
      return {
        base_margin: 50,
        left_indent: this.level * 15 + 200 + 'px',
        right_indent: '200px',

      }
    }
  }
</script>

<style scoped>
.left-border-color {
  border-left: 4px solid black;
}

</style>
