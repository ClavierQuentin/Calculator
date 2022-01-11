function add(a,b){
    let result = a + b
    display.textContent = result
}

function subtract(a,b){
    let result = a - b
    display.textContent = result
}
function multiply(a,b){
    let result = a * b
    display.textContent = result}

function divide(a,b){
    let result = a / b
    display.textContent = result}

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

function removeColorGrey(){
    buttonPlus.classList.remove('greyColor')
    buttonMinus.classList.remove('greyColor')
    buttonMulti.classList.remove('greyColor')
    buttonDiv.classList.remove('greyColor')
}
function displayContent(value){
    display.textContent = display.textContent + value
    displayText = display.textContent
}
function operation(button,value){
    button.classList.add('greyColor')
    operator = value
    a = displayText
    display.textContent = null
}

const display = document.getElementById('textDisplay')
const displaySecondLine = document.getElementById('textDisplaySecondLine')
const displayThirdLine = document.getElementById('textDisplayThirdLine')
let displayText = null

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
const button = document.getElementsByTagName('button')

let operator = null
let a = 0
let b = ''
buttonPlus.addEventListener('click',function(event){
   buttonPlus.classList.add('greyColor')
   if(operator != null){
       operate(operator,a,displayText)
       a = display.textContent
   }
    else{operation(buttonPlus, "+")}
})
buttonMinus.addEventListener('click', function(event){
    operation(buttonMinus, "-")
})
buttonMulti.addEventListener('click', function(event){
    operation(buttonMulti, "x")
})
buttonDiv.addEventListener('click',function(event){
    operation(buttonDiv, "÷")
}) 

buttonEqual.addEventListener('click',function(event){
    operate(operator,a,displayText)
    displayText = display.textContent
    removeColorGrey()
})

button1.addEventListener('click', function(event){
    displayContent(1)
})
button2.addEventListener('click', function(event){
    displayContent(2) 
})
button3.addEventListener('click', function(event){
    displayContent(3) 
})
button4.addEventListener('click', function(event){
    displayContent(4) 
})
button5.addEventListener('click', function(event){
    displayContent(5) 
})
button6.addEventListener('click', function(event){
    displayContent(6) 
})
button7.addEventListener('click', function(event){
    displayContent(7) 
})
button8.addEventListener('click', function(event){
    displayContent(8) 
})
button9.addEventListener('click', function(event){
    displayContent(9) 
})
button0.addEventListener('click', function(event){
    displayContent(0)
})


const clearButton = document.getElementById('clearButton')
clearButton.addEventListener('click',function(event){
    display.textContent = null
    displayThirdLine.textContent = null
    operator = null
    a = 0
    displayText = 0
    removeColorGrey()
})




