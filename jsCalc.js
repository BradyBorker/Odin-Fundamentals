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
    if (operator == '+') console.log(add(num1,num2))
    else if (operator == '-') console.log(subtract(num1,num2))
    else if (operator == '*') console.log(multiply(num1,num2))
    else if (operator == '/') console.log(divide(num1,num2))
}

obj = {
    firstNumber: null,
    operator: null,
    secondNumber: null
}
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.className)
        if (e.target.className === 'number') {
            if (!obj.operator) {
                if (obj.firstNumber === null) obj.firstNumber = e.target.textContent;
                else obj.firstNumber += e.target.textContent;
                console.log(obj.firstNumber)
            }
        }else if (e.target.className === 'operator') {
            if (!obj.operator) obj.operator = e.target.textContent;
            console.log(obj.operator)
        }    
    })
})