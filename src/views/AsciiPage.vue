<template>
    <h1>Generate ASCII Art</h1>
    <form>
        <input type="file" id="file-input" ref="image">
        <button type="button" @click="generateAsciiArt">Generate ASCII Art</button>
    </form>
    <canvas id="canvas"></canvas>

    <div v-if="this.imageAscii.length > 0">
        <CreateChart :binaryList="imageAscii" />
    </div>
    

</template>

<script>
import CreateChart from '@/components/CreateChart.vue';

export default {
    name: "AsciiPage",
    data() {
        return {
            imageAscii: [''],
        }
    },
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

                    //Get pixel data from image
                    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

                    //Convert image to black&White from pixeldata
                    const pixel = this.convertBlackWhite(pixels);

                    //Redraw the new computed image in black and white
                    ctx.putImageData(pixels, 0, 0);

                    //List of cells containing their symbol and position (x and y)
                    const cells = this.binaryCell(pixel, canvas.height, canvas.width)

                    //Clear canvas
                    ctx.clearRect(0, 0, image.width, image.height);

                    //Fill canvas with cells
                    for (let i = 0; i < cells.length; i++) {
                        ctx.font = "55px Verdana";
                        ctx.fillStyle = "black";
                        ctx.fillText(cells[i].symbol, cells[i].x, cells[i].y);
                    }
                }
            };
        },
        binaryCell(pixelData, height, width) {
            //String that is later split into a list to generate chart
            let binaryStr = "";
            //The cells are used to draw the ASCII art on the canvas
            let binaryCell = [];

            for (let y = 0; y < height; y += 50) {
                for (let x = 0; x < width; x += 50) {
                    const posX = x * 4; // current position
                    const posY = y * 4;
                    const pos = (posY * width) + posX;

                    const red = pixelData[pos];
                    const green = pixelData[pos + 1];
                    const blue = pixelData[pos + 2];
                    //Combine the colors together
                    const total = red + green + blue; 
                    //Get average color value
                    const averageColorValue = total / 3;

                    const symbol = this.convertToBinary(averageColorValue);
                    //Binary cells consists of its symbol and positions
                    binaryCell.push({ "symbol": symbol, "x": x, "y": y });
                    //Add symbol to string
                    binaryStr += symbol;
                }
                //Each row is separated by -
                binaryStr += "-";
            }

            //Split by - into an array
            const binaryArray = binaryStr.split("-");

            //Remove last empty list item
            binaryArray.pop();

            //Set array
            this.imageAscii = binaryArray;

            return binaryCell;
        },
        convertBlackWhite(pixelData) {
            //Convert to black and white// 
            let pixel = pixelData.data;

            // loop through all pixelszx
            // each pixel is decomposed in its 4 rgba values
            for (let i = 0; i < pixel.length; i += 4) {

                // get the medium of the 3 first values ( (r+g+b)/3 )
                let med = (pixel[i] + pixel[i + 1] + pixel[i + 2]) / 3;

                // set it to each value (r = g = b = med)
                pixel[i] = pixel[i + 1] = pixel[i + 2] = med;
                // we don't touch the alpha
            }

            return pixel;
        },
        convertToBinary(value) {
            if (value > 125) {
                return "1"
            }
            else {
                return "0"
            }
        }
    },
    components: {
    CreateChart
  }
}
</script>


<style>
canvas {
    width: 1000px;
}
</style>