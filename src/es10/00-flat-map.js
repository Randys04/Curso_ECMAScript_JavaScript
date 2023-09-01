// flat
const array = [1, 2, 3, 4, [1, 2, 5, 7, [3, 9, 10]]];
console.log(array);
console.log('---------------------');
console.log(array.flat(3));
console.log('---------------------');
console.log(array.flat(7));
console.log('---------------------');
console.log(array.flat(1));

// flatmap
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v * 2]));