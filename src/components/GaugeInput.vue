<template>
    <label for="height">Height: </label>
    <input v-model="height" type="number" id="height" min="1" max="50">
    <label for="width">Width: </label>
    <input v-model="width" type="number" id="width" min="1" max="50"> 
</template>

<script>
export default {
    name: "GaugeInput",
    data() {
        return {
            height: '',
            width: ''
        }
    }
}
</script>

<style>


input[type=number] {
    margin-bottom: 20px;
    margin-right: 20px;
    width: 80px;
    padding: 5px 10px;
    box-sizing: border-box;
}
</style>