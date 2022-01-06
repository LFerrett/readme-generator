// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
    message: "What is your preferred method of communication?",
    name: "license",
    choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New or Revised License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License 3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1"],
  },
];

inquirer.prompt(questions).then((response) => {
fs.appendFile("./utils/README.md", `# ${response.title} \n\n## Description\n ${response.description}\n\n## Installation\n ${response.installation}\n\n## Usage\n ${response.usage}\n\n## Credits\n ${response.credits}\n\n## License\n ${response.license}\n\n`, (err) =>
err ? console.error(err) : console.log("Answers logged!")
);
});

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
