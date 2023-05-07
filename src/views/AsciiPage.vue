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

                    //Convert to black and white 
                    let pixel = pixels.data;
                    // loop through all pixels
                    // each pixel is decomposed in its 4 rgba values
                    for (let i = 0; i < pixel.length; i += 4) {
                        // get the medium of the 3 first values ( (r+g+b)/3 )
                        let med = (pixel[i] + pixel[i + 1] + pixel[i + 2]) / 3;
                        // set it to each value (r = g = b = med)
                        pixel[i] = pixel[i + 1] = pixel[i + 2] = med;
                        // we don't touch the alpha
                    }
                    // redraw the new computed image
                    ctx.putImageData(pixels, 0, 0);
                }
            };
        }

    }
}
</script>

