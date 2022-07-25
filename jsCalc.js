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

function compute(className, obj) {
    const total = operate(Number(obj.firstNumber), Number(obj.secondNumber), obj.operator)
    if (className == 'operator') {
        mainDisplay.textContent = total;
    }else if (className == 'equals') {
        mainDisplay.textContent = total;
        subDisplay.textContent = obj.firstNumber + ' ' + obj.operator + ' ' + obj.secondNumber + ' ' + '=';
    }
    obj.firstNumber = total;
    obj.operator = null;
    obj.secondNumber = null;
}

function resetDisplay(mainDisplay, subDisplay, obj) {
    mainDisplay.textContent = 0;
    subDisplay.textContent = '';
    obj.firstNumber = null;
    obj.secondNumber = null;
    obj.operator = null;
}

function deleteNumber(mainDisplay, obj) {
    let update = mainDisplay.textContent.split('');
    update.pop()
    if (!obj.operator) {
        obj.firstNumber = update.join('')
    }else if (obj.operator) {
        obj.secondNumber = update.join('')
    }
    return update.join('');
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
                compute(e.target.className, obj)
            }
            if (!obj.operator && obj.firstNumber) {
                obj.operator = e.target.textContent;
                subDisplay.textContent = obj.firstNumber + ' ' +  obj.operator;
            }
        }else if (e.target.className == 'equals') {
            if (obj.secondNumber) {
                compute(e.target.className, obj)
            }   
        }else if (e.target.className == 'AC') {
            resetDisplay(mainDisplay, subDisplay, obj)
        }else if (e.target.className == 'delete') {
            mainDisplay.textContent = deleteNumber(mainDisplay, obj);
        }
    })
})