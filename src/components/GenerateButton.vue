<template>
  <div class="button-container">
    <button @click="convertStr(textToConvert)">Generate chart</button>
  </div>

  <div v-if="this.binaryList[0].length > 0 && this.validInput === true">
    <div id="pattern">
      <h2>Code:</h2>
      <p>{{ textToConvert }}</p>

      <h2>Code:</h2>
      <div id="displayCodeContainer">
        <div class="overflow">
          <template v-for="(line, key) in displayCode" :key="key">
            <p>{{ line }}</p>
          </template>
        </div>
      </div>
      

      <h2>Chart:</h2>
      <CreateChart :binaryList="binaryList" />
    </div>

    <!-- 
      html2canvas cannot screenshot anything over 14400x14400 userUnits.
      154 grid cells equals 13923 userUnits.
    -->
    <div v-if="this.binaryList[0].length <= 154">
      <PDFButton />
    </div>
    <div v-else>
      <p>Unfortunately you cannot download charts with a more than 154 stitches on one row!</p>
      <p>Your current stitch count: {{ this.binaryList[0].length }}</p>
    </div>

  </div>

  <div v-if="this.validInput === false">
    <h2>Error!</h2>
    <p>Your input may only contain letters between a-ö!</p>
  </div>
</template>

<script>
//Component
import CreateChart from './CreateChart.vue';
import PDFButton from './PDFButton.vue';

//Json files
import Morse from '../data/morse.json';
import Braille from '../data/braille.json';

export default {
  name: "GenerateButton",
  props: {
    textToConvert: String,
    userChoice: Number
  },
  watch: {
    // whenever option changes, convert to
    userChoice(newOption, oldOption) {
      if (newOption != oldOption) {
        this.convertStr(this.textToConvert);
      }
    }
  },
  data() {
    return {
      validInput: Boolean,
      //Contains list(s) of binary code which is used to generate grid
      binaryList: [''],
      //Used to display code in its original form
      displayCode: [''],
      //Morse JSON
      morse: Morse,
      //Braille JSON
      braille: Braille
    }
  },
  methods: {
    convertStr(text) {
      if (this.userChoice === 1) {
        //Binary
        this.convertToBinary(text);
        //Most keyboard input can be translated to binary code.
        //Validationnot necessary.
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
      this.binaryList = [''];

      for (var i = 0; i < text.length; i++) {
        this.binaryList[0] += text[i].charCodeAt(0).toString(2).padStart(8, '0');
      }

      this.displayCode = ['']
      this.displayCode[0] = this.binaryList[0];
    },
    convertToMorse(text) {
      /*Convert string to morse*/
      this.binaryList = [''];
      //Create list from input text (hello => [h,e,l,l,o])
      const textArray = text.toLowerCase().split("");

      for (var i = 0; i < textArray.length; i++) {
        this.binaryList[0] += this.morse[textArray[i]];
      }

      this.convertBinaryToStr(".", "-")
    },
    convertToBraille(text) {
      /*Convert string to braille*/
      this.binaryList = ['', '', ''];
      //Create list from input text (hello => [h,e,l,l,o])
      const textArray = text.toLowerCase().split("");

      for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] !== '\n') {
          //Divide text every second letter in text into a list, ie: "000000" => [00,00,00]
          let brailleList = (this.braille[textArray[i]]).match(/.{2}/g);

          this.binaryList[0] += brailleList[0]
          this.binaryList[1] += brailleList[1]
          this.binaryList[2] += brailleList[2]
        }
      }

      this.convertBinaryToStr("•", "\u00A0")
    },
    validateInput(text) {
      /*This function checks a string for whether it contains letters between a-ö (both lower / uppercase).
        If string contains illegal characters, return false.
      */
      this.validInput = /^[A-Öa-ö\s]*$/.test(text);
      return this.validInput;
    },
    convertBinaryToStr(replaceZero, replaceOne) {
      /*
      This function replaces the 0s and 1s in a list containing binary str
      */
      this.displayCode = ['']
      let string;
      for (let i = 0; i < this.binaryList.length; i++) {
        string = this.binaryList[i].replace(/0/g, replaceZero);
        string = string.replace(/1/g, replaceOne);
        this.displayCode[i] = string;
      }
    },
  },
  components: {
    CreateChart,
    PDFButton
  }
}
</script>

<style scope>
p {
  word-break: break-all;
}

/*Pattern*/

#pattern > p:first-of-type {
  margin-bottom: 30px;
}

/*Display code*/
#displayCodeContainer {
  margin-bottom: 30px;
  overflow: auto;
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
  margin-top: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

/* overflow */

.overflow {
  width: max-content;
}

.overflow > p{
  margin: 0px;
}

#displayCodeContainer::-webkit-scrollbar-track {
  background-color: lightgray;
}

#displayCodeContainer::-webkit-scrollbar {
  width: 1px;
  background-color: red;
}

#displayCodeContainer::-webkit-scrollbar-thumb {
  background-color: grey;
}
</style>