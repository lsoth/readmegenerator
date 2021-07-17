// variables used to generate license badge

const UnLicense = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
const attributionLic = "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
const MITLic = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const MPL = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";


let licenseBadge;

function renderLicenseBadge(data) {
  if (data.license === 'MIT') {
    licenseBadge = MITLic
  }else if (data.license === 'UnLicense'){
    licenseBadge = UnLicense
  }else if (data.license === 'Attribution License (BY)'){
    licenseBadge = attributionLic
  }else if (data.license === 'Mozilla Public License 2.0'){
    licenseBadge = MPL
  }
};

//function to generate contents of README 

const generateMarkdown = data => {

  renderLicenseBadge(data)

  return `# ${data.title}
    
  ${licenseBadge}
    
  ## Description
    
  ${data.description1}
    
  ${data.description2}
    
  ## Table of Contents
    
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [Questions](#questions)
    
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
    
  ${data.testcommands}
    
    
  ## Questions
    
  If you have any questions or concerns you can reach me at : 
    
  ${data.email}
    
  or on my github
    
  [${data.github}](https://github.com/${data.github})
  `
}
  
module.exports = generateMarkdown;
  