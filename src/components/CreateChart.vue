<template>
  <div class="chart-input-container">
    <ChartOption />
  </div>
    
</template>

<script>
import ChartOption from "./ChartOption.vue"

export default {
    name: 'CreateChart',
    components: {
      ChartOption
    }
}
</script>

<style scoped>
.chart-input-container {
  border: black 1px solid;
  width: 600px;
  margin: 0 auto;
  padding: 30px;
}
</style>