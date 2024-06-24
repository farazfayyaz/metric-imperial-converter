/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btn = document.getElementById('btn')
let lengthDisplay = document.getElementById('length-display')
let volumeDisplay = document.getElementById('volume-display')
let massDisplay = document.getElementById('mass-display')


function length (input) {
    const feetConver = input * 3.281 
    const metersConvert = input / 3.281
    
    lengthDisplay.textContent = `${input} meters = ${feetConver.toFixed(3)} feet | ${input} feet = ${metersConvert.toFixed(3)} meters`
}

function volume (input) {
    const feetConver = input * 0.264 
    const metersConvert = input / 0.264
    
    volumeDisplay.textContent = `${input} liters = ${feetConver.toFixed(3)} gallons | ${input} gallons = ${metersConvert.toFixed(3)} liters`
}

function mass (input) {
    const feetConver = input * 2.204 
    const metersConvert = input / 2.204
    
    massDisplay.textContent = `${input} kilos = ${feetConver.toFixed(3)} pounds | ${input} pounds = ${metersConvert.toFixed(3)} kilos`
}


btn.addEventListener('click', function () {
    const userInput = Number(document.getElementById('input').value)
    
    length(userInput)
    volume(userInput)
    mass(userInput)

})
