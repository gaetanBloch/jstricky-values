const myAge = 31;

// Assignment Error because it is a constant
// myAge = 32;

// A Reference to the hobbies array is stored
const hobbies = ['Sports', 'Cooking'];

// Assignment Error because it is a constant
// hobbies = ['Sports', 'Cooking', 'Eating'];

// The array is changed but not the reference
hobbies.push('Eating');
console.log(hobbies);
