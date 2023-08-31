
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

export function* getId() {
    let id = 1;
    while (true) { 
        yield id;
        id++;
    }
}
  
const id = getId();
id.next().value
id.next().value
id.next().value
id.next().value
id.next().value