// http://kangax.github.io/compat-table/es6/

//let and const
let variable: string = "test";
console.log(variable);
variable = "Another Value";
console.log(variable);

const maxLevels: number = 100;
console.log(maxLevels);
// maxLevels = 99; read only value can not be changed same as JS

//Block Scope
function reset(): void {
  let variable = null; //contained in function context
  console.log(variable);
}
reset();
console.log(variable);

//arrow functions
console.log("arrow functions");
const addNumbers = function(num1: number, num2: number): number {
  return num1 + num2;
};
console.log(addNumbers(10, 3));

const mutiplyNumbers = (num1: number, num2: number) => {
  num1 * num2;
};

console.log(mutiplyNumbers(10, 3));

//arrow functions variations
const greet = () => {
  console.log("hello!");
};
greet();

const GreetFriend = (friend: string) => console.log(`hello ${friend}`);

GreetFriend("James");

// default parameters
console.log("default parameters");
const countDown = (start: number = 10): void => {
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
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 10, 99));
//spread op
console.log(Math.max(...numbers));

//rest operator
function makeArray(name: string, ...args: number[]) {
  return [...args];
}
console.log(makeArray("jim", 1, 2, 6));


//destructuring
console.log("Destructuring")
//arrays
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);
//objects
const userData1 = {userName: "Chris", age: 27};
const {userName: myName1, age: myAge1} = userData1;
console.log(myName1, myAge1)

// template literals
const userName = "Chris";
const greeting = `Hello, I'm ${userName}`
console.log(greeting);

//other features symbols, iterators, generators etc

