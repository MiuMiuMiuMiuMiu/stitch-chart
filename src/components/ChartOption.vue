<template>
  <h2>Choose chart:</h2>

  <div class="chart-choice">
    <h3 v-on:click="choice" v-for="option of options" v-bind:key="option">{{option}}</h3>
  </div>

</template>
  
<script>
export default {
  name: 'ChartOption',
  data() {
    return {
      options: [
        "Blank",
        "Mittens"
      ]
    }
  },
  methods: {
    choice() {
      console.log("Clicked")
    }
  }
}
</script>

<style scoped>
h2,
h3 {
  text-align: left;
}

.chart-choice {
  display: flex;
  justify-content: space-evenly;
}
</style>