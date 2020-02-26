// function User(name, id) {
//     this.id = id;
//     this.name = name;
//     this.human = true;
//     this.hello = () => {
//         console.log('Hello! ' + this.name);
//     }
// }

// User.prototype.exit = function(name) {
//     console.log('User ' + this.name + ' go away');
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);
// ivan.exit();

//'use strict';

function showThis() {
    console.log(this);
}

showThis();

function showThis2(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

showThis2(4, 5);
showThis2(5, 5);

// 1) Просто вызов функции, результат - Window/undefined

let obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);

        function shout() {
            console.log(this);
        }
        shout();
    }
};

obj.sum();

// 2) Метод объекта, результат - this = объект
// 3) Конструктор (new) - this  = новый созданный объект

let user = {
    name: 'John'
}

function sayName(surname) {
    console.log(this);
    console.log(this.name + " " + surname);
}

console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user, ['Snow']));

function count(number) {
    return this * number;
}

let double = count.bind(2);

console.log(double(3));
console.log(double(10));

// 4) Указание конкретного контекста call() apply() bind()

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';

    function showThis() {
        console.log(this);
    }
    showThis();
});