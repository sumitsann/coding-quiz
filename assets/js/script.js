let time = 75;
let runningTimer = 0;
let score = 0;
let userName = "";
let questionNumber;
let finalScore = 0;
const MAX_HIGH_SCORE = 5;
const startButton = document.getElementById("startButton");
const questionContainer = document.getElementById("questionsContainer");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const countdown = document.getElementById("timerArea");
const scoreArea = document.getElementById("scoreArea");
const highScoreButton = document.getElementById("showScoresButton");
let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

startButton.addEventListener("click", startGame);
highScoreButton.addEventListener("click", displayscores);

// starting game function

function startGame() {
  startButton.classList.add("hide");
  scoreArea.classList.add("hide");
  answerButtons.classList.remove("hide");
  questionNumber = 0;
  questionContainer.classList.remove("hide");
  scoreArea.innerHTML = "";
  startClock();
  displayQuestion();
}

// function to display the questions

function displayQuestion() {}

// displaying score function

function displayscores() {}
