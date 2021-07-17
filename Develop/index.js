 // TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require('inquirer');
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown');

const writeREADME = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description1',
        message: 'Give a brief description of what problem this project solves:'
    },
    { 
        type:'input',
        name:'description2',
        message: 'How does this project solve the problem?',

    },
    {
        type:'input',
        name:'installation',
        message:'What are your instructions for installation?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions?'
    },
    { 
        type:'input',
        name:'contributing',
        message: 'If someone wanted to contribute, how would they do it?',

    },
    {
        type: 'list',
        message: 'What licence would you like to use?',
        name: 'license',
        choices: ['MIT', 'UnLicense', 'Attribution License (BY)', 'Mozilla Public License 2.0'],
    },
    {
        type:'input',
        name:'testslib',
        message:'What library/libraries were used to test the functionality?',
    },
    {
        type: 'input',
        name: 'testcommands',
        message: 'What commands are necessary to test functionality?'
    },
    { 
        type:'input',
        name:'email',
        message: 'What is your email address?',

    },
    {
        type:'input',
        name:'github',
        message:'What is your github username?',
    }
];

// TODO: Create a function to initialize app
const init = async () => {
    const data = await inquirer.prompt (questions);
    const newREADME = generateMarkdown(data);
    await writeREADME(`${data.title}.md`, newREADME)
}

// Function call to initialize app
init();
