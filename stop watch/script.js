let timer;
let running = false;
let startTime;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

startStopBtn.addEventListener('click', () => {
    if (running) {
        stopTimer();
    } else {
        startTimer();
    }
});

resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplay, 1000);
    startStopBtn.textContent = 'Stop';
    running = true;
}

function stopTimer() {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    startStopBtn.textContent = 'Start';
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    startTime = Date.now();
    elapsedTime = 0;
    updateDisplay();
    startStopBtn.textContent = 'Start';
    running = false;
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    let totalSeconds = Math.floor(elapsedTime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
