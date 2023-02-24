<template>
  <div>
    <h1>Class</h1>
    {{ text }}
    <div id="grid">   
    </div>
  </div>
  
</template>

<script>

export default {
    name: 'CreateChart',
    props: {
      text: String
    }
}
</script>

<style scoped>

#grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
</style>