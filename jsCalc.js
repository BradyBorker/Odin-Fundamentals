function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2 
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if (operator == '+') return add(num1,num2)
    else if (operator == '-') return subtract(num1,num2)
    else if (operator == '*') return multiply(num1,num2)
    else if (operator == '/') return divide(num1,num2)
}

function resetDisplay(mainDisplay, subDisplay, obj) {
    mainDisplay.textContent = 0;
    subDisplay.textContent = '';
    obj.firstNumber = null;
    obj.secondNumber = null;
    obj.operator = null;
}

obj = {
    firstNumber: null,
    operator: null,
    secondNumber: null
}
const buttons = document.querySelectorAll("button");
const mainDisplay = document.querySelector('.main-display');
const subDisplay = document.querySelector('.sub-display');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.className)
        if (e.target.className === 'number') {
            if (!obj.operator) {
                if (obj.firstNumber === null) obj.firstNumber = e.target.textContent;
                else obj.firstNumber += e.target.textContent;
                mainDisplay.textContent = obj.firstNumber
            }else if (obj.operator) {
                if (obj.secondNumber == null) obj.secondNumber = e.target.textContent;
                else obj.secondNumber += e.target.textContent;
                mainDisplay.textContent = obj.secondNumber;
            }
        }else if (e.target.className === 'operator') {
            if (obj.secondNumber) {
                // Compute
                const total = operate(Number(obj.firstNumber), Number(obj.secondNumber), obj.operator)
                obj.firstNumber = total;
                mainDisplay.textContent = obj.firstNumber;
                obj.operator = null;
                obj.secondNumber = null;
            }
            if (!obj.operator) {
                obj.operator = e.target.textContent;
                subDisplay.textContent = obj.firstNumber + obj.operator;
            }
            console.log(obj.operator)
        }else if (e.target.className == 'equals') {
            // Compute
            if (obj.secondNumber) {
                const total = operate(Number(obj.firstNumber), Number(obj.secondNumber), obj.operator)
                mainDisplay.textContent = total;
                subDisplay.textContent = obj.firstNumber + obj.operator + obj.secondNumber + '=';
                obj.firstNumber = total;
                obj.operator = null;
                obj.secondNumber = null;
            }
            
        }else if (e.target.className == 'AC') {
            resetDisplay(mainDisplay, subDisplay, obj)
        }
    })
})