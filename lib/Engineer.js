const Employee = require("./Employee");

//manager class extends employee class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    //github method
    getGithub () {
        return this.github;
    }

    //role method
    getRole() {
        return 'Engineer';
    }
}

//export code for other files to use
module.exports = Engineer;