const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

function generateTeam(team) {
  let cards = []
  for(let i = 0; i < team.length; i++) {
    const teamArr = team[i];
    switch(teamArr.getRole()) {
      case 'Manager':
        const manager = new Manager(teamArr.name, teamArr.id, teamArr.email, teamArr.officeNumber);
        cards.push(generateManager(manager));
        break;
      case 'Engineer':
        const engineer = new Engineer(teamArr.name, teamArr.id, teamArr.email, teamArr.github);
        cards.push(generateEngineer(engineer));
        break;
      case 'Intern':
        const intern = new Intern(teamArr.name, teamArr.id, teamArr.email, teamArr.school);
        cards.push(generateIntern(intern));
        break;
    }
  }
  return cards.join(``)
}

let generateManager = (Manager) => {
  return `
  <div class="card m-1 shadow" style="width: 18rem">
    <div class='card-header bg-primary text-white'>
      <h3 class="card-title">${Manager.getName()}</h3>
      <h6 class="card-text"><i class="fa fa-mug-hot"></i> ${Manager.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto: ${Manager.getEmail()}">${Manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${Manager.getNumber()}</li>
      </ul>
    </div>
  </div>
  `
}

let generateEngineer = (Engineer) => {
  return `
  <div class="card m-1 shadow" style="width: 18rem">
    <div class='card-header bg-primary text-white'>
      <h3 class="card-title">${Engineer.getName()}</h3>
      <h6 class="card-text"><i class="fa fa-glasses"></i> ${Engineer.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto: ${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.getGithub()}" target="_blank">${Engineer.getGithub()}</a></li>
      </ul>
    </div>
  </div>
  `
};

let generateIntern = (Intern) => {
  return `
  <div class="card m-1 shadow" style="width: 18rem">
    <div class='card-header bg-primary text-white'>
      <h3 class="card-title">${Intern.getName()}</h3>
      <h6 class="card-text"><i class="fa fa-user-graduate"></i> ${Intern.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto: ${Intern.getEmail()}">${Intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${Intern.getSchool()}</li>
      </ul>
    </div>
  </div>
  `
}

function generatePage(team) {
  console.log(team)
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <title>Team Profile</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid bg-danger text-white">
    <h1 class="display-5 text-center">My Team</h1>
</div>
<div class="d-flex flex-row flex-wrap justify-content-center">
    ${generateTeam(team)}
</div>
</body>
</html>
    `
}

module.exports = generatePage;