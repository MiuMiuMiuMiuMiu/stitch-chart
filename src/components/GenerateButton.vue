<template>
  <div class="button-container">
    <button @click="convertToMorse(textToConvert)">Generate chart</button>
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
    textToConvert: String
  },
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
        for (var i = 0; i < text.toLowerCase().length; i++) {
          if(textArray[i] === ' ') {
            //In morse code, space between words are separated by a space equal to seven dots.
            this.convertedText +=  ".......";
          } else {
            this.convertedText += this.morseCode[textArray[i]];
          }
        }
        this.textToBinary(this.convertedText);
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
      console.log(this.convertedText.length)
    }
  },
  /*
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    this.convertToMorse()
  },*/
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