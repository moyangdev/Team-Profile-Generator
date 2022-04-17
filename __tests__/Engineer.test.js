const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    //create new engineer test example
    const engineer = new Engineer('Dave', 2, 'test@example.com', 'github');
    //check engineer name
    expect(engineer.name).toEqual(expect.any(String));
    //check engineer id
    expect(engineer.id).toEqual(expect.any(Number));
    //check engineer email
    expect(engineer.email).toContain('@');
    //check engineer username
    expect(engineer.github).toEqual(expect.any(String));
    //check engineer role
    expect(engineer.getRole()).toEqual('Engineer');
});