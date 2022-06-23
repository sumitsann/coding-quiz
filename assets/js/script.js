const start = document.querySelector("#start-button");
const displayTime = document.querySelector("#display-time");
const operationDiv = document.querySelector("#operation");

const questionPanel = document.querySelector(".hide");

questionPanel.hidden = true;

let highScore = 0;
let score = 0;
let correctAnswer = 0;

let timerInterval;
let timeLeft = 0;

start.addEventListener("click", startGame);

window.onload = function () {
  let browserScore = localStorage.getItem("highScore");
  if (browserScore != undefined) highScore = browserScore;
  document.getElementById("highScore").innerHTML = "High Score: " + highScore;
};
function startGame() {
  timeLeft = 15;
  questionPanel.hidden = false;
  start.disabled = true;
  nextQuestion();

  displayTime.hidden = false;

  timerInterval = setInterval(function () {
    timeLeft -= 1;
    displayTime.innerHTML = " Time Left: " + timeLeft;
    if (timeLeft == 0) {
      clearInterval(timerInterval);
      questionPanel.hidden = true;
      start.disabled = false;
    }
  }, 1000);
}

function nextQuestion() {
  let firstNum = Math.floor(Math.random() * 12);
  let secondNum = Math.floor(Math.random() * 12);
  correctAnswer = firstNum * secondNum;
  operationDiv.innerHTML = firstNum + "*" + secondNum;

  // set the button to have random answers and one should be the correct answer

  let wrongAnswer1 =
    Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
  let wrongAnswer2 =
    Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
  let wrongAnswer3 =
    Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);
  let wrongAnswer4 =
    Math.floor(Math.random() * 12) * Math.floor(Math.random() * 12);

  document.querySelector("#btn1").innerHTML = wrongAnswer1;
  document.querySelector("#btn2").innerHTML = wrongAnswer2;
  document.querySelector("#btn3").innerHTML = wrongAnswer3;
  document.querySelector("#btn4").innerHTML = wrongAnswer4;
  let correctAnswerIndex = Math.floor(Math.random() * 4 + 1);
  let correctAnswerID = "btn" + correctAnswerIndex;
  document.getElementById(correctAnswerID).innerHTML = correctAnswer;
}

function checkAnswer(buttonIndex) {
  let answer = document.getElementById("btn" + buttonIndex).innerHTML;
  if (answer == correctAnswer) {
    score++;
    document.getElementById("currentScore").innerHTML = "Score: " + score;
  }

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    document.getElementById("highScore").innerHTML = "High Score: " + highScore;
  }
  nextQuestion();
}
