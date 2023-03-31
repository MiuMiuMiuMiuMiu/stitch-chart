<template>
    <button @click="downloadPDF()">Download</button>
</template>

<script>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default {
    name: "PDFButton",
    methods: {
        downloadPDF() {
            //Get div of pattern
            let pattern = document.querySelector("#pattern");
            //Add class to rotate div and set max-content so html2canvas can capture entire div
            pattern.classList.add("rotatePattern");

            //Create pdf
            html2canvas(pattern, { scale: 3}).then(function (canvas) {
                let base64image = canvas.toDataURL();                
                let pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height], true);
                pdf.addImage(base64image, 'PNG', 0, 0, canvas.width, canvas.height);
                pdf.save('codeChart.pdf')
            });

            //Remove rotation and max-content
            pattern.classList.remove("rotatePattern");
        }
    }
}
</script>

<style>
.rotatePattern {
    transform: rotate(90deg);
    width: max-content;
    padding: 10px;
}
</style>