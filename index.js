<script src="index.html"></script>

fetch("http://localhost:9292/games")
.then(response => response.json())
.then(games => {
    console.log(games)
})