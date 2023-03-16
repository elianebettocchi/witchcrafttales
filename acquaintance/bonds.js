
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('events').addEventListener('click', function () {
        let rolledValue = Math.floor(Math.random() * 43)
        document.getElementById('events').src = `./events/${rolledValue}.png`

    })

    addEventListener('click', function () {
        allRolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    })
})
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('roles').addEventListener('click', function () {
        let drawValue = Math.floor(Math.random() * 16)
        document.getElementById('roles').src = `./roles/${drawValue}.png`

    })

    addEventListener('click', function () {
        allDraws = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    })
})