"use strict";
// let bankAccount = {
//     money: 2000,
//     deposit(value) {
//         this.money += value;
//     }
// };
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Chris",
    bankAccount: bankAccount,
    hobbies: ["football", "Coding"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
