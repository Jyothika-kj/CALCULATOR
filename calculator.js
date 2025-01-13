let currentInput = '';

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput || '0';
}

function appendToDisplay(value) {

    if (/[\+\-\*\/]$/.test(currentInput) && /[\+\-\*\/]/.test(value)) {
        return;
    }
    currentInput += value;
    updateDisplay();
}

function Result() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();

}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function toggleAdvanced() {
    const advancedButtons = document.getElementById('more-buttons');
    advancedButtons.style.display =
        advancedButtons.style.display === 'grid' ? 'none' : 'grid';
}

function calculateTrig(func) { 
    try {
        const lastNumber = parseFloat(currentInput.match(/(\d+\.?\d*)$/)[0]);
        const radian = lastNumber * (Math.PI / 180);
        let result;
        switch (func) {
            case 'sin':
                result = Math.sin(radian);
                break;
            case 'cos':
                result = Math.cos(radian);
                break;
            case 'tan':
                result = Math.tan(radian);
                break;
            default:
                result = 0;
        }
        currentInput = currentInput.replace(/(\d+\.?\d*)$/, result.toFixed(4));
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}