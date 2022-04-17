const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    //create new manager test example
    const manager = new Manager('Dave', 2, 'test@example.com', 800-222-3333);
    //check employee name
    expect(manager.name).toEqual(expect.any(String));
    //check employee id
    expect(manager.id).toEqual(expect.any(Number));
    //check employee email
    expect(manager.email).toContain('@');
    //check office number
    expect(manager.officeNumber).toEqual(expect.any(Number));
    //check employee role
    expect(manager.getRole()).toEqual('Manager');
});