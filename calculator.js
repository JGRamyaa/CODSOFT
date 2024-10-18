let display = document.getElementById('display');
let clearButton = document.getElementById('clear');
let backspaceButton = document.getElementById('backspace');
let equalsButton = document.getElementById('equals');

let currentNumber = '';
let previousNumber = '';
let operation = '';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;

        if (!isNaN(buttonText) || buttonText === '.') {
            currentNumber += buttonText;
            display.value = currentNumber;
        }

        if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            previousNumber = currentNumber;
            currentNumber = '';
            operation = buttonText;
        }

        if (buttonText === '=') {
            calculateResult();
        }

        if (buttonText === 'C') {
            clearCalculator();
        }

        if (buttonText === '⌫') {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
        }
    });
});

function calculateResult() {
    let result;

    switch (operation) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            result = currentNumber;
    }

    display.value = result;
    currentNumber = result.toString();
    previousNumber = '';
    operation = '';
}

function clearCalculator() {
    currentNumber = '';
    previousNumber = '';
    operation = '';
    display.value = '';
}
