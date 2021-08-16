const readlineSync = require("readline-sync");
const chalk = require("chalk");
let score = 0;
let userName = readlineSync.question("PLEASE ENTER YOUR NAME: ");

console.log(
  chalk.blue("\nWELCOME " + userName.toUpperCase() + " TO - GET TO KNOW ME\n")
);
