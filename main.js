document.querySelector('#converterOne').addEventListener('click', conversionOne)
document.querySelector('#converterTwo').addEventListener('click', conversionTwo)

function conversionOne(){
// celsius input
let temp = document.querySelector('#celsiusInput').value
//convert it
temp = temp * 9/5 + 32
//show it
document.querySelector('#fahrenheitConversion').innerText = `${temp} °F`
}

function conversionTwo(){
// fahrenheit input
let temp = document.querySelector('#fahrenheitInput').value
//convert it
temp = (temp - 32) * 5/9
//show it
document.querySelector('#celsiusConversion').innerText = `${temp} °C`
}
