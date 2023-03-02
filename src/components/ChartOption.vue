<template>
  <div class="chart-input-container">
    <h2>Options:</h2>
    <div class="chart-choice">
      <h3 v-bind:class="{ 'selected': clicked === option.id, 'disabled': clicked !== option.id }"
        v-on:click="choice(option.id)" v-for="option of options" v-bind:key="option.id">{{ option.option }}</h3>
    </div>
    <h2>Text:</h2>
    <div class="gauge-input">
      <textarea v-model="text" type="text" id="text" min="1" max="50"></textarea>
    </div>
    <div class="generate-button">
      <GenerateButton :textToConvert="text" :userChoice="clicked" />
    </div>
  </div>
</template>
  
<script>
import GenerateButton from './GenerateButton.vue';

export default {
  name: "ChartOption",
  data() {
    return {
      options: [
        {
          id: 1,
          option: "Binary"
        },
        {
          id: 2,
          option: "Morse"
        }
      ],
      clicked: NaN,
      text: "",
    };
  },
  methods: {
    choice(choice) {
      this.clicked = choice;
    }
  },
  mounted() {
    this.clicked = 1;
  }, 
  components: {
  GenerateButton
}
}
</script>

<style scoped>
.chart-input-container {
  border: black 1px solid;
  width: 600px;
  margin: 0 auto;
  padding: 30px;
}

h2,
h3 {
  text-align: left;
}

.chart-choice {
  display: flex;
  justify-content: space-evenly;
}

.chart-choice>h3 {
  cursor: pointer;
}

/*Input*/
input[type=number] {
  margin-bottom: 20px;
  margin-right: 20px;
  width: 80px;
  padding: 5px 10px;
  box-sizing: border-box;
}

textarea {
  font-family: 'Press Start 2P', cursive;
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid black;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}

.selected {
  color: royalblue;
}
</style>