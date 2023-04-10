<template>
    <h1>ASCII PAGE</h1>
    <form>
        <input type="file" id="file-input" ref="image">
        <button type="button" @click="generateAsciiArt">Generate ASCII Art</button>
    </form>
    <canvas id="canvas"></canvas>
</template>

<script>
export default {
    name: "AsciiPage",
    methods: {
        generateAsciiArt() {
            //Get canvas
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");

            // Read the contents of those image file    
            const input_image = this.$refs.image.files[0];

            //Asynchronously read the contents of image file
            const reader = new FileReader();
            reader.readAsDataURL(input_image);

            reader.onload = () => {
                const imageDataUrl = reader.result;
                const image = new Image();
                image.src = imageDataUrl;

                image.onload = () => {

                    canvas.width = image.width;
                    canvas.height = image.height;

                    //Put image on canvas
                    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

                    //Get pixel data
                    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    console.log(pixels)
                }
            };
        }
    }
}
</script>

