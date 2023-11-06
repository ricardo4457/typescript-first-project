"use strict";
//Define a class
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client}:${this.details} values this:${this.amount}`;
    }
}
// new invoices in a array 
const invOne = new Invoice('ricardo', 'Hospital', 40);
const invTwo = new Invoice('joão', 'Apresentar', 2);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// reassign new values to existing invoices
invOne.client = 'nuno';
invTwo.client = 'alex';
console.log(invOne, invTwo);
//form
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
