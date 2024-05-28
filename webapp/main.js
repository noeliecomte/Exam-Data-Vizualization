const counterDisplay = document.getElementById('counter');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');

let count = 0;

increaseButton.addEventListener('click', function() {
    count++;
    counterDisplay.textContent = count;
});

decreaseButton.addEventListener('click', function() {
    count--;
    counterDisplay.textContent = count;
});

resetButton.addEventListener('click', function() {
    count = 0;
    counterDisplay.textContent = count;
});
