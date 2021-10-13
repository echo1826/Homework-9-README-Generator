// TODO: Include packages needed for this application
const fs = require('fs');
const inquire = require('inquirer');
const markdown = require('./utils/generateMarkdown');
const isValid = (value) => {
    if (value === '') {
        return "Please type in an answer";
    } else {
        return true;
    }
}
// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: "Name:",
        name: "name",
        validate: isValid
    },
    {
        type: 'input',
        message: "Github username:",
        name: "github",
        validate: isValid
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: "title",
        validate: isValid
    },
    {
        type: 'input',
        message: "Email:",
        name: "email",
        validate: isValid
    },
    {
        type: 'input',
        message: "Description of project:",
        name: "description",
        validate: isValid
    },
    {
        type: 'input',
        message: "Installation instructions:",
        name: "installation",
        validate: isValid
    },
    {
        type: 'input',
        message: "Usage:",
        name: "usage",
        validate: isValid
    },
    {
        type: 'list',
        message: "Choose a license:",
        name: "license",
        choices: ['MIT', 'Unlicense', 'Affero General Public License', 'General Public License',
            'Lesser General Public License', 'Mozilla Public License',
            'Apache License', 'Boost Software License', 'Eclipse Public License', 'BSD 2-Clause License', 'BSD 3-Clause License', 'No license'
        ]
    },
    {
        type: 'input',
        message: "How to contribute:",
        name: "contribute",
        validate: isValid
    },
    {
        type: 'input',
        message: "Testing commands:",
        name: "testing",
        validate: isValid
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
            console.log(response);
            console.log(markdown(response));
            writeToFile('testing.md', response);
        })
}

// Function call to initialize app
init();