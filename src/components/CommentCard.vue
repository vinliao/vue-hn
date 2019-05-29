<template>
  <div>
    <v-layout row justify-center>
      <v-flex xs12 md8>
        <v-card flat class="px-3 py-3" v-bind:style="this.card_style">
          <div class="caption grey--text">
            <span>
              {{ author }}
            </span>
            <span>
              {{ time_ago }}
            </span>
          </div>
          <div>
            {{ content }}
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
      level_color: [
        "red",
        "blue",
        "orange",
        "green",
        "purple",
        "lime",
        "navy",
        "aqua",
        "fuchsia",
        "gray",
        "olive",
        "silver",
      ]
    };
  },
  computed: {
    card_style() {
      return {
        marginLeft: this.level * 15 + "px",

        // set different color for different level
        borderLeft: "4px solid " + this.level_color[this.level],

        // card divider
        borderBottom: "1px solid #eee" 
      };
    }
  }
};
</script>

<style scoped>
</style>
