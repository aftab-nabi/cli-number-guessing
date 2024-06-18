#! /usr/bin/env node
// in package.json
//   "publishConfig": {
// "access": "public"
//   "bin": "index.js",
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "user_GuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6: ",
    },
]);
if (answers.user_GuessedNumber === randomNumber) {
    console.log("Your guess is correct🎈🎇🎆");
}
else {
    console.log("Please try again😡");
}
