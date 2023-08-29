// Arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);

// Object destructuring
let user = {
    username: 'Oscar',
    age: 43
}
let {username, age} = user;
console.log(username, user.age);

// spread operator
let person = {
    name: 'Ana',
    age: 65
}
let counrty = 'Estonia';

let data = {...person, counrty};
console.log(data);

// rest
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3, 4);

