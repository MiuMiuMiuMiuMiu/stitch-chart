<template>
  <div>
    <h1>Class</h1>
    <div id="grid" :style="gridStyle">
      <template v-for="(item, index) in text" :key="index">
        <div class="grid-cell" v-bind:style= "[item === '0' ? {'background-color': 'grey'} : {'background-color': 'white'}]">
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
        gridTemplateColumns: `repeat(${this.text.length}, 50px)`, //Amount of columns from length of text
        //border: 'black solid 1px'
      }
    },
  }
}
</script>

<style scoped>
#grid {
  display: grid;
  grid-gap: 1px;
}

.grid-cell {
  box-shadow: 0px 0px 0px 1px black;
  height: 50px;
}
</style>