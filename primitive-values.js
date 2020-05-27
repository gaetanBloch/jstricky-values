let a = 5;

console.log(a + 1); // 6
console.log(a); // 5

// A new 5 is created
let b = a;
a = a + 2;

console.log(a); // 7
console.log(b); // 5

// PRIMITIVE VALUES ARE IMMUTABLE AND ARE ALWAYS COPIED
