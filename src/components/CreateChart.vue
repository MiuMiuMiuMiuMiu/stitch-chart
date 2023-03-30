<template>
  <div class="stitch-container">

      <div class="purl">
      </div>
      <p>Purl</p>

      <div class="knit">
      </div>
      <p>Knit</p>

      <div @click="printOut()">
        Button
      </div>
    
  </div> 

  <div id="grid" :style="gridStyle">
    <template v-for="(item, index) in binaryList" :key="index">

      <template v-for="(i, index) in item" :key="index">
        <div v-if="i === '0'" class="grid-cell" v-bind:style="[{ 'background-color': '#264653' }]">
        </div>

        <div v-else-if="i === '1'" class="grid-cell" v-bind:style="[{ 'background-color': 'white' }]">
        </div>
      </template>

    </template>
  </div>
</template>

<script>
export default {
  name: 'CreateChart',
  props: {
    binaryList: Array
  },
  data() {
    return {
      columns: this.binaryList[0].length,
    }
  },
  methods: {
    printOut() {
      console.log(this.binaryList[0].length)
    }
  },
  computed: {
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(${this.binaryList[0].length}, 30px)`, //Amount of columns from length of text
        gridTemplateRows: `repeat(${this.binaryList.length}, 30px)`
        //border: 'black solid 1px'
      }
    }
  }
}
</script>

<style scoped>
/*Grid*/
#grid {
  display: grid;
  grid-gap: .5px;
  overflow: auto;
  padding: 1px;
}

.grid-cell {
  box-shadow: 0px 0px 0px 1px lightslategray;
  height: 30px;
}

/*Scroll bar*/
#grid::-webkit-scrollbar-track
{
  background-color: lightgray;
}

#grid::-webkit-scrollbar
{
  width: 1px;
  background-color: red;
}

#grid::-webkit-scrollbar-thumb
{
  background-color: grey;
}

/*Stitch instructions*/
.stitch-container {
  margin-bottom: 10px;
  display: flex;
}
.stitch-container > div {
 margin-right: 5px;
}
.stitch-container > p {
 margin-right: 20px;
}
.purl {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  background-color: #264653;
  margin-bottom: 2px;
}
.knit {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  background-color: white;
}
.space {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  background-color: red;
}
</style>