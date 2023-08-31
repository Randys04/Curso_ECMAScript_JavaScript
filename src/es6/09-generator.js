
function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(['Pedro', 'Lucas', 'Alfredo', 'Carmen', 'Renato']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
