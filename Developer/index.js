// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const fs = require('fs');


const generateMarkdown = require('./utils/generateMarkdown.js');
const { writeFile } = require('fs').promises;

console.log(generateMarkdown);

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Using full sentence structure, what was your motivation?',
            name: 'motivation',
        },
        {
            type: 'input',
            message: 'Using full sentence structure, why did you build this project?',
            name: 'build',
        },
        {
            type: 'input',
            message: 'Using full sentence structure, what problem does it solve?',
            name: 'problem',
        },
        {
            type: 'input',
            message: 'Using full sentence structure, what did you learn?',
            name: 'learn',
        },
        {
        type: 'confirm',
        message: 'Are you using a license?',
        name: 'ruLicnese'
        },
    ])
};
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
// }

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((answers) => writeFile('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully created README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();