<template>
  <div>
    <WelcomeUser name="Anna" />
  </div>
  
</template>

<script>
import WelcomeUser from './components/WelcomeUser.vue'

export default {
  name: 'App',
  components: {
    WelcomeUser
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
