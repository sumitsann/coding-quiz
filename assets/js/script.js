const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Which tag is used to list items with bullets?",
    choice1: "<bullet>…</bullet>",
    choice2: "<list>…</list>",
    choice3: "<ul>…</ul>",
    choice4: "<ol>…</ol>",
    answer: 2,
  },
  {
    question: "How to define a link that should open in a new page in HTML?",
    choice1:
      "<a href = “https://stackhowto.com” target = “blank”>Click Here</a>",
    choice2:
      "<a href = “https://stackhowto.com” target =“_blank”>Click Here</a>",
    choice3:
      "<a href = “https://stackhowto.com” target = “#blank”>Click Here</a>",
    choice4:
      "<a href = “https://stackhowto.com” target = “@blank”>Click Here</a>",
    answer: 1,
  },
  {
    question: "The first page of a website is called _____.",
    choice1: "Design page",
    choice2: "Home page",
    choice3: "Front page",
    choice4: "Main page",
    answer: 1,
  },
  {
    question: "How to define a background image for a web page?",
    choice1: "<body background = “test.jpg”>",
    choice2: "<body background image = “test.jpg”>",
    choice3: "<background = “test.jpg”>",
    choice4: "<background image = “test.jpg”>",
    answer: 0,
  },
  {
    question: "The Head tag is used for?",
    choice1: "Writing CSS styles",
    choice2: " Writing Javascript",
    choice3: " Including CSS and JS files",
    choice4: "All the answers are true",
    answer: 3,
  },
];

//constant declaration
const BONUS_POINT = 10;
const MAX_QUESTIONS = 5;

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = questions;
  getNewQuestion();
}

function getNewQuestion() {
  if (availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
    return window.location.assign("./highscores.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];

  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
}

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    var classToApply = "incorrect";
    if (selectedAnswer - 1 == currentQuestion.answer) {
      classToApply = "correct";
    } else {
      classToApply = "incorrect";
    }

    console.log(classToApply);
    getNewQuestion();
  });
});

startGame();
