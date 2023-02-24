<template>
  <div class="button-container">
    <button @click="convertToBinary(textToConvert)">Generate chart</button>
  </div>
  <div v-if="convertedText > 0">
    <CreateChart :text="convertedText" /> 
  </div>
  
</template>

<script>
import CreateChart from './CreateChart.vue';

export default {
  name: "GenerateButton",
  props: {
    textToConvert: String
  },
  data() {
    return {
      convertedText: '',
    }
  },
  methods: {
    convertToBinary(text) {
      /*Convert string to binary code*/
      this.convertedText = ''; //Empty variable
      if (text.length > 0) {
        for (var i = 0; i < text.length; i++) {
          this.convertedText += text[i].charCodeAt(0).toString(2).padStart(8, '0') + "";
        }
      }
      console.log(this.convertedText)
    }
  },
  components: {
    CreateChart,
  }
}
</script>

<style>
button {
  background-color: #264653;
  /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>