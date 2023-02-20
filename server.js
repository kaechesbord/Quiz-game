const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris",
    isAnswered: false
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    answer: "Jupiter",
    isAnswered: false
  },
  {
    question: 'Who is the author of "To Kill a Mockingbird"?',
    choices: [
      "Harper Lee",
      "Mark Twain",
      "Charles Dickens",
      "William Shakespeare",
    ],
    answer: "Harper Lee",
    isAnswered: false
  },
  {
    question:
      'Which function is used to serialize an object into a JSON string in Javascript?',
    choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
    answer: 'stringify()',
  },
  {
    question:
      'Which of the following keywords is used to define a variable in Javascript?',
    choices: ['var', 'let', 'var and let', 'None of the above'],
    answer: 'var and let',
    isAnswered: false
  },
  {
    question:
      'Which of the following methods can be used to display data in some form using Javascript?',
    choices: [
      'document.write()',
      'console.log()',
      'window.alert',
      'All of the above',
    ],
    answer: 'All of the above',
    isAnswered: false
  },
  {
    question: 'How can a datatype be declared to be a constant type?',
    choices: ['const', 'var', 'let', 'constant'],
    answer: 'const',
    isAnswered: false
  },
];

app.get("/questions", (req, res) => {
  const num = Math.floor(Math.random() * questions.length)
  res.send(questions[num]);
});
app.post("/questions", (req, res) => {
  const setData = () => {
    res.send(req.body.answer) 
    req.body.isAnswered = true
  }
  const newQuestions = questions.filter((question) =>
    question.answer === req.body.answer ? setData()  : null
  );
  newQuestions.map((question) => !question.isAnswered)
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});