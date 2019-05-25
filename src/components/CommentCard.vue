<template>
  <div class="card-container">
    <p>{{ author }}</p>
    <p>{{ content }}</p>

  </div>
  
</template>

<script>
  export default {
    props: ['author', 'content']
    
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
