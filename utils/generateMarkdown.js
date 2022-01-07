function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else {
  if (license === "MIT") {
    return `[![License](https://img.shields.io/badge/License-${license}-yellow.svg)]
      `;
  }  else {
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
  if (license) {
    return `This is the license used for this project ${renderLicenseLink}(license)}`;
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  return `# Project Title: ${data.title}
${renderLicenseBadge(data.license)}
## Table of contents
* [Description](#description)
* [Installation Instructions](#installation)
* [Credits](#credits)
* [Features](#features)
* [How to Contribute](#contribute)
* [License](#license)
* [Tests](#tests)
## Description 
${data.description}
## Installation Instructions
${data.installation}
## Usage
${data.usage}
## Features
${data.features}
## How to Contribute
${data.contribute}
## Credits
${data.credits}
## License
${data.license}
## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
