const start = document.querySelector("#startButton");
const timer = document.querySelector("#timer");
const quizPanel = document.querySelector("#quizPanel");
const scorePanel = document.querySelector("#score-panel");
const question = document.querySelector("#question");
const choiceA = document.querySelector("#a");
const choiceB = document.querySelector("#b");
const choiceC = document.querySelector("#c");
const choiceD = document.querySelector("#d");

const userInfoPanel = document.querySelector("#user-info-panel");
const highScorePanel = document.querySelector("#high-score-panel");
const submitUser = document.querySelector("#submitUser");

var highScore = localStorage.getItem("highScore");

let userInitial;
let score = 0;
let timeLeft = 0;
let timeInterval;
scorePanel.hidden = true;
quizPanel.hidden = true;
userInfoPanel.hidden = true;
highScorePanel.hidden = true;

//start the quiz after clicking start
start.addEventListener("click", startQuiz);

function startQuiz() {
  start.disabled = true;
  quizPanel.hidden = false;
  scorePanel.hidden = false;

  timeLeft = 20;

  timeInterval = setInterval(function () {
    timeLeft -= 1;
    timer.innerHTML = " Time Left: " + timeLeft;
    if (timeLeft == 0) {
      clearInterval(timeInterval);
      quizPanel.hidden = true;
      userInfoPanel.hidden = false;
      highScorePanel.hidden = false;
    }
  }, 1000);

  generateNextQuestion();
}

let questions = [
  {
    question: "Which tag is used to list items with bullets?",
    choiceA: "<bullet>…</bullet>",
    choiceB: "<list>…</list>",
    choiceC: "<ul>…</ul>",
    choiceD: "<ol>…</ol>",
    answer: 3,
  },
  {
    question: "How to define a link that should open in a new page in HTML?",
    choiceA:
      "<a href = “https://stackhowto.com” target = “blank”>Click Here</a>",
    choiceB:
      "<a href = “https://stackhowto.com” target =“_blank”>Click Here</a>",
    choiceC:
      "<a href = “https://stackhowto.com” target = “#blank”>Click Here</a>",
    choiceD:
      "<a href = “https://stackhowto.com” target = “@blank”>Click Here</a>",
    answer: 2,
  },
  {
    question: "The first page of a website is called _____.",
    choiceA: "Design page",
    choiceB: "Home page",
    choiceC: "Front page",
    choiceD: "Main page",
    answer: 2,
  },
  {
    question: "How to define a background image for a web page?",
    choiceA: "<body background = “test.jpg”>",
    choiceB: "<body background image = “test.jpg”>",
    choiceC: "<background = “test.jpg”>",
    choiceD: "<background image = “test.jpg”>",
    answer: 1,
  },
  {
    question: "The Head tag is used for?",
    choiceA: "Writing CSS styles",
    choiceB: " Writing Javascript",
    choiceC: " Including CSS and JS files",
    choiceD: "All the answers are true",
    answer: 4,
  },
];

var finalQuestionIndex = questions.length;
let currentQuestionIndex = 0;
let correct;

let currentQuestion;
function generateNextQuestion() {
  currentQuestion = questions[currentQuestionIndex];
  question.innerText = currentQuestion.question;
  choiceA.innerText = currentQuestion.choiceA;
  choiceB.innerText = currentQuestion.choiceB;
  choiceC.innerText = currentQuestion.choiceC;
  choiceD.innerText = currentQuestion.choiceD;

  console.log(currentQuestionIndex);
  console.log(finalQuestionIndex);
}

function checkAnswer(answer) {
  correct = questions[currentQuestionIndex].answer;

  if (answer == correct && currentQuestionIndex != finalQuestionIndex) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex == finalQuestionIndex) {
    quizPanel.hidden = true;
    userInfoPanel.hidden = false;
    highScorePanel.hidden = false;
    timer.hidden = true;
  } else {
    generateNextQuestion();
  }

  scorePanel.innerHTML = "Score: " + score;

  submitUser.addEventListener("click", function addUserData() {
    userInitial = document.getElementById("userInitial").value;
    if (userInitial.length == 2) {
      if (highScore != null) {
        if (score > highScore) localStorage.setItem("highScore", score);
        highScorePanel.innerHTML = "High Score:" + highScore;
      }
    } else {
      alert("Please Enter 2 Letters");
    }
  });
}
