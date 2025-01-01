// JavaScript to handle calculator operations
let currentInput = '0'; // Store the current input
let previousInput = ''; // Store the previous input (for operations)
let operator = ''; // Store the current operator

// Reference to the display element
const display = document.getElementById('display');

// Function to update the display
function updateDisplay() {
    display.textContent = currentInput;
}

// Function to handle number input
function inputNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

// Function to handle operator input
function inputOperator(op) {
    if (currentInput === '') return; 
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Function to calculate the result
function calculate() {
    if (operator === '' || previousInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error'; // Handle division by zero
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

// Function to clear the calculator
function clearCalculator() {
    currentInput = '0';
    previousInput = '';
    operator = '';
    updateDisplay();
}

// Add event listeners to buttons
document.getElementById('clear').addEventListener('click', clearCalculator);
document.getElementById('equals').addEventListener('click', calculate);
document.getElementById('add').addEventListener('click', () => inputOperator('+'));
document.getElementById('subtract').addEventListener('click', () => inputOperator('-'));
document.getElementById('multiply').addEventListener('click', () => inputOperator('*'));
document.getElementById('divide').addEventListener('click', () => inputOperator('/'));

document.getElementById('zero').addEventListener('click', () => inputNumber('0'));
document.getElementById('one').addEventListener('click', () => inputNumber('1'));
document.getElementById('two').addEventListener('click', () => inputNumber('2'));
document.getElementById('three').addEventListener('click', () => inputNumber('3'));
document.getElementById('four').addEventListener('click', () => inputNumber('4'));
document.getElementById('five').addEventListener('click', () => inputNumber('5'));
document.getElementById('six').addEventListener('click', () => inputNumber('6'));
document.getElementById('seven').addEventListener('click', () => inputNumber('7'));
document.getElementById('eight').addEventListener('click', () => inputNumber('8'));
document.getElementById('nine').addEventListener('click', () => inputNumber('9'));
