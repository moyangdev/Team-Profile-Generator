const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generatePage = require('./src/page-template');


// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description of your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide installation instructions:",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide usage information:",
        },
        {
            type: "input",
            name: "contribution",
            message: "What are the contribution guidelines?"
        },
        {
            type: "input",
            name: "test",
            message: "What are the test instructions?"
        },
        {
            type: "list",
            name: "license",
            message: "Please select a license for your application from the list of options:",
            choices: ['MIT', 'GNU', 'Apache', 'BSD', 'ISC', 'Other']
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub Username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        }
    ]

// TODO: Create a function to initialize app and write README file
const init = () => {
    return inquirer.prompt(questions)
    .then(answers => {
        const data = generatePage(answers);
        console.log(answers);
        fs.writeFile('./dist/index.html', data, err => {
        if(err) throw new Error(err);
            console.log('Team Profile page is created!');
        });
    });
}

// copying file
const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Stylesheet created!'
        });
      });
    });
  };

// Function call to initialize app
init();
copyFile();

