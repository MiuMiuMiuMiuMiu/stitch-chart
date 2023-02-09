<template>
  <h2>Choose chart:</h2>

  <div class="chart-choice">
    <h3 v-bind:class="{'white': clicked == option, 'black': clicked !== option}" v-on:click="choice(option)" v-for="option of options" v-bind:key="option">{{ option }}</h3>
  </div>

  {{ clicked }}

</template>
  
<script>
export default {
  name: 'ChartOption',
  data() {
    return {
      options: [
        "Blank",
        "Mittens"
      ],
      clicked: ""
    }
  },
  methods: {
    choice(choice) {
      this.clicked = choice;
      console.log(choice)
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