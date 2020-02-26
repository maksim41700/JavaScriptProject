class User {

    constructor(name, id) {
        this.id = id;
        this.name = name;
        this.human = true;
    }

    hello() {
        console.log(`Hello! ${this.name}`);
    }

    exit() {
        console.log(`User ${this.name} go away`);
    }
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);
ivan.hello();
alex.hello();
ivan.exit();
alex.exit();