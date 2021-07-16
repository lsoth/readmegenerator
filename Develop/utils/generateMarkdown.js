const unLicense = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
const attributionLic = "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
const MITLic = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const MPL = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

const generateMarkdown = data => {


  return `
    # ${data.title}
    
    
    
    ## Description
    
    ${data.description1}
    
    ${data.description2}
    
    ## Table of Contents
    
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [Contributing](#contributing)
    4. [License](#license)
    5. [Tests](#tests)
    6. [Questions](questions)
    
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
    
    [${data.github}](https://github.com/${data.github})
    
    ## License`
}
  
module.exports = generateMarkdown;
  