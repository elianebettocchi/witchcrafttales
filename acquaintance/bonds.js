
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('roles').addEventListener('click', function () {
        let drawValue = Math.floor(Math.random() * 16)
        document.getElementById('roles').src = `./npcs/${drawValue}.png`

    })

    addEventListener('click', function () {
        allDraws = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    })
})
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 