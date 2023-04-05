<template>
    <h1>ASCII PAGE</h1>
    <form>
        <input type="file" id="file-input" ref="image">
        <button type="button" @click="generateAsciiArt">Generate ASCII Art</button>
    </form>
</template>

<script>
export default {
    name: "AsciiPage",
    methods: {
        generateAsciiArt() {
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
                    
                }
                // Use image processing library to convert image to ASCII art
                //const asciiArt = convertToAsciiArt(imageDataUrl);
                // Display the ASCII art on the webpage
                //asciiArtDiv.innerText = asciiArt;
            };

        }
    }
}
</script>

