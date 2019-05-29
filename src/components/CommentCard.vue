<template>
  <div>
    <v-layout row justify-center>
      <v-flex xs12 md8>
        <v-card flat class="pa-3" v-bind:style="this.card_style">
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
        </v-card>
      </v-flex>
    </v-layout>
  </div>

</template>

<script>
export default {
  // add other props here
  props: ["author", "content", "time_ago", "level"],

  data() {
    return {
      // the color of the left border will be level_color[level]
      // you know, maybe I can get the color through an API
      // instead of manually choosing one by one

      // here's one idea: programmatically generate this list
      level_color: [
        "red",
        "blue",
        "black",
        "grey",
        "darkkhaki",
        "green",
        "cyan",
        "lime",
        "aqua",
        "magenta",
        "pink"
      ]
    };
  },
  computed: {
    // this dirty solution doesn't work on phone
    // card_style(){
    //   return {
    //     marginLeft: 200 + this.level * 15 + 'px',
    //     marginRight: '200px',

    //     // set different color for different level
    //     borderLeft: '4px solid ' + this.level_color[this.level],
    //   },
    // }
    old_card_style() {
      return {
        marginLeft: 200 + this.level * 15 + "px",
        marginRight: "200px",

        // set different color for different level
        borderLeft: "4px solid " + this.level_color[this.level]
      };
    },
    card_style() {
      return {
        marginLeft: this.level * 15 + "px",

        // set different color for different level
        borderLeft: "4px solid " + this.level_color[this.level]
      };
    }
  }
};
</script>

<style scoped>
</style>
