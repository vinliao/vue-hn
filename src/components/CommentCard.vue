<template>
  <div>
    <v-card flat class="pa-3" v-bind:style="{ marginLeft: left_indent }">
      <v-layout row align-start>
        <!-- medium size 8 with padding of 2 on x axis -->
        <v-flex xs10 md8 offset-xs1 offset-md2>
          <div class="caption grey--text text--darken-1">
            <span>
              {{ author }} 
            </span>
            <span>
              {{ time_ago }}
            </span>
            <span>
              {{ left_indent }}
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
        left_indent: this.level * 20 + 'px',
      }
    }
  }
</script>

<style scoped>
.left-indent {
  /* use calc() */
  /* use var() */
  margin-left: var(width-indent);
  background-color: red
}

</style>
