import Manager from '../lib/Manager';

test('test for manager creation', () => {
    const manager = new Manager('Jordan','2','Jordankernzx@gmail.com','2')

    expect(manager.name).toBe('Jordan');
    expect(manager.id).toBe('2');
    expect(manager.email).toBe('Jordankernzx@gmail.com');
    expect(manager.officeNumber).toBe('2');
})