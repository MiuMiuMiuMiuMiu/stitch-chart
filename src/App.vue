<template>
  <div>
    <WelcomeUser />
    <ChartOption />
  </div>
  
</template>

<script>
import WelcomeUser from './components/WelcomeUser.vue'
import ChartOption from './components/ChartOption.vue';

export default {
  name: 'App',
  components: {
    WelcomeUser,
    ChartOption
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
