// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
// Create an array of question objects for inquirer prompt
function askUser() {
    inquirer.prompt(
    [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What does your project do?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How can a user install the project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How can a user use the project?',
        name: 'usage'
    },
    {
        type: 'list',
        choices: ['MIT', 'Creative Commons', 'GNU', 'Unlicensed'],
        message: 'What license will you be using?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Test Instructions',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'List your contributors',
        name: 'contribution'
    }
]).then((response) => response)
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf-8', (err) => {
        err ? console.error(err) : console.log('Log created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is the name of your project?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'What does your project do?',
                name: 'description'
            },
            {
                type: 'input',
                message: 'How can a user install the project?',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'How can a user use the project?',
                name: 'usage'
            },
            {
                type: 'list',
                choices: ['MIT', 'Creative Commons', 'GNU', 'Unlicensed'],
                message: 'What license will you be using?',
                name: 'license'
            },
            {
                type: 'input',
                message: 'List your credits',
                name: 'credits'
            },
            {
                type: 'input',
                message: 'Test Instructions',
                name: 'tests'
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'github'
            },
            {
                type: 'input',
                message: 'What is your email',
                name: 'email'
            },
            {
                type: 'input',
                message: 'List your contributors',
                name: 'contribution'
            }
        ]).then((response) => {
            console.log(response)
            const __file = './markdown/README.md';
            writeToFile(__file, generateMarkdown(response));
        })

        
}

// Function call to initialize app
init();