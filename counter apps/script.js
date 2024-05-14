let counter = 0;

const counterElement = document.getElementById('counter');
const parityElement = document.getElementById('parity');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

function updateCounter() {
    counterElement.textContent = counter;
    parityElement.textContent = counter % 2 === 0 ? 'Even' : 'Odd';
}

incrementButton.addEventListener('click', () => {
    counter++;
    updateCounter();
});

decrementButton.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
    }
    updateCounter();
});

resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

// Initialize counter display
updateCounter();
