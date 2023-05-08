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

                    
                    //Convert to black and white// 
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
                    

                    let binaryCell = [];
                    for(let y = 0; y < image.height; y += 250) {
                        for (let x = 0; x < image.width; x += 250) {
                            const posX = x * 4; // current position
                            const posY = y * 4;
                            const pos = (posY * image.width) + posX;

                            const red = pixel[pos];
                            const green = pixel[pos + 1];
                            const blue = pixel[pos + 2];
                            const total = red + green + blue;
                            const averageColorValue = total/3;

                            //console.log(averageColorValue);

                            const symbol = this.convertToBinary(averageColorValue);
                            binaryCell.push(symbol);
                        }
                    }

                    console.log(binaryCell);

                }
            };
        },
        convertToBinary(value) {
            if (value > 125) {
                return "0"
            }
            else {
                return "1"
            }
        }

    }
}
</script>


<style>
canvas {
  width: 150px;
}

</style>