// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
      return ""
  } else {
      return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/)
      `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
      return `https://choosealicense/com/license/${license}`
  } else {
      return "#";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
      return `This is the license used for this project ${renderLicenseLink}(license)}`;
  } else {
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title: ${data.title}
${renderLicenseBadge(data.license)}
## Table of contents
* [Description](#description)
* [Installation Instructions](#Installation-Instructions)
* [Credits](#Credits)
* [License](#License)
## Description 
${data.description}
## Installation Instructions
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License
${data.license}
`;
}

module.exports = generateMarkdown;