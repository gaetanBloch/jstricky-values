const hobbies = ['Sports', 'Cooking'];

// Copy the array not the reference
// const todos = hobbies.slice();
// .filter .map .concat etc. always return a new array
const todos = [...hobbies];

// todos array will not be affected
hobbies.push('Eating');

console.log(todos);

const user = { age: 31 };

// Copy the object not the reference
// const student = Object.assign({}, user);
const student = { ...user };

// student object will not be affected
user.age = 32;

console.log(student);

const users = [
  { name: 'Gaetan' },
  { name: 'Sebastien' }
];
const students = [...users];

// students is not affected
users.push({ name: 'Jeremy' });

// students is affected because the array holds references to objects
users[0].name = 'Sandra';

console.log(students);

// Deep copy of the array (copy the objects inside) and therefore does not
// hold a reference to them anymore
const colleagues = users.map(user => ({ ...user }));

// colleagues is not affected because of the deep copy of the array
users[0].name = 'Gaetan';

console.log(colleagues);
