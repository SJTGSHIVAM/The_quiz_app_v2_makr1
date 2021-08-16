const readlineSync = require("readline-sync");
const chalk = require("chalk");
let score = 0;
let userName = readlineSync.question("PLEASE ENTER YOUR NAME: ");

console.log(
  chalk.blue("\nWELCOME " + userName.toUpperCase() + " TO - GET TO KNOW ME\n")
);

const ynQuestions = [
  {
    question: "Do I watch sports? ",
    answer: ["No", "Yes"],
    correct: 0,
    weitgh: 1,
    type: "normal",
    wrongAlert: "No I usually dont!",
    id: 1,
  },
  {
    question: "Do I like poetry? ",
    answer: ["No", "Yes"],
    correct: 1,
    weitgh: 2,
    type: "bonus",
    wrongAlert: "Yes I do.",
    id: 2,
  },
  {
    question: "Do I know how to fly? ",
    answer: ["No", "Yes"],
    correct: 0,
    weitgh: 1,
    type: "normal",
    wrongAlert: "I wish I could.",
    id: 3,
  },
  {
    question: "Do I enjoy non-veg food? ",
    answer: ["No", "Yes"],
    correct: 1,
    weitgh: 1,
    type: "normal",
    wrongAlert: "Not a big fan but yes",
    id: 4,
  },
  {
    question: "Am I a cruel person? ",
    answer: ["No", "Yes"],
    correct: 1,
    weitgh: 2,
    type: "bonus",
    wrongAlert: "Being cruel is being real",
    id: 5,
  },
  {
    question: "Do I like cats? ",
    answer: ["No", "Yes"],
    correct: 1,
    weitgh: 2,
    type: "bonus",
    wrongAlert: "What on earth makes you think that",
    id: 6,
  },
  {
    question: "Do I like dogs?",
    answer: ["No", "Yes"],
    correct: 1,
    weitgh: 1,
    type: "normal",
    wrongAlert: "Dogs are love",
    id: 7,
  },
  {
    question: "Do you think that you know me?",
    answer: ["No", "Yes"],
    correct: 1,
    weitgh: 1,
    type: "normal",
    wrongAlert: "have some confidence",
    id: 8,
  },
  {
    question: "Do I eat a lot?",
    answer: ["No", "Yes"],
    correct: 0,
    weitgh: 1,
    type: "normal",
    wrongAlert: "Too lazy to eat",
    id: 9,
  },
  {
    question: "Do I eat a lot?",
    answer: ["No", "Yes"],
    correct: 0,
    weitgh: 1,
    type: "normal",
    wrongAlert: "Too lazy to eat",
    id: 10,
  },
];
