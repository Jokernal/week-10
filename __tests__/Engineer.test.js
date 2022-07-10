import Engineer from '../lib/Engineer.js';

test('engineer creation', () => {

    const engineer = new Engineer('Jordan','4','Jordankernzx@gmail.com','jokernal');

    expect(engineer.name).toBe('Jordan');
    expect(engineer.id).toBe('4');
    expect(engineer.email).toBe('Jordankernzx@gmail.com');
    expect(engineer.github).toBe('jokernal');

})