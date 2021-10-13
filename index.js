// TODO: Include packages needed for this application
const fs = require('fs');
const inquire = require('inquirer');
const markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: "Name:",
        name: "name"
    },
    {
        type: 'input',
        message: "Github username:",
        name: "github"
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: 'input',
        message: "Email:",
        name: "email"
    },
    {
        type: 'input',
        message: "Description of project:",
        name: "description"
    },
    {
        type: 'input',
        message: "Installation instructions:",
        name: "installation"
    },
    {
        type: 'input',
        message: "Usage:",
        name: "usage"
    },
    {
        type: 'list',
        message: "Choose a license:",
        name: "license",
        choices: ['MIT', 'Unlicense', 'Affero General Public License', 'General Public License', 'Lesser General Public License', 'Mozilla Public License', 'Apache License', 'Boost Software License']
    },
    {
        type: 'input',
        message: "How to contribute:",
        name: "contribute"
    },
    {
        type: 'input',
        message: "Testing commands:",
        name: "testing"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdown(data), (err) => {
        err ? console.error(err) : console.log("Success!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquire
        .prompt(questions)
        .then((response) => {
            // console.log(response.tableContents);
            // console.log(markdown(response));
            writeToFile('testing.md', response);
        })
}

// Function call to initialize app
init();