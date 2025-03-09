const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = null;
let firstOperand = null;
let secondOperand = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            clearDisplay();
        } else if (value === '±') {
            toggleSign();
        } else if (value === '%') {
            percentage();
        } else if (value === '=') {
            calculate();
        } else if (['+', '-', '*', '/'].includes(value)) {
            setOperator(value);
        } else {
            appendNumber(value);
        }
    });
});

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}

function toggleSign() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

function percentage() {
    if (currentInput !== '') {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }
}

function setOperator(op) {
    if (currentInput === '') return;
    if (firstOperand !== null) {
        calculate();
    }
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
}

function calculate() {
    if (operator === null || currentInput === '') return;
    secondOperand = currentInput;

    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}