<template>

  <div id="grid-container">
    <div id="grid" :style="gridStyle">

      <template v-for="(item, key) in binaryList" :key="key">
        <template v-for="(i, key) in item" :key="key">

          <div v-if="i === '0'" class="grid-cell dark-blue">
          </div>

          <div v-else-if="i === '1'" class="grid-cell white">
          </div>

        </template>
      </template>

    </div>
  </div>
</template>

<script>
//Component

export default {
  name: 'CreateChart',
  props: {
    binaryList: Array
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

#grid-container {
  overflow: auto;
}

#grid {
  display: inline-grid;

  border-bottom: 1px solid black;
  border-left: 1px solid black;
}

.grid-cell {
  border-top: 1px solid black;
  border-right: 1px solid black;
}

/*Grid color*/
.dark-blue {
  background-color: #264653;
}

.white {
  background-color: white;
}

/*Scroll bar*/
#grid-container::-webkit-scrollbar-track {
  background-color: lightgray;
}

#grid-container::-webkit-scrollbar {
  width: 1px;
  background-color: red;
}

#grid-container::-webkit-scrollbar-thumb {
  background-color: grey;
}

</style>