// Interfaces with Classes
import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
// this Obeys HasFomatter interface
let docOne;
let docTwo;
docOne = new Invoice('HUGO', 'Beer', 60);
docTwo = new Payment('mario', 'game dev', 900);
// this arrays Obeys HasFomatter interface
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
//form
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
