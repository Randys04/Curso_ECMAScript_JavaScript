// declarando clase
class User {

};

// instancia de una clase
// const newUser = new User();

class aUser {
    //metodos
    greeting(){
        return 'Hello';
    }
};

const gndx = new aUser();
console.log(gndx.greeting());

const devUser = new aUser();
console.log(devUser.greeting());

// constructor

class aUser {
    // constructor
    constructor() {
        console.log('Nuevo Usuario');
    }

    // metodos
    greeting(){
        return 'Hello';
    }
};
const messi = new aUser();

// this
class aUser {
    // constructor
    constructor(name) {
        this.name = name;
    }

    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
};

const Pedro = new aUser('Pedro');
console.log(Pedro.greeting());

// setters and getters

class aUser {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    // getters and setters
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
};

const Fabian = new aUser('Fabian', 23);
console.log(Fabian.uAge);
console.log(Fabian.uAge = 20);