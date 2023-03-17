setInterval(setClock, 1000)

const second = document.getElementById('hand-second'); 
const minute = document.getElementById('hand-minute');
const hour = document.getElementById('hand-hour');

function setClock() {
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) /60
    const HourRatio = (minuteRatio + currentDate.getHours()) / 12

setRotation(second, secondRatio)
setRotation(minute, minuteRatio)
setRotation(hour, HourRatio)

}

function setRotation(e, rotationRatio) {
    e.style.setProperty('--rotation', rotationRatio*360)
}

setClock()