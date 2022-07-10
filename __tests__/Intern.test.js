import Intern from '../lib/Intern.js';

test('intern creation', () => {

    const intern = new Intern('Jordan','3','Jordankernzx@gmail.com','big');

    expect(intern.name).toBe('Jordan');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('Jordankernzx@gmail.com');
    expect(intern.school).toBe('big');

})