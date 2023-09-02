class aUser {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // se coloca # para indicar que el metodo es privado
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    // getters and setters
    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
};

const Fabian = new aUser('Fabian', 23);
console.log(Fabian.uAge);
console.log(Fabian.uAge = 20);