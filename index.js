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
    type: "input",
    message: "If your project has a lot of features, list them here.",
    name: "features",
  },
  {
    type: "input",
    message:
      "If you would like other developers to contribute, include the guidelines here:",
    name: "contribute",
  },
  {
    type: "input",
    message: "List any collaborators you would like to give credit to.",
    name: "credits",
  },
  {
    type: "list",
    message: "What license do you want to use?",
    name: "license",
    choices: ["MIT", "ISC", "IPL-1.0", "none"],
  },
  {
    type: "input",
    message: "Lists the tests you've created and examples on how to run them:",
    name: "tests",
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