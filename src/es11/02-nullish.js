const anotherNumber = 1;
const validate = anotherNumber ?? 5; // 1

console.log(validate);

const anotherNumber2 = null;
const validate2 = anotherNumber ?? 5;

console.log(validate); // 5