<template>
    <label for="height">Height: </label>
    <input v-model="height" type="number" id="height" min="1" max="50">
    <label for="width">Width: </label>
    <input type="number" id="width" min="1" max="50"> 
</template>

<script>
export default {
    name: "GaugeInput",
    data() {
        return {
            height: ''
        }
    }
}
</script>