<template>
    <div id="introduction">
        <h1>Welcome to Nerdy Stitch!</h1>
        <p>Combine your computer nerdiness with your choice of handiwork!</p>
    </div>
    <div id="card-container">
        <div class="card">
            <h1>Code</h1>
            <p>Translate a text to binary, morse or braille.</p>
                <RouterLink to="code">
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
}

.card > p {
    word-break: break-word !important;
    font-size: 14px;
}
</style>