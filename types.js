"use strict";
//strings
var myName = 'Chris';
//myName = 28; complier is not happy reassisgning this
//numbers
var myAge = 27;
//myAge = 'string'; complier is not happy reassisgning this
// boolean
var hasHobbies = true;
//hasHobbies = 1; complier is not happy reassisgning this
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27' does not like this either
var myFakeAge;
// the above assigns variable to type any - back in the world of javascript
//Arrays 
var hobbies = ["cooking", "sports"];
console.log(typeof hobbies);
// hobbies = [100] thinks the array should be an array of strings not numbers fixed with the below
// let hobbies: any[] <<<< this would now work if it were to change
//tuples - not available in javascript
var address = ["superstreet", 99];
// let address: [number, string] = ["superstreet", 99]; this would not work if the array is not in the same order as the above for fixed value format arrays
//enum 
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; //101
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
//console will log the numbers assigned to enum can be set see line 36/37
//any - most flexible - try not to use and try to be explicit only use any if you need full flexibility.
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void for non return functions
function sayHello() {
    console.log("Hello!");
}
//argument types
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(2, 2));
// function types
var myMutiply;
// myMutiply = sayHello; these won't work with this function type
// console.log(myMutiply())
myMutiply = multiply;
console.log(myMutiply(2, 2));
// object Types
var userData = {
    name: "Max",
    age: 27
};
// userData = {}; will throw error as doesn't match object type
// userData = {
//     a: "hello",
//     b: 22
// } also won't work as the keys are also type checked
var userData2 = {
    name: "Max",
    age: 27
};
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//same type as before but set type to a variable to be used in mutiple places if required
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//union types
var RealRealAge = 27;
RealRealAge = "27";
//check types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("final value is a number");
}
// never type - never returns somewhere where u don't want ur code to reach
function neverReturns() {
    throw new Error('An error!');
}
//Nullable types
// ts config - "stringNullChecks" : false/true
var canBeNull = 12;
canBeNull = null; //not able to change without |
var canAlsoBeNull;
canAlsoBeNull = null;
