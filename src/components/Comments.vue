<template>
  <div>
    <app-post-detail-card
      :key="this.id"
      :content="this.content"
      :user="this.user"
      :title="this.title"
      :time_ago="this.time_ago"
      ></app-post-detail-card>
    <app-comment-card v-for="comment in this.comments"
      :key="comment.id"
      :author="comment.user"
      :content="comment.content"
      :time_ago="comment.time_ago"
      :level="comment.level"
      ></app-comment-card>
  </div> 
</template>

<script>
import CommentCard from './CommentCard';
import PostDetailCard from './PostDetailCard';

  export default {
    // oh wow, this is cool
    // vue automatically "caches"
    // the data in here
    data(){
      return {
        id: this.$route.params.id,
        title: null,
        comments: null,
        time_ago: null,
        user: null,
        content: null,
      }
    },
    components: {
      'appCommentCard': CommentCard,
      'appPostDetailCard': PostDetailCard,
    },
    created(){
      this.$http.get('https://api.hnpwa.com/v0/item/' + this.id + '.json')
        .then(response => {
          this.title = response.body.title;

          // this.content = response.body.content
          if(response.body.content){
            const parser = new DOMParser();
            const dom = parser.parseFromString(
                '<!doctype html><body>' + response.body.content,
                'text/html');
            this.content = dom.body.textContent;
          }

          this.time_ago = response.body.time_ago;
          this.user = response.body.user;
          this.set_comments(response.body.comments, response.body.comments_count);
        });
    },
    methods: {
      // create the comment list using dfs
      set_comments(comments, comments_count, comments_graph=[]){
        // base case
        if(comments_graph.length === comments_count){
          console.log(comments_graph)
          this.comments = comments_graph;
        }

        for(let i=0; i<comments.length; i++){
          let curr_comment = comments[i];

          if(!curr_comment.visited){
            curr_comment.visited = true;

            // decode the text into readable string
            const parser = new DOMParser();
            const dom = parser.parseFromString(
                '<!doctype html><body>' + curr_comment.content,
                'text/html');
            curr_comment.content = dom.body.textContent;

            comments_graph.push(curr_comment);
            this.set_comments(curr_comment.comments, comments_count, comments_graph);

          }
        }
      }
    }
  }
</script>
