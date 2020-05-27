let user = { age: 31 }
let student = user;
user.age = 32;
console.log(student);

// REFERENCE VALUES ARE MUTABLE AND ARE NOT COPIED

const hobbies = ['Sports', 'Cooking'];
// const todos = ['Sports', 'Cooking'];
const todos = hobbies;

const person = { age: 31 };

console.log(hobbies == todos); // 5 == '5' => true
console.log(hobbies === todos); // 5 === '5' => false

console.log(user == person); // false
console.log(user === person); // false

// REFERENCE VALUES ARE NOT EQUAL EVEN THOUGH THE CONTENT IS THE SAME
