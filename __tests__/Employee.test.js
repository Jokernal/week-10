import Employee from '../lib/Employee.js';

test('test for employee creation', () => {
    const employee = new Employee('Jordan', '1', 'jordankernzx@gmail.com');
    expect(employee.name).toBe('Jordan');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('jordankernzx@gmail.com');
});