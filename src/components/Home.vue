<template>
  <div>
    <app-post-card v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :comments_count="post.comments_count"
      :points="post.points"
      :user="post.user"
      :domain="post.domain"
      :time_ago="post.time_ago"
      :url="post.url"
      ></app-post-card>
  </div> 
</template>

<script>
import PostCard from './PostCard';
import { mapGetters, mapMutations, mapActions } from 'vuex';

  export default {
    components: {
      'appPostCard': PostCard,
    },
    methods: {
      ...mapGetters([
        'get_index',
        'get_current_page',
        'get_status'
      ]),
      ...mapMutations([
        'increment_page_index',
        'decrement_page_index'
      ]),
      ...mapActions([
        'get_page'
      ]),
      next_page(){
        // if I hit prev and then next again, then that means
        // it will fetch the data again from the server
        // which is not what I want
        this.increment_page_index(); 
        this.get_page()
      },
      prev_page(){
        this.decrement_page_index();
      }
    },
    computed: {
      posts(){
        // if posts async call is finished
        if(this.get_status() === true){
          // console.log(this.get_page());
          return this.get_current_page();
        }
      }
    }
  }
</script>
