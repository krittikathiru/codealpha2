let display = document.getElementById('display');
let currentInput = '';
let isResultDisplayed = false;

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function appendToDisplay(value) {
    if (isResultDisplayed) {
        currentInput = '';
        isResultDisplayed = false;
    }
    if (currentInput === '' && value === '.') {
        currentInput = '0.';
    } else {
        currentInput += value;
    }
    display.textContent = currentInput;
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        isResultDisplayed = true;
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
