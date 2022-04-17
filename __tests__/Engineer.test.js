const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    //create new manager test example
    const engineer = new Engineer('Dave', 2, 'test@example.com', 'github');
    //check employee name
    expect(engineer.name).toEqual(expect.any(String));
    //check employee id
    expect(engineer.id).toEqual(expect.any(Number));
    //check employee email
    expect(engineer.email).toContain('@');
    //check github username
    expect(engineer.github).toEqual(expect.any(String));
    //check employee role
    expect(engineer.getRole()).toEqual('Engineer');
});