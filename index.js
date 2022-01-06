// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a short description explaining the what, why, and how of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use. Include screenshots as needed.",
    name: "usage",
  },
  {
    type: "input",
    message: "List your collaborators, if any, with links to their GitHub profiles.",
    name: "credits",
  },
  {
    type: "list",
    message: "What license do you want to use?",
    name: "license",
    choices: ["Apache", "GPL-3.0", "MIT"],
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log("Your new README.md file is ready!")
  );
}

function init() {
  inquirer
      .prompt(questions)
      .then((response) => {
              console.log(response)
              let README = generateMarkdown(response)
              writeToFile("README.md", README)
          }

      );
}

init();




