function newUser(name, age, country){
    var name = name || 'Alfredo';
    var age = age || 26;
    var country = country || "Chile";

    console.log(name, age, country);
}

newUser();
newUser('Pepe', 77, 'Francia');

// funcion con paramtros por defecto
function newAdmin(name = 'Alfredo', age = 26, country = 'Chile' ){
    console.log(name, age, country)
}

newAdmin();
newAdmin('Rocio', 77, 'Estonia');