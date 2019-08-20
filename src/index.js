import Employee from './Employee';
import AnalystEmployee from './AnalystEmployee';
console.log('Hello Isurus!!!');

const employee = {
    firstName: 'Jim',
    lastName: 'Loser',
    fullName: 'Jim Loser',
};
const employeeClass1 = new Employee('Jim', 'Loser');

const employee2 = {
    firstName: 'Bobby',
    lastName: 'Donuts',
    fullName: 'Bobby Donuts',
};
const employeeClass2 = new Employee('Bobby', 'Donuts');
const analyist = new AnalystEmployee('Joe', 'Shmoe');

console.log('analyist: ', analyist);
console.log('employeeClass1: ', employeeClass1);
// console.log('employeeClass2: ', employeeClass2);

analyist.promote();
console.log('analyist: ', analyist);

// employeeClass1.changeFirstName('Timmy');

// console.log('employeeClass1: ', employeeClass1);
// console.log('employeeClass2: ', employeeClass2);
