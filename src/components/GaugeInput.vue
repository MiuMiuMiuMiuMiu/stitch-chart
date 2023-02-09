<template>
    <label for="height">Height: </label>
    <input v-model="height" type="number" id="height">
    <label for="width">Width: </label>
    <input type="number" id="width"> 
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