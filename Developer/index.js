const inquirer = require('inquirer');


const generateMarkdown = require('./utils/generateMarkdown.js');
const { writeFile } = require('fs').promises;

console.log(generateMarkdown);

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
            type: 'input',
            message: 'Using full sentence structure, tell the reader about challenges you faced. If you did not face any, leave blank and hit return/enter.',
            name: 'challenges',
        },
        {
            type: 'input',
            message: 'Using full sentence structure, give step by step instructions on how to install your project. If there is no installation required, input "No installation required".',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Using full sentence structure, provide instructions & examples for use.',
            name: 'usage',
        },
        {
            type: 'confirm',
            message: 'Do you want to generate a Credits Section?',
            name: 'ruCollab',
        },
        {
            type: 'checkbox',
            message: 'Did you have any help with this? If so, select from the following:',
            choices: ['collaborators', 'third_party_assets_or_creators', 'tutorials', 'none'],
            name: 'collabOptions',
            when: (answers) => answers.ruCollab === true
        },
        {
            type: 'input',
            message: 'List any collaborators with links to their GitHub profiles.',
            name: 'collaborators',
            when: (answers) => answers.collabOptions && answers.collabOptions.includes('collaborators'),
        },
        {
            type: 'input',
            message: 'List third party assets/creators & links to their primary web presence in this section.',
            name: 'assets',
            when: (answers) => answers.collabOptions && answers.collabOptions.includes('third_party_assets_or_creators'),
        },
        {
            type: 'input',
            message: 'Provide the links to any tutorials you used. If not, leave blank and hit return/enter.',
            name: 'tutorials',
            when: (answers) => answers.collabOptions && answers.collabOptions.includes('tutorials'),
        },
        {
            type: 'confirm',
            message: 'Are you using a license?',
            name: 'ruLicense',
        },
        {
            type: 'list',
            message: 'What kind of license are you using?',
            choices: ['Apache_2.0', 'Boost_1.0', 'MIT'],
            name: 'licenseLink',
            when: (answers) => answers.ruLicense
        },
        {
            type: 'confirm',
            message: 'Are you using a badge?',
            name: 'ruBadge',
            when: (answers) => answers.ruLicense,
        },
        {
            type: 'confirm',
            message: 'Are any tests required?',
            name: 'ruTests',
        },
        {
            type: 'input',
            message: 'Input the reuired tests',
            name: 'tests',
            when: (answers) => answers.ruTests, 
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Please input your email address',
            name: 'email',
        }
    ])
};


//initialize app and write README.md file
const init = () => {
    promptUser()
    .then((answers) => writeFile('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully created README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();