import { Invoice } from "./classes/Invoice.js";
// new invoices in a array 
const invOne = new Invoice('ricardo', 'Hospital', 40);
const invTwo = new Invoice('joão', 'Apresentar', 2);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(inv => { console.log(inv.client, inv.amount, inv.format); });
//form
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
