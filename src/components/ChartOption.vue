<template>
  <h2>Choose chart:</h2>
  <div class="chart-choice">
    <h3 v-bind:class="{ 'selected': clicked === option.id, 'disabled': clicked !== option.id }" v-on:click="choice(option.id)"
      v-for="option of options" v-bind:key="option.id">{{ option.option }}</h3>
  </div>
  <h2>Gauge Input</h2>
  <div class="gauge-input">
    <GaugeInput />
  </div>
  <div class="generate-button">
    <GenerateButton /> 
  </div>

</template>
  
<script>
import GaugeInput from './GaugeInput.vue';
import GenerateButton from './GenerateButton.vue';

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
                    option: "Mittens"
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
    components: { GaugeInput, GenerateButton }
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

.generate-button {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

</style>