<template>
  <h2>Chart:</h2>
  <!--
  <div class="stitch-container">
    <div class="purl">
    </div>
    <div class="knit">
    </div>
  </div> 
  -->
  <div class="grid-container">
    <div id="grid" :style="gridStyle">
      <template v-for="(item, index) in text" :key="index">
        <div class="grid-cell"
          v-bind:style="[item === '0' ? { 'background-color': '#264653' } : { 'background-color': 'white' }]">
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateChart',
  props: {
    text: String
  },
  data() {
    return {
      columns: parseInt(this.text.length)
    }
  },
  computed: {
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(${this.text.length}, 30px)`, //Amount of columns from length of text
        //border: 'black solid 1px'
      }
    },
  }
}
</script>

<style scoped>
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

/*Grid*/
#grid {
  display: grid;
  grid-gap: .5px;
}

.grid-cell {
  box-shadow: 0px 0px 0px 1px lightslategray;
  height: 30px;
}
/*
.stitch-container {
  margin-bottom: 10px;
}

.purl {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  background-color: grey;
  margin-bottom: 2px;
}
.knit {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  background-color: white;
}*/
</style>