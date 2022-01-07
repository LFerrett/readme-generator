const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "list",
    message: "What license do you want to use?",
    name: "license",
    choices: ["MIT", "ISC", "none"],
  },
  {
    type: "input",
    message:
      "If you would like other developers to contribute, include the guidelines here:",
    name: "contribute",
  },
  {
    type: "input",
    message: "Lists the tests you've created and examples on how to run them:",
    name: "tests",
  },
  {
    type: "input",
    message: "Please provide your Github Username:",
    name: "github",
  },
  {
    type: "input",
    message: "Please enter your email address:",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter your full name:",
    name: "name",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Your new README.md file is ready!")
  );
}

function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    let README = generateMarkdown(response);
    writeToFile("./output/README.md", README);
  });
}

init();
