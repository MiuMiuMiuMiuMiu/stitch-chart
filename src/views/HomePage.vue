<template>
    <div id="introduction">
        <h1>Nerdy Stitch - where technology meets crafting.</h1>
        <p>Transform any text into Binary, Morse or Braille code, and creates a chart for your use</p>
    </div>
    <div id="card-container">
        <div class="card">
            <h1>Code</h1>
            <p>Translate your text into Binary, Morse, or Braille code and generate a chart.</p>
                <RouterLink to="code">
                    <button>GO</button>
                </RouterLink>
        </div>

        <div class="card">
            <h1>ASCII</h1>
            <p>Upload an image to create ASCII Art and generate a chart based on it.</p>
                <RouterLink to="ascii">
                    <button>GO</button>
                </RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePage"
}
</script>

<style>

/*Intro*/
#introduction {
    text-align: center;
    margin: 50px;
}

#introduction > h1 {
    font-size: 28px;
    margin-bottom: 30px;
}

#introduction > p {
    font-size: 16px;
    word-break: break-word !important;
}

/*Cards*/
#card-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.card {
    text-align: center;
    border: 2px solid #073b4c;
    width: 250px;
    padding: 20px;
    margin: 10px;
}

.card > p {
    word-break: break-word !important;
    font-size: 14px;
}
</style>