<template>
  <div>
    <WelcomeUser />
    <CreateChart />
  </div>
  
</template>

<script>
import WelcomeUser from './components/WelcomeUser.vue'
import CreateChart from './components/CreateChart.vue';

export default {
  name: 'App',
  components: {
    WelcomeUser,
    CreateChart
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
