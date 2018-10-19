//strings
let myName = 'Chris';
//myName = 28; complier is not happy reassisgning this

//numbers
let myAge = 27;
//myAge = 'string'; complier is not happy reassisgning this

// boolean
let hasHobbies = true;
//hasHobbies = 1; complier is not happy reassisgning this

// assign types
let myRealAge : number;
myRealAge = 27;
// myRealAge = '27' does not like this either

let myFakeAge;
// the above assigns variable to type any - back in the world of javascript

//Arrays 

let hobbies = ["cooking", "sports"];
console.log(typeof hobbies);
// hobbies = [100] thinks the array should be an array of strings not numbers fixed with the below
// let hobbies: any[] <<<< this would now work if it were to change


//tuples - not available in javascript
let address: [string,number] = ["superstreet", 99];
// let address: [number, string] = ["superstreet", 99]; this would not work if the array is not in the same order as the above for fixed value format arrays

//enum 
enum Color {
    Gray, //0
    Green = 100, //100
    Blue //101
}

let myColor: Color = Color.Green;
console.log(myColor);
//console will log the numbers assigned to enum can be set see line 36/37

//any - most flexible - try not to use and try to be explicit only use any if you need full flexibility.
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car)

//functions
function returnMyName (): string {
    return myName;
}
console.log(returnMyName())

//void for non return functions
function sayHello(): void {
    console.log("Hello!");
}

//argument types
function multiply(val1 : number, val2: number) : number {
    return val1 * val2;
}
console.log(multiply(2, 2));

// function types
let myMutiply: (val1: number, val2: number) => number;
// myMutiply = sayHello; these won't work with this function type
// console.log(myMutiply())
myMutiply = multiply;
console.log(myMutiply(2, 2))

// object Types
let userData = {
    name: "Max",
    age: 27
};
// userData = {}; will throw error as doesn't match object type

// userData = {
//     a: "hello",
//     b: 22
// } also won't work as the keys are also type checked
let userData2 : { name : string, age: number} = {
    name: "Max",
    age: 27
};

let complex: {data:number[], output: (all: boolean) => number[]} = {
    data: [100 ,3.99, 10],
    output: function (all: boolean) : number[] {
        return this.data;
    }
}

type Complex =  {data:number[], output: (all: boolean) => number[]};
//same type as before but set type to a variable to be used in mutiple places if required
let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[]{
        return this.data;
    }
}

//union types
let RealRealAge: number | string = 27;
RealRealAge = "27";


//check types

let finalValue =30;
if(typeof finalValue == "number"){
    console.log("final value is a number")
}

// never type - never returns somewhere where u don't want ur code to reach
function neverReturns ():never {
    throw new Error('An error!');
}

//Nullable types
// ts config - "stringNullChecks" : false/true
let canBeNull :number | null = 12;
canBeNull = null; //not able to change without |
let canAlsoBeNull;
canAlsoBeNull = null;
