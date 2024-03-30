#! /usr/bin/env node
import inquirer from "inquirer";
// printing a wellcome Message
console.log("\n\wellcome to \ 'codewithfizzakhan\' -cLI simple calculator\n ");
// Asking Question from users through Inquirer
const answer = await inquirer.prompt([{ message: "enter first Number:", type: "Number", name: "firstNumber" },
    { message: "enter second Number:", type: "Number", name: "secondNumber" },
    { message: "select one of the operators to perform operation", type: "list", name: "operator", choices: ["Addition", "subtraction", "multiplication", "division"], },
]);
//conditional statement if else
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
