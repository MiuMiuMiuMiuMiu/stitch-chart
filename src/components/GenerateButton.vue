<template>
    <button @click="convertToBinary(textToConvert)">Generate chart</button>
</template>

<script>
export default {
    name: "GenerateButton",
    props: {
      textToConvert: String
    },
    data () {
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
          this.convertedText += text[i].charCodeAt(0).toString(2).padStart(8,'0') + "";
        }
        }
        console.log(this.convertedText)
      }
    }
}
</script>

<style>
button {
  background-color: #264653; /* Green */
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
</style>