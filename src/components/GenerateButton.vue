<template>
  <div class="button-container">
    <button @click="convertCode(textToConvert)">Generate chart</button>
  </div>
  <div v-if="convertedText.length > 0 && this.validInput === true">
    <div class="grid-container">
      <CreateChart :text="convertedText" />
    </div>
  </div>
  <div v-else-if="this.validInput === false">
    <h2>Error!</h2>
    <p>Your input may only contain letters between a-z!</p>
  </div>
</template>

<script>
import CreateChart from './CreateChart.vue';

export default {
  name: "GenerateButton",
  props: {
    textToConvert: String,
    userChoice: Number
  },
  watch: {
    // whenever question changes, this function will run
    userChoice(newChoice, oldChoice) {
      if (newChoice != oldChoice) {
        this.convertCode(this.textToConvert);
      }
    }
  },
  data() {
    return {
      validInput: Boolean,
      convertedText: '',
      morseCode: { 
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--.."
      }
      
    }
  },
  methods: {
    convertCode(text) {
      if (this.userChoice === 1) {
        this.convertToBinary(text);
        this.validInput = true;
      }
      else if (this.userChoice === 2) {
        if (this.validateInput(text)) {
          this.convertToMorse(text);
        }
      }
    },
    convertToBinary(text) {
      /*Convert string to binary code*/
      this.convertedText = ''; //Empty variable
      if (text.length > 0) {
        for (var i = 0; i < text.length; i++) {
          this.convertedText += text[i].charCodeAt(0).toString(2).padStart(8, '0') + "";
        }
      }
    },
    convertToMorse(text) {
      /*Convert string to morse code*/
        this.convertedText = ''; //Empty variable
        const textArray = text.toLowerCase().split(""); //Create list from input text (hello => [h,e,l,l,o])
        if (text.length > 0) {
          for (var i = 0; i < text.toLowerCase().length; i++) { //Make text in lower case
            if(textArray[i] === ' ') { //If there is a space add 7 dots. In morse code, space between words are separated by a space equal to seven dots.
              this.convertedText +=  "......."; 
            }
            else { //Else add the converted text
              this.convertedText += this.morseCode[textArray[i]];
            }
          }
          //Convert text to binary as component CreateChart.vue translates 1s and 0s to grid-cells.
          this.textToBinary(this.convertedText);
        }
    },
    textToBinary(text) {
      //Convert morse code to 0s and 1s to generate chart
      this.convertedText = ''; //Empty variable
      for (var i = 0; i < text.length; i++) {
        if(text[i] === "-") {
          this.convertedText += "1";
        } else {
          this.convertedText += "0";
        }
      }
    },
    validateInput(text) {
      /*This function checks a string for whether it contains letters between a-z (both lower / uppercase). Includes empty spaces.*/
      this.validInput = /^[A-Za-z\s]*$/.test(text);
      return this.validInput;
    },
  },
  components: {
    CreateChart
  }
}
</script>

<style>
button {
  font-family: 'Press Start 2P', cursive;
  background-color: #264653;
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

/*Grid container*/
.grid-container {
  width: 100%;
  overflow: auto;
  padding: 1px;
}

/*Scroll bar*/
.grid-container::-webkit-scrollbar-track
{
  background-color: lightgray;
}

.grid-container::-webkit-scrollbar
{
  width: 1px;
  background-color: red;
}

.grid-container::-webkit-scrollbar-thumb
{
  background-color: grey;
}
</style>