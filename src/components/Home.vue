<template>
  <div>
    <p>Hey this is the home</p>   
    <router-link to="/comments">Comments</router-link>
    <!-- <p>{{ posts }}</p> -->
    <!-- use v-if here -->
    <app-post-card v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :comments_count="post.comments_count"
      :points="post.points"
      :user="post.user"
      ></app-post-card>
  </div> 
</template>

<script>
import PostCard from './PostCard'

  export default {
    components: {
      'appPostCard': PostCard,
    },

    computed: {
      posts(){
        const index = this.$store.getters.get_index;
        return this.$store.getters.get_page[index];
      }
    }
  }
</script>
