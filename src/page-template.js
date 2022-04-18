const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

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
  <title>Team Profile</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid bg-danger text-white">
    <h1 class="display-4 text-center">My Team</h1>
</div>
</body>
</html>
    `
}

module.exports = generatePage;