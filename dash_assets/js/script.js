// JavaScript
const timer = document.getElementById("timer");
let timeInput1 = document.getElementById("time");
let timeInput2 = document.getElementById("time2");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start");
const startButton2 = document.getElementById("breakbtn");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const pomdoro_btn = document.querySelector('.p_btn')
let backBtn = document.querySelector('.c_btn')
let reportBtn = document.querySelector('.ri_btn')
let dailygoal = document.querySelector('.dg_btn')

let countDown;
let isBreak = false;

function startTimer() {
  // Get the time from the input field
  let time = timeInput1.value * 60; // Convert minutes to seconds

  // Update the timer display
  minutesDisplay.textContent = timeInput1.value;
  secondsDisplay.textContent = "00";

  // Start the countdown
  countDown = setInterval(() => {
    // Decrement the time
    time--;

    // Update the timer display
    minutesDisplay.textContent = Math.floor(time / 60);
    secondsDisplay.textContent = time % 60;

    // If the timer has reached 0, stop the countdown and reset the timer
    if (time === 0) {
      clearInterval(countDown);
      minutesDisplay.textContent = timeInput1.value;
      secondsDisplay.textContent = "00";
      isBreak = true;
    }
  }, 1000);
}

function startBreak() {
  // Get the time from the input field
  let time = timeInput2.value * 60; // Convert minutes to seconds

  // Update the timer display
  minutesDisplay.textContent = timeInput2.value;
  secondsDisplay.textContent = "00";

  // Start the countdown
  countDown = setInterval(() => {
    // Decrement the time
    time--;

    // Update the timer display
    minutesDisplay.textContent = Math.floor(time / 60);
    secondsDisplay.textContent = time % 60;

    // If the timer has reached 0, stop the countdown and reset the timer
    if (time === 0) {
      clearInterval(countDown);
      minutesDisplay.textContent = timeInput2.value;
      secondsDisplay.textContent = "00";
      isBreak = true;
    }
  }, 1000);
}


function startPOM() {
  // Get the time from the input field
  let time = 25 * 60; // Convert minutes to seconds

  // Update the timer display
  minutesDisplay.textContent = timeInput1.value;
  secondsDisplay.textContent = "00";

  // Start the countdown
  countDown = setInterval(() => {
    // Decrement the time
    time--;

    // Update the timer display
    minutesDisplay.textContent = Math.floor(time / 60);
    secondsDisplay.textContent = time % 60;

    // If the timer has reached 0, stop the countdown and reset the timer
    if (time === 0) {
      clearInterval(countDown);
      minutesDisplay.textContent = '25';
      secondsDisplay.textContent = "00";
      isBreak = true;
    }
  }, 1000);
}



function stopTimer() {
  // Stop the countdown
  clearInterval(countDown);
}

function resetTimer() {
  // Stop the countdown and reset the timer
  clearInterval(countDown);
  minutesDisplay.textContent = timeInput1.value;
  minutesDisplay.textContent = timeInput2.value;
  secondsDisplay.textContent = "00";
  isBreak = false;
}

// Add event listeners to the buttons
startButton.addEventListener("click", () => {
  if (!isBreak) startTimer();
});
startButton2.addEventListener("click", () => {
  if (!isBreak) startBreak();
});
pomdoro_btn.addEventListener("click", () => {
  if (!isBreak) startPOM();
});



stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer)
backBtn.addEventListener("click", () => location.assign('dashboard.html'))
reportBtn.addEventListener("click", () => location.assign('report.html'))
dailygoal.addEventListener("click", () => location.assign('dailygoal.html'))
