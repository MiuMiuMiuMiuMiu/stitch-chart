<template>
  <div class="button-container">
    <button @click="convertCode(textToConvert)">Generate chart</button>
  </div>
  <div v-if="binaryStr[0].length > 0 && this.validInput === true">
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
      morseCode: Morse,
      braille: Braille
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
      else {
        this.binaryStr = [''];
        var brailleBinary = ["", "", ""];

        if (this.validateInput(text)) { //If true 
          //console.log(text);
          this.convertedText = ''; 
          const textArray = text.toLowerCase().split("");
          for(let i = 0; i < text.length; i++) {
            if (textArray[i] === '\n') {
              this.convertedText += "";
            }
            else { //Else add the converted text

              //Split 000000 to 00,00,00
              let brailleList = (this.braille[textArray[i]]).match(/.{2}/g);

              //Add braille binary to list
              brailleBinary[0] += brailleList[0]
              brailleBinary[1] += brailleList[1]
              brailleBinary[2] += brailleList[2]
            
              this.convertedText += this.braille[textArray[i]];
            }
          }
        }
        this.binaryStr = brailleBinary;

      }
    },
    convertToBinary(text) {
      /*Convert string to binary code*/
      this.binaryStr = [''];
      this.convertedText = '';
      if (text.length > 0) {
        for (var i = 0; i < text.length; i++) {
            this.convertedText += text[i].charCodeAt(0).toString(2).padStart(8, '0');
            this.binaryStr[0] += text[i].charCodeAt(0).toString(2).padStart(8, '0');
        }
      }
      //console.log(this.binaryStr, this.convertedText);
    },
    convertToMorse(text) {
      /*Convert string to morse code*/
        this.convertedText = ''; 
      //Create list from input text (hello => [h,e,l,l,o])
        const textArray = text.toLowerCase().split(""); 
        if (text.length > 0) {
          //Make text in lower case
          for (var i = 0; i < text.toLowerCase().length; i++) { 
          //If there is a space add 7 dots. In morse code, space between words are separated by a space equal to seven dots.
            if(textArray[i] === ' ') { 
              this.convertedText +=  "......."; 
            }
            else if (textArray[i] === '\n') {
              this.convertedText += "";
            }
            else { //Else add the converted text
              this.convertedText += this.morseCode[textArray[i]];
            }
          }
        }
    },
    textToBinary(convertedText) {
      //Convert morse code to 0s and 1s to generate chart
      this.binaryStr = ['']; //Empty variable
      for (var i = 0; i < convertedText.length; i++) {
        if(convertedText[i] === "-") {
          this.binaryStr[0] += "1";
        } else if (convertedText[i] === ".") {
          this.binaryStr[0] += "0";
        }
        else if (convertedText[i] === "/"){
          this.binaryStr[0] += " ";
        }
      }
    },
    validateInput(text) {
      /*This function checks a string for whether it contains letters between a-z (both lower / uppercase). Includes empty spaces.
        If string does contain illegal characters, return false, else true.
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