const readlineSync = require("readline-sync");
var getDayOfTheWeekForUserDate = require("./lab2").getDayOfTheWeek;

var makeCalender = require("./lab2").makeCalender;

makeCalender();

//wait for user's reponse
const month = readlineSync.question("What is the month: ");
const day = readlineSync.question("What is the day: ");
const year = readlineSync.question("What is the year: ");

console.log(getDayOfTheWeekForUserDate(Number(year),month,Number(day)));