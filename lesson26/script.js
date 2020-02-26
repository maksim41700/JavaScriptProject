function User(name, id) {
    this.id = id;
    this.name = name;
    this.human = true;
    this.hello = () => {
        console.log('Hello! ' + this.name);
    }
}

User.prototype.exit = function(name) {
    console.log('User ' + this.name + ' go away');
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);
ivan.exit();