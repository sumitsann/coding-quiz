const startBtn = document.querySelector("#start-btn");
const questionContainerElement = document.querySelector("#question-container");
const questionElement = document.querySelector("#question");
const answerButtonsElement = document.querySelector("#answer-buttons");
let shuffledQuestions, currentQuestionIndex;

startBtn.addEventListener("click", startGame);

// function to start the game

function startGame() {
  startBtn.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  console.log(shuffledQuestions);
  questionContainerElement.classList.remove("hide");
  showQuestion(0);
}

function showQuestion(currentQuestionIndex) {
  questionElement.innerText = questions[0].question;
  console.log(questions.question);
}

const questions = [
  {
    question: "JavaScript is the programming language of the",
    answers: [
      { text: "desktop", correct: false },
      { text: "mobile", correct: false },
      { text: "web", correct: true },
      { text: "server", correct: false },
    ],
  },
  {
    question: " Which type of JavaScript language is",
    answers: [
      { text: "Object-oriented", correct: false },
      { text: "Object-based", correct: true },
      { text: "Functional programming", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question:
      "Which of the following statement(s) is true about the JavaScript?",
    answers: [
      { text: "desktop", correct: false },
      { text: "mobile", correct: false },
      { text: "web", correct: true },
      { text: "server", correct: false },
    ],
  },
  {
    question: "JavaScript is the programming language of the",
    answers: [
      {
        text: "It is a scripting language used to make the website interactive",
        correct: true,
      },
      {
        text: "It is an advanced version of Java for Desktop and Mobile application development",
        correct: false,
      },
      {
        text: "It is a markup language of Java to develop the webpages",
        correct: false,
      },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question:
      "Which property is used to define the HTML content to an HTML element with a specific id?",
    answers: [
      { text: "innerText", correct: false },
      { text: "innerContent", correct: false },
      { text: "elementText", correct: false },
      { text: "innerHTML", correct: true },
    ],
  },
];
