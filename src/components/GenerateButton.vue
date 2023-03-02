<template>
  <div class="button-container">
    <button @click="convertCode(textToConvert)">Generate chart</button>
  </div>
  <div v-if="binaryStr.length > 0 && this.validInput === true">
    <h2>Code:</h2>
    <p>
      {{ this.convertedText }}
    </p>
    
    <h2>Chart:</h2>
    <div class="grid-container">
      <CreateChart :text="binaryStr" />
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
    // whenever option changes, this function will run
    userChoice(newOption, oldOption) {
      if (newOption != oldOption) {
        this.convertCode(this.textToConvert);
      }
    }
  },
  data() {
    return {
      validInput: Boolean,
      convertedText: '',
      binaryStr: '',
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
        this.convertToBinary(text); //Convert text to binary
        this.validInput = true; //As most keyboard input can be translated to binary code, validation is not necessary. Thus, set it as true.
      }
      else if (this.userChoice === 2) {
        //Validate input text so the letters contain only letters between a-z
        if (this.validateInput(text)) { //If true 
          this.convertToMorse(text); //Translate text to morse code
          this.textToBinary(this.convertedText); //Translate morse code to binary
        }
      }
    },
    convertToBinary(text) {
      /*Convert string to binary code*/
      this.binaryStr = '';
      this.convertedText = '';
      if (text.length > 0) {
        for (var i = 0; i < text.length; i++) {
          this.binaryStr += text[i].charCodeAt(0).toString(2).padStart(8, '0');
          this.convertedText += text[i].charCodeAt(0).toString(2).padStart(8, '0') + " ";
        }
      }
    },
    convertToMorse(text) {
      /*Convert string to morse code*/
        this.convertedText = ''; 
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
        }
    },
    textToBinary(convertedText) {
      //Convert morse code to 0s and 1s to generate chart
      this.binaryStr = ''; //Empty variable
      for (var i = 0; i < convertedText.length; i++) {
        if(convertedText[i] === "-") {
          this.binaryStr += "1";
        } else {
          this.binaryStr += "0";
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

p {
  margin-bottom: 30px;
}
/*Button*/
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