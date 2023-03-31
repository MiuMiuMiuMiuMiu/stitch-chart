<template>
  <div class="chart-input-container">
    <ToolTip/>
    <h2>Options:</h2>
    <div class="chart-choice">
      <h3 v-bind:class="{ 'selected': clicked === option.id, 'disabled': clicked !== option.id }"
        v-on:click="choice(option.id)" v-for="option of options" v-bind:key="option.id">{{ option.option }}</h3>
    </div>

    <h2>Text:</h2>
    <div class="gauge-input">
      <textarea v-model="text" type="text" id="text" min="1" max="50"></textarea>
      <p>{{ text.length }} </p>
    </div>

    <div class="generate-button">
      <GenerateButton :textToConvert="text" :userChoice="clicked" />
    </div>
  </div>
</template>
  
<script>
import GenerateButton from './GenerateButton.vue';
import ToolTip from './ToolTip.vue';

export default {
  name: "ChartOption",
  data() {
    return {
      options: [
        {
          id: 1, //aaaaaaaaaaaaaa
          option: "Binary"
        },
        {
          id: 2,
          option: "Morse"
        },
        {
          id: 3,
          option: "Braille"
        }
      ],
      clicked: NaN,
      text: "",
      maxInput: Number
    };
  },
  methods: {
    choice(choice) {
      this.clicked = choice;
    }
  },
  mounted() {
    //Select binary option when website renders
    this.clicked = 1;
  }, 
  components: {
    GenerateButton,
    ToolTip
  }
}
</script>

<style scoped>
.chart-input-container {
  border: #264653 3px solid;
  width: 35%;
  margin: 0 auto;
  padding: 25px;
}

@media (max-width:1280px) { 
  .chart-input-container {
    width: 60%
  }
} 

@media (max-width:960px) { 
  .chart-input-container {
    width: 80%
  }
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
  height: 200px;
  padding: 20px;
  box-sizing: border-box;
  color: #264653;
  border: 3px solid #264653;
  background-color: #f8f8f8;
  font-size: 12px;
  /*Remove default properties*/
  resize: none;
  outline: none;
}

.gauge-input > p {
  float: right;
}

.selected {
  color: royalblue;
}
</style>