<template>
  <div class="stitch-container">

      <div class="purl">
      </div>
      <p>Purl</p>

      <div class="knit">
      </div>
      <p>Knit</p>

      <div class="space">
      </div>
      <p>Space</p>
    
  </div> 

  <div id="grid" :style="gridStyle">
    <template v-for="(item, index) in text" :key="index">

      <!--If 0-->
      <div v-if="item === '0'" class="grid-cell" v-bind:style="[{ 'background-color': '#264653' }]">
      </div>

      <!-- If 1-->
      <div v-else-if="item === '1'" class="grid-cell" v-bind:style="[{ 'background-color': 'white' }]">
      </div>

      <!--If space (' ')-->
      <div v-else class="grid-cell" v-bind:style="[{ 'background-color': 'red' }]">
      </div>

    </template>
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