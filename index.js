const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generatePage = require('./src/page-template');

const team = [];

const managerQuestions = () => {
    return inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is the team manager's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('Please enter a team manager name!');
            return false;
            }
        }
        },
        {
        type: "input",
        name: "id",
        message: "Please enter an employee ID (Required)",
        validate: idInput => {
            if (idInput) {
            return true;
            } else {
            console.log('Please enter an employee ID!');
            return false;
            }
        }
        },
        {
        type: "input",
        name: "email",
        message: "Please enter an email address (Required)",
        validate: emailInput => {
            if (emailInput) {
            return true;
            } else {
            console.log('Please enter an email address!');
            return false;
            }
        }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter an email address (Required)",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                return true;
                } else {
                console.log('Please enter an email address!');
                return false;
                }
            }
            },
        {
        type: "list",
        name: "addTeamMember",
        message: "Please choose if you would like to add additional team members:",
        choices: ['Add Engineer', 'Add Intern', 'No more members'],
        validate: addTeamMemberInput => {
            if (addTeamMemberInput) {
                return true;
            } else {
                console.log('You need to make a selection!');
                return false;
            }
        }
        }
    ])
    .then ((managerAnswers) => {
        const manager = new Manager (managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber)
        team.push (manager)
        switch(managerAnswers.addTeamMember) {
            case 'Add Engineer':
                engineerQuestions();
                break;
            case 'Add Intern':
                internQuestions();
                break;
            default: 
            writeToFile('dist/index.html', generatePage(team))
        }
    }
    )
};

const engineerQuestions = () => {
    return inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is the engineer's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('Please enter a name!');
            return false;
            }
        }
        },
        {
        type: "input",
        name: "id",
        message: "Please enter an employee ID (Required)",
        validate: idInput => {
            if (idInput) {
            return true;
            } else {
            console.log('Please enter an employee ID!');
            return false;
            }
        }
        },
        {
        type: "input",
        name: "email",
        message: "Please enter an email address (Required)",
        validate: emailInput => {
            if (emailInput) {
            return true;
            } else {
            console.log('Please enter an email address!');
            return false;
            }
        }
        },
        {
        type: 'input',
        name: 'github',
        message: 'Please enter a GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
            return true;
            } else {
            console.log('Please enter a GitHub username!');
            return false;
            }
        }
        },
        {
        type: "list",
        name: "addTeamMember",
        message: "Please choose if you would like to add additional team members:",
        choices: ['Add Engineer', 'Add Intern', 'No more members'],
        validate: addTeamMemberInput => {
            if (addTeamMemberInput) {
                return true;
            } else {
                console.log('You need to make a selection!');
                return false;
            }
        }
        }
    ])
    .then ((engineerAnswers) => {
        const engineer = new Engineer (engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github)
        team.push (engineer)
        switch(engineerAnswers.addTeamMember) {
            case 'Add Engineer':
                engineerQuestions();
                break;
            case 'Add Intern':
                internQuestions();
                break;
            default: 
            writeToFile('dist/index.html', generatePage(team))
        }
    }
    )
};

const internQuestions = () => {
    return inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is the interns's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('Please enter a name!');
            return false;
            }
        }
        },
        {
        type: "input",
        name: "id",
        message: "Please enter an employee ID (Required)",
        validate: idInput => {
            if (idInput) {
            return true;
            } else {
            console.log('Please enter an employee ID!');
            return false;
            }
        }
        },
        {
        type: "input",
        name: "email",
        message: "Please enter an email address (Required)",
        validate: emailInput => {
            if (emailInput) {
            return true;
            } else {
            console.log('Please enter an email address!');
            return false;
            }
        }
        },
        {
        type: 'input',
        name: 'school',
        message: 'Please enter a school name (Required)',
        validate: schoolInput => {
            if (schoolInput) {
            return true;
            } else {
            console.log('Please enter school name!');
            return false;
            }
        }
        },
        {
        type: "list",
        name: "addTeamMember",
        message: "Please choose if you would like to add additional team members:",
        choices: ['Add Engineer', 'Add Intern', 'No more members'],
        validate: addTeamMemberInput => {
            if (addTeamMemberInput) {
                return true;
            } else {
                console.log('You need to make a selection!');
                return false;
            }
        }
        }
    ])
    .then ((internAnswers) => {
        const intern = new Intern (internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)
        team.push (intern)
        switch(internAnswers.addTeamMember) {
            case 'Add Engineer':
                engineerQuestions();
                break;
            case 'Add Intern':
                internQuestions();
                break;
            default: 
            writeToFile('dist/index.html', generatePage(team))
        }
    }
    )
};

managerQuestions();

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('Page created! Check out index.html in this directory to see it!')
    });
};


// .then(promptAddMemeber)
// .then(teamData => {
//     const pageHTML = generatePage(teamData);

//     fs.writeFile('./dist/index.html', pageHTML, err => {
//     if (err) throw new Error(err);

//     console.log('Page created! Check out index.html in this directory to see it!');
//     });
// });



// const promptAddMemeber = teamData => {
// console.log(`
// =================
// Add a New Team Memeber
// =================
// `);


// // If there's no 'projects' array property, create one
// if (!teamData.projects) {
//     teamData.projects = [];
// }
// return inquirer
//     .prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is the name of your project? (Required)',
//         validate: nameInput => {
//         if (nameInput) {
//             return true;
//         } else {
//             console.log('You need to enter a project name!');
//             return false;
//         }
//         }
//     },
//     {
//         type: 'input',
//         name: 'link',
//         message: 'Enter the GitHub link to your project. (Required)',
//         validate: linkInput => {
//         if (linkInput) {
//             return true;
//         } else {
//             console.log('You need to enter a project GitHub link!');
//             return false;
//         }
//         }
//     },
//     {
//         type: 'confirm',
//         name: 'confirmAddProject',
//         message: 'Would you like to enter another project?',
//         default: false
//     }
//     ])
//     .then(memberData => {
//     teamData.projects.push(memberData);
//     if (memberData.confirmAddProject) {
//         return promptAddMemeber(teamData);
//     } else {
//         return teamData;
//     }
//     });
// };

// managerQuestions()
// .then(promptAddMemeber)
// .then(teamData => {
//     const pageHTML = generatePage(teamData);

//     fs.writeFile('./dist/index.html', pageHTML, err => {
//     if (err) throw new Error(err);

//     console.log('Page created! Check out index.html in this directory to see it!');
//     });
// });

