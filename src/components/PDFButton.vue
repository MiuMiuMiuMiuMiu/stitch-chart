<template>
    <button @click="downloadPDF()" >Download</button>
</template>

<script>
//import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default {
    name: "PDFButton",
    methods: {
        downloadPDF() {
            let pattern = document.querySelector("#pattern");
            pattern.classList.add("rotatePattern");

            html2canvas(pattern,  {scale: 3}).then(function(canvas) {
                let base64image = canvas.toDataURL();
                console.log(base64image);
                /*
                let pdf = new jsPDF('p', 'px', [1600, 1131]);
                pdf.addImage(base64image, 'PNG', 12, 12, 1110, 360);
                pdf.save('binary.pdf')
                */
            });
            
            pattern.classList.remove("rotatePattern");
        }
    }
}
</script>

<style>
.rotatePattern {
  transform: rotate(90deg);
  width: max-content;
}
</style>