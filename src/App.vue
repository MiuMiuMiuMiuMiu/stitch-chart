<template>
  <div>
    <PageHeader />
    <WelcomeUser />
    <ChartOption />
  </div>
  
</template>

<script>
import WelcomeUser from './components/WelcomeUser.vue'
import ChartOption from './components/ChartOption.vue';
import PageHeader from './components/PageHeader.vue';
export default {
  name: 'App',
  components: {
    PageHeader,
    WelcomeUser,
    ChartOption
  }
}
</script>

<style>
body {
    margin: 0px;
    padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-bottom: 60px;
}
</style>
