function add(a,b){
    let result = a + b
    displayThirdLine.textContent = result
}

function subtract(a,b){
    let result = a - b
    displayThirdLine.textContent = result
}
function multiply(a,b){
    let result = a * b
    displayThirdLine.textContent = result}

function divide(a,b){
    let result = a / b
    displayThirdLine.textContent = result}

function operate(operator,a, b){
    a = Number(a)
    b = Number(b)
    switch(operator){
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case 'x':
            return multiply(a,b)
        case '÷':
            return divide(a,b)
        default:
            return null
    }
}
const display = document.getElementById('textDisplay')
const displaySecondLine = document.getElementById('textDisplaySecondLine')
const displayThirdLine = document.getElementById('textDisplayThirdLine')
let displayContent = ""

const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')
const button5 = document.getElementById('button5')
const button6 = document.getElementById('button6')
const button7 = document.getElementById('button7')
const button8 = document.getElementById('button8')
const button9 = document.getElementById('button9')
const button0 = document.getElementById('button0')

const buttonEqual = document.getElementById('buttonEqual')
const buttonPlus = document.getElementById('buttonPlus')
const buttonMinus = document.getElementById('buttonMinus')
const buttonDiv = document.getElementById('buttonDiv')
const buttonMulti = document.getElementById('buttonMulti')

let operator = ""
let a = ''
let b = ''
buttonPlus.addEventListener('click',function(event){
    operator = "+"
    a = displayContent
    display.textContent = null
})
buttonMinus.addEventListener('click', function(event){
    operator = "-"
    a = displayContent
    display.textContent = null
})
buttonMulti.addEventListener('click', function(event){
    operator = "x"
    a = displayContent
    display.textContent =  null
})
buttonDiv.addEventListener('click',function(event){
    operator = "÷"
    a = displayContent
    display.textContent = null
}) 

buttonEqual.addEventListener('click',function(event){
    display.textContent = "="
    operate(operator,a,displayContent)
})

button1.addEventListener('click', function(event){
    display.textContent = display.textContent + 1
    displayContent = display.textContent 
})
button2.addEventListener('click', function(event){
    display.textContent = display.textContent + 2
    displayContent = display.textContent 
})
button3.addEventListener('click', function(event){
    display.textContent = display.textContent + 3
    displayContent = display.textContent 
})
button4.addEventListener('click', function(event){
    display.textContent = display.textContent + 4
    displayContent = display.textContent 
})
button5.addEventListener('click', function(event){
    display.textContent = display.textContent + 5
    displayContent = display.textContent 
})
button6.addEventListener('click', function(event){
    display.textContent = display.textContent + 6
    displayContent = display.textContent 
})
button7.addEventListener('click', function(event){
    display.textContent = display.textContent + 7
    displayContent = display.textContent 
})
button8.addEventListener('click', function(event){
    display.textContent = display.textContent + 8
    displayContent = display.textContent 
})
button9.addEventListener('click', function(event){
    display.textContent = display.textContent + 9
    displayContent = display.textContent 
})
button0.addEventListener('click', function(event){
    display.textContent = display.textContent + 0
    displayContent = display.textContent 
})


const clearButton = document.getElementById('clearButton')
clearButton.addEventListener('click',function(event){
    display.textContent = null
    displayThirdLine.textContent = null
})




