<template>
  <div>
    <PageHeader />
    <router-view></router-view>
  </div>
  
</template>

<script>
import PageHeader from './components/PageHeader.vue';
export default {
  name: 'App',
  components: {
    PageHeader,
  }
}
</script>

<style>
/*Import 8-bit font*/
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

body {
    margin: 0px;
    padding: 0px;
    font-size: 12px;
}

/*Font size */
h1 {
  font-size: 18px;
} h2 {
  font-size: 16px;
} h3 {
  font-size: 14px;
}

#app {
  font-family: 'Press Start 2P', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-bottom: 60px;
}
</style>
