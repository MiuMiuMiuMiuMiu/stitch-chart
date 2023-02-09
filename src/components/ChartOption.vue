<template>
  <h2>Choose chart:</h2>
  <div class="chart-choice">
    <h3 v-bind:class="{ 'selected': clicked === option.id, 'disabled': clicked !== option.id }" v-on:click="choice(option.id)"
      v-for="option of options" v-bind:key="option.id">{{ option.option }}</h3>
  </div>
  <div class="gauge-input">
    <GaugeInput/>
  </div>

</template>
  
<script>
import GaugeInput from './GaugeInput.vue';

export default {
    name: "ChartOption",
    data() {
        return {
            options: [
                {
                    id: 1,
                    option: "Blank"
                },
                {
                    id: 2,
                    option: "Mitten"
                }
            ],
            clicked: Number,
        };
    },
    methods: {
        choice(choice) {
            this.clicked = choice;
            console.log(choice);
        }
    },
    components: { GaugeInput }
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

.selected {
  border: black 1px solid;
}
</style>