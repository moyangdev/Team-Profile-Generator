const Employee = require("./Employee");

//manager class extends employee class
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    //school method
    getSchool () {
        return this.school;
    }

    //role method
    getRole() {
        return 'Intern';
    }
}

//export code for other files to use
module.exports = Intern;