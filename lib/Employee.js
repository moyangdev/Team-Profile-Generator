//employee class

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //name method
    getName () {
        return this.name;
    }

    //id method
    getId () {
        return this.id;
    }

    //email method
    getEmail () {
        return this.email;
    }

    //role method
    getRole() {
        return 'Employee';
    }
}

//export code for other files to use
module.exports = Employee;