const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    //create new manager test example
    const manager = new Manager('Dave', 2, 'test@example.com', 1);
    //check manager name
    expect(manager.name).toEqual(expect.any(String));
    //check manager id
    expect(manager.id).toEqual(expect.any(Number));
    //check manager email
    expect(manager.email).toContain('@');
    //check manager office number
    expect(manager.officeNumber).toEqual(expect.any(Number));
    //check manager role
    expect(manager.getRole()).toEqual('Manager');
});