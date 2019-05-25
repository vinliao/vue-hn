<template>
  <div class="card-container">
    <p>{{ id }}</p>
    
    <!-- it's not visually acting like a link -->
    <p @click="to_comment">{{ comments_count }}</p>
    <p>{{ points }}</p>
    <p>{{ user }}</p>
    <p>{{ title }}</p>
  </div>
</template>

<script>
  export default {
    props: ['id', 'comments_count', 'points', 'user', 'title'],
    methods: {
      to_comment(){
        // route to comment "page" then pass id
        this.$router.push('/comments/' + this.id);
      }
    }
  }
</script>

<style scoped>
.card-container {
  box-shadow: 3px 3px 5px 5px #666;
  width: 500px;
  margin-bottom: 20px;
  margin: auto;
  padding: 20px 0 20px 0;
}
</style>
