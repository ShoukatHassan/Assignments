const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

function updateDisplay() {
    display.innerText = displayValue;
}

function handleNumber(number) {
    if (waitingForSecondValue) {
        displayValue = number;
        waitingForSecondValue = false;
    } else {
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
}

function handleOperator(nextOperator) {
    const value = parseFloat(displayValue);

    if (operator && waitingForSecondValue) {
        operator = nextOperator;
        return;
    }

    if (firstValue === null) {
        firstValue = value;
    } else if (operator) {
        const result = performCalculation[operator](firstValue, value);
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstValue = result;
    }

    waitingForSecondValue = true;
    operator = nextOperator;
}

const performCalculation = {
    '/': (firstValue, secondValue) => firstValue / secondValue,
    '*': (firstValue, secondValue) => firstValue * secondValue,
    '+': (firstValue, secondValue) => firstValue + secondValue,
    '-': (firstValue, secondValue) => firstValue - secondValue,
    '=': (firstValue, secondValue) => secondValue
};

function resetCalculator() {
    displayValue = '0';
    firstValue = null;
    operator = null;
    waitingForSecondValue = false;
}

function handlePlusMinus() {
    displayValue = displayValue.charAt(0) === '-' ? displayValue.slice(1) : `-${displayValue}`;
}

function handlePercent() {
    const value = parseFloat(displayValue);
    displayValue = `${value / 100}`;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const { innerText: buttonValue } = button;

        switch (buttonValue) {
            case 'AC':
                resetCalculator();
                break;
            case '+/-':
                handlePlusMinus();
                break;
            case '%':
                handlePercent();
                break;
            case '÷':
                handleOperator('/');
                break;
            case '×':
                handleOperator('*');
                break;
            case '+':
                handleOperator('+');
                break;
            case '−':
                handleOperator('-');
                break;
            case '=':
                handleOperator('=');
                break;
            case '.':
                if (!displayValue.includes('.')) {
                    displayValue += '.';
                }
                break;
            default:
                handleNumber(buttonValue);
        }

        updateDisplay();
    });
});
