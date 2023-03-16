document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('callings').addEventListener('click', function () {
        let drawValue = Math.floor(Math.random() * 24)
        document.getElementById('callings').src = `./cards/${drawValue}.png`

    })

    addEventListener('click', function () {
        allDraws = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    })
})