const Employee = require("./Employee");

//manager class extends employee class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    //office phone method
    getNumber () {
        return this.officeNumber;
    }

    //role method
    getRole() {
        return 'Manager';
    }
}

//export code for other files to use
module.exports = Manager;