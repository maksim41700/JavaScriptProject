//1
let number = 1;

(function() {
    let number = 2;
    console.log(number);

    return console.log(number + 3)
}())

console.log(number);

//2
let user = (function() {
    let privat = function() {
        console.log("I am privat.");
    }

    return {
        sayHello: function() {
            console.log('Hello!');
        }
    }
}())

console.log(user);
console.log(user.sayHello());

//3
let user = (function() {
    let privat = function() {
        console.log("I am privat.");
    }

    let sayHello = function() {
        console.log("Hello!");
    }

    return {
        sayHello: sayHello
    }
}())

console.log(user);
console.log(user.sayHello());

// let app = {
//     data: 45
// };
// console.log(app);

// function User(name, age) {
//     this.name = name;
//     //this.age = age;
//     let userAge = age;

//     this.say = function() {
//         alert(`Name of user ${this.name}, age ${userAge}`);
//     }

//     this.getAge = function() {
//         return userAge;
//     }

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Impossible value!');
//         }
//     }
// };

// let ivan = new User('Ivan', 25);
// console.log(ivan.name);
// console.log(ivan.userAge);
// console.log(ivan.getAge());

// ivan.setAge(30);
// console.log(ivan.getAge());

// ivan.say();