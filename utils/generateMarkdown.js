// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${response.title} \n\n## Description\n ${response.description}\n\n## Installation\n ${response.installation}\n\n## Usage\n ${response.usage}\n\n## Credits\n ${response.credits}\n\n## License\n ${response.license}\n\n`;
}

module.exports = generateMarkdown;

// inquirer.prompt(questions).then((response) => {
//  fs.appendFile("./utils/README.md", `# ${response.title} \n\n## Description\n ${response.description}\n\n## Installation\n ${response.installation}\n\n## Usage\n ${response.usage}\n\n## Credits\n ${response.credits}\n\n## License\n ${response.license}\n\n`, (err) =>
//  err ? console.error(err) : console.log("Answers logged!")
//  );
//  });
