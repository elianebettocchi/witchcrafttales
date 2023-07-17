document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('itens').addEventListener('click', function () {
        let drawValue = Math.floor(Math.random() * 25)
        document.getElementById('itens').src = `./cards/${drawValue}.png`

    })

    addEventListener('click', function () {
        allDraws = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    })
})
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 