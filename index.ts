#!/usr/bin/env node
import inquirer from "inquirer";
do {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter your first Number :"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter your second Number :"
        },
        {
            type: "list",
            name: "operator",
            choices: ["+", "-", "*", "/"],
            message: "Select your operator"
        }

    ])
    const { num1, num2, operator } = answer
    if (num1 && num2 && operator) {
        let result: number = 0;
        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "*") {
            result = num1 * num2;
        } else if (operator === "/") {
            result = num1 / num2;
        }
        console.log("Answer :", result)
    } else { " Kindly Enter a valid operator" }


} while (true)









