const Intern = require('../lib/Intern.js');

test('creates an engineer object', () => {
    //create new intern test example
    const intern = new Intern('Dave', 2, 'test@example.com', 'school');
    //check intern name
    expect(intern.name).toEqual(expect.any(String));
    //check intern id
    expect(intern.id).toEqual(expect.any(Number));
    //check intern email
    expect(intern.email).toContain('@');
    //check intern school
    expect(intern.school).toEqual(expect.any(String));
    //check intern role
    expect(intern.getRole()).toEqual('Intern');
});