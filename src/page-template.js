const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

// create the team section
const generateteam = teamArr => {
  return `
      <div class="flex-row justify-space-between">
      ${teamArr
        .map(({name, id, email, officeNumber, github, school}) => {
          return `
          <div class="card m-1 shadow" style="width: 18rem">
          <div class='card-header text-dark'>
            <h3 class="card-title">${name}</h3>
            <h6 class="card-text"><i class="fa fa-mug-hot"></i> </h6>
          </div>
          <div class="card-body text-dark">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email: ${email}</li>
              <li class="list-group-item">Office Number: ${officeNumber}</li>
              <li class="list-group-item">Github: ${github}</li>
              <li class="list-group-item">School: ${school}</li>
            </ul>
          </div>
        </div>
        `;
        })
        .join('')}
      </div>
  `;
};

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
    <h1 class="display-4 text-center">My Team</h1>
</div>
<div>
<h3>${generateteam(team)}</h3>
</div>
</body>
</html>
    `
}

module.exports = generatePage;