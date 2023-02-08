<template>
    <h1>
      Welcome to Froggy {{name}}!
    </h1>
</template>

<script>
export default {
  name: 'WelcomeUser',
  props: {
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped>
</style>
-->