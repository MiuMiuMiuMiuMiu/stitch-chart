<template>
  <div class="button-container">
    <button @click="convertCode(textToConvert)">Generate chart</button>
  </div>
  <div v-if="convertedText.length > 0">
    <CreateChart :text="convertedText" />
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
  /*
  watch: {
    // whenever question changes, this function will run
    userChoice(newChoice, oldChoice) {
      if (newChoice != oldChoice) {
        this.convertCode(this.textToConvert);
      }
    }
  },*/
  data() {
    return {
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
        this.convertToBinary(text)
      }
      else if (this.userChoice === 2) {
        this.convertToMorse(text)
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
      if (this.controlMorseInput(text)) { //If valid text (i.e text is composed of a-z)
        this.convertedText = ''; //Empty variable
        const textArray = text.toLowerCase().split(""); //Create list from input text (hello => [h,e,l,l,o])
        if (text.length > 0) {
          for (var i = 0; i < text.toLowerCase().length; i++) { //Make text in lower case
            if(textArray[i] !== ' ') { //Ignore spaces and just add on the letters
              this.convertedText += this.morseCode[textArray[i]];
            }
          }
          //Convert text to binary as component CreateChart.vue translates 1s and 0s to grid-cells.
          this.textToBinary(this.convertedText);
        }
      }
      else { //If text is not valid
        console.log("Nothing here")
      }
    },
    textToBinary(text) {
      //Convert morse code to 0s and 1s to generate chart
      this.convertedText = ''; //Empty variable
      for (var i = 0; i < text.length; i++) {
        if(text[i] === "-") {
          this.convertedText += "1"
        } else {
          this.convertedText += "0"
        }
      }
    },
    controlMorseInput(text) {
      const validInput = /^[a-z]+$/i.test(text)
      return validInput
    },
  },
  /*
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    //this.convertToMorse()
  },*/
  components: {
    CreateChart
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