<template>
  <div class="button-container">
    <button @click="convertCode(textToConvert)">Generate chart</button>
  </div>
  <div v-if="this.binaryStr[0].length > 0 && this.validInput === true">
    <h2>Code:</h2>
    <p>
      {{ this.convertedText }}
    </p>
    
    <h2>Chart:</h2>
    <CreateChart :binaryList="binaryStr" />
  </div>
  <div v-else-if="this.validInput === false">
    <h2>Error!</h2>
    <p>Your input may only contain letters between a-z!</p>
  </div>
</template>

<script>
import CreateChart from './CreateChart.vue';
import Morse from '../data/morse.json';
import Braille from '../data/braille.json';

export default {
  name: "GenerateButton",
  props: {
    textToConvert: String,
    userChoice: Number
  },
  watch: {
    // whenever option changes, this function will run, ie changes between binary and morse code
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
      binaryStr: [''],
      morse: Morse,
      braille: Braille
    }
  },
  methods: {
    convertCode(text) {
      if (this.userChoice === 1) { 
        //Binary
        this.convertToBinary(text); 
        //As most keyboard input can be translated to binary code, validation is not necessary. Thus, true.
        this.validInput = true; 
      }
      else if (this.userChoice === 2) { 
        //Morse
        if (this.validateInput(text)) { 
          this.convertToMorse(text); 
        }
      }
      else { 
        //Braille
        if (this.validateInput(text)) {
          this.convertToBraille(text);
        }
      }
    },
    convertToBinary(text) {
      /*Convert string to binary*/
      this.binaryStr = [''];

      for (var i = 0; i < text.length; i++) {
        //Add binary code to binaryStr
        this.binaryStr[0] += text[i].charCodeAt(0).toString(2).padStart(8, '0');
      }
    },
    convertToMorse(text) {
      /*Convert string to morse*/
      this.binaryStr = [''];
      //Create list from input text (hello => [h,e,l,l,o])
      
      const textArray = text.toLowerCase().split(""); 
      for (var i = 0; i < textArray.length; i++) { 
        //Add morse code to binaryStr
        this.binaryStr[0] += this.morse[textArray[i]];
      }
    },
    convertToBraille(text) {
       /*Convert string to braille*/
      this.binaryStr = ['', '', ''];
      const textArray = text.toLowerCase().split("");

      for(let i = 0; i < textArray.length; i++) {
        if (textArray[i] !== '\n') { 
          //Divide text every second letter into a list, ie: [00,00,00]
          let brailleList = (this.braille[textArray[i]]).match(/.{2}/g);

          //Add braille binary to list
          this.binaryStr[0] += brailleList[0]
          this.binaryStr[1] += brailleList[1]
          this.binaryStr[2] += brailleList[2]
        }
      }
    },
    validateInput(text) {
      /*This function checks a string for whether it contains letters between a-z (both lower / uppercase). Includes empty spaces.
        If string contain illegal characters, return false.
      */
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
  word-break: break-all;
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
</style>