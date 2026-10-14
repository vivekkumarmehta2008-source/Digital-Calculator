const display = document.getElementById('display');

// Append character or operator to the screen
function appendValue(value) {
    display.value += value;
}

// Clear the entire screen (AC)
function clearDisplay() {
    display.value = '';
}

// Delete the last character (DE)
function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

// Evaluate the math expression safely
function calculate() {
    try {
        // Use standard Function evaluation for basic safety over raw eval()
        if (display.value !== '') {
            display.value = Function(`"use strict"; return (${display.value})`)();
        }
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500); // Reset screen automatically after an error
    }
}

