// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

const generateMarkdown = data => {
  return `
# ${data.title}

## License

## Description

${data.description1}

${data.description2}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [Questions](questions)

## Installation

${data.installation}

## Usage 

${data.usage}

## Contributing

${data.contributing}

## Tests

The following libraries were used for testing this software :

${data.testslib}

The commands necessary to test this softare include :

${data.testscommands}


## Questions

If you have any questions or concerns you can reach me at : 

${data.email}

or on my github

[${data.github}](https://github.com/${data.github})`
}

module.exports = generateMarkdown;
