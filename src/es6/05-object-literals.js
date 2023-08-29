// enhance object literals

function newUser(user, age, counrty, uID){
    return{
        user    : user,
        age     : age,
        counrty : counrty,
        id      : uID
    }
}

function newUserObjectLiterals(user, age, counrty, uID){
    return{
        user,
        age,
        counrty,
        id: uID
    }
}

console.log(newUser('Oscar', 34, 'Brasil', 1));
console.log(newUserObjectLiterals('Alfred', 22, 'Portugal', 2));