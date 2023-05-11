document.getElementById("button").addEventListener("click", function() {
    document.body.style.backgroundImage="url('thegif.gif')"
    document.querySelector(".contents").style.display="none"
    var song = document.getElementById("audio")
    song.play()
})