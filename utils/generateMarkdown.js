function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else {
    if (license === "MIT") {
      return `[![License](https://img.shields.io/badge/License-${license}-yellow.svg)]
      `;
    } else {
      return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]
      `;
    }
  }
}

function renderLicenseLink(license) {
  if (license) {
    return `https://choosealicense/com/license/${license}`;
  } else {
    return "#";
  }
}

function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    if (license === "MIT") {
      return `This project is covered under the MIT License.`;
    } else {
      if (license === "ISC") {
      return `This project is covered under the ISC License.`;
      }
    }
  }
}

function renderGitHubLink(github) {
  if (github) {
    return `https://www.github.com/${github}`;
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  return `# Project Title: ${data.title}

${renderLicenseBadge(data.license)}
## Table of contents
* [Description](#description)
* [Installation](#installation)
* [License](#license)
* [How to Contribute](#contribute)
* [Tests](#tests)
* [Questions](#questions)

## Description 
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
[${renderLicenseSection(data.license)}](${renderLicenseLink(data.license)})
Copyright (c) 2022 ${data.name}

## How to Contribute
${data.contribute}

## Tests
${data.tests}

## Questions?
Visit my Github Repo at: ${renderGitHubLink(data.github)} | Email me at: ${
    data.email
  }
`;
}

module.exports = generateMarkdown;
