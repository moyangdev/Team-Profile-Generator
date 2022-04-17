const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    //create new employee test example
    const employee = new Employee('Dave', 2, 'test@example.com');
    //check employee name
    expect(employee.name).toEqual(expect.any(String));
    //check employee id
    expect(employee.id).toEqual(expect.any(Number));
    //check employee email
    expect(employee.email).toContain('@');
    //check employee role
    expect(employee.getRole()).toEqual('Employee');;
});