"use strict";
// http://kangax.github.io/compat-table/es6/
//let and const
var variable = "test";
console.log(variable);
variable = "Another Value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; read only value can not be changed same as JS
//Block Scope
function reset() {
    var variable = null; //contained in function context
    console.log(variable);
}
reset();
console.log(variable);
//arrow functions
console.log("arrow functions");
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(10, 3));
var mutiplyNumbers = function (num1, num2) {
    num1 * num2;
};
console.log(mutiplyNumbers(10, 3));
//arrow functions variations
var greet = function () {
    console.log("hello!");
};
greet();
var GreetFriend = function (friend) { return console.log("hello " + friend); };
GreetFriend("James");
// default parameters
console.log("default parameters");
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countDown();
countDown(15);
//Rest and Spread Operator
console.log("Rest & Spread");
//spread operator
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 10, 99));
//spread op
console.log(Math.max.apply(Math, numbers));
//rest operator
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args.slice();
}
console.log(makeArray("jim", 1, 2, 6));
//destructuring
console.log("Destructuring");
//arrays
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
//objects
var userData1 = { userName: "Chris", age: 27 };
var myName1 = userData1.userName, myAge1 = userData1.age;
console.log(myName1, myAge1);
// template literals
var userName = "Chris";
var greeting = "Hello, I'm " + userName;
console.log(greeting);
//other features symbols, iterators, generators etc
